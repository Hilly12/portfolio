import React, { Component } from "react";
import Project from "../components/Project";
import { List } from "antd";
import axios from "axios";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((response) => {
      this.setState({
        projectData: response.data,
      });
    });
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={this.state.projectData}
        renderItem={(item) => <Project item={item} />}
      />
    );
  }
}

export default ProjectList;
