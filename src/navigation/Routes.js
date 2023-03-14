import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GBAcoins, GBAmap, Land } from "../pages";
// import GuestRoute from "./GuestRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Land />
        </Route>
        <Route path="/map" exact>
          <GBAmap />
        </Route>
        <Route path="/coins" exact>
          <GBAcoins />
        </Route>
        {/* <GuestRoute
          path="/projects"
          component={Projects}
          isGuest={sessionStorage.getItem("accessToken") === null}
        /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
