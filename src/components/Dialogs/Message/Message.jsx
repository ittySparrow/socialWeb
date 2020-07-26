import React from "react";
import style from "./../Dialogs.module.css";

const Message = ({ message }) => {
  return (
    <div>
      <div className={style.message}>{message}</div>
    </div>
  );
};

export default Message;
