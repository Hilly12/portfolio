import React, {Component, Fragment} from "react";
import Project from "../components/Project";
import "../assets/Project.css";
import {List} from "antd";
import axios from "axios";

const ttl = 600000; // ms - 10 min

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      loading: true,
      featuredProjects: [{}, {}],
      remProjects: [{}, {}, {}, {}, {}],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);

    let projectsPayload = JSON.parse(localStorage.getItem('projects'));
    if (projectsPayload && projectsPayload.expiry > Date.now()) {
      let projects = projectsPayload.data;
      this.setState({
        loading: false,
        featuredProjects: projects.filter(p => p.featured).sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
        remProjects: projects.filter(p => !p.featured).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      });
    } else {
      setTimeout(this.fetch, 300);
    }
  }

  fetch() {
    // http://127.0.0.1:8000/api/projects/
    // https://www.aahilm.com/api/projects/

    axios.get("https://www.aahilm.com/api/projects/").then((response) => {
      let payload = {
        data: response.data,
        expiry: Date.now() + ttl
      }
      localStorage.setItem('projects', JSON.stringify(payload));
      this.setState({
        loading: false,
        featuredProjects: response.data.filter(p => p.featured).sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
        remProjects: response.data.filter(p => !p.featured).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
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
          dataSource={this.state.featuredProjects}
          renderItem={(item) => (
            <Project item={item} loading={this.state.loading}/>
          )}
        />
        <div className="heading" style={{marginBottom: '10px'}}>
          <h2>Projects</h2>
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
          dataSource={this.state.remProjects}
          renderItem={(item) => (
            <Project item={item} loading={this.state.loading}/>
          )}
        />
      </Fragment>
    );
  }
}

export default ProjectList;
