import rerenderEntirePage from "../render";

const state = {
    profilePage: {
        postsData: [
            { id: 1, post: "Hello, this is my first post", likesCount: 3 },
            { id: 2, post: "Is anybody here?", likesCount: 9 },
        ],
        newPostText: '',
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Darja' },
            { id: 2, name: 'Sergei' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Andrey' },
            { id: 5, name: 'Alex' },
        ],
        messagesData: [
            { id: 1, message: "Hello, my brave girl." },
            { id: 2, message: "Let's do it, girl." },
            { id: 3, message: "You can do it, I promise." },
        ],
    },
    sidebar: {
        friendList: [
            { id: 1, imgUrl: '', name: 'Sergei' },
            { id: 2, imgUrl: '', name: 'Andrei' },
            { id: 1, imgUrl: '', name: 'Darja' },
        ],
    },
}

export const handlePostChange = (value) => state.profilePage.newPostText = value;

export const addPost = () => {
    const newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntirePage(state, addPost, handlePostChange);
}

export default state;