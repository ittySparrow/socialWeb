import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 8777;
    }
    this.props.setProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
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
  connect(mapStateToProps, { setProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);
