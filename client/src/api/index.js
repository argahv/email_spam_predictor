import axios from "axios";
import Qs from "query-string";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "" //server-live
    : "http://127.0.0.1:5000/"; //server-local

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => {
    return Qs.stringify(params);
    // return Qs.stringify(params, { arrayFormat: "indices" });
  },
});

// api

export const predictEmail = (data) => api.post("api/predict", data);




