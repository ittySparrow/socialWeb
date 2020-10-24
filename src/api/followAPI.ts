import { ResponseType, instance } from "./API";

export const followAPI = {
  follow(userId: number) {
    return instance
      .post<ResponseType>(`follow/${userId}`)
      .then(({ data }) => data);
  },
  unfollow(userId: number) {
    return instance
      .delete<ResponseType>(`follow/${userId}`)
      .then(({ data }) => data);
  },
};