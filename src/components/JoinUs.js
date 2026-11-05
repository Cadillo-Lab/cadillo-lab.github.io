import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../styles/JoinUs.css";
import positionsData from "../content/positions.json";
import programsData from "../content/programs.json";
import joinUsData from "../content/joinus.json";

// ====================================================================
// RECRUITMENT CONFIGURATION SECTION
// ====================================================================
// TO ADD/EDIT POSITIONS: Modify the arrays in src/content/positions.json
// Each position object should have: { title: "Position Title", description: "Position Description" }
// Set to empty array [] if no positions available

// Graduate Student Positions
const GRADUATE_POSITIONS = positionsData.graduate;

// Postdoctoral Positions  
const POSTDOC_POSITIONS = positionsData.postdoc;

// Undergraduate Research Positions
const UNDERGRADUATE_POSITIONS = positionsData.undergraduate;

// ====================================================================
// CAROUSEL CONFIGURATION SECTION
// ====================================================================
// TO ADD/EDIT CAROUSEL IMAGES: Modify the "carousel" array in src/content/joinus.json
const CAROUSEL_IMAGES = joinUsData.carousel;

// Carousel auto-advance timing (in milliseconds)
const CAROUSEL_INTERVAL = 5000; // 5 seconds

// ====================================================================
// PROGRAM LINKS CONFIGURATION
// ====================================================================
// TO ADD/EDIT PROGRAM LINKS: Modify the "programs" array in src/content/programs.json
const GRADUATE_PROGRAMS = programsData.programs;

