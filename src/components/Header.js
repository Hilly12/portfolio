import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { AppBar, Toolbar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCode,
  // faDragon,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <Fragment>
        <AppBar className="navbar clean-navbar navbar-expand-lg navbar-dark gradient">
          <div className="container">
            <Link
              className="navbar-brand"
              style={{
                color: "#fffffff",
                fontFamily: "Montserrat, sans-serif",
              }}
              to={"/"}
            >
              Aahil Mehta
            </Link>
            <Nav className="nav navbar-nav">
              <NavItem className="nav-item">
                <NavLink
                  to="/projects"
                  className="nav-link inline hide-span-mobile"
                  activeStyle={{ color: "white" }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "5px" }}
                    icon={faCode}
                  />
                  <span>Projects</span>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink
                  to="/resume"
                  className="nav-link inline hide-span-mobile"
                  activeStyle={{ color: "white" }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "5px" }}
                    icon={faAddressCard}
                  />
                  <span>Resume</span>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink
                  to="/arcade"
                  className="nav-link hide-span-mobile"
                  activeStyle={{ color: "white" }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "5px" }}
                    icon={faGamepad}
                  />
                  <span>Arcade</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </AppBar>
        <Toolbar className="app-bar" />
      </Fragment>
    );
  }
}

export default Header;
