import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./authReducer";
import { AppStateType } from "./reduxStore";

const INITIALIZED_SUCCESS = "appReducer/INITIALIZED_SUCCESS";

export type InitialStateType = {
  initialized: boolean,
}

const initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = InitializedSuccessActionType

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS,
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionsType> => {
  return (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
  };
};

