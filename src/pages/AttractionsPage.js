import React, { Component } from "react";
import "../css/AttractionsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import botswana from "../assets/images/botswana.jpg";
import france from "../assets/images/france3.jpg";
import dubai from "../assets/images/dubaiT.jpg";
import dakota from "../assets/images/dakota.jpg";
import uk from "../assets/images/ukiconic.jpg";
import mandela from "../assets/images/mandela.jpg";
import budget from "../assets/images/budget.jpg";
import cheap from "../assets/images/cheap.jpg";

export default class AttractionsPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row style={{paddingTop: 20}}>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={botswana} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Botswana WildLife</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={france} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Towers in France</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row  style={{paddingTop: 10}}>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={dakota} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Mount Rushmore(USA)</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={dubai} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Burj Al Arab</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row  style={{paddingTop: 10}}>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={uk} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>London Gherkin</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={mandela} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Mandela Square</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row  style={{paddingTop: 10, marginBottom: "6.2rem"}}>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={budget} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Feel the Luxury</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="bg-dark text-white">
              <Card.Img  src={cheap} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Buget Hotels in Dubai</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
