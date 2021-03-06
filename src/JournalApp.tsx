import React, { FunctionComponent, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./router/RouteWithSubRoutes";
import Routes from "./router/Routes";
import "./styles/styles.scss";
import "animate.css";
import { useDispatch } from "react-redux";
import { firebase } from "./firebase/firebase-config";
import { login } from "./actions/auth";
import { startLoadingNotes } from "./actions/notes";

const JournalApp: FunctionComponent = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName as string));
        dispatch(startLoadingNotes(user.uid));
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Router>
      <>
        <Switch>
          {Routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </>
    </Router>
  );
};

export default JournalApp;
