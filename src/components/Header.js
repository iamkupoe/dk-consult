import React, { Component } from "react";
import "../css/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/logo.png";

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
            <img
              alt="logo"
              src={logo}
              width="60"
              height="60"
              className="logo"
            />
            <p
              style={{
                fontFamily: "'Amita', cursive",
                paddingTop: "1rem",
                paddingLeft: "0.5rem",
              }}
            >
              D.K Travel Consult
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav link">
            <Nav className="ml-auto buttons my-nav">
              <Nav.Link style={{ color: "#fff" }} href="home">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href="about">
                About Us
              </Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href="services">
                Services
              </Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href="attractions">
                Attractions
              </Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href="contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
