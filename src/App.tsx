import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

import "./App.css";

export default function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
}
