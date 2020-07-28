import React, {Component, Fragment} from "react";
import Footer from "../components/Footer";
// import { Jumbotron, Button } from "reactstrap";

class LandingPage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        {/*<Jumbotron fluid>*/}
        {/*  <h1 className="display-3">Hello, world!</h1>*/}
        {/*  <p className="lead">*/}
        {/*    This is a simple hero unit, a simple Jumbotron-style component for*/}
        {/*    calling extra attention to featured content or information.*/}
        {/*  </p>*/}
        {/*  /!*<hr className="my-2"/>*!/*/}
        {/*  <p>*/}
        {/*    It uses utility classes for typography and spacing to space*/}
        {/*    content out within the larger container.*/}
        {/*  </p>*/}
        {/*  <p className="lead">*/}
        {/*    <Button color="primary">Learn More</Button>*/}
        {/*  </p>*/}
        {/*</Jumbotron>*/}
        <div className="container" style={{ minHeight: "100vh" }}>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default LandingPage;
