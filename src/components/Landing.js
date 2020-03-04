import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import history from '../history';
import Main from '../components/Landing/Main';

const Landing = () => {
  return(
    <div style={{maxHeight: "10vh"}}>
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route  path="/" exact component={Main} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Landing;
