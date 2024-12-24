// Homepage.jsx
import React, { useEffect } from "react";
import "../styles/Homepage.css";
import backgroundVideo from "../assets/background-video.mp4";

// Footer component (integrated within the Homepage file)
const Footer = () => {
  useEffect(() => {
    const loadFacebookSDK = () => {
      const fbRoot = document.getElementById("fb-root");
      if (!fbRoot) {
        const rootDiv = document.createElement("div");
        rootDiv.id = "fb-root";
        document.body.appendChild(rootDiv);
      }

      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        window.FB && window.FB.XFBML.parse();
      };
    };

    loadFacebookSDK();

    return () => {
      const fbScript = document.querySelector(
        'script[src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"]'
      );
      if (fbScript) fbScript.remove();

      const fbRoot = document.getElementById("fb-root");
      if (fbRoot) fbRoot.remove();
    };
  }, []);

  return (
    <footer className="footer">
      <div className="social-media">
        <div className="facebook-feed">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/CadilloLab/"
            data-tabs="timeline"
            data-width="400"
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>
        <div className="instagram-feed">
          <iframe
            title="Instagram Feed"
            src="https://www.instagram.com/methano.hinsby/embed"
            width="340"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="hero-content">
            <h1 className="interactive-heading">Welcome to the Cadillo Lab</h1>
            <p>
              We focus on environmental microbiology and the study of
              methanotrophic bacteria in tropical peatlands.
            </p>
          </div>
        </div>
      </div>
      <div className="mission-statement">
        <h2 className="interactive-heading">Mission Statement</h2>
        <p>
          The Cadillo lab advances research and discovery of the microbial role
          and contribution to the environment at various scales and fields. We
          aim to contribute to public value solutions for pressing environmental
          problems promoting environmental and social equity.
        </p>
        <p>
          Our interests are diverse and include, among others, studies on the
          ecology of carbon rich ecosystems, the interactions and activity of
          microbes in response or as potential ecosystem drivers, and the
          genomics and evolution of microbes tracking their mechanisms of change
          and key innovations.
        </p>
        <p>
          Our lab focuses on novel groups of methane-producing Archaea and
          interacting bacteria in anaerobic, high carbon-content natural or
          human-engineered environments. Understanding the ecology, genomics,
          and management of microbial communities will contribute to predictions
          of ecological dynamics and evolutionary patterns, predictions on
          greenhouse gas flux in ecosystems, and development of different
          bioenergy and environmental remediation applications. Indeed we seek
          to develop solutions to current problems built on a fundamental
          understanding of micro and microbial processes.
        </p>
        <p>
          The Cadillo lab has a dual affiliation between the School of Life
          Sciences and the Swette Center for Environmental Biotechnology at the
          Biodesign Institute. This dual affiliation is reflected by our
          complementary efforts on basic and applied research.
        </p>
      </div>
      <Footer /> {/* Added Footer component */}
    </section>
  );
};

export default Homepage;
