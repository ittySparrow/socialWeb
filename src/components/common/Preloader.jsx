import React from 'react';
import loadingImg from '../../assets/images/loadingImg.svg'


const Preloader = () => {
    return (
        <div><img src={loadingImg}/></div>
    );
}

export default Preloader;