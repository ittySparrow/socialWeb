import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Form, Field } from "react-final-form";

const MessageForm = (props) => {
  const onSubmit = ({ newMessage }) => {
    props.addNewMessage(newMessage);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              component="input"
              name="newMessage"
              placeholder="New Message"
            />
          </div>
          <div>
            <button>Send message</button>
          </div>
        </form>
      )}
    />
  );
};

export default (props) => {
  const dialogElements = props.dialogsData.map(({ id, name }) => (
    <DialogItem name={name} id={id} />
  ));

  const messagesElements = props.messagesData.map(({ message }) => (
    <Message message={message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <MessageForm addNewMessage={props.addNewMessage} />
      </div>
    </div>
  );
};
