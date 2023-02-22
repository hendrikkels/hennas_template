import { axiosClient } from "../services/axiosClient";

const fetcher = (url: string) => axiosClient.get(url).then(res => res.data)

export default fetcher;
