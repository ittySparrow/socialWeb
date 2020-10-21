import { UsersType } from "../types/types";

export type InitialStateType = {
    friendList: Array<UsersType>
}

const initialState: InitialStateType = {
    friendList: [],
};

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};

export default sidebarReducer;