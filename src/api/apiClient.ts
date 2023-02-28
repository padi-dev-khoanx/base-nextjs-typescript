import axios, {
  AxiosResponse
} from "axios";
import qs from "qs";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
const baseURLApp = process.env.NEXT_PUBLIC_API;
const apiClient = axios.create({
  baseURL: baseURLApp,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params),
  },
});

const cookies = new Cookies();

apiClient.interceptors.request.use(
  async (config) => {
    const jwt = cookies.get("jwt");

    if (jwt && config.headers) {
      config.headers["Authorization"] = "Bearer " + jwt;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.message === "Network Error") {
      toast.error(error.message);
    }
    if (typeof window === "undefined") {
      throw error;
    }
    return Promise.reject(error);
  }
);
export default apiClient;
