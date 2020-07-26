import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default ({ profile, status, updateStatus }) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
