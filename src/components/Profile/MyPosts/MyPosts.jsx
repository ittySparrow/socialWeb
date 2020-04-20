import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className='posts'>
            myPosts
            <div>
                NewPost
                </div>
            <div>
               <Post />
            </div>
        </div>
    )
}

export default MyPosts;
