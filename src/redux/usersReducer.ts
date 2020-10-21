import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI, followAPI } from "../api/API";
import { UsersType } from "../types/types";
import { AppStateType } from "./reduxStore";

const TOGGLE_FOLLOW = "usersReducer/TOGGLE_FOLLOW";
const SET_USERS = "usersReducer/SET_USERS";
const SET_CURRENT_PAGE = "usersReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "usersReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "usersReducer/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS =
  "usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users id
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: !u.followed } : u
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;

type ActionsType = ToggleFollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | ToggleFollowingInProgressActionType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
type ToggleFollowActionType = {
  type: typeof TOGGLE_FOLLOW
  userId: number
}
export const toggleFollow = (userId: number): ToggleFollowActionType => ({ type: TOGGLE_FOLLOW, userId });
type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({ type: SET_USERS, users });
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  page: number
}
export const setCurrentPage = (page: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, page });
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
type ToggleFollowingInProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};
const _followUnfollowUser = (userId: number, APIrequest: any): ThunkType => async (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  const resultCode = await APIrequest(userId);
  if (resultCode === 0) {
    dispatch(toggleFollow(userId));
    dispatch(toggleFollowingInProgress(false, userId));
  }
};
export const followUser = (userId: number) =>
  _followUnfollowUser(userId, followAPI.follow);
export const unfollowUser = (userId: number) =>
  _followUnfollowUser(userId, followAPI.unfollow);
