import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles/footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="copywrite">© 2023 HoMeDeCoR. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
