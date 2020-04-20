import React from 'react';
import a from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className={a.content}>
      {/* <Profile /> */}
      <Dialogs />
      </div>
    </div>
  )
}

export default App;