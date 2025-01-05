import React, { useState } from "react";
import facultyImage from "../assets/faculty.png";
import MichaelImage from "../assets/Michael.png";
import lillyImage from "../assets/lilly.jpg";
import victorImage from "../assets/Victor.jpg";
import juliaImage from "../assets/Julia.png";
import aliceImage from "../assets/Alice.png";
import jesusImage from "../assets/Jesus2.png";
import jieImage from "../assets/jie.jpg";
import janaImage from "../assets/Jana_2.png";

const TeamMember = ({ name, details, role }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`team-member ${isExpanded ? "expanded" : ""}`}>
      <div className="member-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{name}</h3>
        {/* Add a line below the name for the role */}
        <p className="member-role">{role}</p>
        <span className="dropdown-arrow">▼</span>
      </div>
      {isExpanded && (
        <div className="member-details">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

const Team = () => {
  const [selectedGradText, setSelectedGradText] = useState("");
  const [selectedPostdocText, setSelectedPostdocText] = useState("");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [hoveredResearcherDetails, setHoveredResearcherDetails] = useState("");
    const [hoveredPostdocDetails, setHoveredPostdocDetails] = useState("");

  const handleToggle = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex(index); // Open the dropdown for the clicked item
    }
  };

  const [openDropdownIndex1, setOpenDropdownIndex1] = useState(null);

  const handleToggle1 = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex1(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex1(index); // Open the dropdown for the clicked item
    }
  };

  const [openDropdownIndex2, setOpenDropdownIndex2] = useState(null);

  const handleToggle2 = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex2(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex2(index); // Open the dropdown for the clicked item
    }
  };

  const [openDropdownIndex3, setOpenDropdownIndex3] = useState(null);

  const handleToggle3 = (index) => {
    if (openDropdownIndex3 === index) {
      setOpenDropdownIndex3(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex3(index); // Open the dropdown for the clicked item
    }
  };

  const [openDropdownIndex4, setOpenDropdownIndex4] = useState(null);

  const handleToggle4 = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex4(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex4(index); // Open the dropdown for the clicked item
    }
  };

  const [openDropdownIndex5, setOpenDropdownIndex5] = useState(null);

  const handleToggle5 = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex5(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex5(index); // Open the dropdown for the clicked item
    }
  };
  const gradResearchers = [
    {
      name: "Michael Pavia",
      bio: "PhD. Candidate",
      image: MichaelImage,
      role: "ELS PhD student",
      backContent:
        "Mike delves deep into the realm of tropical peatland microbial ecology. His work revolves around employing bioinformatic techniques to decode the mysteries of microbial community assembly under varying nutrient conditions. An intriguing discovery from his studies has been the discernible influence of a nutrient gradient across peatlands within the Pastaza Maranon Foreland Basin, on the genetic composition of their soils. His investigations didn't stop there. Further exploration has unearthed novel microbial families that may play an indirect role in modulating methane emissions.\n\nWhen he's not immersed in the lab, Mike rejuvenates by tending to his plants or embracing the nature of the state of Arizona has to offer.",
    },
    {
      name: "Lilly Vael",
      bio: "PhD Student, Microbiology PhD Program",
      image: lillyImage,
      role: "ELS PhD student",
      backContent:
        "Lilly, originally from Milan, Michigan, is a PhD student in the Microbiology PhD Program at Arizona State University. She holds a BS in Biology and Political Science from Eastern Michigan University, where her undergraduate research focused on the role of polysaccharide utilization in antibiotic production by soil microorganisms. This sparked her passion for understanding microbial interactions within their environments and communities.\n\nLilly's interest in microbial ecology and climate change led her to ASU, where she joined the Cadillo-Quiroz lab in 2022. Her research aims to understand how microbial communities are impacted by, and in turn, influence processes related to climate change. She is currently studying heterotrophic microbial communities and isolating methanogenic organisms from Amazon peatlands.\n\nIn addition to her scientific pursuits, Lilly is deeply involved in international collaboration through her volunteer work with American Model United Nations. Outside of the lab, she enjoys tending to her microcosms, exploring botanic gardens, and finding new bookstores and coffee shops.",
    },
    {
      name: "Victor Ochoa-Henriquez",
      bio: "PhD student",
      image: victorImage,
      role: "ELS PhD student",
      backContent:
        "Victor Ochoa-Henriquez has been interested in exploring different ecosystems, especially in extreme environments, with the aim of understanding how microbes interact with abiotic/biotic factors and their role in the equilibrium of nature. Using molecular and bioinformatics tools, Victor has been focused on comprehensively understanding the participation of microbial communities in salterns, coffee farms, and ocean ecosystems, examining their genomic information and how these are connected with physicochemical and geographical information.\n\nCurrently, Victor is most involved in research associated with Amazon Peatlands, an environment where natural resources have been impacted by illegal gold mining in Peru. Taking advantage of the molecular approach, he hopes to get access to that microbial mini-world and generate new innovative solutions to solve the big problem of global warming and CH4 emissions.\n\nFinally, in his free time, Victor used to be a great chef, preparing especially healthy Colombian food. He loves dancing, working out daily, and sharing with his friends. He is also a Marvel lover, collecting superhero figures, and passionate about places with alternative music, a nice atmosphere, and good vibes.",
    },
    {
      name: "Julia C. Furedy",
      bio: "Master student",
      image: juliaImage,
      role: "ELS PhD student",
      backContent:
        "Julia C. Furedy was born and raised in the Phoenix area and is proud to be a Sundevil through and through. They received an undergraduate degree in Molecular Biosciences and Biotechnology and are now working on their master’s in microbiology, both at ASU. Biotechnology and microbiology first became fields of interest to Julia when they were taking a biotechnology-focused class at Corona del Sol high school. After that, MBB was a simple choice of major once arriving at ASU.\n\nDuring their undergraduate career, Julia sought out a class with more direct applicability to real research and found a great fit in the MENTOR class taught by Dr. Hinsby Cadillo-Quiroz. The MENTOR class was designed to introduce realistic scientific research to undergraduate students, which was exactly what Julia had been looking for. They particularly enjoyed the class and the experience of becoming involved in actual research. Because of that great experience, they went on to join the Cadillo Lab. Since joining three years ago, they have had a great time learning and growing their research skills.\n\nIn the Cadillo Lab, the work of Julia has been focused on the enrichment, culture, and isolation of methanotrophic bacteria from tropical peatlands in the Amazon. The goal of this research is to better understand the diversity of culturable methanotrophs and potentially discover new species from their sites of interest, as there is a severe lack of cultured tropical methanotrophs. While working on this project, they have developed general research skills, including the ability to formulate research questions and protocols, as well as specific skills such as the use of gas chromatography to monitor the growth of methanotrophs by their consumption of methane.\n\nJulia hopes to finish their master’s program during the Spring 2024 semester and graduate in May. From there, their goal is to find a position in a microbiology lab, potentially in the medical or industrial fields. The synergy of their undergraduate degree and master’s degree would be a great fit and allow them to make a difference.",
    },
    {
      name: "Alice Sansonetti",
      bio: "PhD student, Biology & Society PhD Program",
      image: aliceImage,
      role: "ELS PhD student",
      backContent:
        "Originally from Lecce, Italy, Alice completed her Bachelor’s and Master’s degree in Biological Sciences and Biology from ASU in Spring 2021 and 2023, respectively. Her background is in ecology and conservation biology coupled with socio-ecological relationships, which she initially developed through an environmental humanities independent study on landscape change. Her Master’s research investigates the development of decision-making tools to inform endangered species recovery programs and their funding.\n\nAlice joined the Cadillo Lab in 2023 to explore a deeper understanding of ecosystem functioning at various scales through her interest in microbial ecology and tropical ecosystems, hoping to ultimately tackle bigger questions surrounding climate change. As a first-year PhD student in the Biology & Society PhD program, 4E (Ecology, Economics, and Ethics of the Environment) track, she is currently working on developing her first project in a collaboration between the Cadillo lab and the Conservation Innovation lab. She plans on exploring avenues for ecosystem conservation in the Peruvian Amazon and peatlands by investigating relationships between biodiversity and carbon flux while being conscious of the sociocultural and economic regional landscape. Her additional research interests include interspecies interactions and science teaching at the university level.\n\nAlice’s end goal in research is to collaborate in and develop interdisciplinary methods of tackling climate change and the extinction crisis. As well as conducting research, she would like to eventually have a teaching position at a post-secondary educational institution.",
    },
    {
      name: "Jesus Marin Diaz",
      bio: "PhD. Student in Environmental Life Sciences",
      image: jesusImage,
      role: "EVO PhD student",
      backContent:
        "Jesus is a first-year Ph.D. student in Environmental Life Sciences at Arizona State University, studying carbon fluxes and ecological modeling of peatlands in the Amazon forest.\n\nHe completed his undergraduate degree in Forest Engineering at La Molina National Agrarian University (Lima, Peru), specializing in remote sensing, forest ecology, and forest biodiversity. He then pursued a master's degree in Civil Engineering at the University of Engineering and Technology (Lima, Peru), focusing on the geomorphology of Amazonian rivers, analyzing multitemporal dynamics and morpho-spatial patterns that influence island formation and river migration.\n\nJesus has extensive experience in geographical information systems (GIS) and remote sensing analysis, producing geospatial elements related to forests and rivers. He has specialized in REDD+ (Reduction of Emissions from Deforestation and Degradation) projects, contributing to the formulation of project documents, baseline establishment for GHG emission levels, LULC maps, deforestation and degradation modeling, and quantifying emission reductions for the voluntary carbon market.\n\nHis main research interest is to evaluate the interactions between geomorphological dynamics of rivers and forest ecosystems, particularly how sediment and flood presence affect carbon fluxes and stocks. Through ecological modeling, he aims to establish connections between biotic and abiotic elements of the landscape at different scales, exploring intricate ecological relationships and patterns.",
    },
  ];

  const postdocResearchers = [
    {
      name: "Jie Dai, PhD",
      bio: "Postdoctoral researcher",
      image: jieImage,
      role: "Postdoctoral Researcher",
      backContent:
        "With a PhD in Geography from the Joint Doctoral Program (JDP) between San Diego State University (SDSU) and University of California, Santa Barbara (UCSB), I specialize in remote sensing of the environment. I currently work as a postdoctoral scholar in the Cadillo Lab, focusing on methane emission monitoring at the Salt River Landfill in Scottsdale, AZ. Since March 2020, I have been organizing, compiling, and analyzing methane emission data collected by a stationed eddy covariance tower, developing reports on methane flux budgets, and drafting a manuscript on emission dynamics over the past three years. Additionally, I am involved in peatland/soil carbon mapping and monitoring projects in Peru and Bolivia. My goal is to pursue a tenure-track faculty position in a research university.",
    },
    {
      name: "Jana Taumer, PhD",
      bio: "Postdoctoral researcher",
      image: janaImage,
      role: "Postdoctoral Researcher",
      backContent:
        "Jana completed her PhD at the University of Greifswald in Germany, where she used molecular methods to explore the soil microbiome and its relationship to ecosystem processes. During her doctoral research, she focused on community composition and abundance of soil microbes, utilizing qPCR and quantitative metatranscriptomics to link methanotrophs and methanogens in forest and grassland soils to soil methane fluxes. Since joining the Cadillo Lab in Autumn 2023, Jana has continued this work in a project focused on a northern forest in Maine. As climate change shifts precipitation patterns, this forest is transitioning from a methane sink to a methane source. Jana is investigating how microorganisms respond to these transitions and aims to develop methods for using microbial communities to predict changes in the soil's methane budget.",
    },
  ];

  const handleGradClick = (researcher) => {
    setSelectedGradText(
      `${researcher.name} - ${researcher.bio}\n\n${researcher.backContent}`
    );
  };

  const handlePostdocClick = (researcher) => {
    setSelectedPostdocText(
      `${researcher.name} - ${researcher.bio}\n\n${researcher.backContent}`
    );
  };

  const alumniData = [
    {
      name: "Steffen Buessecker, PhD student",
      details: "Details about Steffen...",
    },
    {
      name: "Analissa Sarno, PhD student",
      details: "Details about Analissa...",
    },
    { name: "Mark Reynolds, PhD student", details: "Details about Mark..." },
    {
      name: "Outi Lahteenoja, Postdoctoral researcher",
      details: "Details about Outi...",
    },
    {
      name: "Michal Ziv-El, Postdoctoral researcher",
      details: "Details about Michal...",
    },
    {
      name: "Patrick Browne, Postdoctoral researcher",
      details: "Details about Patrick...",
    },
    {
      name: "Damien Finn, Postdoctoral researcher",
      details: "Details about Damien...",
    },
    {
      name: "Paul Brewer, Postdoctoral researcher",
      details: "Details about Paul...",
    },
    {
      name: "Jillian Ayers, BS and MS student",
      details: "Details about Jillian...",
    },
    { name: "Gandhar Pandit, MS student", details: "Details about Gandhar..." },
    {
      name: "Zeni Ramirez, BS and MS student",
      details: "Details about Zeni...",
    },
  ];

  const ugstudentData = [
    { name: "Zack Brownell", details: "Zack is studying Biology at ASU." },
    { name: "Noemi Soto", details: "Noemi is researching microbial ecology." },
  ];

  const visitingScientists = [
    {
      name: "Dr. Jiaxue Song",
      details:
        "Assistant Professor, Department of Environmental Science and Engineering at Shanghai Normal University, China. 2012-2013.",
    },
  ];

  const honorsThesis = [
    {
      name: "Natalie Blum",
      details: "Anaerobic oxidation of methane in wetlands",
    },
    {
      name: "Noemi Soto",
      details: "Expanding membrane-based isolation of terrestrial Bacteria",
    },
  ];

  const undergradAlumni = [
    { name: "Joshua Hislop", year: "2021-2022", detail: "NSF REU" },
    { name: "Anna Burns", year: "2021-2022", detail: "NSF REU" },
    { name: "Sara Santiago", year: "2021-2022", detail: "WAESO" },
    { name: "Hannah Brzezinski", year: "2021-2022", detail: "LEAP" },
    { name: "Kameren Silas", year: "2021-2022", detail: "" },
    { name: "Rory Locket", year: "2021-2022", detail: "WAESO" },
    { name: "Sarah Avalle", year: "2020-2021", detail: "" },
    { name: "David Denogan", year: "2020-2021", detail: "" },
    { name: "Elizabeth Ardilla", year: "2020-2021", detail: "WAESO" },
    { name: "Rachel Campos", year: "2020-2021", detail: "" },
    { name: "Joseph Boyd", year: "2020-2021", detail: "" },
    { name: "Jacqueline Winston", year: "2018-2019", detail: "NSF REU" },
    { name: "Angela Mercado", year: "2018-2019", detail: "Engineering" },
    { name: "Elias Rodriguez", year: "2018-2019", detail: "Microbiology" },
    { name: "Alexandra Gernandez", year: "2018-2019", detail: "Engineering" },
    { name: "Jordan Canin", year: "2018-2019", detail: "Microbiology" },
    { name: "Nandini Mishra", year: "2018-2019", detail: "Biochemistry" },
    { name: "Morgan Yorkell", year: "2018-2019", detail: "Microbiology" },
    { name: "Hebah Bahta", year: "2018-2019", detail: "Microbiology" },
  ];

  const highSchoolStudents = [
    {
      name: "Sarah Bodansky",
      detail:
        "Research project presented at the Science and Engineering Fair - Microbiology",
    },
    {
      name: "Christina Moon",
      detail:
        "Research project presented at the Science and Engineering Fair - Microbiology",
    },
  ];

  return (
    <div className="team-page">
      {/* Faculty Section - Keep original */}
      <section className="faculty" style={{ color: "black" }}>
        <h2 className="section-title-1" style={{ color: "black" }}>
          Faculty
        </h2>
        <div className="faculty-container">
          <img src={facultyImage} alt="Faculty" className="faculty-photo" />
          <div className="faculty-info">
            <h2 className="aaa">Hinsby Cadillo-Quiroz</h2>
            <p className="faculty-title">Associate Professor</p>
            <p className="faculty-contact">Email: hinsby@asu.edu</p>

            <div className="faculty-education">
              <p>
                PhD Microbiology and minor in Ecology, Cornell University 2008.
              </p>
              <p>
                BS Biological Sciences, San Marcos National University, Lima,
                Peru 1999.
              </p>
            </div>

            <div className="faculty-bio">
              <p>
                Hinsby Cadillo-Quiroz studies how microbes participate in an
                ecosystem and in applied processes. He and his research team are
                investigating whether microbe-mediated organismal and
                environmental interactions drive ecosystem processes,
                particularly carbon cycling. They are also examining how
                ecosystems, in turn, affects the ecology and evolution of
                microorganisms and their interactions.
              </p>
              <p>
                Dr Cadillo-Quiroz and his collaborators focus on
                methane-producing processes from anaerobic, high carbon-content
                environments, as well as the ecological interactions between
                Archaea, Bacteria, plants and humans. This knowledge can allow
                developing small and large scale solutions for current societal
                or planetary needs. For instance, Dr Cadillo-Quiroz is strongly
                committed to natural and engineered solutions to climate change
                through the power of cooperating with microbes.
              </p>
              <p>
                Dr Cadillo-Quiroz's current research studies processes in
                landfills, artificial wetlands, lakes and ponds, northern USA
                forest, and tropical peatlands in the Amazon Basin. He has been
                recognized with a Fulbright Scholarship, a Presidential
                Scholarship at Cornell University, a National Science Foundation
                CAREER Award, and an Honorific Doctorate in Forestry by the
                National University of the Peruvian Amazon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Graduate Researchers Section */}
      <section className="mb-12" style={{ color: "black" }}>
        <h2 className="section-title-2" style={{ color: "black" }}>
          Graduate Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Researchers */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {gradResearchers.map((researcher, index) => (
                <div
                  key={index}
                  onMouseEnter={() =>
                    setHoveredResearcherDetails(researcher.backContent)
                  }
                  onMouseLeave={() => setHoveredResearcherDetails("")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={researcher.image}
                      alt={researcher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm">{researcher.name}</p>
                  <p className="text-center text-xs text-gray-500">
                    {researcher.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded-lg min-h-[300px]">
            <p className="whitespace-pre-line">
              {hoveredResearcherDetails ||
                "Hover over a graduate researcher's image to see their details"}
            </p>
          </div>
        </div>
      </section>

      {/* New Postdoctoral Researchers Section */}
      <section className="mb-12">
        <h2 className="section-title-3" style={{ color: "black" }}>
          Postdoctoral Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Postdoctoral Researchers */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {postdocResearchers.map((researcher, index) => (
                <div
                  key={index}
                  onMouseEnter={() =>
                    setHoveredPostdocDetails(
                      researcher.backContent 
                    )
                  }
                  onMouseLeave={() => setHoveredPostdocDetails("")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={researcher.image}
                      alt={researcher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2-3 text-sm">
                    {researcher.name}
                  </p>
                  <p className="text-center text-gray-500">{researcher.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Details */}
          <div className="flex-1 bg-gray-100 p-4 rounded-lg min-h-[300px]">
            <p className="whitespace-pre-line">
              {hoveredPostdocDetails ||
                "Hover over a postdoctoral researcher's image to see their details"}
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="alumni">
        <h2 className="section-title-4" style={{ color: "black" }}>
          Graduate/Postdoctoral Alumni
        </h2>
        <div className="alumni-list">
          {alumniData.map((alumni, index) => (
            <div key={index} className="alumni-item">
              <div className="flex" onClick={() => handleToggle(index)}>
                <span>{alumni.name}</span>
                <button>
                  <span
                    className={`transform ${
                      openDropdownIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </div>
              {openDropdownIndex === index && (
                <div className="dropdown-content">
                  <p>{alumni.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Other sections remain the same */}
      {/* Alumni Section */}
      <section className="alumni">
        <h2 className="section-title-4" style={{ color: "black" }}>
          Undergraduate Student
        </h2>
        <div className="alumni-list">
          {ugstudentData.map((alumni, index) => (
            <div key={index} className="alumni-item">
              <div className="flex" onClick={() => handleToggle1(index)}>
                <span>{alumni.name}</span>
                <button>
                  <span
                    className={`transform ${
                      openDropdownIndex1 === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </div>
              {openDropdownIndex1 === index && (
                <div className="dropdown-content">
                  <p>{alumni.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="alumni">
        <h2 className="section-title-4" style={{ color: "black" }}>
          Honors Thesis Students
        </h2>
        <div className="alumni-list">
          {honorsThesis.map((alumni, index) => (
            <div key={index} className="alumni-item">
              <div className="flex" onClick={() => handleToggle2(index)}>
                <span>{alumni.name}</span>
                <button>
                  <span
                    className={`transform ${
                      openDropdownIndex2 === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </div>
              {openDropdownIndex2 === index && (
                <div className="dropdown-content">
                  <p>{alumni.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="alumni">
        <h2 className="section-title-4" style={{ color: "black" }}>
          Visiting Scientist
        </h2>
        <div className="alumni-list">
          {visitingScientists.map((alumni, index) => (
            <div key={index} className="alumni-item">
              <div className="flex" onClick={() => handleToggle3(index)}>
                <span>{alumni.name}</span>
                <button>
                  <span
                    className={`transform ${
                      openDropdownIndex3 === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </div>
              {openDropdownIndex3 === index && (
                <div className="dropdown-content">
                  <p>{alumni.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="alumni">
        <h2 className="section-title-4" style={{ color: "black" }}>
          Undergraduate Alumni
        </h2>
        <div className="alumni-list">
          {undergradAlumni.map((alumni, index) => (
            <div key={index} className="alumni-item">
              <div className="flex" onClick={() => handleToggle4(index)}>
                <span>{alumni.name}</span>
                <button>
                  <span
                    className={`transform ${
                      openDropdownIndex4 === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </div>
              {openDropdownIndex4 === index && (
                <div className="dropdown-content">
                  <p>{alumni.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="high-school">
        <h2 className="section-title-4" style={{ color: "black" }}>
          High-School
        </h2>
        <div className="note">
          <p>
            <em>
              High school students participate in our lab through the Southwest
              Center for Education and the Natural Environment (SCENE) program
              in partnership with local high school students and ASU's Global
              Institute of Sustainability
            </em>
          </p>
        </div>
        <div className="alumni-list">
          {highSchoolStudents.map((alumni, index) => (
            <div key={index} className="alumni-item">
              <div className="flex" onClick={() => handleToggle5(index)}>
                <span>{alumni.name}</span>
                <button>
                  <span
                    className={`transform ${
                      openDropdownIndex5 === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </div>
              {openDropdownIndex5 === index && (
                <div className="dropdown-content">
                  <p>{alumni.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
