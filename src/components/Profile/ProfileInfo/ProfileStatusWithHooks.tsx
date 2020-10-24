import React, { ChangeEvent, FC, useState } from "react";
import { useEffect } from "react";

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<PropsType> = (props) => {
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

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!editMode ? (
        <span onDoubleClick={activateEditMode}>{status || "..."}</span>
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
