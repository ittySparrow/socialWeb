import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "appReducer/INITIALIZED_SUCCESS";

export type InitialStateType = {
  initialized: boolean,
}

const initialState: InitialStateType = {
  initialized: false,
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS,
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => {
  return (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
  };
};



const appReducer = (state = initialState, action: any): InitialStateType => {
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
