import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ProfileStatus from "../ProfileInfo/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img src={props.profile.photos.large}></img>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
