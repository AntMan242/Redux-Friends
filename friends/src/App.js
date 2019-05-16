import React, {Component} from 'react';
import FriendList from './Components/FriendList';
import LoginPage from './Components/LoginPage';
import {Route} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path = '/login' component = {LoginPage} />

          </div>
          <div>
          <PrivateRoute path = '/friendlist' component = {FriendList} />
          </div>
          </div>
    )
 }
} 

export default App;
