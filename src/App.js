import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import Profile from './components/Profile/Profile';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from './components/Users/Users';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile /> } />
          <Route path="/dialogs" render={ () => <DialogsContainer /> } />
          <Route path="/users" component={ () => <Users /> } />
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>

      </div>
  )
}

export default App;