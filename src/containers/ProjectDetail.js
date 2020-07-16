import React, { Component } from "react";
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
      <Card title={this.state.projectData.title}>
        <p>{this.state.projectData.content}</p>
      </Card>
    );
  }
}

export default ProjectDetail;
