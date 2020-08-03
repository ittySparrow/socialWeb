import { profileAPI } from "../api/API";

const ADD_POST = "profileReducer/ADD_POST";
const DELETE_POST = "profileReducer/DELETE_POST";
const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE";
const SET_STATUS = "profileReducer/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profileReducer/SAVE_PHOTO_SUCCESS";

export const addPost = (text) => ({ type: ADD_POST, text });
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const setProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
};
export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

const initialState = {
  postsData: [
    { id: 1, post: "Hello, this is my first post", likesCount: 3 },
    { id: 2, post: "Is anybody here?", likesCount: 9 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
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
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

export default profileReducer;
