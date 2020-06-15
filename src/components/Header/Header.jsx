import React from 'react';
import style from './Header.module.css';
import Logo from './logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
        <img src={Logo} />
        <div className={style.loginBlock}>
          { props.isAuth ? <NavLink to={'/profile'}>{props.login}</NavLink> :
          <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
  );
}

export default Header;