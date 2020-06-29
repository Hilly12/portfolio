import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./assets/bootstrap.min.css";
import "./assets/Montserrat.css";
import Header from "./components/Header";
import Main from "./containers/Main";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Main />

      {/* <Layout className="layout" style={{ textAlign: "center" }}>
         <MainContent>
           <BaseRouter />
        </MainContent> 
      </Layout> */}
    </div>
  );
}

export default App;
