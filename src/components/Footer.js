import React from "react";
import "../css/Footer.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer
      variant="white"
      className="bg-dark m-10"
      /*style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // padding: "0px 25px",
        // background: "#343a40",
        height: "31px",
      }}*/
    >
      <Container>
        <Row>
          <div
            className="col-lg-4 col-md-3"
            style={{
              fontSize: "12px",
              color: "#cccccc",
              textAlign: "center",
            }}
          >
            Copyright &copy; 2021
            <span
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                marginLeft: "4px",
                color: "rgb(160,79,158)",
              }}
            >
              D.K. Travel Consult
            </span>
          </div>

          <div className="col-lg-4 col-md-3">
            <div className="socialMediaContainer">
              <div className="socialMedia">
                <a
                  href="https://www.facebook.com/D.K.Travel Consult/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare size="1.5em" />
                </a>
              </div>

              <div className="socialMedia">
                <a
                  href="https://www.facebook.com/D.K.Travel Consult/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare size="1.5em" />
                </a>
              </div>

              <div className="socialMedia">
                <a
                  href="https://wa.link/nmeikk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsappSquare size="1.5em" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-3"
            style={{
              color: "whitesmoke",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Powered by
            <span
              style={{
                color: "#00C1DF",
                marginLeft: "3px",
                fontSize: "12px",
              }}
            >
              FLOSA Technologies
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
