import React, { useState } from "react";
import { Link } from "react-router-dom";
import asuLogo from "../assets/new-lab-logo.png";
import banner from "../assets/BannerCadilloAlone.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      {/* Left: ASU Logo */}
      <div className="nav-logo-section">
        <Link to="/">
          <img
            src={asuLogo}
            alt="Arizona State University"
            className="asu-logo"
          />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Center: Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/research"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Research
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/publications"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Publications
          </Link>
        </li>
        <li>
          <Link
            to="/collaborations"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Collaborations
          </Link>
        </li>
        <li>
          <Link
            to="/join-us"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Join US
          </Link>
        </li>
      </ul>

      {/* Right: Banner Image */}
      <div className="nav-banner-section">
        <img src={banner} alt="Lab Banner" className="lab-banner" />
      </div>
    </nav>
  );
};

export default Navbar;
