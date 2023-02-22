import { refreshToken } from '@/utils/auth';
import axios from 'axios';

interface AxiosClientParams {
  options: any,
  getCurrentAccessToken: any,
  refreshTokenUrl: any,
  logout: any,
  setRefreshedAccessToken: any,
}

export function createAxiosClient({
  options,
  getCurrentAccessToken,
  refreshTokenUrl,
  logout,
  setRefreshedAccessToken,
}: AxiosClientParams) {
  const client = axios.create(options);

  let failedQueue: any[] = [];
  let isRefreshing = false;

  const processQueue = (error: any) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve();
      }
    });

    failedQueue = [];
  };

  client.interceptors.request.use(
    (config) => {
      const token = getCurrentAccessToken();
      console.log('after get current access token');
      console.log(token);
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log('IN RESPONSE');
      return response;
    },
    (error) => {
      console.log('IN ERROR RESPONSE');

      const originalRequest = error.config;
      // In "axios": "^1.1.3" there is an issue with headers, and this is the workaround.
      originalRequest.headers = JSON.parse(
        JSON.stringify(originalRequest.headers || {})
      );

      // If error, process all the requests in the queue and logout the user.
      const handleError = (error: any) => {
        processQueue(error);
        logout();
        return Promise.reject(error);
      };

      // Refresh token conditions
      if (
        originalRequest?.url !== refreshTokenUrl &&
        originalRequest?._retry !== true
      ) {

        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then(() => {
              return client(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }
        isRefreshing = true;
        originalRequest._retry = true;
        return refreshToken().then((data: any) => {
          console.log('after get current refresh token');
          console.log(data);
          if (data.ok) {
            setRefreshedAccessToken(data.accessToken, data.user);
            processQueue(null);
            return client(originalRequest);
          }

        });

        // refreshToken().then((data) => {
        //     console.log('Performed refresh access token');
        //     if (data.ok) {
        //       console.log('Setting access token');
        //       store.setAccessToken(data.accessToken);
        //       store.setUser(data.user);
        //       console.log('Current access Token is: ');
        //       console.log(useStore.getState().accessToken);
        //     }
        //     setLoading(false);
        //   });



        // console.log('after get current refresh token');
        // console.log(refreshToken);
        // console.log(originalRequest.headers);
        // return client
        //   .post(refreshTokenUrl, {
        //     refreshToken: refreshToken,
        //   })
        //   .then((res) => {
        //     const tokens = {
        //       accessToken: res.data?.accessToken,
        //       refreshToken: res.data?.refreshToken,
        //     };
        //     setRefreshedTokens(tokens);
        //     processQueue(null);

        //     return client(originalRequest);
        //   }, handleError)
        //   .finally(() => {
        //     isRefreshing = false;
        //   });
      }

      // Refresh token missing or expired => logout user...
      if (
        error.response?.status === 401 &&
        error.response?.data?.message === "TokenExpiredError"
      ) {
        return handleError(error);
      }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return client;
}

