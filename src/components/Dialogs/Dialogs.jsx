import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';

export default (props) => {

    if (!props.isAuth) { 
        return <Redirect to={'/login'} /> 
    }

    const onChangeMessage = (e) => {
        const text = e.target.value;
        props.handleMessageChange(text);
    }

    const dialogElements = props.dialogsData
        .map(({ id, name }) => <DialogItem name={name} id={id} />);

    const messagesElements = props.messagesData
        .map(({ message }) => <Message message={message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea value={props.newMessageText} onChange={onChangeMessage} />
                    <button onClick={props.addNewMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}