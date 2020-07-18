import { authAPI } from "../api/API";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (userId, login, email) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, login, email },
});
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getUserData().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  };
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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default authReducer;
