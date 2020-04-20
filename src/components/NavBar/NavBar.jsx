import React from 'react';
import b from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={b.navbar}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;