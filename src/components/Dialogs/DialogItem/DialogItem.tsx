import React, { FC } from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  id: number
  name: string
}

const DialogItem: FC<PropsType> = ({ id, name }) => {
  const path = "/dialogs/" + id;
  return (
    <div className={style.dialog}>
      <img className={style.avatar} src={" "} />
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
