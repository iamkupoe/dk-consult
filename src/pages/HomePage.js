import React from "react";
import "../css/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import dubai2 from "../assets/images/dubai2.jpg";
import southa4 from "../assets/images/southa4.jpg";
import usa from "../assets/images/usa.jpg";
import botswana4 from "../assets/images/botswana4.jpg";
import mandela from "../assets/images/mandela.jpg";
import iconic from "../assets/images/ukiconic.jpg";
import santorini from "../assets/images/santorini.jpg";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={dubai2}
            alt="First slide"
          />
          {/* <Carousel.Caption className="carousel-caption text-left ">
            <h3>Highest Quality Hookah On The Market</h3>
            <p>3WishesHookah</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={santorini}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-caption text-left "></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={iconic}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-caption text-left "></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={mandela}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-caption text-left "></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={usa}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={botswana4}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
