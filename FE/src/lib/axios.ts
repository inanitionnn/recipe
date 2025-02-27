import axios from "axios";
import { env } from "../env";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
