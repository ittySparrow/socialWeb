import { ThunkAction } from "redux-thunk";
import { authAPI, securityAPI, ResultCodeEnum, CaptchaIsRequiredEnum } from "../api/API";
import { AppStateType } from "./reduxStore";

const SET_AUTH_USER_DATA = "authReducer/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "authReducer/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

type ActionsType = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
type SetAuthUserDataActionPayloadType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA,
  payload: SetAuthUserDataActionPayloadType,
}
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  payload: { id, login, email, isAuth },
});
type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
export const getAuthUserData = (): ThunkType  => async (dispatch) => {
  const data = await authAPI.getUserData();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(getCaptchaUrlSuccess(data.url));
};
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (
  dispatch
) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === CaptchaIsRequiredEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    throw data.messages[0];
  }
};
export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};