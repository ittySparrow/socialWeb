// import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/profileReducer";
import { AppStateType } from "../../../redux/reduxStore";
import { PostType } from "../../../types/types";
import MyPosts from "./MyPosts";

type MapStatePropsType = {
  postsData: Array<PostType>
}
type DispatchPropsType = {
  addPost: (newPostText: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    postsData: state.profilePage.postsData,
  };
};

export default connect < MapStatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { addPost: actions.addPost })(MyPosts);