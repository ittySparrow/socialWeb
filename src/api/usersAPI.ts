import { UsersType } from "../types/types";
import { instance } from "./API";

type UsersDataType = {
  items: Array<UsersType>
  totalCount: number
  error: null | string
}
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(({ data }) => data);
  },
};