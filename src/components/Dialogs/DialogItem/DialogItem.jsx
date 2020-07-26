import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name, imgUrl }) => {
  const path = "/dialogs/" + id;
  return (
    <div className={style.dialog}>
      <img className={style.avatar} src={imgUrl} />
      <NavLink
        to={path}
        className={style.dialogItem}
        activeClassName={style.active}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
