import React from "react";
import { connect } from "react-redux";
import {
  toggleFollow,
  setCurrentPage,
  toggleFollowingInProgress,
  requestUsers,
  unfollowUser,
  followUser,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

const mapDispatchToProps = {
  toggleFollow,
  followUser,
  unfollowUser,
  setCurrentPage,
  toggleFollowingInProgress,
  requestUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
