const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId }); //AC === Action Creator
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
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
                users: action.users,
            };
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.page,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        default:
            return state;
    }
}

export default usersReducer;