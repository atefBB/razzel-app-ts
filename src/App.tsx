import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import fetch from 'cross-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  fetch(`http://${process.env.HOST}:${process.env.PORT}/api`)
    .then(res => res.json())
    .then(data => console.log(data));

  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
}
