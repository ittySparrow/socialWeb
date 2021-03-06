import React, { ComponentType } from "react";
import { connect } from "react-redux";
import {
  setProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

class ProfileContainer extends React.Component<MapStatePropsType & DispatchPropsType & RouteComponentProps<PathParamsType>> {
  updateProfile() {
    let userId: number | null = +this.props.match.params.userId;
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
  componentDidUpdate(prevProps: PropsType | any) {
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
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

type PropsType = MapStatePropsType & DispatchPropsType;

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type PathParamsType = {
  userId: string
}

type DispatchPropsType = {
  setProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType) => ({
  status: state.profilePage.status,
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  authUserId: state.auth.id,
});

export default compose<ComponentType>(
  withRouter, //(b: B) => R,
  connect<MapStatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    setProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }), //(a: A) => B,
  withAuthRedirect //Func0<A>
)(ProfileContainer);
