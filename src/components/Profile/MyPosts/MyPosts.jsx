import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
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
