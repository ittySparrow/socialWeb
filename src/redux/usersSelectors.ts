// import { createSelector } from "reselect";
import { AppStateType } from "./reduxStore";

export const getUsers= (state: AppStateType) => state.usersPage.users;
// export const getUsers = createSelector(getUsersSelector, (users) => {
//   return users.filter((u) => true);
// });

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;
export const getFollowingInProgress = (state: AppStateType) =>
  state.usersPage.followingInProgress;
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching;
