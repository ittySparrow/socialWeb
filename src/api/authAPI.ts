import { CaptchaIsRequiredEnum, ResponseType, instance, ResultCodeEnum } from "./API";

type AuthMeData = {
      id: number
      email: string
      login: string
}
type AuthMeResponseType = ResponseType<AuthMeData>
    
type LoginPostResponseType = ResponseType<{ userId: number }, ResultCodeEnum | CaptchaIsRequiredEnum>

export const authAPI = {
  getUserData() {
    return instance.get<AuthMeResponseType>("auth/me").then(({ data }) => data);
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return instance
      .post<LoginPostResponseType>("auth/login", { email, password, rememberMe, captcha })
      .then(({ data }) => data);
  },
  logout() {
    return instance.delete<ResponseType>("auth/login");
  },
};