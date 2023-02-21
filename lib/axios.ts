// import store from 'zustand'
import { useStore } from "@/store";
import axios from "axios";

//Intercept before request is made, usually used to add some header, like an auth
const axiosDefaults = {};
const axiosInstance = axios.create(axiosDefaults);

//register interceptor like this
axiosInstance.interceptors.request.use(
  function (config) {


    // Do something before request is sent
    // headers: {
    //   authorization: `Bearer ${store.accessToken}`;
    // }
    config.headers.Authorization = useStore.getState().accessToken;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
