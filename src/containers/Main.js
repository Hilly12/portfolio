import React from "react";
import { Switch, Route } from "react-router-dom";
import Snake from "../components/Snake";
import LandingPage from "../pages/LandingPage";
import ProjectsPage from "../pages/ProjectsPage";
import ResumePage from "../pages/ResumePage";
import ArcadePage from "../pages/ArcadePage";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/resume" component={ResumePage} />
        <Route exact path="/arcade" component={ArcadePage} />
        <Route exact path="/arcade/snake" component={Snake} />
      </Switch>
    );
  }
}

export default Main;
