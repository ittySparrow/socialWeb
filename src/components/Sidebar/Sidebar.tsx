import React from "react";
import style from "./SideBar.module.css"
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { UsersType } from "../../types/types";

type PropsType = {
    friendList: Array<UsersType>
}

const FriendList = (props: PropsType) => {
    const friends = props.friendList
        .map(({ photos, name }) => <div className="friend"><img alt="" src={photos.small || ""} />{name}</div>)
    return <div className="friendList">{friends}</div>;
}



type MapStatePropsType = {
    friendList: Array<UsersType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friendList: state.sidebar.friendList,
    }
}

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(FriendList);
