import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Landingpage from "./pages/dashboard/landingpage";

function AppNavigation() {
  return (
    <Switch>
      <Route path="/landingPage" component={Landingpage} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default AppNavigation;
