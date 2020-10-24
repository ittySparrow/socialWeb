import { instance } from "./API";

type GetCaptchaResponseType = {
  url: string
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<GetCaptchaResponseType>("/security/get-captcha-url").then(({ data }) => data);
  },
};