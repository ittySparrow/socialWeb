import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component {

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

export default UsersAPIComponent;