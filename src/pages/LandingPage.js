import React, {Component, Fragment} from "react";
import Footer from "../components/Footer";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import Image from "../components/Image";
import Placeholder from "../components/Placeholder";
import Avatar from "@material-ui/core/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import MyData from "../res/MyData";

const { bio } = MyData;

class LandingPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "20px" }}/>
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="heading" style={{marginBottom: '0px'}}>
            <h2>Aahil Mehta</h2>
          </div>
          <p className="lead">
            I am a Software Engineer
          </p>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image classes="brand-img" src={require("../assets/images/me.png")}
                     placeholder={<Placeholder classes="brand-img" margin="45% auto auto"/>}
              />
            </div>
            <p style={{
              width: "90%",
              margin: "auto",
              marginBottom: "-20px",
              textAlign: 'justify',
              paddingTop: "1em",
            }}>{bio}</p>
            <br className="noselect"/>
            <br className="noselect"/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://uk.linkedin.com/in/aahil-mehta" target="_blank" rel="noopener noreferrer">
                <Avatar className="fa linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn}/>
                </Avatar>
              </a>
              <a href="https://www.facebook.com/people/Aahil-Mehta/100005988258237" target="_blank"
                 rel="noopener noreferrer">
                <Avatar className="fa facebook">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </Avatar>
              </a>
              <a href="./staticassets/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Avatar className="fa file">
                  <FontAwesomeIcon icon={faFileAlt}/>
                </Avatar>
              </a>
              <a href="https://github.com/Hilly12" target="_blank" rel="noopener noreferrer">
                <Avatar className="fa github">
                  <FontAwesomeIcon size="lg" icon={faGithub}/>
                </Avatar>
              </a>
            </div>
          </div>
          <br/>
          <hr className="my-2"/>
          <br/>
          <p style={{ fontWeight: '600' }}>
            This site is currently under maintainence and some of the projects you see here are still under development
          </p>
          <p className="lead">
            <Link to="sandbox/snake">
              <Button style={{ minWidth: '100px' }} color="primary" size="sm">Press Me</Button>
            </Link>
          </p>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default LandingPage;
