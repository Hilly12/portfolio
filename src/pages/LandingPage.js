import React, {Component, Fragment} from "react";
import Footer from "../components/Footer";
import { Jumbotron, Button } from "reactstrap";
import {Link} from "react-router-dom";

class LandingPage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <Jumbotron fluid>
          <h1 className="display-3">Welcome!</h1>
          <p className="lead">
            This site is currently under maintainence
          </p>
          {/*<hr className="my-2"/>*/}
          <p>
            Some of the projects you see here are still under development
          </p>
          <p className="lead">
            <Link to="sandbox/snake">
              <Button style={{minWidth: '100px'}} color="primary" size="sm">Press Me</Button>
            </Link>
          </p>
        </Jumbotron>
        <div className="container" style={{ minHeight: "100vh" }}>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default LandingPage;
