import React, {Component, Fragment} from "react";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";

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

    const projectid = this.props.match.params.projectid;
    axios
      .get(`https://www.aahilm.com/api/projects/${projectid}`)
      .then((response) => {
        this.setState({
          loading: false,
          projectData: response.data,
        });
      }).catch(e => {
      this.setState({
        loading: true
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <LinearProgress style={{ marginTop: '20%' }}/>
    }
    return (
      <Fragment>
        <h2 style={{ fontWeight: "600", color: "#555555" }}>
          {this.state.projectData.title}{" "}
        </h2>
        <br/>
        <div style={{ textAlign: "justify" }}>
          {this.state.projectData.content}
        </div>
      </Fragment>
      // <ProgressiveImage title={this.state.projectData.title}>
      //   <p>{this.state.projectData.content}</p>
      // </ProgressiveImage>
    );
  }
}

export default ProjectDetail;
