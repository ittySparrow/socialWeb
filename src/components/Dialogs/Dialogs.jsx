import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {addNewMessageActionHandler, handleMessageChangeActionHandler} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    const onChangeMessage = (e) => {
        const text = e.target.value;
        props.dispatch(handleMessageChangeActionHandler(text));
    }

    const addNewMessage = () => props.dispatch(addNewMessageActionHandler())

    const dialogElements = props.state.dialogsData
        .map(({ id, name }) => <DialogItem name={name} id={id} />);

    const messagesElements = props.state.messagesData
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
                    <textarea value={props.state.newMessageText} onChange={onChangeMessage} />
                    <button type="button" onClick={addNewMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;