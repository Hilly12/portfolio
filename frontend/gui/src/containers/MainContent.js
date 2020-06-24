import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;

class MainContent extends Component {
  render() {
    return (
      <Content style={{ padding: "20px 50px 0px 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">List</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{this.props.children}</div>
      </Content>
    );
  }
}

export default MainContent;
