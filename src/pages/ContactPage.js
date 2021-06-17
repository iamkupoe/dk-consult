import React from "react";
import "../css/ContactPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaPhoneAlt,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneVolume,
} from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";

export default function Contact() {
  return (
    <div className="container mainContainer">
      <div className="row">
        <h2 className="contact-h2">Contact Us</h2>
      </div>
      <div className="row">
        <p className="p">For questions or enquires, just write us a message!</p>
      </div>

      <div className="row" id="contact-container">
        <div className=" col-lg-4 contact-info">
          <h4 className="contact-h4">Contact Information</h4>
          <p className="contact-p">
            Fill out the form and we will get in touch with you
          </p>
          <div className="icon-text">
            <FcPhoneAndroid className="Fa" />
            <span>+233 248 686 698</span>
          </div>

          <div className="icon-text">
            <FaPhoneAlt className="Fa" />
            <span>+233 302 961 444</span>
          </div>

          <div className="icon-text">
            <FaEnvelope className="Fa" />
            <span>travel.dkconsult@gmail.com</span>
          </div>

          <div className="icon-text">
            <FaMapMarkerAlt className="Fa" />
            <span>Gallaway-Koforidua, Ghana</span>
          </div>

          <div className="social-media">
            <a
              href="#"
              target="_blank"
              className="icon-circle"
              rel="noreferrer"
            >
              <FaFacebookSquare className="fa" />
            </a>
            <a
              href="#"
              target="_blank"
              className="icon-circle"
              rel="noreferrer"
            >
              <FaInstagramSquare className="fa" />
            </a>
          </div>
        </div>

        <form className="contactForm col-lg-8">
          <div className="row col">
            <div className="col-lg-6 form-group solo">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="col-lg-6 form-group solo">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="row col">
            <div className="col-lg-6 form-group solo">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="col-lg-6 form-group solo">
              <label>Phone Number</label>
              <input type="tel" />
            </div>
          </div>
          <div className="row col">
            {/* <div className="form-group solo">
              <label>What do you want to buy?</label>
              <div id="radio-buttons">
                <div className="radio-button">
                  <input
                    type="radio"
                    id="radiohookah"
                    name="type"
                    value="hookah"
                  />{" "}
                  <label htmlFor="radiohookah">Hookah</label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="radiodrinks"
                    name="type"
                    value="drinks"
                  />{" "}
                  <label htmlFor="radiodrinks">Drinks</label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="radiomerchandise"
                    name="type"
                    value="merchandise"
                  />{" "}
                  <label htmlFor="radiomerchandise">Merchandise</label>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row col">
            <div className="form-group solo">
              <label>Message</label>
              <textarea type="text" id="message" rows="3" cols="20"></textarea>
            </div>
          </div>

          <div className="row col">
            <div className="form-group solo">
              <button className="btn-primary">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
