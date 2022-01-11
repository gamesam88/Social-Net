import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navigation state={props.state.sideBar} />
        <div className='wrapper-content'>
          <Routes>
            <Route
              path="/profile"
              element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route
              path="/dialogs"
              element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
