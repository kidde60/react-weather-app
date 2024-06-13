import axios from "axios";
import Cookies from "js-cookie";

import config from "../config/default.json";

const axiosInstance = axios.create({
  baseURL: config["baseURL"],
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
  return config;
});

axiosInstance.interceptors.response.use(null, (error) => {
  // (error?.response?.status === 401 || error?.response?.status === 403)
  if (error?.response?.status === 401)
    window.location.href = "/logout?forbidden=true";

  return Promise.reject(error);
});

export default {
  get: axiosInstance.get,
  put: axiosInstance.put,
  post: axiosInstance.post,
  patch: axiosInstance.patch,
  delete: axiosInstance.delete,
  request: axiosInstance.request,
};
