import { refreshToken } from '@/utils/jwt';
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
      console.log('request intercept');
      console.log(config.headers);
      if (config.headers.Authorization !== false) {
        const token = getCurrentAccessToken();
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const originalRequest = error.config;
      originalRequest.headers = JSON.parse(
        JSON.stringify(originalRequest.headers || {})
      );

      if (error?.response?.status === 401 && !error.config?.sent) {
        // Refresh token conditions
        if (
          originalRequest?.url !== refreshTokenUrl &&
          originalRequest?.url !== `${options.BASE_URL}${refreshToken}` &&
          originalRequest?._retry !== true
        ) {
          console.log(originalRequest?.url)

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
          return refreshToken().then((res) => {
            console.log('refreshToken client then');
            if (res.status == 200 && res.data.accessToken && res.data.user) {
              setRefreshedAccessToken(res.data.accessToken, res.data.user);
            }
            return client(originalRequest);
          }).catch((error) => {
            console.log(error.response.data);
          });
        }

        // Refresh token missing or expired => logout user...
        if (
          error.response?.status === 401 &&
          error.response?.data?.message === "TokenExpiredError"
        ) {
          processQueue(error);
          logout();
          return Promise.reject(error);
        }
      }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      console.log('reject that error');
      return Promise.reject(error.response);
    }
  );

  return client;
}

