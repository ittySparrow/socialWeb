import React from 'react';
import style from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <nav className={style.navbar}>
            <div>
                <a href="/profile">Profile</a>
            </div>
            <div>
                <a href="/dialogs">Messages</a>
            </div>
            <div>
                <a href="/news">News</a>
            </div>
            <div>
                <a href="/music">Music</a>
            </div>
            <div>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;