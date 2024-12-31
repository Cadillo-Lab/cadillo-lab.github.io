import React, { useEffect } from "react";
import "../styles/Homepage.css";
import backgroundVideo from "../assets/background-video.mp4";

const Homepage = () => {
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
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay loop muted className="hero-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-content hover-effect">
            <h1>Welcome to the Cadillo Lab</h1>
            <p>
              An environment with diverse backgrounds, experiences, and careers
              is foundational to our team.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-social">
        <h2 className="section-title hover-text">Mission Statement</h2>
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

        {/* Social Media Feeds */}
        <div className="social-feeds">
          <div className="social-row">
            {/* Facebook Feed */}
            <div className="facebook-feed">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/CadilloLab/"
                data-tabs="timeline"
                data-width="500"
                data-height="400"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              ></div>
            </div>

            {/* Instagram Feed */}
            <div className="instagram-feed">
              <iframe
                title="Instagram Feed"
                src="https://www.instagram.com/methano.hinsby/embed"
                width="340"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
              ></iframe>
            </div>

            {/* BlueSky Link and X (stacked one above the other) */}
            <div className="stacked-links">
              {/* Twitter Feed (X) */}
              <div className="twitter-feed">
                <a
                  className="twitter-timeline"
                  href="https://x.com/OkMicrobes"
                  data-theme="dark"
                  data-height="300"
                >
                  X by OkMicrobes
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </div>

              {/* BlueSky Link */}
              <div className="bsky-link">
                <a
                  href="https://bsky.app/profile/methano-hinsby.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bsky-button"
                >
                  Visit our BlueSky Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
