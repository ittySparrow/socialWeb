import { DialogsType, MessagesType } from "../types/types";
import { InferActionType } from "./reduxStore";

const ADD_NEW_MESSAGE = "dialogsReducer/ADD-NEW-MESSAGE";

const initialState = {
  dialogsData: [
    { id: 1, name: "Darja" },
    { id: 2, name: "Sergei" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Alex" },
  ] as Array<DialogsType>,
  messagesData: [
    { id: 1, message: "Hello, my brave girl." },
    { id: 2, message: "Let's do it, girl." },
    { id: 3, message: "You can do it, I promise." },
  ] as Array<MessagesType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 3,
        message: action.text,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
};
export default dialogsReducer;

export const actions = {
  addNewMessage: (text: string) => ({ type: ADD_NEW_MESSAGE, text } as const)
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionType<typeof actions>
