import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import StoreContext from './StoreContext';

const rerenderEntirePage = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntirePage();
store.subscribe(rerenderEntirePage);