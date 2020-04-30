import React from 'react';
import './index.css';
import rerenderEntirePage from "./render";
import state, {addPost, handlePostChange} from "./redux/state";



rerenderEntirePage(state, addPost, handlePostChange);
