import React, { useState, FC, ChangeEvent } from "react";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import avaDefault from "../../../assets/images/avaDefault.jpg";
import { ProfileData, ProfileDataForm } from "./ProfileData";
import { FORM_ERROR } from "final-form";
import { ProfileType } from "../../../types/types";

type ProfileInfoProps = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
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
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
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
      <ProfileStatus status={status} updateStatus={updateStatus} />
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
