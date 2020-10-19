type FriendListType = {
    id: number
    imgUrl: string
    name: string
}

export type InitialStateType = {
    friendList: Array<FriendListType>
}

const initialState = {
    friendList: [
    //     {id: 1, imgUrl: '', name: 'Sergei'},
    //     {id: 2, imgUrl: '', name: 'Andrei'},
    //     {id: 1, imgUrl: '', name: 'Darja'},
    ],
};

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};

export default sidebarReducer;