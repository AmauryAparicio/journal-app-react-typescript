import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./router/RouteWithSubRoutes";
import Routes from "./router/Routes";
import "./styles/styles.scss";

const JournalApp: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <Switch>
          {Routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default JournalApp;
