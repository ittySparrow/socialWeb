import React from 'react';
import style from './ProfileInfo.module.css'
import Ava from './avaExample.png'

const ProfileInfo = () => {
    return (
        <div>
            <img src={Ava}></img>
            <div>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;
