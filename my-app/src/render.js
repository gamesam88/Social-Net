import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from "./Redux/state"
import { updateNewPost } from "./Redux/state"
import { addMessage } from "./Redux/state"
import { updateMessage } from "./Redux/state"

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        addPost={addPost}
        updateNewPost={updateNewPost}
        addMessage={addMessage}
        updateMessage={updateMessage}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
