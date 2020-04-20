import React from 'react';
import style from './Header.module.css';
import Logo from './logo.png';

const Header = (props) => {
  return (
    <header className={style.header}>
        <img src={Logo}></img>
    </header>
  );
}

export default Header;