import { AxiosRequestConfig } from "axios";

// -------- Models For Axios -----------------------------

export interface axiosGetType {
  url: string;
  config?: AxiosRequestConfig<any>;
}

export interface axiosPostType {
  url: string;
  body?: any;
  config?: AxiosRequestConfig<any>;
}

export interface responseDataType<t> {

}
