import { ResultCodeEnum } from "../api/API";
import profileAPI from "../api/profileAPI";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { AppStateType, BaseThunkType, InferActionType } from "./reduxStore";

const ADD_POST = "profileReducer/ADD_POST";
const DELETE_POST = "profileReducer/DELETE_POST";
const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE";
const SET_STATUS = "profileReducer/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profileReducer/SAVE_PHOTO_SUCCESS";

const initialState = {
  postsData: [
    { id: 1, post: "Hello, this is my first post", likesCount: 3 },
    { id: 2, post: "Is anybody here?", likesCount: 9 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        post: action.text,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.id),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    default:
      return state;
  }
};
export default profileReducer;


export const actions = {
  addPost: (text: string) => ({ type: ADD_POST, text } as const),
  deletePost: (id: number) => ({ type: DELETE_POST, id } as const),
  setUserProfile: (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile,
  } as const),
  setStatus: (status: string) => ({
    type: SET_STATUS,
    status,
  } as const),
  savePhotoSuccess: (photos: PhotosType) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
  } as const),
};

export const setProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getUserProfile(userId);
  dispatch(actions.setUserProfile(data));
};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(actions.setStatus(status));
  }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const { resultCode, data } = await profileAPI.savePhoto(file);
  if (resultCode === ResultCodeEnum.Success) {
    dispatch(actions.savePhotoSuccess(data.photos));
  }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState: () => AppStateType) => {
  const userId = getState().auth.id;
  if (userId === null) {
    console.log("ERROR: User ID is NULL");
    return;
  }
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(setProfile(userId));
  }
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>