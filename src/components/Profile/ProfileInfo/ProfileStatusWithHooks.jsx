import React, { useState } from "react";
import { useEffect } from "react";

export const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!editMode ? (
        <span onDoubleClick={activateEditMode}>{props.status || "..."}</span>
      ) : (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}
        />
      )}
    </div>
  );
};
