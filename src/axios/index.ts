import { refreshToken } from "@/utils/auth";
import { createAxiosClient } from "@/axios/client";
import { useStore } from "../store";
import { User } from "@/types";

const REFRESH_TOKEN_URL = 'http://localhost:3000/api/auth/refreshToken';
const BASE_URL = 'http://localhost:3000';

function getCurrentAccessToken() {
  // this is how you access the zustand store outside of React.
  console.log('GET CURRENT ACCESS TOKEN');

  return useStore.getState().accessToken;
}


function setRefreshedAccessToken(token: string, user: User) {
  console.log('set tokens...');
  return useStore.setState((state) => ({ ...state, accessToken: token, user: user }));
}

async function logout() {
  console.log('logout...');
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
