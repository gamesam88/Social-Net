import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navigation from './Components/Navigation/Navigation';
import UsersContainer from "./Components/Users/UsersContainer"
import LoginContainer from "./Components/Login/LoginContainer"
import { initializeAppThunk } from "./Redux/app_reducer"
import { connect } from 'react-redux';
import Preloader from "./Components/common/preloader/Preloader"
import { compose } from "redux"
import { authoriseThunkCreator } from "./Redux/auth_reducer"
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));


const App = (props) => {

  useEffect(() => {
    props.initializeAppThunk()
  }, []);

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <HeaderContainer />
        <Navigation />
        <div className='wrapper-content'>
          <Routes>
            <Route path="/profile" >
              <Route path="/profile/:userId" element={<Suspense fallback={<div>Загрузка...</div>}>
                <ProfileContainer />
              </Suspense>
              } />
            </Route>
            <Route path="/dialogs" element={<Suspense fallback={<div>Загрузка...</div>}>
              <DialogsContainer />
            </Suspense>
            } />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

let mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized
  }
}

export default compose(connect(mapStateToProps, { initializeAppThunk, authoriseThunkCreator }))(App)
