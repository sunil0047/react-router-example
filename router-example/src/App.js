import React, { Component } from 'react';
// import {History} from 'history';
import {BrowserRouter} from 'react-router-dom';
import {Router} from 'react-router';
import logo from './logo.svg';
import MyRoutes from './routes';

class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
        <MyRoutes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
