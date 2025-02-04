import React, { useState } from "react";
import { Link } from "react-router-dom";
import asuLogo from "../assets/new-lab-logo.png";
import banner from "../assets/BannerCadilloAlone.png";

const Navbar = () => {
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

      {/* Center: Navigation Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <span className="separator">·</span>
        <Link to="/research" className="nav-link">
          Research
        </Link>
        <span className="separator">·</span>
        <Link to="/team" className="nav-link">
          Team
        </Link>
        <span className="separator">·</span>
        <Link to="/publications" className="nav-link">
          Publications
        </Link>
        <span className="separator">·</span>
        <Link to="/collaborations" className="nav-link">
          Collaborations
        </Link>
        <span className="separator">·</span>
        <Link to="/join-us" className="nav-link">
          Join US
        </Link>
      </div>

      {/* Right: Banner Image */}
      <div className="nav-banner-section">
        <img src={banner} alt="Lab Banner" className="lab-banner" />
      </div>
    </nav>
  );
};

export default Navbar;
