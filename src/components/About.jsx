import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./styles/about.scss";
import aboutImg from "../assets/about-us-banner.png";
const About = () => {
  return (
    <div className="about-us">
      <img src={aboutImg} alt="" className="about-us-banner" />
      <div className="about-details">
        <div className="about-left">
          <ul>
            <li>
              <h1>Follow Us</h1>
            </li>
            <li>
              <a href="www.instagram.com" target="_blank">
                Instagram
                <BsArrowUpRight size={12} />
              </a>
            </li>
            <li>
              <a href="www.linkedin.com" target="_blank">
                LinkedIn
                <BsArrowUpRight size={12} />
              </a>
            </li>
          </ul>
        </div>
        <div className="about-right">
          <div className="left">
            <p>
              Lorem, ipsum dolor. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nesciunt voluptas dicta culpa quam vero
              quibusdam incidunt totam corporis quos molestiae.
              <br />
              <br />
              Lorem, ipsum dolor. Lorem ipsum dolor, sit amet consectetur
              adipisdam incidunt totam corporis quos molestiae. Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="right">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              dolor! Autem distinctio reiciendis libero vero sapiente debitis
              quibusdam alias quos!
            </h3>
            <br />
            <hr />
            <div className="about-profile">
              <div>
                <p>Message By</p>
                <h2>Shubham Lahoti</h2>
              </div>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg"
                alt=""
                height={"35px"}
                width={"35px"}
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
