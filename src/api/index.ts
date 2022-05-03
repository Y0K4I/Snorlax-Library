import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { IApiError } from "@/types/api";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const createRequest = (
  config: AxiosRequestConfig
): Promise<AxiosResponse> => axios.request(config);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject({
      error: true,
      message: error.response?.data,
    });
  }
);

// Unknown type of useToast()
export const checkApiError = (result: unknown, toast: any) => {
  if ((result as IApiError)?.error) {
    toast.add({
      severity: "error",
      summary: "Error Message",
      detail: (result as IApiError).message || "Api error!",
      life: 3000,
    });

    return false;
  }

  return true;
};
