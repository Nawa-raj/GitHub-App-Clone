import { AxiosResponse } from "axios";
import { showMessage } from "services/messageService";

// ---- format success response as standard ---------
export function successResponse<TResponse, EResponse>(
  res: AxiosResponse<TResponse>
) {
  return {
    status: res && (res.status as number),
    message: res.statusText as string,
    successRes: res && res as AxiosResponse<TResponse>,
    errorRes: {} as EResponse,
  };
}

// ----- format error response as standard --------------
export function catchErrorResponse<TResponse, EResponse>(
  error: AxiosResponse<EResponse>
) {
  if (String(error) === "undefined") {
    showMessage({
      autoHideTime: 4,
      message: "Network Error || Server Connection Failed",
      messageType: "error",
    });
  }

  return {
    status: error && error.status ? Number(error.status) : 1000,
    message:
      error && error.statusText ? String(error.statusText) : "error occured",
    successRes: {} as AxiosResponse<TResponse, any>,
    errorRes: error ? error : ({} as AxiosResponse<EResponse, any>),
  };
}

// ----- handle request error and show message ------------------
export const handleResponseErrors = (error: any) => {

  if (error.response.status === 400) {
    showMessage({
      autoHideTime: 4,
      message: "Bad Request",
      messageType: "error",
    });
    // return Promise.reject(error);
  } else if (error.response.status === 404) {
    showMessage({
      autoHideTime: 4,
      message: "Page Not Found",
      messageType: "error",
    });
  } else if (error.response.status === 500) {
    showMessage({
      autoHideTime: 4,
      message: "Server Error",
      messageType: "error",
    });
  }
};

