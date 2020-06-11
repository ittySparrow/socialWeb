const ADD_POST = 'ADD_POST';
const HANDLE_POST_CHANGE = 'HANDLE_POST_CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPost = () => ({ type: ADD_POST });
export const handlePostChange = (text) => ({ type: HANDLE_POST_CHANGE, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

const initialState = {
    postsData: [
        {id: 1, post: "Hello, this is my first post", likesCount: 3},
        {id: 2, post: "Is anybody here?", likesCount: 9},
    ],
    newPostText: '',
    profile: null,
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
                newPostText: action.text,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,

            };
        default:
            return state;
    }
}

export default profileReducer;