import React, { FunctionComponent } from "react";
import { iRoute } from "../misc/Interfaces";
import { Switch, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const AuthRouter: FunctionComponent<{ routes: Array<iRoute> }> = ({
  routes,
}) => {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;
