import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/research">Research</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>
            <Link to="/join-us">Join Us</Link>
          </li>
          <li>
            <Link to="/collaborations">Collaborations</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
