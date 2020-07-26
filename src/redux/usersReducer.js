import { usersAPI, followAPI } from "../api/API";

const TOGGLE_FOLLOW = "usersReducer/TOGGLE_FOLLOW";
const SET_USERS = "usersReducer/SET_USERS";
const SET_CURRENT_PAGE = "usersReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "usersReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "usersReducer/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS =
  "usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS";

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};
const followUnfollowUser = (userId, APIrequest) => async (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  const resultCode = await APIrequest(userId);
  if (resultCode === 0) {
    dispatch(toggleFollow(userId));
    dispatch(toggleFollowingInProgress(false, userId));
  }
};
export const followUser = (userId) =>
  followUnfollowUser(userId, followAPI.follow);
export const unfollowUser = (userId) =>
  followUnfollowUser(userId, followAPI.unfollow);

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
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
