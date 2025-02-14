import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Collaborationss.css";
import collaborationBanner from "../assets/collab.png";
import collab1 from "../assets/collab1.png";
import collab2 from "../assets/collab2.png";

const Collaborationss = () => {
  const images = [
    { src: collab1, alt: "Research Program" },
    { src: collab2, alt: "Training Program" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatically go to next slide every 7 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNext, 7000); // 7000ms = 7 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="collaboration-container">
      <div className="banner-container">
        <img
          src={collaborationBanner}
          alt="Collaboration"
          className="banner-image"
        />
      </div>

      <div className="content-sections">
        <section className="pedagogical">
          <h2>Pedagogical Collaborations</h2>
          <div className="program">
            <h3>
              Microbiology EducatioN, Training and OutReach at ASU (MENTOR@ASU)
            </h3>
            <p className="para11" style={{ lineHeight: "1.2" }}>
              This is a student-centered Inquiry-Base Learning effort developed
              by Prof Hinsby Cadillo-Quiroz (cadillo lab) aiming to increase the
              participation in microbiology research and high order thinking and
              learning by bridging education and research. Students engage in
              full semester projects of varying nature defined on the previous
              semester as a group effort. Most projects involved learning about
              microbial diversity and novel groups of microorganisms. The
              research is student-centered where senior members train new
              members. Students are invited to remain in program for two
              semesters so they can act as trainee and trainer. A common effect
              is that after one year training students move on to professional
              jobs or other scientific laboratories where their progress will be
              further advanced. ASU students feel free to enquire about this at
              any point!
            </p>
          </div>

          <div className="programs">
            <h3>A Culturing Soil Microbes for ecosystem models CURE</h3>
            <p style={{ lineHeight: "1.2" }}>
              This CURE was designed by the Cadillo Lab to promote scientific
              research and training among ASU and international institutions.
              The projects in this class focus on understanding and quantifying
              the role of microorganisms in terrestrial ecosystems like northern
              forest in Maine or wetlands in the Amazon rainforest. A common
              question is whether the variation on phylogeny (membership), types
              and rates of activity (traits) make some groups to be more, or
              less influential in an ecological process. For instance, the
              carbon cycling and greenhouse gas production or consumption (like
              CO2 and CH4) since they affect climate change. This class (and
              associated projects) ask students to contribute to microbial
              knowledge that can help fight climate change. All pedagogical
              material, as well as support we provide to interested institutions
              can be found in this link. Please reach us at any point!
            </p>
          </div>
        </section>

        <section className="data-collaboration" style={{ marginTop: "3rem" }}>
          <h2 className="collabh2">Collaborative Data accessibility and FAIR data use</h2>
          <p className="para1" style={{ lineHeight: "1.2" }}>
            The cadillo Lab seeks to be a place where Findable, Accessible,
            Interoperable, and Reusable (FAIR) data access approaches is
            provided, at the same time we see high value to going beyond making
            data accessible, we propose to collaborate and further expand the
            use and reach of previous work through new perspectives and co
            -analyses. Thus here we provide a list and links to publicly
            available data, data in development (not yet public), or internally
            developed data.
          </p>

          <div className="data-categories">
            <div className="microbial">
              <h4>MICROBIAL</h4>
              <ul>
                <li>
                  Amazon peatlands microbial composition (16S rRNA surveys,
                  2014)
                </li>
                <li>
                  Amazon Peatlands metagenomes (JGI CSP, metagenomes and meta
                  transcriptomes)
                </li>
                <li>Culturable microbial assessment for Amazon peatlands</li>
              </ul>
            </div>

            <div className="ecosystem">
              <h4>ECOSYSTEM</h4>
              <ul>
                <li>Photosynthesis measurements of Amazon peatlands</li>
                <li>Water table hourly monitoring</li>
                <li>Greenhouse gas flux of contrasting Amazon peatlands</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="international">
          <h2 style={{ marginTop: "3rem" }}>
            International Collaborations for Carbon-rich ecosystem research
          </h2>
          <p className="para2" style={{ lineHeight: "1.2" }}>
            The Cadillo lab is proud of a long collaborative tradition to study
            carbon-rich environments around the world. Below find a list of
            institutions with which we have or currently collaborate:
          </p>
          <ul className="partners-list" style={{ marginTop: "1rem" }}>
            <li>Universidad Nacional de la Amazonia Peruana (UNAP)</li>
            <li>Universidad Nacional Autónoma de Alto Amazonas (UNAA)</li>
            <li>Instituto de Investigaciones de la Amazonia Peruana (IIAP)</li>
            <li>Universidad Nacional de Ucayali (UNU)</li>
            <li>Universidad Nacional de Madre de Dios (UNAMAD)</li>
            <li>Universidad de Costa Rica (UCR)</li>
            <li>Mamirauá Institute for Sustainable Development</li>
            <li>Wildlife Conservation Society</li>
          </ul>
        </section>
      </div>

      <div className="outreach-section">
        <div className="carousel">
          <div className="carousel-images">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
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
  );
};

export default Collaborationss;
