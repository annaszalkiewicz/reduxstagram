import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './styles/style.styl';
import Main from './components/Main';
import GridPhoto from './components/GridPhoto';
import Single from './components/Single';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={GridPhoto}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
