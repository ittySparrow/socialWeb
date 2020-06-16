import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";

export default (props) => {
  return (
    <div>
      <ProfileStatus status={props.status} />
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};
