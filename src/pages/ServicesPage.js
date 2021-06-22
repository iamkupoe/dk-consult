import React, { Component } from "react";
import "../css/ServicesPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import botswana4 from "../assets/images/botswana4.jpg";
import passport from "../assets/images/passport.jpg";
import ticketing from "../assets/images/air-ticketing.jpg";
import birth from "../assets/images/birth.png";
import visa from "../assets/images/visa.jpg";
import planning from "../assets/images/planning.jpg";
import registration from "../assets/images/registration.png";
import bank from "../assets/images/bank.jpg";

export default class ServicesPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row className="first">
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={botswana4} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Hotel Reservation
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    color: "#214555",
                    textAlign: "center",
                  }}
                >
                  We facilitate in booking cheaper and comfortable hotels in all
                  our destination countries.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={passport} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Passport Acquisition
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    color: "#214555",
                    textAlign: "center",
                  }}
                >
                  We help you acquire a genuine Ghanaian passport
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ticketing} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Ticketing
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "#214555" }}>
                  We help you book cheaper flights to your destination
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="second">
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={visa} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Visa Acquisition
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "#214555" }}>
                  We enable you acquire visa with the right documentation
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={birth} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Birth Certificate Acquisition
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "#214555" }}>
                  Acquiring a Ghanaian Birth Certificate is easy with us
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={planning} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Tour Planning
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "#214555" }}>
                  We help you plan your trip for better satisfaction
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="third">
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={registration} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Business Registration
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "#214555" }}>
                  We help you with your business registration
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={bank} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "rgb(160,79,158)",
                    textAlign: "center",
                  }}
                >
                  Bank Statement Acquisition
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "#214555" }}>
                  We aid you in getting Bank statements for your travel
                  documents
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
