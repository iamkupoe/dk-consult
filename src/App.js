import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hamburger from "hamburger-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CarouselPage from "./pages/CarouselPage";
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
        <Route path="/" component={CarouselPage} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} />
        <Route path="/services" component={ServicesPage} exact={true} />
        <Route path="/attractions" component={AttractionsPage} exact={true} />
        <Route path="/contact" component={ContactPage} exact={true} />
        <Footer />
      </Router>
    </div>
  );
}

export default Navigation;
