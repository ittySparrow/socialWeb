import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElements = props.postsData
        .map(({ post, likesCount }) => <Post message={post} likesCount={ likesCount }/>);

    const handleChange = (e) => {
        const { value } = e.target;
        props.onChange(value);
    }

    return (
        <div className='posts'>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
