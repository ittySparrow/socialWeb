import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
        <img src='http://video.netgez.com/video/images/thumbs/videolar/2014-06-03/1/logo-tasarim-photoshop-egitimi_1_15592.jpg'></img>
    </header>
  );
}

export default Header;