import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ProfileStatus from "../ProfileInfo/ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img src={props.profile.photos.large}></img>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
