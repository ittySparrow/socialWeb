import React from 'react'
import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollowAC, setUsersAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);