import { refreshToken } from "@/utils/jwt";
import { createAxiosClient } from "@/axios/client";
import { useStore } from "../store";
import { User } from "@/types";
import Router from 'next/router'

const REFRESH_TOKEN_URL = '/api/auth/refreshToken';
const BASE_URL = 'http://localhost:3000';

function getCurrentAccessToken() {
  // this is how you access the zustand store outside of React.
  return useStore.getState().accessToken;
}


function setRefreshedAccessToken(token: string, user: User) {
  return useStore.setState((state) => ({ ...state, accessToken: token, user: user }));
}

async function logout() {
  console.log('logout...');
  useStore.setState((state) => ({ ...state, accessToken: null, user: null }));
  return Router.push('/');
}

export const axiosInstance = createAxiosClient({
  options: {
    baseURL: BASE_URL,
    timeout: 300000,
    headers: {
      'Content-Type': 'application/json',
    }
  },
  getCurrentAccessToken,
  refreshTokenUrl: REFRESH_TOKEN_URL,
  logout,
  setRefreshedAccessToken,
});
