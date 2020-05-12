import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const rerenderEntirePage = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntirePage();
store.subscribe(rerenderEntirePage);