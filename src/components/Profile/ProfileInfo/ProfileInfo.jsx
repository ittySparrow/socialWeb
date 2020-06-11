import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <img src={props.profile.photos.large}></img>
            <div>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;
