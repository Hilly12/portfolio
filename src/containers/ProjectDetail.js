import React, {Component, Fragment} from "react";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import Placeholder from "../components/Placeholder";
import Image from "../components/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons/faCrown";
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay";
import {Link} from "react-router-dom";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import {Button} from "reactstrap";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      projectData: {},
    };
  }

  componentDidMount() {
    window.scroll(0, 0);

    // http://127.0.0.1:8000/api/projects/
    // https://www.aahilm.com/api/projects/

    const { projectid } = this.props.match.params;
    axios
      .get(`https://www.aahilm.com/api/projects/${projectid}`)
      .then((response) => {
        this.setState({
          loading: false,
          projectData: response.data,
        });
        if (!this.state.projectData.article) {
          this.setState({ projectData: {} });
        }
      }).catch(e => {
      this.setState({
        loading: true
      });
    });
  }

  render() {
    const {
      id, title, imgSrc, pretext, timespan, date, teamSize, links, technologies, keywords, demoSrc, award, article
    } = this.state.projectData;

    const tech = String(technologies).split(', ');
    const keys = String(keywords).split(', ');
    const loading = this.props.loading;
    let linksP = undefined;
    if (links) {
      const obj = JSON.parse(String(links));
      if (obj.git) {
        linksP = JSON.parse(String(links))
      }
    }

    if (this.state.loading) {
      return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LinearProgress style={{ maxWidth: '800px', marginTop: '30vh', width: '100%' }}/>
        </div>
      );
    }
    return (
      <div style={{ marginTop: '45px' }}>
        <h2 style={{ fontWeight: "600", color: "#555555" }}>
          {title}
        </h2>
        <br/>
        <div className="container-sm" style={{ textAlign: 'justify', alignItems: 'center', maxWidth: '850px' }}>
          <div className="project-image-holder">
            <Image src={imgSrc}// {cdn.baseURL + cdn.ImgURL + cdn.ImgDir + imgSrc}
                   classes="project-image"
                   placeholder={<Placeholder/>}/>
          </div>
          <br/>
          {/*{content}*/}
          <div style={{ fontSize: '16px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      // <ProgressiveImage title={this.state.projectData.title}>
      //   <p>{this.state.projectData.content}</p>
      // </ProgressiveImage>
    );
  }
}

export default ProjectDetail;
