import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Application from "./components/Application";

render(
  <Router>
    <Application />
  </Router>,

  document.getElementById("root")
);
