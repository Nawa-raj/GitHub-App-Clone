import axios from "axios";
import { handleResponseErrors } from "./functions";

// base url
export const baseURL = "https://api.github.com";

// ---------- customizing interceptors ---------------------------------------------------
export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  timeoutErrorMessage: "Your Request time out to get Response from Server",
});

axiosInstance.interceptors.response.use(
  function (response: any) {
    return response;
  },

  // response error handle
  async function (error: any) {
    handleResponseErrors(error);
  }
);
