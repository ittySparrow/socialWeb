import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: "Hello, this is my first post", likesCount: 3},
                {id: 2, post: "Is anybody here?", likesCount: 9},
            ],
            newPostText: '',
        },
        messagesPage: {
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
        },
        sidebar: {
            friendList: [
                {id: 1, imgUrl: '', name: 'Sergei'},
                {id: 2, imgUrl: '', name: 'Andrei'},
                {id: 1, imgUrl: '', name: 'Darja'},
            ],
        },
    },
    _subscriber: () => {
        console.log('there is no observer');
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogs = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._subscriber();
    },
}

export default store;