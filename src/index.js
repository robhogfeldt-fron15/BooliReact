import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import DataList from './components/data-list';
import SingleObject from './components/SingleObject/SingleObject';
import { Router, Route, Link, Redirect } from 'react-router'


// Render the main component into the dom
ReactDOM.render((
  <Router>
    <Redirect from="/" to="/list" />
    <Route path="/" component={App}>
        <Route path="list" component={DataList} />
        <Route path="single/:singleId" component={SingleObject} />

      </Route>

  </Router>
), document.getElementById('app'));
