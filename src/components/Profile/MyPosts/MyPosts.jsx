import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionHandler, handlePostChangeActionHandler} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    const postsElements = props.state.postsData
        .map(({ post, likesCount }) => <Post message={post} likesCount={ likesCount }/>);

    const addPost = () => {
        props.dispatch(addPostActionHandler());
    }

    const handleChange = (e) => {
        const { value } = e.target;
        props.dispatch(handlePostChangeActionHandler(value));
    }

    return (
        <div className='posts'>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.state.newPostText} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
