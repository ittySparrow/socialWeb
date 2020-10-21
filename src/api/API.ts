import axios from "axios";
import { ProfileType, UsersType, PhotosType } from "../types/types";

const instance = axios.create({
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

type CommonResponseType = {
  resultCode: ResultCodeEnum
  messages: Array<string | void>
  data: {}
}
type UsersDataType = {
  items: Array<UsersType>
  totalCount: number
  error: null | string
}
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => responce.data);
  },
};

export const followAPI = {
  follow(userId: number) {
    return instance
      .post<CommonResponseType>(`follow/${userId}`)
      .then(({ data }) => data.resultCode);
  },
  unfollow(userId: number) {
    return instance
      .delete<CommonResponseType>(`follow/${userId}`)
      .then(({ data }) => data.resultCode);
  },
};

type AuthMeResponseType = {
  resultCode: ResultCodeEnum
    messages: Array<string>
    data: {
      id: number
      email: string
      login: string
    }
}
type AuthLoginResponseType = {
  resultCode: ResultCodeEnum | CaptchaIsRequiredEnum
  messages: Array<string>
  data: {
    userId: number
  }
}
export const authAPI = {
  getUserData() {
    return instance.get<AuthMeResponseType>("auth/me").then((response) => response.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return instance
      .post<AuthLoginResponseType>("auth/login", { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete<CommonResponseType>("auth/login");
  },
};

type GetCaptchaResponseType = {
  url: string
}
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<GetCaptchaResponseType>("/security/get-captcha-url").then((response) => response.data);
  },
};

type SavePhotoResponseType = {
  data: PhotosType
  resultCode: ResultCodeEnum
  messages: Array<string | void>

}
export const profileAPI = {
  getUserProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`).then(({ data }) => data);
  },
  updateStatus(status: string) {
    return instance.put<CommonResponseType>(`profile/status`, { status: status });
  },
  savePhoto(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.put<SavePhotoResponseType>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(response => response.data);
  },
  saveProfile(profile: ProfileType) {
    return instance.put<CommonResponseType>(`profile`, profile);
  },
};
