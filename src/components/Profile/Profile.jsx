import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Ava from './avaExample.png'

const Profile = () => {
    return (
        <>
            <img src={Ava}></img>
            <div>
                ava+description
            </div>
            <MyPosts />
        </>
    )
}

export default Profile;
