import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./organisms/NavBar";
import Footer from "./organisms/Footer";

import * as ROUTES from "../constants/routes";
import SignInAndSignUp from "./pages/SignInAndSignUp";

class Application extends Component {
  state = { title: "RateYourGlass" };

  render() {
    return (
      <div className="container">
        <NavBar title={this.state.title} />
        <div className="content">
          <Switch>
            <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
            import {(Switch, Route)} from "react-router-dom";
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Application;
