import React from "react";
import "../../src/css/Footer.scss";

function Footer() {
  return (
    <div
      className="container-fluid"
      variant="light"
      style={{ background: "#323638", height: 30, textAlign: "center" }}
    >
      <footer
        variant="white"
        bg="dark"
        style={{ color: "#fff", marginLeft: 0 }}
      >
        Copyright &copy; FLOSA Technologies
      </footer>
    </div>
  );
}

export default Footer;
