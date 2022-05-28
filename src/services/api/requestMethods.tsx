import { AxiosResponse } from "axios";
import { axiosInstance } from "./axios";
import { catchErrorResponse, successResponse } from "./functions";
import { axiosGetType, axiosPostType } from "./models";

// ****** Custom Functions to Handle Manipulate Requests **********************

export async function axiosGet<TResponse>({ url, config }: axiosGetType) {
  try {
    const res = await axiosInstance.get<TResponse>(url, config);
    return successResponse<TResponse, AxiosResponse>(res);
  } catch (error: any) {
    // console.log("error response at get method: ", error.response);
    return catchErrorResponse<TResponse, any>(error.response);
  }
}

// -----------------------------------------
export async function axiosPost<TResponse>({
  url,
  body,
  config,
}: axiosPostType) {
  try {
    const res = await axiosInstance.post<TResponse>(url, body, config);
    return successResponse<TResponse, AxiosResponse>(res);
  } catch (error: any) {
    return catchErrorResponse<TResponse, any>(error.response);
  }
}

// ----------------------------------------------------------
export async function axiosPut<TResponse>({
  url,
  body,
  config,
}: axiosPostType) {
  try {
    const res = await axiosInstance.put<TResponse>(url, body, config);
    return successResponse<TResponse, AxiosResponse>(res);
  } catch (error: any) {
    return catchErrorResponse<TResponse, any>(error.response);
  }
}

// ----------------------------------------------------------
export async function axiosDelete<TResponse>({ url, config }: axiosGetType) {
  try {
    const res = await axiosInstance.delete<TResponse>(url, config);
    return successResponse<TResponse, AxiosResponse>(res);
  } catch (error: any) {
    return catchErrorResponse<TResponse, any>(error.response);
  }
}
