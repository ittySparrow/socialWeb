import { profileAPI } from "../api/API";
import { PhotosType, PostType, ProfileType } from "../types/types";

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

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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


type AddPostActionType = {
  type: typeof ADD_POST
  text: string
}
export const addPost = (text: string): AddPostActionType => ({ type: ADD_POST, text });
type DeletePostActionType = {
  type: typeof DELETE_POST
  id: number
}
export const deletePost = (id: number): DeletePostActionType => ({ type: DELETE_POST, id });
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});
type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const setProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(setProfile(userId));
  }
};



