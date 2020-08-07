import React, { useState, useEffect } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";

const ProfileData = (props) => {

  let [profile, setProfile] = useState(props.profile);

  useEffect(() => {
    setProfile(props.profile);
  }, [props.profile]);

  if (!profile) {
    return <Preloader />;
  }
  
  const contacts = Object.entries(profile.contacts).map((key) => profile.contacts[key] 
  ? <div key={key}>{`${key}: ${profile.contacts[key]}`}</div>
  : null).filter((c) => !!c);
  
  return (
    <div>
      <div className="fullName">Full Name: {profile.fullName}</div>
  <div className="job-searching">Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No' }
  </div>
  <div className="jobDescription">Job Description: {profile.lookingForAJobDescription}
  </div>
  <div className="contacts">{contacts.length > 0 ? `Contacts: ${contacts}` : "User hasn't added any contacts yet"}</div>
    </div>
  );
};

export default ProfileData;
