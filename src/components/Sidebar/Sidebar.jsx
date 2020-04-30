import React from "react";
import FriendList from "./FriendList/FriendList";
import style from "./SideBar.module.css"

const Sidebar = (props) => {
    return (
        <div className={style.sidebar}>
            <FriendList state={props.state}/>
        </div>
    )
}

export default Sidebar;
