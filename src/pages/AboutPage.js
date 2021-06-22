import React from "react";
import "../css/AboutPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutPage() {
  return (
    <div className="container-fluid">
      <Row style={{ marginBottom: 57 }}>
        <div className="col-lg-2 first"></div>
        <div className="col-lg-8 second">
          <h2
            style={{
              marginTop: 20,
              textDecoration: "underline",
              color: "rgb(160,79,158)",
              fontFamily: "'Amita', cursive",
            }}
          >
            What We Do
          </h2>
          <p
            style={{
              fontFamily: "'Amita', cursive",
              fontSize: "30px",
              color: "#214555",
            }}
          >
            D.K Travel Consult is a travel agency located in Ghana,
            <br /> West Africa with over five years of experience. Specializing
            in; TOUR PROGRAMS, Visa Assistance to the{" "}
            <stong>
              USA, CANADA, UNITED KINGDOM, SOUTH AFRICA, DUBAI, SPAIN, FRANCE{" "}
            </stong>
            and other SCHENGEN AREAS.
          </p>
          <p
            style={{
              fontFamily: "'Amita', cursive",
              fontSize: "30px",
              color: "#214555",
            }}
          >
            We also assist with Hotel and Flight reservations, Passport, Birth
            Certificate, Bank Statement and any other related travel documents.
          </p>
        </div>
        <div className="col-lg-2 third"></div>
      </Row>
    </div>
  );
}
