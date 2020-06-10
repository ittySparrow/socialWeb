import React from 'react'
import { connect } from "react-redux";
import { toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(({ data }) => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });   
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(({ data }) => this.props.setUsers(data.items));   
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      toggleFollow={this.props.toggleFollow}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);