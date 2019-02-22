import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase'

firebase.initializeApp(
    {
        apiKey: "AIzaSyBZGVg3qyUXHvuaQirsoVMSgnoGqGbOxzI",
        authDomain: "farmaciabackend-af5f6.firebaseapp.com",
        databaseURL: "https://farmaciabackend-af5f6.firebaseio.com",
        projectId: "farmaciabackend-af5f6",
        storageBucket: "farmaciabackend-af5f6.appspot.com",
        messagingSenderId: "866227503031"
      }
)



ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
