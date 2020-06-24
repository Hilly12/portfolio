import React from "react";
import { Route } from "react-router-dom";
import ProjectList from "./containers/ProjectList";
import ProjectDetail from "./containers/ProjectDetail";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ProjectList} />
    <Route exact path="/:projectid" component={ProjectDetail} />
  </div>
);

export default BaseRouter;
