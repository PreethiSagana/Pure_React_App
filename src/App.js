 /* eslint-disable */
import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import UserList from './user/list';
import UserAdd from './user/add';
import UserEdit from './user/edit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Link to='/user/list' className='color-white'>User Portal</Link></h2>
        </div>
        <Switch>
          <Route path="/user/list" component={UserList} />
          <Route path="/user/add" component={UserAdd} />
          <Route path="/user/edit/" component={UserEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
