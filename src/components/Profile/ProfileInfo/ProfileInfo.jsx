import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import avaDefault from "../../../assets/images/avaDefault.jpg";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <img src={profile.photos.large || avaDefault}></img>
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
