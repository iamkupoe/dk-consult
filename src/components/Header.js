import React, { Component } from "react";
import "../css/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import dk from "../assets/images/dk.png";

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          fontSize: 12,
          textTransform: "uppercase",
          textAlign: "justify",
        }}
        className="container-fluid"
      >
        <Navbar className="navbar" bg="blue" expand="lg">
          <Navbar.Brand
            style={{
              color: "#CAF7FF",
              paddingLeft: 5,
              fontSize: 15,
              display: "flex",
              flexDirection: "row",
            }}
            href="#home"
          >
            <img alt="logo" src={dk} width="60" height="60" className="logo" />
            <p
              style={{
                fontFamily: "'Amita', cursive",
                paddingTop: "1rem",
                paddingLeft: "0.5rem",
                color: "rgb(160,79,158)",
                fontWeight: "600",
                fontSize: "0.8rem",
              }}
            >
              D.K. Travel Consult
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav link">
            <Nav activeKey="/home" className="ml-auto buttons navvy">
              <LinkContainer to="/" exact={true}>
                <Nav.Link className="mr-sm-5 navvy">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="mr-sm-5 ">About Us</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/services">
                <Nav.Link className="mr-sm-5">Services</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/attractions">
                <Nav.Link>Attractions</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link className="mr-sm-5">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
