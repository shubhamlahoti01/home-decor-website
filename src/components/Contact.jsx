import React from "react";
import "./styles/contact.scss";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { GrMapLocation } from "react-icons/gr";
import { PiPhoneCall } from "react-icons/pi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-us">
      <div className="contact-container">
        <div className="contact-left">
          <div className="clhead">
            <h1>Contact Us</h1>
          </div>
          <div className="cldetails">
            <div className="cldetails-cards">
              <div className="cldetails-card">
                <HiOutlineChatBubbleLeftRight />
                <div className="cldetails-card-r">
                  <h3>Chat to us</h3>
                  <p>Out friendly team is here to help</p>
                  <h4>hi@homedecor.com</h4>
                </div>
              </div>
              <div className="cldetails-card">
                <GrMapLocation />
                <div className="cldetails-card-r">
                  <h3>Visit us</h3>
                  <p>Come say hello at our office HQ</p>
                  <h4>
                    100 Smith Street <br />
                    Collingwood VIC 3066 AU
                  </h4>
                </div>
              </div>
              <div className="cldetails-card">
                <PiPhoneCall />
                <div className="cldetails-card-r">
                  <h3>Call Us</h3>
                  <p>Mon-Fri from 9am to 5pm</p>
                  <h4>+91 1234567890</h4>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <a href="#">
                  <FaSquareFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSquareTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSquareYoutube />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSquareInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="subject" />
            <textarea
              id="textarea"
              name="message"
              rows="4"
              cols="50"
              placeholder="Type Your Message here"
              style={{ padding: "10px", marginTop: "1rem" }}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
