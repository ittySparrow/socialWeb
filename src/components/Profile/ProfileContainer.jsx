import React from "react";
import { connect } from "react-redux";
import {
  setProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

class ProfileContainer extends React.Component {
  updateProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        return this.props.history.push("/login");
      }
    }
    this.props.setProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.updateProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile();
    }
  }

  render() {
    return (
      <div>
        <ProfileInfo
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={updateStatus}
          savePhoto={this.props.savePhoto}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.profilePage.status,
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  authUserId: state.auth.id,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { setProfile, getStatus, updateStatus, savePhoto }),
  withAuthRedirect
)(ProfileContainer);
