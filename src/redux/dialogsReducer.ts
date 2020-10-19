const ADD_NEW_MESSAGE = "dialogsReducer/ADD-NEW-MESSAGE";

type DialogsType = {
  id: number
  name: string
}

type MessagesType = {
  id: number
  message: string
}

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

export type InitialStateType = typeof initialState;

type AddNewMessageActionType = {
  type: typeof ADD_NEW_MESSAGE
  text: string
}

export const addNewMessage = (text: string): AddNewMessageActionType => ({ type: ADD_NEW_MESSAGE, text });

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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
