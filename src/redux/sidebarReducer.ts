import { UsersType } from "../types/types";

export type InitialStateType = typeof initialState;

const initialState = {
    friendList: [] as Array<UsersType>,
};

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};

export default sidebarReducer;