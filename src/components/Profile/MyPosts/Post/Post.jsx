import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className="postFrame">
            <div className="post">
                {props.message}
            </div>
            <div className="likesCount">
                likes: {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
