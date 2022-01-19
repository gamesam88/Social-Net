import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navigation />
        <div className='wrapper-content'>
          <Routes>
            <Route
              path="/profile"
              element={<Profile />} />
            <Route
              path="/dialogs"
              element={<DialogsContainer />} />
            <Route
              path="/users"
              element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
