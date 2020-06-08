const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId }); //AC === Action Creator
export const setUsersAC = (users) => ({ type: SET_USERS, users });

const initialState = {
    users: [
        // {id: 1, followed: false, fullName: 'Aleks Read', status: "Hello, this is my first post", location: {city: Minsk,country: Belarus}},
        // {id: 2, followed: true, fullName: 'Maria Stans', status: "I'm a boss", location: {city: Moscow, country: Russia}},
        // {id: 3, followed: true, fullName: 'Xert Dit', status: "Hello", location: {city: N, country: USA}},
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: 
            return { 
                ...state, 
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u),
            };
        case SET_USERS: 
            return {
                ...state,
                users: [ ...state.users, ...action.users ]
            }
        default:
            return state;
    }
}

export default usersReducer;