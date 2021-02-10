import React, {Component, Fragment} from "react";
import {NavLink, Link} from "react-router-dom";
import {Nav, NavItem} from "reactstrap";
import {AppBar, Toolbar} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCode,
  faDragon,
  faSitemap
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = {
      isOpen: false,
      width: 0,
      height: 0
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

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    return (
      <Fragment>
        <AppBar className="navbar clean-navbar navbar-expand-lg navbar-dark gradient">
          <div className="container">
            <Link
              className="navbar-brand noselect"
              style={{
                color: "#fffffff",
                fontFamily: "Montserrat, sans-serif",
              }}
              to={"/"}
            >

              <FontAwesomeIcon icon={faSitemap}/>
              {/*<span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{'</>'}</span>*/}
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
                  <span className="noselect">Projects</span>
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
                  <span className="noselect">Resume</span>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink
                  to="/sandbox"
                  className="nav-link hide-span-mobile"
                  activeStyle={{ color: "white" }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "5px" }}
                    icon={faDragon}
                  />
                  <span className="noselect">Sandbox</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </AppBar>
        <Toolbar/>
      </Fragment>
    );
  }
}

export default Header;
