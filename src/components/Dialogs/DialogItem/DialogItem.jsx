import React from 'react';
import style from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return(
        <div className={style.dialog} >
            <img className={style.avatar} src={props.imgUrl} />
            <NavLink to={path} className={style.dialogItem} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;