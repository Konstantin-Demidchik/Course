import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  AutosFilterPage,
  InSizeFilterPage,
} from './pages';

import {
  Header
} from './components'

function App() {
  return (
    <BrowserRouter>
      <Route
        path="/"
        component={Header}
      />

      <Route
        exact
        path="/autos"
        component={AutosFilterPage}
      />

      {/*<Route
        exact
        path="/freight"
        component={}
      />*/}

      {/*<Route
        exact
        path="/special"
        component={}
      />*/}

      <Route
        exact
        path="/insize"
        component={InSizeFilterPage}
      />
    </BrowserRouter>

  );
}

export default App;
