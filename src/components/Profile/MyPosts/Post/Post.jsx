import React from "react";
import style from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className="postFrame">
      <div className="post">{message}</div>
      <div className="likesCount">likes: {likesCount}</div>
    </div>
  );
};

export default Post;
