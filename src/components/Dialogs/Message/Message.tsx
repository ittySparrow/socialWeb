import React, { FC } from "react";
import style from "./../Dialogs.module.css";

type PropsType = {
  message: string
}

const Message: FC<PropsType> = ({ message }) => {
  return (
    <div>
      <div className={style.message}>{message}</div>
    </div>
  );
};

export default Message;
