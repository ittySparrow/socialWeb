import React from 'react';
import p from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <>
            <img src='https://storage.needpix.com/rsynced_images/sparrow-2760001_1280.jpg'></img>
            <div>
                ava+description
            </div>
            <MyPosts />
        </>
    )
}

export default Profile;
