import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c32adf8a-5804-497e-b75d-0aeab078285e",
  },
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum CaptchaIsRequiredEnum {
  CaptchaIsRequired = 10
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}