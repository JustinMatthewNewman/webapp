import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

//layouts

import MainLayout from './layouts/MainLayouts';
import HomepageLayout from './layouts/HomepageLayout';

import './default.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route path="/registration" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
