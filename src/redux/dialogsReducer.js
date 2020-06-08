const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const HANDLE_MESSAGE_CHANGE = 'HANDLE-MESSAGE-CHANGE';

export const addNewMessageActionHandler = () => ({ type: ADD_NEW_MESSAGE });
export const handleMessageChangeActionHandler = (text) => ({
    type: HANDLE_MESSAGE_CHANGE,
    value: text,
});

const initialState = {
    dialogsData: [
                {id: 1, name: 'Darja'},
                {id: 2, name: 'Sergei'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Alex'},
            ],
    messagesData: [
        {id: 1, message: "Hello, my brave girl."},
        {id: 2, message: "Let's do it, girl."},
        {id: 3, message: "You can do it, I promise."},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            const newMessage = {
                id: 3,
                message: state.newMessageText,
            }
            return {
                ...state,
                messagesData: [ ...state.messagesData, newMessage ],
                newMessageText: '',
            }
        case HANDLE_MESSAGE_CHANGE: 
            return { 
                ...state,
                newMessageText: action.value,
            }
        default:
            return state;
    }
}

export default dialogsReducer;