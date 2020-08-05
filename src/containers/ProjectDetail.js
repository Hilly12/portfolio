import React, {Component, Fragment} from "react";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import Placeholder from "../components/Placeholder";
import Image from "../components/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons/faCrown";

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
      .get(`http://127.0.0.1:8000/api/projects/${projectid}`)
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
    if (this.state.loading) {
      return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <LinearProgress style={{ maxWidth: '800px', marginTop: '30vh', width: '100%' }}/>
        </div>
      );
    }
    return (
      <div style={{ marginTop: '45px' }}>
        <h2 style={{ fontWeight: "600", color: "#555555" }}>
          {this.state.projectData.title}{" "}
        </h2>
        <br/>
        <div className="container-sm" style={{ textAlign: 'justify', alignItems: 'center', maxWidth: '800px' }}>
          <div className="project-image-holder">
              <Image src={this.state.projectData.imgSrc}// {cdn.baseURL + cdn.ImgURL + cdn.ImgDir + imgSrc}
                     classes="project-image"
                     placeholder={<Placeholder/>} />
          </div>
          <br/>
          {/*{this.state.projectData.content}*/}
          <div style={{fontSize: '16px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
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
