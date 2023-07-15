import React from "react";
import "./styles/home.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ImageGallery from "./ImageGallery";

const Home = () => {
  const portfolioItems = [
    "https://alexisring.com/wp-content/uploads/2023/03/1-web-or-mls-Editorial-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/8-web-or-mls-Photo-8-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/1-web-or-mls-Editorial-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/8-web-or-mls-Photo-8-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/1-web-or-mls-Editorial-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/8-web-or-mls-Photo-8-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/1-web-or-mls-Editorial-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/1-web-or-mls-Editorial-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/8-web-or-mls-Photo-8-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/1-web-or-mls-Editorial-1.jpg",
    "https://alexisring.com/wp-content/uploads/2023/03/8-web-or-mls-Photo-8-1.jpg",
  ];
  return (
    <div className="home-page">
      <div className="hs1">
        <h1>Elevate your space with our stunning interior decor</h1>
      </div>
      <div className="home-about">
        <img
          src="https://alexisring.com/wp-content/uploads/2023/06/ALEXISRING26-scaled.jpg"
          alt="Founder"
        />
        <div className="home-about-details">
          <h1>About Us</h1>
          <p>
            We interpret your dreams as they relate to your living space. As
            opposed to imposing a design aesthetic to your life, the process
            begins with a conversation about how you want to live in your home.
            We lead the creative process, assemble a team of capable vendors,
            and manage the project from start to finish.
            <br />
            <br />
            Alexis grew up in a New Jersey suburb of Manhattan, in a house that
            was frequently getting refreshed, exposing her early on to the
            synergy between architects, contractors, and the essential role of a
            good designer. She was fascinated by blueprints &#40;yes, they were
            blue!&#41; and had an innate curiosity about design.
          </p>
          <NavLink to="/About">Read More</NavLink>
        </div>
      </div>
      <div className="home-portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio">
          <ImageGallery />
        </div>
      </div>
      <div className="home-section">
        <h1>testimonials</h1>
      </div>
    </div>
  );
};

export default Home;
