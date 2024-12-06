import React from 'react';
import '../styles/Footer.css'; // Ensure the CSS file is imported
import facebookIcon from '../assets/facebook.jpeg';
import instagramIcon from '../assets/instagram.jpeg';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="address-container">
                <div className="address">
                    <h4>Address for couriers and deliveries:</h4>
                    <p>Arizona State University</p>
                    <p>Life Sciences E-723</p>
                    <p>427 W Tyler Mall</p>
                    <p>Tempe, AZ 85287</p>
                </div>

                <div className="contact-us">
                    <h4>Contact Us</h4>
                    <p>Email: cadillolab@asu.edu</p>
                </div>

                <div className="address">
                    <h4>Address for regular USPS mail:</h4>
                    <p>Arizona State University</p>
                    <p>Life Sciences E-723</p>
                    <p>PO Box 874501</p>
                    <p>Tempe, AZ 85287</p>
                </div>
            </div>

            <div className="social-media">
                <h4>Cadillo Lab - Social Media:</h4>
                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" className="social-icon facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" className="social-icon instagram" />
                    </a> 
                </div>
            </div>

        </footer>
    );
};

export default Footer;
