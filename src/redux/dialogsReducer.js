const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export const addNewMessage = (text) => ({ type: ADD_NEW_MESSAGE, text });

const initialState = {
  dialogsData: [
    { id: 1, name: "Darja" },
    { id: 2, name: "Sergei" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Alex" },
  ],
  messagesData: [
    { id: 1, message: "Hello, my brave girl." },
    { id: 2, message: "Let's do it, girl." },
    { id: 3, message: "You can do it, I promise." },
  ],
};

const dialogsReducer = (state = initialState, action) => {
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
