import { UsersType } from "../types/types";

const initialState = {
    friendList: [] as Array<UsersType>,
};

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};
export default sidebarReducer;

export type InitialStateType = typeof initialState;