// ====================================================================
// MAIN COMPONENT
// ====================================================================
const JoinUs = () => {
  // Carousel state management
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Navigate to previous carousel slide
   */
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  /**
   * Navigate to next carousel slide
   */
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
  };

  /**
   * Auto-advance carousel effect
   */
  // Automatically go to next slide every 7 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3500); // 1000ms = 1 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex, goToNext]);

  /**
   * Render positions list or "No positions available" message
   * @param {Array} positions - Array of position objects
   * @returns {JSX.Element} - Rendered positions or no positions message
   */
  const renderPositions = (positions) => {
    if (positions.length === 0) {
      return <p className="common-text" style={{ marginTop: "10px" }}>No positions available</p>;
    }
    
    return (
      <div style={{ marginTop: "10px" }}>
        {positions.map((position, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h3 style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "1.4rem" }}>{position.title}</h3>
            <p style={{ fontSize: "0.95rem", fontWeight: "normal", lineHeight: "1.6", marginTop: "8px" }}>{position.description}</p>
          </div>
        ))}
      </div>
    );
  };

  /**
   * Render graduate program links
   * @returns {JSX.Element} - Formatted program links
   */
  const renderProgramLinks = () => {
    return (
      <p className="common-text">
        {GRADUATE_PROGRAMS.map((program, index) => (
          <span key={index}>
            <a
              href={program.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {program.name}
            </a>
            {index < GRADUATE_PROGRAMS.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    );
  };

  return (
    <section className="join-us">
      {/* Banner Section */}
      <div className="banner-container">
        <img
          src={process.env.PUBLIC_URL + joinUsData.banner.src}
          alt="Join Cadillo Lab"
          className="banner-image"
        />
      </div>

      <div className="content-wrapper">
        {/* Welcome Section */}
        <div className="welcome-section">
          <p className="common-text">
            The Cadillo lab is a young and vibrant group and we are always
            looking for talented students, postdocs, and international
            visitors!
          </p>
          <p className="common-text">
            Browse our Research pages, so you can familiarize yourself with
            our interests and the recent research projects conducted in our
            lab.
          </p>
        </div>

        {/* Graduate Student Opportunities Section */}
        <div className="opportunity-item-1">
          <h2>Graduate Student Opportunities</h2>
          <div className="opportunity-content">
            <p className="common-text">
              Graduate students in our lab benefit from a mixed source of
              funding that includes fellowships, teaching, and research
              assistantships.
            </p>
            <p className="common-text">
              Students are accepted into our lab through programs from the
              Graduate College and the School of Life Sciences. See the linked
              information for SOLS, Graduate College, and Biological Design
              Program.
            </p>
            <h4>
              Professor Cadillo is a faculty member in the following programs:
            </h4>
            {renderProgramLinks()}
            <p className="common-text">
              Get in touch with Prof. Cadillo as early as possible and start a
              conversation about plans and options!
            </p>
            <div style={{ marginTop: "10px", textAlign: "left" }}>
              <details
                style={{
                  color: "#28a745", /*open position color */
                  padding: "10px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                <summary style={{ cursor: "pointer" }}>Open Position</summary>
                {renderPositions(GRADUATE_POSITIONS)}
              </details>
            </div>
          </div>

          {/* Postdoctoral Positions Section */}
          <div className="opportunity-item-2">
            <h2>Postdoctoral Positions</h2>
            <div className="opportunity-content">
              <p className="common-text">
                We are looking for highly motivated graduates with experience
                in ecosystems ecology, anaerobic microbiology,
                genomics/metagenomics, geomicrobiology/stable isotopes, or
                soil ecology to join current efforts or to propose new
                projects. Get in touch asap with Prof. Cadillo to discuss
                current or upcoming possibilities.
              </p>
            </div>
            <div style={{ marginTop: "10px", textAlign: "left" }}>
              <details
                style={{
                  color: "black",
                  padding: "10px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                <summary style={{ cursor: "pointer" }}>Position</summary>
                {renderPositions(POSTDOC_POSITIONS)}
              </details>
            </div>
          </div>

          {/* Undergraduate Research Opportunities Section */}
          <div className="opportunity-item-3">
            <h2>Undergraduate Research Opportunities</h2>
            <div className="opportunity-content">
              <p className="common-text">
                Send us an email introducing yourself, include your year and
                major, and why you are interested in working in our lab.
                Include a resume that highlights relevant coursework or
                research experience. The subject line should read
                "Undergraduate Research Opportunity Inquiry." Emails can be
                sent to either Professor Hinsby or a graduate student you are
                interested in working with.
              </p>
              <p className="common-text">
                Understand that undergraduate students have responsibilities
                in the lab and are required to balance these with their
                academic workload.
              </p>
              <p className="common-text">
                Ensure that you are up to date on safety trainings (Hazardous
                waste management, fire safety, and biosafety and bloodborne
                pathogens). These will need to be completed before working in
                the lab.
              </p>

              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <details
                  style={{
                    color: "black",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  <summary style={{ outline: "none" }}>Position</summary>
                  {renderPositions(UNDERGRADUATE_POSITIONS)}
                </details>
              </div>

              <h4>Additional Opportunities for Involvement:</h4>

              <ul>
                <li>
                  <strong>SOLUR Program:</strong> The School of Life Sciences
                  Undergraduate Research (SOLUR) program at ASU offers
                  undergraduates the chance to dive deep into biological
                  research. Collaborate with faculty and mentors, experience
                  firsthand scientific investigations, and make valuable
                  contributions to ongoing research. We are always happy to
                  accept students from this program.{" "}
                  <a
                    href="https://sols.asu.edu/research/solur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about the SOLUR program
                  </a>
                  .
                </li>
                <li>
                  <strong>RISE Worldwide Internships:</strong> RISE (Research
                  Internships in Science and Engineering) Worldwide offers
                  summer research internships globally to undergraduate
                  students, especially those with training in fields like
                  biology, chemistry, computer science, physics, and earth
                  sciences. We have successfully sponsored many students
                  through this program and welcome more applicants.{" "}
                  <a
                    href="https://www.daad.de/rise/en/rise-worldwide/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about RISE Worldwide internships
                  </a>
                  .
                </li>
                <li>
                  <strong>WAESO LSAMP Program:</strong> The Western Alliance
                  to Expand Student Opportunities Louis Stokes Alliances for
                  Minority Participation (WAESO LSAMP) is an NSF-funded
                  consortium promoting STEM fields, particularly focusing on
                  historically underrepresented individuals. We always have
                  opportunities through WAESO and are eagerly looking for
                  students to join.{" "}
                  <a
                    href="https://www.waeso.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about WAESO LSAMP
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>

          {/* International Collaborations Section */}
          <div className="opportunity-item-4">
            <h2>International Collaborations and Visitors</h2>
            <div className="opportunity-content">
              <p className="common-text">
                Our lab is always welcoming international collaborations and
                visitors.
              </p>
              <p className="common-text">
                We host visiting professors and scholars, commonly under the
                financial sponsorship of their home organizations, with a
                focus on training and joint research. Contact Professor
                Cadillo about opportunities and interests.
              </p>
              <p className="common-text">
                We also host international internships, such as those
                sponsored by the{" "}
                <a
                  href="https://www.daad.de/rise/en/rise-worldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAAD RISE-Worldwide program
                </a>
                , Chinese Exchange programs (several of them especially for
                faculty), and REPU. We post positions through each of these
                programs, so be sure to visit their websites.
              </p>
              <p className="common-text">
                If you have any questions or want to know more about our lab,
                feel free to contact any of the lab members; we will be more
                than happy to get in touch with you!
              </p>
            </div>
          </div>
        </div>

        {/* Outreach Carousel Section */}
        <div className="outreach-section">
          <div className="carousel">
            <div className="carousel-images">
              <img
                src={process.env.PUBLIC_URL + CAROUSEL_IMAGES[currentIndex].src}
                alt={CAROUSEL_IMAGES[currentIndex].alt}
                className="carousel-slide"
              />
            </div>

            <button
              onClick={goToPrevious}
              className="arrow arrow-left"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="arrow arrow-right"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;