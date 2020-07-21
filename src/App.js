import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./assets/bootstrap.min.css";
import "./assets/Montserrat.css";
import Header from "./components/Header";
import Main from "./containers/Main";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007bff"
    },
    secondary: {
      main: "#aa288c"
    },
    success: {
      main: "#4caf50"
    }
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 12
  }
});


function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <ThemeProvider theme={theme}>
        <Main/>
      </ThemeProvider>
    </div>
  );
}

export default App;
