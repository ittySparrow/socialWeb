import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "03606b0b-0990-4674-83db-0e28abe1bd02",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => responce.data);
  },
};

export const followAPI = {
  follow(userId) {
    return instance
      .post(`follow/${userId}`)
      .then(({ data }) => data.resultCode);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(({ data }) => data.resultCode);
  },
};

export const authAPI = {
  getUserData() {
    return instance.get("auth/me").then((response) => response.data);
  },

  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((response) => response.data);
  },

  logout() {
    return instance.delete("auth/logion");
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(({ data }) => data);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};
