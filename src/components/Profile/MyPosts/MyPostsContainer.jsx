import React from 'react';
import {addPost, handlePostChange} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = {
    addPost,
    handlePostChange,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
