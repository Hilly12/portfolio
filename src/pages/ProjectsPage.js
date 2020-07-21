import React, { Component, Fragment } from "react";
import { Container } from "@material-ui/core";
import Footer from "../components/Footer";
import BaseRouter from "../routes.js";

class ProjectsPage extends Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
          <div style={{ marginTop: "40px" }} />
          <div className="container dark">
            <BaseRouter />
          </div>
          <div style={{ margin: "1%" }} />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default ProjectsPage;
