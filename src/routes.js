import React from "react";
import { Route } from "react-router-dom";
import ProjectList from "./containers/ProjectList";
import ProjectDetail from "./containers/ProjectDetail";

const BaseRouter = () => (
  <div>
    <Route exact path="/projects" component={ProjectList} />
    <Route exact path="/projects/:projectid" component={ProjectDetail} />
  </div>
);

export default BaseRouter;
