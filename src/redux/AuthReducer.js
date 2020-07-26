import { authAPI } from "../api/API";

const SET_AUTH_USER_DATA = "authReducer/SET_AUTH_USER_DATA";

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { id, login, email, isAuth },
});
export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.getUserData();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  }
};
export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
