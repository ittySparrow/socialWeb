const ADD_POST = 'ADD-POST';
const HANDLE_POST_CHANGE = 'HANDLE-POST-CHANGE';

export const addPost = () => ({ type: ADD_POST });

export const handlePostChange = (text) => ({
    type: HANDLE_POST_CHANGE,
    value: text,
});

const initialState = {
    postsData: [
        {id: 1, post: "Hello, this is my first post", likesCount: 3},
        {id: 2, post: "Is anybody here?", likesCount: 9},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [ ...state.postsData, newPost ],
                newPostText: '',
            };
        case HANDLE_POST_CHANGE:
            return {
                ...state,
                newPostText: action.value,
            };
        default:
            return state;
    }
}

export default profileReducer;