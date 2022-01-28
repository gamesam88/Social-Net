import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HeaderTest from './Components/Header/TestHeader';
import Navigation from './Components/Navigation/Navigation';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer"

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <HeaderTest />
        <Navigation />
        <div className='wrapper-content'>
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
