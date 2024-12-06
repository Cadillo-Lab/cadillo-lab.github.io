import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Correct path to Navbar.css
import asuLogo from '../assets/asulogo.png'; // Correct path to the logo file


const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src={asuLogo} alt="ASU Logo" className="logo" />
                <span className="lab-name">Cadillo Lab</span>
            </div>
            <nav className="navbar-links">
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/research">Research</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/publications">Publications</Link></li>
                    <li><Link to="/join-us">Join Us</Link></li>
                    <li><Link to="/collaborations">Collaborations</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
