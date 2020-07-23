import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => {
  return (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
  };
};

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export default appReducer;
