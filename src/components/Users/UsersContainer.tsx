import React from "react";
import { connect } from "react-redux";
import {
  actions,
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
  getFollowingInProgress,
} from "../../redux/usersSelectors";
import Paginator from "../../utils/paginator/Paginator";
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type MapPropsType = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number> // array of users' id
}

type DispatchPropsType = {
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
  setCurrentPage: (pageNumber: number) => void
}

type OwnPropsType = {

}

type PropsType = MapPropsType & DispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <Paginator
          totalItemsCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
        />
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapPropsType => {
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
  followUser,
  unfollowUser,
  setCurrentPage: actions.setCurrentPage,
  requestUsers,
};

export default connect<MapPropsType, DispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);
