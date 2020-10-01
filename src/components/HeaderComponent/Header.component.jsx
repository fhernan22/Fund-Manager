import React, { useState } from "react";
import "./Header.styles.scss";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";

import { Navbar, Nav, Form } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <Container className="header-container" maxWidth={false}>
        <Navbar expand="lg" className="transparent nav-container">
          <Navbar.Brand href="#home">
            <DonutLargeIcon style={{ fontSize: 70, color: "white" }} />
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
            <Button
              variant="contained"
              color="primary"
              className="login"
              style={{ background: "none", "box-shadow": "none" }}
            >
              Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
