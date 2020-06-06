import React from "react";
import FriendList from "./FriendList/FriendList";
import style from "./SideBar.module.css"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendList: state.sidebar.friendList,
    }
}

const Sidebar = connect(mapStateToProps)(FriendList);

export default Sidebar;
