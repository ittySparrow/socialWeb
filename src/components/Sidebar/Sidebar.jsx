import React from "react";
import FriendList from "./FriendList/FriendList";
import style from "./SideBar.module.css"
import StoreContext from "../../StoreContext";

const Sidebar = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState();
                return (
                <div className={style.sidebar}>
                    <FriendList friendList={state.sidebar.friendList}/>
                </div>
            )}
        }</StoreContext.Consumer>
    )
    
    
}

export default Sidebar;
