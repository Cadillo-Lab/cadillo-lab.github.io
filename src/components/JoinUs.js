import React from 'react';
import '../styles/JoinUs.css';
import joinImage from '../assets/join-lab.jpeg'; 
import outreach1 from '../assets/outreach1.png'; 
import outreach2 from '../assets/outreach2.png'; 
const JoinUs = () => {
    return (
        <section className="join-us">
            {/* Banner Section */}
            <div className="banner-container">
                <img src={joinImage} alt="Join Cadillo Lab" className="banner-image" />
                <div className="banner-overlay">
                    <h1>Join Cadillo Lab</h1>
                </div>
            </div>

            {/* Description Section */}
            <div className="description">
                <p>
                    The Cadillo lab is a young and vibrant group and we are always looking for talented
                    students, postdocs, and international visitors!
                </p>
            </div>

            {/* General Information Section */}
            <div className="general-info">
                <h2>General Information</h2>
                <p>
                    Browse our Research pages, so you can familiarize yourself with our interests and the
                    recent research projects conducted in our lab.
                </p>
                <div className="info-dropdowns">
                    <details>
                        <summary>Info for Graduate Student candidates</summary>
                        <p>Details about graduate programs and opportunities in our lab.</p>
                    </details>
                    <details>
                        <summary>Info for Postdoctoral candidates</summary>
                        <p>Details about postdoctoral programs and collaboration opportunities.</p>
                    </details>
                    <details>
                        <summary>Info for Undergraduate and High School candidates</summary>
                        <p>Details about internships and research opportunities for students.</p>
                    </details>
                    <details>
                        <summary>Info for International Visitor candidates</summary>
                        <p>Details about international collaboration and short-term visits.</p>
                    </details>
                </div>
            </div>

            {/* Outreach Section */}
            <div className="outreach-section">
                <img src={outreach1} alt="Outreach Program 1" className="outreach-image" />
                <img src={outreach2} alt="Outreach Program 2" className="outreach-image" />
            </div>
        </section>
    );
};

export default JoinUs;
