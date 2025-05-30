import React, { useEffect } from "react";
import "../styles/Homepage.css";
// This imports a video file to use as the background for the homepage
import backgroundVideo from "../assets/background-video-new.mov";

// This is the main Homepage component
const Homepage = () => {
  // This useEffect runs code when the page loads and when it closes
  useEffect(() => {
    // This function loads the Facebook plugin so the Facebook feed can show up
    const loadFacebookSDK = () => {
      // Check if the Facebook root div exists, if not, create it
      const fbRoot = document.getElementById("fb-root");
      if (!fbRoot) {
        const rootDiv = document.createElement("div");
        rootDiv.id = "fb-root";
        document.body.appendChild(rootDiv);
      }

      // Create a script tag to load Facebook's code
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      // When the script loads, tell Facebook to show the feed
      script.onload = () => {
        window.FB && window.FB.XFBML.parse();
      };
    };

    // Call the function to load Facebook's code
    loadFacebookSDK();

    // This cleans up the Facebook code when you leave the page
    return () => {
      const fbScript = document.querySelector(
        'script[src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"]'
      );
      if (fbScript) fbScript.remove();
      const fbRoot = document.getElementById("fb-root");
      if (fbRoot) fbRoot.remove();
    };
  }, []);

  // This is the part that shows up on the website
  return (
    <div className="homepage-container">
      {/* This is the top section with a looping video in the background */}
      <section className="hero">
        <video autoPlay loop playsInline muted className="hero-video">
          {/* This line tells the browser where to find the video file */}
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </section>
      {/* This overlay puts text on top of the video */}
      <div className="hero-overlay">
        <div className="hero-content hover-effect">
          {/* Main title of the homepage */}
          <h1 style={{ color: "black" }}>Welcome to the Cadillo Lab</h1>
          {/* Short description under the title */}
          <p style={{ color: "black" }}>
            An environment with diverse backgrounds, experiences, and careers is
            foundational to our team.
          </p>
        </div>
      </div>
      {/* This section contains the mission statement and social media feeds */}
      <section className="mission-social">
        {/* Title for the mission statement */}
        <h2
          className="section-title hover-text"
          style={{ textDecoration: "none", borderBottom: "none" }}
        >
          Mission Statement
        </h2>
        {/* First paragraph of the mission statement */}
        <p className="mission-text hover-text">
          The Cadillo lab advances research and discovery of the microbial role
          and contribution to the environment at various scales and fields. We
          aim to contribute to public value solutions for pressing environmental
          problems promoting environmental and social equity. Our interests are
          diverse and include, among others, studies on the ecology of carbon
          rich ecosystems, the interactions and activity of microbes in response
          or as potential ecosystem drivers, and the genomics and evolution of
          microbes tracking their mechanisms of change and key innovations.
        </p>
        {/* Second paragraph of the mission statement */}
        <p className="mission-text hover-text">
          Our lab focuses on novel groups of methane-producing Archaea and
          interacting bacteria in anaerobic, high carbon-content natural or
          human engineered environments. Understanding the ecology, genomics,
          and management of microbial communities will contribute to predictions
          of ecological dynamics and evolutionary patterns, predictions on
          greenhouse gas flux in ecosystems, and development of different
          bioenergy and environmental remediation applications. Indeed we seek
          to develop solution to current problems build on fundamental
          understanding of micro and macrobial processes. The Cadillo lab has a
          dual affiliation between the School of Life Sciences and the Swette
          Center for Environmental Biotechnology at the Biodesign Institute.
          This dual affiliation is reflected by our complementary efforts on
          basic and applied research.
        </p>

        {/* This section shows social media feeds in two rows */}
        <div className="social-container">
          <div className="social-row">
            {/* Facebook Feed: Shows the Cadillo Lab Facebook timeline */}
            <div className="social-box facebook-feed">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/CadilloLab/"
                data-tabs="timeline"
                data-width="340"
                data-height="400"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              ></div>
            </div>

            {/* Instagram Feed: Shows the Cadillo Lab Instagram posts */}
            <div className="social-box instagram-feed">
              <iframe
                title="Instagram Feed"
                src="https://www.instagram.com/methano.hinsby/embed"
                width="340"
                height="400"
                frameBorder="0"
                scrolling="yes"
                allowTransparency="true"
              ></iframe>
            </div>
          </div>

          <div className="social-row">
            {/* X (Twitter) Feed: Shows the OkMicrobes X (Twitter) timeline */}
            <div
              className="social-box x-feed"
              style={{ paddingRight: "130px" }}
            >
              <a
                className="twitter-timeline"
                href="https://x.com/OkMicrobes"
                data-theme="dark"
                data-height="50"
              >
                X by OkMicrobes
              </a>
              {/* This script loads the X (Twitter) timeline */}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>

            {/* Bluesky Button: Link to the Cadillo Lab Bluesky profile */}
            <div className="social-box bluesky-link">
              <a
                href="https://bsky.app/profile/methano-hinsby.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="bsky-button"
                data-theme="dark"
                data-height="50"
              >
                Visit our BlueSky Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// This line makes the Homepage component available to the rest of the website
export default Homepage;