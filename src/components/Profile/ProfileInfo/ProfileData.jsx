import React, { useState, useEffect } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import { Form, Field } from "react-final-form";
import {
  requieredField,
  composeValidators,
} from "../../../utils/validators/validators.ts";
import { Input, Textarea } from "../../common/FormControls";

export const ProfileData = (props) => {
  let [profile, setProfile] = useState(props.profile);

  useEffect(() => {
    setProfile(props.profile);
  }, [props.profile]);

  if (!profile) {
    return <Preloader />;
  }

  const contacts = Object.keys(profile.contacts)
    .map((key) =>
      profile.contacts[key] ? `${key}: ${profile.contacts[key]}` : null
    )
    .filter((c) => !!c);

  return (
    <div>
      {props.isOwner && (
        <button onClick={props.activateEditMode}>Редактировать профиль</button>
      )}
      <div className="fullName">Full Name: {profile.fullName}</div>
      <div className="job-searching">
        Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      <div className="jobDescription">
        Job Description: {profile.lookingForAJobDescription}
      </div>
      <div className="aboutMe">About Me: {profile.aboutMe}</div>
      {contacts.length > 0 ? (
        <div className="contacts">
          {contacts.map((contact) => (
            <div>{contact}</div>
          ))}
        </div>
      ) : (
        "User hasn't added any contacts yet"
      )}
    </div>
  );
};

export const ProfileDataForm = ({ profile, saveProfile }) => {
  return (
    <Form
      initialValues={profile}
      onSubmit={saveProfile}
      render={({ submitError, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="fullName">
            Full Name:{" "}
            <Field
              component={Input}
              name="fullName"
              validate={composeValidators(requieredField)}
            />
          </div>
          <div className="job-searching">
            Looking for a job:{" "}
            <Field component={Input} type="checkbox" name="lookingForAJob" />
          </div>
          <div className="jobDescription">
            Professional Skills:{" "}
            <Field
              component={Textarea}
              name="lookingForAJobDescription"
              validate={composeValidators(requieredField)}
            />
          </div>
          <div className="aboutMe">
            About Me: <Field component={Textarea} name="aboutMe" />
          </div>
          <div className="contacts">
            Contacts:
            {Object.keys(profile.contacts).map((key) => (
              <div key={key}>
                {key}: <Field component={Input} name={`contacts.${key}`} />
              </div>
            ))}
          </div>
          <button>Сохранить</button>
        </form>
      )}
    />
  );
};
