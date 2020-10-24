import React, { useState, useEffect, FC, FormEvent, ChangeEvent } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import avaDefault from "../../../assets/images/avaDefault.jpg";
import { ProfileData, ProfileDataForm } from "./ProfileData";
import { FORM_ERROR } from "final-form";
import { ProfileType } from "../../../types/types";

type ProfileInfoProps = {
  profile: ProfileType
  status: string
  updateStatus: () => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => void
}

const ProfileInfo: FC<ProfileInfoProps> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = (e.target as HTMLInputElement).files;
    if (fileList && fileList.length) {
      savePhoto(fileList[0]);
    }
  };

  const onSubmit = async (formData: ProfileType) => {
    try {
      await saveProfile(formData);
    } catch (error) {
      return { [FORM_ERROR]: error };
    }
    setEditMode(false);
  };

  return (
    <div>
      <img src={profile.photos.large || avaDefault}></img>
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>ava+description</div>
      {!editMode ? (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          activateEditMode={() => setEditMode(true)}
        />
      ) : (
        <ProfileDataForm
          profile={profile}
          activateEditMode={() => setEditMode(false)}
          saveProfile={onSubmit}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
