const ADD_POST = 'ADD-POST';
const HANDLE_POST_CHANGE = 'HANDLE-POST-CHANGE';

export const addPostActionHandler = () => ({ type: ADD_POST });

export const handlePostChangeActionHandler = (text) => ({
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
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case HANDLE_POST_CHANGE:
            state.newPostText = action.value;
            return state;
        default:
            return state;
    }
}

export default profileReducer;