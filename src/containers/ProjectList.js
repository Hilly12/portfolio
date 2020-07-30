import React, {Component, Fragment} from "react";
import Project from "../components/Project";
import "../assets/Project.css";
import {List} from "antd";
import axios from "axios";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      projectData: [{}, {}, {}, {}, {}, {}, {}, {}],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    // http://127.0.0.1:8000/api/projects/
    // https://www.aahilm.com/api/projects/

    axios.get("https://www.aahilm.com/api/projects/").then((response) => {
      this.setState({
        loading: false,
        projectData: response.data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="heading" style={{marginBottom: '10px'}}>
          <h2>Featured</h2>
        </div>
        <List
          itemLayout="vertical"
          // pagination={{
          //   onChange: (page) => {
          //     console.log(page);
          //   },
          //   pageSize: 8,
          //   responsive: "true",
          // }}
          dataSource={this.state.projectData}
          renderItem={(item) => (
            <Project item={item} loading={this.state.loading}/>
          )}
        />
      </Fragment>

    );
  }
}

export default ProjectList;
