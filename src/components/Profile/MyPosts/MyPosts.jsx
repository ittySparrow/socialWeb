import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Form, Field } from "react-final-form";

const PostForm = (props) => {
  const onSubmit = ({ newPost }) => {
    props.addPost(newPost);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field component="input" name="newPost" placeholder="New Post" />
          </div>
          <div>
            <button>Add post</button>
          </div>
        </form>
      )}
    />
  );
};

const MyPosts = (props) => {
  const postsElements = props.postsData.map(({ post, likesCount }) => (
    <Post message={post} likesCount={likesCount} />
  ));

  return (
    <div className="posts">
      <h3>My posts</h3>
      <PostForm addPost={props.addPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
