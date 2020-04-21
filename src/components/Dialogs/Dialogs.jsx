import React from 'react';
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return(
        <div className={style.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name="Darja" id="1" />
                <DialogItem name="Sergei" id="2" />
                <DialogItem name="Andrey" id="3" />
                <DialogItem name="Maria" id="4" />
            </div>
            <div className={style.messages}>
                <Message message="Hello, my brave girl." />
                <Message message="Let's do it, girl." />
                <Message message="You can do it, I promise." />
            </div>
        </div>
    )
}

export default Dialogs;