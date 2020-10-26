import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import { iAppState, iAuthState, iRoute } from "../misc/Interfaces";
import { routesType } from "../misc/Types";

const RouteWithSubRoutes: FunctionComponent<iRoute> = (route) => {
  const { path, routes, type, exact } = route;
  const { auth, hidden } = routesType;

  const location = useLocation();

  const { loggedIn } = useSelector<iAppState>(({ auth }) => auth) as iAuthState;

  useEffect(() => {
    routes !== undefined &&
      routes.map((subRoutes) => {
        subRoutes.type = type;
        return routes;
      });
  });

  switch (type) {
    case auth:
      localStorage.setItem(
        "lastPath",
        location.pathname + (location.search ? location.search : "")
      );
      return loggedIn ? (
        <Route
          exact={exact !== undefined && exact}
          path={path}
          render={(props) => <route.component {...props} routes={routes} />}
        />
      ) : (
        <Redirect to="/auth/login" />
      );
    case hidden:
      return !loggedIn ? (
        <Route
          exact={exact !== undefined && exact}
          path={path}
          render={(props) => <route.component {...props} routes={routes} />}
        />
      ) : (
        <Redirect to="/" />
      );
    default:
      return (
        <Route
          exact={exact !== undefined && exact}
          path={path}
          render={(props) => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      );
  }
};

export default RouteWithSubRoutes;
