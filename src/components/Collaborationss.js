import React from "react";
import "../styles/Collaborationss.css";
import collaborationBanner from "../assets/collab.png";
import collab1 from "../assets/collab1.png";
import collab2 from "../assets/collab2.png";

const Collaborationss = () => {
  return (
    <div className="collaboration-container">
      <div className="banner-container">
        <img
          src={collaborationBanner}
          alt="Collaboration Banner"
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
            <p>
              This is a student-centered Inquiry-Base Learning effort developed
              by Prof Hinsby Cadillo-Quiroz (cadillo lab) aiming to increase the
              participation in microbiology research and high order thinking and
              learning by bridging education and research. Students engage in
              full semester projects of varying nature defined on the previous
              semester as a group effort.
            </p>
            <p>
              Most projects involved learning about microbial diversity and
              novel groups of microorganisms. The research is student-centered
              where senior members train new members. Students are invited to
              remain in program for two semesters so they can act as trainee and
              trainer.
            </p>
            <p>
              A common effect is that after one year training students move on
              to professional jobs or other scientific laboratories where their
              progress will be further advanced. ASU students feel free to
              enquire about this at any point!
            </p>
          </div>

          <div className="programs">
            <h3>A Culturing Soil Microbes for ecosystem models CURE</h3>
            <p>
              This CURE was designed by the Cadillo Lab to promote scientific
              research and training among ASU and international institutions.
              The projects in this class focus on understanding and quantifying
              the role of microorganisms in terrestrial ecosystems like northern
              forest in Maine or wetlands in the Amazon rainforest.
            </p>
          </div>
        </section>

        <section className="data-collaboration">
          <h2>Collaborative Data accessibility and FAIR data use</h2>
          <p className = "para1">
            The cadillo Lab seeks to be a place where Findable, Accessible,
            Interoperable, and Reusable (FAIR) data access approaches is
            provided.
          </p>

          <h3>Amazon data:</h3>
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
          <h2>
            International Collaborations for Carbon-rich ecosystem research
          </h2>
          <p className="para2">
            The Cadillo lab is proud of a long collaborative tradition to study
            carbon-rich environments around the world.
          </p>
          <ul className="partners-list">
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
        <img src={collab1} alt="Program 1" className="collab1" />
        <img src={collab2} alt="Program 2" className="collab2" />
      </div>
    </div>
  );
};

export default Collaborationss;
