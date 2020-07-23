import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
