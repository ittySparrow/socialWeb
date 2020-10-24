import { ResultCodeEnum, CaptchaIsRequiredEnum } from "../api/API";
import { authAPI } from "../api/authAPI";
import { securityAPI } from "../api/securityAPI";
import { BaseThunkType, InferActionType } from "./reduxStore";

const SET_AUTH_USER_DATA = "authReducer/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "authReducer/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

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

export const actions = {
  setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_AUTH_USER_DATA,
    payload: { id, login, email, isAuth },
  } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
  } as const)
};
export const getAuthUserData = (): ThunkType  => async (dispatch) => {
  const data = await authAPI.getUserData();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
  }
};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(actions.getCaptchaUrlSuccess(data.url));
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
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>