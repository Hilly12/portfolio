import React, {Component, Fragment} from "react";
import Footer from "../components/Footer";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import MyData from "../res/MyData";
import Placeholder from "../components/Placeholder";
import TypingEffect from "typing-effect-react"

const { bio } = MyData;

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.OnLoaded = this.OnLoaded.bind(this);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  OnLoaded() {
    this.setState({ loading: false })
  }

  render() {
    return (
      <Fragment>
        {this.state.loading && <Placeholder classes="landing-placeholder" margin="15% auto auto"/>}
        <div className="container" style={{
          visibility: `${this.state.loading ? 'hidden' : 'visible'}`,
          opacity: `${this.state.loading ? '0' : '1'}`,
          transition: 'visibility 0s, opacity 1s ease-out',
          minHeight: "100vh"
        }}>
          {/*<div className="heading" style={{ marginBottom: '0px' }}>*/}
          {/*  <h2>Aahil Mehta</h2>*/}
          {/*</div>*/}
          <div className="container" style={{ marginTop: '30px', paddingTop: '1em' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img className="brand-img noselect"
                   src="https://lh3.googleusercontent.com/pw/ACtC-3cMnfHSzb529a2rzKsb7JVY2ZrhFtTbn9OcH77cXQ1T5eA4a2Mr9dqc4dWHV_zj4tkdvsB2qNWZnhKSrTiiJPkPICI5K7unXA8qgrmkU34YZFPRdN3XZcKpH6zURmjMB0dNwiFD5ACFlobKwVHJyaKx=s400-no?authuser=0"
                   alt="" onLoad={this.OnLoaded}/>
            </div>
            <div style={{ margin: '12px 0 0 0' }}>
              <TypingEffect className="lead" typingSpeed={50} pauseBeforeDeleting={2000} pauseBeforeRestarting={50}
                            data={["Software Developer", "Game Developer", "Computing Student"]}/>
            </div>
            <p className="bio">{bio}</p>
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
              <a href="https://www.doc.ic.ac.uk/~am11218/CV.pdf" target="_blank" rel="noopener noreferrer">
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
          <br className="noselect"/>
          <hr className="my-2"/>
          <br className="noselect"/>
          <p style={{ fontWeight: '600' }}>
            This site is currently under development and some of the projects you see here aren't complete
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
