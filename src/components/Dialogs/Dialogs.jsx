import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    const newMessageElement = React.createRef();

    const addMessage = () => {
        const text = newMessageElement.current.value;
        alert(text);
    }

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
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;