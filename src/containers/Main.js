import React from "react";
import { Switch, Route } from "react-router-dom";
import Snake from "../components/Snake";
import LandingPage from "../components/LandingPage";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/lit" component={Snake} />
      </Switch>
    );
  }
}

export default Main;
