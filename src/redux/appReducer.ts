import { getAuthUserData } from "./authReducer"
import { BaseThunkType, InferActionType } from "./reduxStore"

const INITIALIZED_SUCCESS = "appReducer/INITIALIZED_SUCCESS"

const initialState = {
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

export const actions = {
  initializedSuccess: () => ({ type: INITIALIZED_SUCCESS } as const),
}

export const initializeApp = (): BaseThunkType<ActionsType, void> => {
  return (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => dispatch(actions.initializedSuccess()))
  };
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionType<typeof actions>
