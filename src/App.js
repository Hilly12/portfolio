import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./assets/bootstrap.min.css";
import "./assets/Montserrat.css";
import Header from "./components/Header";
import Main from "./containers/Main";

function App() {
  return (
    <div className="App">
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
