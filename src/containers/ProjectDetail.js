import React, {Component, Fragment} from "react";
import { Card } from "antd";
import axios from "axios";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: {},
    };
  }

  componentDidMount() {
    const projectid = this.props.match.params.projectid;
    axios.get(`https://www.aahilm.com/api/${projectid}`).then((response) => {
      this.setState({
        projectData: response.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <h2 style={{fontWeight:"600", color: "#555555"}}>{this.state.projectData.title} </h2>
        <br/>
        <p className="details-row descPart loud">{this.state.projectData.content}</p>
      </Fragment>
      // <Card title={this.state.projectData.title}>
      //   <p>{this.state.projectData.content}</p>
      // </Card>
    );
  }
}

export default ProjectDetail;
