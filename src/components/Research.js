import React, { useState } from "react";
import "../styles/Research.css";

// Import your images
import bannerImage1 from "../assets/research1.png";
import amazonImage from "../assets/amazon.png";
import northernImage from "../assets/northern.jpg";
import amazonpeatland1 from "../assets/amazon-peatland.jpg";
import amazonpeatland2 from "../assets/amazon-peatland2.jpg";
import amazonpeatland3 from "../assets/amazon-peatland3.jpeg";
import northernpeatland from "../assets/northern-peatland.png";
import mitigation1 from "../assets/mitigation1.png";
import mitigation2 from "../assets/mitigation2.jpg";
import cultural from "../assets/cultural.jpg";
import landscape from "../assets/landscape.jpg";
import drivers from "../assets/driver.jpg";

const Research = () => {
  const bannerImages = [bannerImage1];
  const topicImages = [amazonImage, northernImage];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title:
        "Amazon Peatlands: interdisciplinary studies to understand ecosystem, microbes and fluxes",
      content: (
        <div>
          <p>
            Methane CH<sub>4</sub> concentrations in the global atmosphere are
            increasing, with rapid acceleration observed in recent years. The
            exact cause of such increase is uncertain, however isotopic evidence
            and transport models point to a biogenic source – tropical wetlands
            and the Amazon basin. In fact, modeled remote sensing products
            (Image from NASA Global Atmospheric Map) suggest the occurrence of
            key regional CH<sub>4</sub> hotspot regions over the Amazon. Our
            work focuses on those regions as areas of overlap with Amazon
            peatlands and possible control on emissions, also as regions where
            anthropogenic pressures are increasing through deforestation,
            agriculture, and mining, and also as regions where local communities
            are disproportionately affected by climate change and conservation
            efforts, yet communities are the key to possible natural solutions.
          </p>

          <img
            src={amazonpeatland1}
            alt="Amazon Peatlands"
            className="project-image"
          />
          <p>
            In terms of Amazon peatlands, one of our most favorite study
            ecosystems, recent field and remote sensing estimates suggest that
            peatlands in the Amazon basin potentially cover an area of 544,910
            km² with ~2,600 km³ of soil C-rich peat soils, making the basin one
            of the Earth’s largest expanses of tropical peatlands. These large
            (yet coarsely quantified) SOC stocks are subject to warm
            temperatures and variable hydromorphic conditions, driving the
            production of CO<sub>2</sub> and CH<sub>4</sub>. Our studies
            continue investigating GHG fluxes in Amazon peatlands, the microbial
            controls, the effects of vegetation types on SOC, and flood effects
            or transport of CH<sub>4</sub>.
          </p>

          <img
            src={amazonpeatland2}
            alt="Peatland Region"
            className="project-image"
          />
          <p>
            Amazon peatlands are concentrated in the PMFB region, estimating a
            total area of ~37,400 km² only in the Loreto Region of Peru.
            Research from our team, and others, have found that peatlands in the
            PMFB are heterogeneous in their soil properties, rates of OC
            accumulation, plant communities, and nutrient composition.
            Ecological and geochemical gradients described in PMFB include
            conditions of open to forested sites, woody tree- to palm
            swamp-dominated sites, acidic to neutral pH soil sites, ombrotrophic
            to minerotrophic sites, and low to high GHG emissions sites. We
            propose testing hypotheses where these gradients of GHG are likely
            driven primarily by the local and regional hydrology and soil
            geochemistry, in addition to vegetation composition.
          </p>
          <img
            src={amazonpeatland3}
            alt="Ecological Gradient in PMFB"
            className="project-image"
          />

          <p>
            Our earlier collaborative NSF Project, with Purdue University,
            developed the first available ecosystem dataset for primary
            productivity, GHG flux, and water level on 3 contrasting Amazon
            peatlands. Core findings involve that differential tree traits
            (mortality, photosynthesis, species) strongly relate to overall
            methane flux differences across sites, but seasonal hydrology seems
            to mark the annual CH<sub>4</sub> oscillations. We also uncovered
            critical rates of tree-mediated CH<sub>4</sub> flux, as well as
            soil nutritional constraints, and identified a major role for
            denitrification and nitrous oxide interactions that can putatively
            limit CH<sub>4</sub> generation. Modeling of long-term SOC in the
            region by Q. Zhuang at Purdue University developed the first
            predictions of how the region would become a hotspot of soil carbon
            loss that will likely lead to more methane emissions.
          </p>
          <p>
            <strong>
              <a
                href="https://biometeorology.umn.edu/research/quistococha-forest-reserve-qfr-amazonian-ameriflux-site-iquitos-peru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Biophysical processes and feedback mechanisms controlling the
                methane budget of an Amazonian peatland.
              </a>
            </strong>
          </p>
          <p>
            The overarching objective of our collaborative project is to
            evaluate several hypotheses about the methane budget dynamics in a
            palm swamp peatland in the Loreto region of the PMFB. This is one of
            the most comprehensive and high-resolution analyses of an Amazon
            peatland site, with the goal to expand and calibrate the Energy
            Exascale Earth System Model (E3SM) land surface component (ELM) to
            improve its ability to simulate CH<sub>4</sub> production and
            consumption in tropical peatlands. The Cadillo lab focuses on
            examining the importance of anaerobic oxidation of methane (AOM) in
            determining the CH<sub>4</sub> budget. The team is led by Tim
            Griffis at the University of Minnesota and includes members from the
            US Forest Service, Michigan Tech University, Oak Ridge National
            Laboratory, and Instituto de la Amazonia Peruana.
          </p>
          <p>
            <strong>
              <a
                href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1749252&HistoricalAwards=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                CAREER: Geochemical and functional controls of methane-mediating
                microbes in Amazon peatlands
              </a>
            </strong>
          </p>
          <p>
            This project seeks to examine the microorganisms influencing the
            production and consumption of CH<sub>4</sub> gas in Amazon
            peatlands. Breaching the microbial and educational gap is paramount
            to this project, and using Inquiry-Based Learning (IBL) teaching and
            training for national and international collaboration has been
            implemented to: i) quantify the spatial scale in CH<sub>4</sub>
            fluctuations; ii) isolate thousands of strains to complete
            functional tests in the lab; iii) implement microbial traits in
            site-specific models; iv) develop and release curricular resources
            to expand international microbial isolations. This ongoing project
            welcomes collaborations on site-specific methane models,
            microbial-inclusive modeling, microbial physiology of methanogens,
            methanotrophs and heterotrophs, microbial genomics, and evolutionary
            interactions among microbes and microbes and plants. Please feel
            free to reach our team!
          </p>
        </div>
      ),
    },
    {
      title:
        "Northern peatlands: Climate and its effects on microbial activity",
      content: (
        <div>
          <p>
            Circulation Models of global climate change predict that regional
            warming will be most intense, and precipitation during summer and
            winter will also be largest, over northern high latitudes.
            Critically, atmospheric warming in regions holding ecosystems with
            high density of organic carbon (OC), such as peatlands, or forest
            transitioning to expanding wetlands due to permafrost thawing or
            changed rain patterns can have the most significant impact in
            atmospheric change and further add to climate warming by the
            increased release of greenhouse gases (GHG) such as C0<sub>2</sub>{" "}
            and methane (CH<sub>4</sub>).
          </p>
          <p>
            Peatlands in the north are among the main natural sources of (CH
            <sub>4</sub>) release, and CH<sub>4</sub> is released as a direct
            consequence of OC decomposition by microbial activity. Meanwhile,
            northern forest tends to have a CH<sub>4</sub> consumption role
            (sinks) by microbial community. Understanding the microbial role in
            controlling the substrates needed for CH<sub>4</sub> production,
            or changes in the conditions that deter microbes oxidizing (CH
            <sub>4</sub>) activity urgent attention if we are to accurately
            predict rates of CH<sub>4</sub> emissions or feedbacks associated
            with atmospheric warming.
          </p>
          <p>
            This research line at the Cadillo Lab seeks to expand on previous
            findings about methanogenic and methanotrophic Archaea (as well as
            methanotrophic Bacteria) and their activity in peatland types known
            as “bogs and fens”, as well as upland forests.
          </p>
          <p>
            We have analyzed patterns of methanogenic communities from peatlands
            across a broad geographical range in northern latitudes and found
            that climatic regime has an effect structuring the community
            make-up. Methanogens are dependent on Bacteria to provide their
            metabolic substrates; hence a relationship of OC-degrading bacteria
            to climate is hypothesized. We are testing a range of climate-driven
            hypotheses on methanogenic Archaea and methanotrophic Bacteria.
            Whether climate drives the phylogenetic or functional make-up of
            microbes is an important research goal in our group.
          </p>
          <p>
            We also collaborate on modeling efforts to incorporate microbial
            diversity and functioning in full ecosystem modeling. We collaborate
            with multiple groups including faculty and researchers at Carleton
            University, Trent University, Cornell University, University of
            Oregon, University of Maine, San Diego State University, Emory
            University, Lawrence Berkeley National Laboratory, Woodwell Climate
            Research Center, and Purdue University. We are always looking to
            expand our collaborative work with scientists from peat-containing
            regions.
          </p>
          <ul>
            <li>
              <a
                href="https://www.woodwellclimate.org/project/methane-cycling-in-northern-forests/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Methane Cycling in Northern Forests at the Howland Research
                Forest, ME
              </a>
            </li>
          </ul>
          <p>
            This research is a Collaborative NSF-sponsored project where the
            Cadillo Lab uses new DNA/RNA sequencing techniques that allow us to
            study microbial traits. Measuring these traits across different
            environmental conditions ultimately helps us learn how microbes’
            sequestration of methane in sub-boreal forests may be offsetting
            methane emitters globally, and how this may change under future
            climate conditions. The Howland Research Forest serves as a case
            study to identify drivers and functional relationships across wet to
            dry soils, and from soils to canopy. Reach out to our team for
            questions on microbial advances!
          </p>
          <img
            src={northernpeatland}
            alt="Peatland Region"
            className="project-image"
          />
        </div>
      ),
    },
    {
      title:
        "CH₄ and GHG emissions as microbiome responses to manipulations: Landfill case",
      content: (
        <div>
          {/* First Paragraph with Image Below */}
          <div>
            <p>
              The mitigation of methane (CH<sub>4</sub>) emissions is key for
              the management of Municipal Solid Waste (MSW) landfills, and this
              is achieved by CH<sub>4</sub> harvesting technologies which is
              also a mechanism for alternative Sustainable Energy Systems. In
              arid regions like Phoenix, AZ, CH<sub>4</sub> production is
              limited by water availability. Landfill reactor cells, like those
              in the Salt River Landfill (SRL), are designed to perform water
              injection and collect generated CH<sub>4</sub>. However, the
              effects of this technology on CH<sub>4</sub> emissions or the
              microbes responsible for CH<sub>4</sub> production or
              geotechnical changes in landfill are not well understood for arid
              landfills. In fact, the microbiome evolution in landfills remains
              highly under-studied.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={mitigation1}
                alt="Landfill bioreactor"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>

          {/* Second Paragraph with Image Below */}
          <div>
            <p>
              This collaborative project between the Cadillo Lab and an
              industrial partner focuses on monitoring the changes associated
              with water injection to a landfill cell in an arid landfill
              bioreactor to develop a better understanding of water-elicited
              changes in methane emissions, microbial makeup, and coarse
              geotechnical properties associated with this technology. For this,
              we use a combination of landfill sampling (leachate and gases),
              experimental manipulations (laboratory reactors), and Eddy
              Covariance atmospheric monitoring. We are also seeking alternative
              ways to detect CH<sub>4</sub> to optimize landfill monitoring
              and functioning. New avenues of this research include geotechnical
              approaches to soil coverage and easy access biofilters (reactors)
              to seek transformation of low-quality methane to bioproducts.
              Please feel free to reach us on potential industrial or academic
              collaborations.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={mitigation2}
                alt="Landfill methane monitoring setup"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title:
        "Culturable Diversity of Archaea and Bacteria and the role of their traits in Ecosystem functions",
      content: (
        <div>
          {/* First Paragraph */}
          <p>
            Microbes play critical roles in the functioning of terrestrial
            ecosystems, but understanding and quantifying their role in such
            functions is challenging for multiple reasons. These include limited
            availability of cultured microbes, limited knowledge of the
            physiology and genomics of diverse terrestrial microbes, limited
            knowledge of their metabolic flexibility in response to
            microbe-microbe interactions, and limited upscaling tools to measure
            their activity at ecosystem-relevant scales.
          </p>

          {/* Second Paragraph */}
          <p>
            The Cadillo Lab’s focus on terrestrial ecosystems, carbon cycling,
            greenhouse gas dynamics, and evolutionary processes to adapt to
            extreme or changing environments has led to significant developments
            in the physiology, genomics, and culturing of Archaea and Bacteria.
            We combine traditional and novel culturing approaches to capture
            representative strains of ecosystems whose physiological information
            can be incorporated into modeling tools. The picture below
            illustrates the methanogenic diversity, novel isolates, and target
            carbon-rich ecosystems we have studied in the past.
          </p>

          {/* Image Section */}
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={cultural}
              alt="Methanogenic diversity and novel isolates"
              style={{ width: "80%", height: "auto" }}
            />
          </div>

          {/* Third Paragraph */}
          <p>
            In various projects, we focus on isolating distinct and
            representative microbes to capture the relationship between genomic
            and functional information and the distribution of trait variations
            of methanogens, methanotrophs, and heterotrophs. Microbial traits
            are defined as phenotypic properties whose expression determines the
            tempo and mode of microbial activity. Growth rate, pH range, Q10,
            substrate affinity, and use efficiency are traits whose variation
            across microbes can lead to differential contributions to ecosystem
            processes. The combination and discrete distribution of traits among
            organisms can generate functional guilds in soils. Thus, a
            quantitative understanding of trait presence, trait magnitude, and
            trait spectrum of variation can be a powerful component for
            function-based modeling of CH<sub>4</sub> flux.
          </p>

          {/* Final Paragraph */}
          <p>
            We are always interested in understanding the roots and consequences
            of microbial trait variation and its incorporation into predicting
            activities in ecosystems. Please reach out to us to learn more about
            our latest advancements in this area.
          </p>
        </div>
      ),
    },
    {
      title:
        "Landscape ecology of soil, GHG, and microbiomes post gold mining in the Amazon",
      content: (
        <div>
          {/* Introduction */}
          <p>
            In the Amazon and other regions, large riverine and floodplain areas
            are under pressure from gold mining activities. Over the last two
            decades, mining has emerged as one of the leading environmental
            threats to the Amazon region. It is responsible for approximately
            10% of forest loss across the Brazilian Amazon, and in some parts of
            Peru and Guyana, it contributes to the majority of deforestation.
          </p>

          {/* Key Impacts */}
          <p>
            Gold mining leads to a complete transformation of the Amazonian
            landscape and produces wide-ranging effects on critical components,
            including:
          </p>
          <ul>
            <li>Water movement and lack of retention in soils</li>
            <li>
              Proliferation of ponds with various geochemical characteristics
              and effects
            </li>
            <li>
              Dramatic changes in soil composition, including loss of topsoil
              and acquisition of sand-like properties
            </li>
            <li>
              Significant alterations in the composition and roles of the soil
              microbiome, impacting soil health
            </li>
            <li>Loss of vital ecosystem services</li>
          </ul>

          {/* Project Overview */}
          <p>
            This collaborative project with the University of Southern
            California is part of the Perpetual Planet Amazon Expeditions
            program (2022-2023), sponsored by the National Geographic Society
            and the Rolex Perpetual Planet Initiative.
          </p>

          {/* Image Placement */}
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={landscape}
              alt="Gold Mining Impacts in the Amazon"
              style={{ width: "80%", height: "auto" }}
            />
          </div>

          {/* Research Focus */}
          <p>
            As part of an interdisciplinary team, we are focusing on evaluating
            greenhouse gas production in mining ponds, in the context of
            microbial community assemblages responsible for producing these
            gases — with further links to mercury (Hg) methylation. We are also
            assessing microbiome indicators of soil health and testing
            approaches to upscale the quantification of ecosystem services (or
            their loss). Additionally, we aim to target effects that promote
            peatland-like redevelopment in this area.
          </p>

          {/* Call to Action */}
          <p>
            Please reach out for updates on this project or to explore potential
            collaborations!
          </p>
        </div>
      ),
    },
    {
      title:
        "Anthropogenic drivers and interface with carbon stability in soils",
      content: (
        <div>
          {/* First Paragraph (Text) */}
          <div>
            <p>
              This area is a newly emerging front in our team’s research. Our
              interests and explorations involve understanding the rate of Soil
              Organic Carbon (SOC) loss after various types of land conversion,
              the gain of SOC in pristine forests, wetlands, or peatlands, and
              the gain of SOC in anthropogenic environments, including urban
              areas, riverine margins, agricultural soils, or post-mining soils.
            </p>
          </div>

          {/* Image Below the First Text */}
          <div style={{ textAlign: "center" }}>
            <img
              src={drivers}
              alt="Soil Carbon Mapping in the Peruvian Amazon"
              style={{ width: "80%", height: "auto", borderRadius: "8px" }}
            />
          </div>

          {/* Second and Third Paragraphs (Text) */}
          <div>
            <p>
              We aim to develop natural carbon sequestration solutions to combat
              climate change. Given the extensive interface with anthropogenic
              processes and local communities, this work is framed under fluid
              collaborations with social, economic, agricultural, and applied
              scientists. Community science principles and applications are
              critical for advancing this interest, and we are always eager to
              discuss potential collaborations for transdisciplinary research.
            </p>
            <p>
              Current explorations involve mapping the potential of soil carbon
              sequestration in multiple areas of the Peruvian Amazon (as shown
              in the figure) or urban wetlands. Reach out to us for updates or
              progress on this front!
            </p>
          </div>
        </div>
      ),
    },
  ];

  // Topic navigation functions
  const nextTopic = () => {
    setCurrentTopicIndex((prevIndex) => (prevIndex + 1) % topicImages.length);
  };

  const prevTopic = () => {
    setCurrentTopicIndex(
      (prevIndex) => (prevIndex - 1 + topicImages.length) % topicImages.length
    );
  };

  return (
    <div className="research">
      {/* Banner Section */}
      <div className="banner">
        <img
          src={bannerImages[currentBannerIndex]}
          alt="Research Banner"
          className="banner-image"
        />
      </div>

      {/* Topics Section */}
      <section className="topics">
        <h2 className="topich2">Topics</h2>
        <p>
          The Cadillo Lab (Ecology of Microbes and Ecosystems) engages in
          interdisciplinary and transdisciplinary projects, spanning molecular,
          microbial, ecological, spatial, and applied sciences.
        </p>
        <div className="topics-slideshow">
          <button className="nav-button prev" onClick={prevTopic}>
            ❮
          </button>
          <img
            src={topicImages[currentTopicIndex]}
            alt={`Topic ${currentTopicIndex}`}
            className="topic-image"
          />
          <button className="nav-button next" onClick={nextTopic}>
            ❯
          </button>
        </div>
      </section>

      <section className="projects">
        <h2 className="h2research" >Current Projects and Interests</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="project-header"
              >
                <span className="project-title">{project.title}</span>
                <span
                  className={`dropdown-arrow ${
                    expandedIndex === index ? "rotated" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`project-content ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                {/* Adding images and text */}
                <p>{project.content}</p>
                {project.images &&
                  project.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`Image ${i}`}
                      className="project-image"
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
