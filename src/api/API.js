import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c32adf8a-5804-497e-b75d-0aeab078285e",
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
    return instance.delete("auth/login");
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

  savePhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
