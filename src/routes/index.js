import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "../pages/Login";
import Table from "../pages/Tables"

const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginForm} />
        <Route exact path="/table" component={Table} />
      </Switch>
    </Router>
  );
};

export default Routes;
