import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ServicesPage from "../src/pages/ServicesPage";
import AttractionsPage from "../src/pages/AttractionsPage";
import ContactPage from "../src/pages/ContactPage";

function Navigation() {
  return (
    <div
      style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}
      className="container-fluid"
    >
      <Router>
        <Header />
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/services" component={ServicesPage} exact />
        <Route path="/attractions" component={AttractionsPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Footer />
      </Router>
    </div>
  );
}

export default Navigation;
