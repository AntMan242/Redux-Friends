import React, { Component } from 'react';
import FriendList from './components/FriendList';
import Loginpage from './components/LoginPage';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path = '/login' component = {Loginpage} />

          </div>
          <div>
            <PrivateRoute path = '/friendlist' component = {FriendList} />

            </div>
            </div>
    );
  }
}

export default App;
