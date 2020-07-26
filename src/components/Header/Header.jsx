import React from "react";
import style from "./Header.module.css";
import Logo from "./logo.png";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={style.header}>
      <img src={Logo} />
      <div className={style.loginBlock}>
        {isAuth ? (
          <>
            <NavLink to={"/profile"}>{login}</NavLink>
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
