import React from "react";
import "../styles/JoinUs.css";
import joinImage from "../assets/joinus.png";
import outreach1 from "../assets/outreach1.png";
import outreach2 from "../assets/outreach2.png";
import outreach3 from "../assets/_EFO0866.jpg";
import outreach4 from "../assets/_EFO7190.jpg";
import outreach5 from "../assets/_EFO7202.jpg";

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="banner-container">
        <img src={joinImage} alt="Join Cadillo Lab" className="banner-image" />
      </div>

      <div className="content-wrapper">
        <div className="welcome-section">
          <p>
            The Cadillo lab is a young and vibrant group and we are always
            looking for talented students, postdocs, and international visitors!
          </p>
          <p>
            Browse our Research pages, so you can familiarize yourself with our
            interests and the recent research projects conducted in our lab.
          </p>
        </div>

        <div className="opportunities-section">
          <div className="opportunity-item">
            <h2>Graduate Student Opportunities</h2>
            <div className="opportunity-content">
              <p>
                Details about graduate programs and opportunities in our lab.
              </p>
            </div>
          </div>

          <div className="opportunity-item">
            <h2>Postdoctoral Positions</h2>
            <div className="opportunity-content">
              <p>
                Details about postdoctoral programs and collaboration
                opportunities.
              </p>
            </div>
          </div>

          <div className="opportunity-item">
            <h2>Undergraduate and High School Programs</h2>
            <div className="opportunity-content">
              <p>
                Details about internships and research opportunities for
                students.
              </p>
            </div>
          </div>

          <div className="opportunity-item">
            <h2>International Visitor Programs</h2>
            <div className="opportunity-content">
              <p>
                Details about international collaboration and short-term visits.
              </p>
            </div>
          </div>
        </div>

        <div className="outreach-section">
          <img
            src={outreach1}
            alt="Outreach Program 1"
            className="outreach-image"
          />
          <img
            src={outreach2}
            alt="Outreach Program 2"
            className="outreach-image"
          />
          <img
            src={outreach3}
            alt="Outreach Program 2"
            className="outreach-image"
          />
          <img
            src={outreach4}
            alt="Outreach Program 2"
            className="outreach-image"
          />
          <img
            src={outreach5}
            alt="Outreach Program 2"
            className="outreach-image"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
