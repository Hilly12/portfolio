import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./assets/bootstrap.min.css";
import "./assets/Montserrat.css";
import { Layout } from "antd";
import BaseRouter from "./routes";
import MainContent from "./containers/MainContent";
import { AppBar, Toolbar } from "@material-ui/core";
import Snake from "./components/Snake";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        {/* <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header> */}
        <AppBar className="navbar navbar-dark navbar-expand-lg gradient">
          <Toolbar className="container">
            <a className="navbar-brand" href="#">
              Aahil Mehta
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navbarNav"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav ml-auto">
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ fontWeight: "bold" }}
                >
                  <a className="nav-link active" href="index.html">
                    HOME
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    href="projects-grid-cards.html"
                    style={{ fontWeight: "bold" }}
                  >
                    PROJECTS
                  </a>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ fontWeight: "bold" }}
                >
                  <a className="nav-link" href="cv.html">
                    CV
                  </a>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ fontWeight: "bold" }}
                >
                  <a className="nav-link" href="hire-me.html">
                    HIRE ME
                  </a>
                </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <MainContent>
          <Snake />
          {/* <BaseRouter /> */}
        </MainContent>
      </Layout>
    </div>
  );
}

export default App;
