import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { Persons } from './App';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {NavigationBar} from './components/NavigationBar'
import PersonsWithClass from './components/classComponent/PersonsWithClass'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <NavigationBar></NavigationBar>
    {/* <Persons /> */}
    {/* <PersonsWithClass></PersonsWithClass> */}
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
