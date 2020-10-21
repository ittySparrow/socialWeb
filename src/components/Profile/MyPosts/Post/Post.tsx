import React, { FC } from "react";
import style from "./Post.module.css";

type PropsType = {
  message: string
likesCount: number
}

const Post: FC<PropsType> = ({ message, likesCount }) => {
  return (
    <div className="postFrame">
      <div className="post">{message}</div>
      <div className="likesCount">likes: {likesCount}</div>
    </div>
  );
};

export default Post;
