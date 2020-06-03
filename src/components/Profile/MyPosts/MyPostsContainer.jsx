import React from 'react';
import {addPostActionHandler, handlePostChangeActionHandler} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>{
        (store) => {
            const state = store.getState();
            const onAddPost = () => {
                store.dispatch(addPostActionHandler());
            }
            const onChange = (value) => {
                store.dispatch(handlePostChangeActionHandler(value));
            }
            return (
                <MyPosts
                postsData={state.profilePage.postsData}
                addPost={onAddPost}
                newPostText={state.profilePage.newPostText}
                onChange={onChange}/>
            )
        }
        }</ StoreContext.Consumer>
  )
}

export default MyPostsContainer;
