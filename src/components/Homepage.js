import React from 'react';
import '../styles/Homepage.css';
import backgroundVideo from '../assets/background-video.mp4'; // Replace with the actual video path

const Homepage = () => {
    return (
        <section className="homepage">
            {/* Background Video Section */}
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <div className="hero-content">
                        <h1 className="interactive-heading">Welcome to the Cadillo Lab</h1>
                        <p>
                            We focus on environmental microbiology and the study of methanotrophic
                            bacteria in tropical peatlands.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Statement Section */}
            <div className="mission-statement">
                <h2 className="interactive-heading">Mission Statement</h2>
                <p>
                    The Cadillo lab advances research and discovery of the microbial role and contribution
                    to the environment at various scales and fields. We aim to contribute to public value
                    solutions for pressing environmental problems promoting environmental and social equity.
                </p>
                <p>
                    Our interests are diverse and include, among others, studies on the ecology of carbon
                    rich ecosystems, the interactions and activity of microbes in response or as potential
                    ecosystem drivers, and the genomics and evolution of microbes tracking their mechanisms
                    of change and key innovations.
                </p>
                <p>
                    Our lab focuses on novel groups of methane-producing Archaea and interacting bacteria in
                    anaerobic, high carbon-content natural or human-engineered environments. Understanding
                    the ecology, genomics, and management of microbial communities will contribute to
                    predictions of ecological dynamics and evolutionary patterns, predictions on greenhouse
                    gas flux in ecosystems, and development of different bioenergy and environmental
                    remediation applications. Indeed we seek to develop solutions to current problems built
                    on a fundamental understanding of micro and microbial processes.
                </p>
                <p>
                    The Cadillo lab has a dual affiliation between the School of Life Sciences and the
                    Swette Center for Environmental Biotechnology at the Biodesign Institute. This dual
                    affiliation is reflected by our complementary efforts on basic and applied research.
                </p>
            </div>
        </section>
    );
};

export default Homepage;
