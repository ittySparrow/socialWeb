import { followAPI } from "../api/followAPI";
import { usersAPI } from "../api/usersAPI";
import { UsersType } from "../types/types";
import { BaseThunkType, InferActionType } from "./reduxStore";

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

export const actions = {
  toggleFollow: (userId: number) => ({ type: TOGGLE_FOLLOW, userId } as const),
  setUsers: (users: Array<UsersType>) => ({ type: SET_USERS, users } as const),
  setCurrentPage: (page: number) => ({ type: SET_CURRENT_PAGE, page } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const),
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
  } as const),
};

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(data.items));
  dispatch(actions.setTotalUsersCount(data.totalCount));
};
const _followUnfollowUser = (userId: number, APIrequest: any): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingInProgress(true, userId));
  const resultCode = await APIrequest(userId);
  if (resultCode === 0) {
    dispatch(actions.toggleFollow(userId));
    dispatch(actions.toggleFollowingInProgress(false, userId));
  }
};
export const followUser = (userId: number) =>
  _followUnfollowUser(userId, followAPI.follow);
export const unfollowUser = (userId: number) =>
  _followUnfollowUser(userId, followAPI.unfollow);


export type InitialStateType = typeof initialState;
type ActionsType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
