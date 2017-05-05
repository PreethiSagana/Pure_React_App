/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App';
import UserList from './user/list';
import UserAdd from './user/add';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
      <Route path="/" component={App}>
      </Route>
  </BrowserRouter>
	
), document.getElementById('root'));
