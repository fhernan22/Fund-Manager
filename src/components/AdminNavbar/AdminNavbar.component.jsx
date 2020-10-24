/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext, useState, useEffect } from "react";

import { AuthContext } from "../../contexts/authContext";

import { auth } from "../../firebase/firebase.utils";
import {
  globalThemeContext,
  globalThemeDispatchContext,
} from "../../contexts/globalThemeContext";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import "./AdminNavbar.styles.scss";

const AdminNavbar = ({ title }) => {
  const { currentUser } = useContext(AuthContext);
  const { sidebarMini } = useContext(globalThemeContext);
  const dispatch = useContext(globalThemeDispatchContext);
  const [collapseOpen, setCollapse] = useState(false);
  const [navColor, setNavColor] = useState("navbar-transparent");

  const toggleSidebarMini = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR_MINI",
      sidebarMini: !sidebarMini,
    });
  };

  const toggleNavBgColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setNavColor("bg-white");
    } else {
      setNavColor("navbar-transparent");
    }
  };

  const toggleCollapse = () => {
    setCollapse(!collapseOpen);

    if (collapseOpen) {
      setNavColor("navbar-transparent");
    } else {
      setNavColor("bg-white");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", toggleNavBgColor);
  }, [toggleCollapse]);

  return (
    <>
      <Navbar
        className={`navbar-absolute ${navColor} ${
          sidebarMini ? "contracted-nav" : "expanded-nav"
        }`}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize d-inline">
              <Button
                className="minimize-sidebar btn-just-icon"
                color="link"
                id="tooltip209599"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SIDEBAR_MINI",
                    sidebarMini: !sidebarMini,
                  });
                }}
              >
                {sidebarMini ? (
                  <i className="tim-icons icon-bullet-list-67" />
                ) : (
                  <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                )}
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip209599"
                placement="right"
              >
                Sidebar toggle
              </UncontrolledTooltip>
            </div>
            <div
              className={`navbar-toggle d-inline ${
                sidebarMini ? "toggled" : ""
              }`}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebarMini}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="#" onClick={(e) => e.preventDefault()}>
              {title}
            </NavbarBrand>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Mike John responded to your email
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      You have 5 more tasks
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Your friend Michael is in town
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another notification
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another one
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="photo">
                    <img alt="..." src={currentUser.photoURL} />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <DropdownItem
                      className="nav-item"
                      onClick={() => {
                        auth.signOut();
                      }}
                    >
                      Log out
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
