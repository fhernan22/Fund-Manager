import React from "react";
import "./Header.styles.scss";

import { Link } from "react-router-dom";

// import Container from "@material-ui/core/Container";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

import { Navbar, Container } from "react-bootstrap";

import LoginModal from "../LoginComponent/LoginModal.component";

const Header = () => {
  return (
    <header>
      <Container className="header-container">
        <Navbar expand="lg" className="transparent nav-container">
          <Navbar.Brand href="#home">
            <DonutLargeIcon
              className="logo"
              style={{ fontSize: 70, color: "white" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="mr-auto navbar-nav">
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  <span className="nav-link-inner--text">Products</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <span className="nav-link-inner--text">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <span className="nav-link-inner--text">Contact</span>
                </Link>
              </li>
            </ul>
            <LoginModal />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
