import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import asuLogo from '../assets/asulogo.png'; 
import banner from '../assets/banner1.jpeg';

const Navbar = () => {
    return (
        <header className="navbar">
            {/* Left: ASU Logo */}
            <div className="navbar-left">
                <img src={asuLogo} alt="ASU Logo" className="logo" />
            </div>

            {/* Center: Banner */}
            <div className="navbar-banner">
                <img src={banner} alt="Banner Logo" className="banner" />
            </div>

            {/* Right: Navigation Links */}
            <nav className="navbar-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/research">Research</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/publications">Publications</Link></li>
                                        <li><Link to="/collaborations">Collaborations</Link></li>
                    <li><Link to="/join-us">Join Us</Link></li>

                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
