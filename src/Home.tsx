import React from "react";
import logo from "./react.svg";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome to Razzles</h2>
      </div>
    </div>
  );
}
