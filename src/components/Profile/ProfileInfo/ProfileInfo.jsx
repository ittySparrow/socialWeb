import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img src={profile.photos.large}></img>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
