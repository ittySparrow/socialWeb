import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile /> } />
          <Route path="/dialogs" render={ () => <DialogsContainer /> } />
          <Route path="/users" component={ () => <UsersContainer /> } />
          {/* <Route path="/music" component={}/>
          <Route path="/settings" component={}/> */}
        </div>

      </div>
  )
}

export default App;