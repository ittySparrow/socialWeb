import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import Profile from './components/Profile/Profile';
import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar state={props.state}/>
        <Sidebar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile state={props.state.profilePage}
                                                         dispatch={props.dispatch}/> }/>
          <Route path="/dialogs" render={ () => <Dialogs state={props.state.messagesPage}
                                                         dispatch={props.dispatch}/> }/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>

      </div>
  )
}

export default App;