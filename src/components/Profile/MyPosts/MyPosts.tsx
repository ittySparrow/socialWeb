import React, { FC } from "react";
import { PostType } from "../../../types/types";
import AddNewPostForm from "./AddNewPostForm";
import style from "./MyPosts.module.css";
import Post from "./Post/Post"

type PropsType = {
  postsData: Array<PostType>
  addPost: (newPost: string) => void
}

const MyPosts: FC<PropsType> = ({ postsData, addPost }) => {
  const postsElements = postsData.map(({ post, likesCount }) => (
    <Post message={post} likesCount={likesCount} />
  ));

  return (
    <div className="posts">
      <h3>My posts</h3>
      <AddNewPostForm addPost={addPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
