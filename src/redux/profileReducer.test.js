import profileReducer, { addPost, deletePost } from "./profileReducer";
import React from "react";

//1. test data
let state = {
  postsData: [
    { id: 1, post: "Hello, this is my first post", likesCount: 3 },
    { id: 2, post: "Is anybody here?", likesCount: 9 },
  ],
};

test("posts length should be incremenated", () => {
  //1. test data
  const action = addPost("it-kamasutra.com");
  //2. action
  const newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData.length).toBe(3);
});

test("message of new post should be correct", () => {
  //1. test data
  const action = addPost("it-kamasutra.com");
  //2. action
  const newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData[2].post).toBe("it-kamasutra.com");
});

test("after deleting a post postData length should be decremented", () => {
  //1. data
  const action = deletePost(1);
  //2. action
  const newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData.length).toBe(1);
});
