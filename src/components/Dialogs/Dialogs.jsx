import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

export default ({ dialogsData, messagesData, addNewMessage }) => {
  const dialogElements = dialogsData.map(({ id, name }) => (
    <DialogItem name={name} id={id} />
  ));

  const messagesElements = messagesData.map(({ message }) => (
    <Message message={message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm addNewMessage={addNewMessage} />
      </div>
    </div>
  );
};
