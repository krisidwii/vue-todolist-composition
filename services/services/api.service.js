import axios from "axios";
import { getToken } from "./storage.service";

const main = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

main.interceptors.request.use(
  function (config) {
    const userToken = getToken() || "";

    config.headers = {
      Authorization: `Bearer ${userToken}`,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default main;
