import { Type } from "typescript";
import { authAPI, securityAPI } from "../api/API";

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

export const getAuthUserData = () => async (dispatch: any) => {
  const data = await authAPI.getUserData();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(getCaptchaUrlSuccess(data.url));
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (
  dispatch: any
) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    throw data.messages[0];
  }
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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
