import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import NavBarPublic from "./NavbarPublic";
import NoMatch from "./NoMatch";

const Routes = () => {
  return (
    <>
      <Route path="/" component={NavBarPublic} />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dash" render={() => <DashboardRoutes />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />

        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
