import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import asuLogo from "../assets/new-lab-logo.png";
import banner from "../assets/BannerCadilloAlone.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [location]);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".nav-container")) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    const handleEscape = (event) => {
      if (menuOpen && event.key === "Escape") {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Right: Banner Image */}
      <div className="nav-banner-section">
        <img src={banner} alt="Lab Banner" className="lab-banner" />
      </div>

      {/* Center: Navigation Links */}
      <ul
        className={`nav-links ${menuOpen ? "active" : ""}`}
        aria-hidden={!menuOpen}
      >
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/research"
            className={`nav-link ${
              location.pathname === "/research" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Research
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className={`nav-link ${
              location.pathname === "/team" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/publications"
            className={`nav-link ${
              location.pathname === "/publications" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Publications
          </Link>
        </li>
        <li>
          <Link
            to="/collaborations"
            className={`nav-link ${
              location.pathname === "/collaborations" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Collaborations
          </Link>
        </li>
        <li>
          <Link
            to="/join-us"
            className={`nav-link ${
              location.pathname === "/join-us" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Join Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
