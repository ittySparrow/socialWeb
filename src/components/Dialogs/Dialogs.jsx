import React from 'react';
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + " " + style.active}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Sergei</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Andrey</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    Don't give up.
                </div>
                <div className={style.message}>
                    You can do it, I promise.
                </div>
                <div className={style.message}>
                    Let's do it, girl.
                </div>

            </div>
        </div>
    )
}

export default Dialogs;