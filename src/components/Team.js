import React, { useState } from "react";
import people_00 from "../assets/faculty-photoaidcom-cropped.png";
import people_01 from "../assets/Jesus2.png";
import people_02 from "../assets/wanxiang.jpg";
import people_03 from "../assets/kyleigh.jpg";
//import people_04 from "../assets/placeholder.jpg";
//import people_05 from "../assets/placeholder.jpg";
//import people_06 from "../assets/placeholder.jpg";
import people_07 from "../assets/david.jpg";
import people_08 from "../assets/lance.png";
//import people_09 from "../assets/placeholder.jpg";
//import people_10 from "../assets/placeholder.jpg";
//import people_11 from "../assets/placeholder.jpg";
//import people_12 from "../assets/placeholder.jpg";
import people_13 from "../assets/jaimie.jpg";
//import people_14 from "../assets/placeholder.jpg";



// Data configuration
const TEAM_DATA = {
  faculty: {
    image: people_00,
    name: "Hinsby Cadillo-Quiroz, PhD",
    title: "Professor",
    contact: "Email: hinsby@asu.edu",
    education: [
      "PhD Microbiology and minor in Ecology, Cornell University 2008.",
      "BS Biological Sciences, San Marcos National University, Lima, Peru 1999."
    ],
    bio: [
      "Hinsby Cadillo-Quiroz studies how microbes participate in an ecosystem and in applied processes. He and his research team are investigating whether microbe-mediated organismal and environmental interactions drive ecosystem processes, particularly carbon cycling. They are also examining how ecosystems, in turn, affects the ecology and evolution of microorganisms and their interactions.",
      "Dr Cadillo-Quiroz and his collaborators focus on methane-producing processes from anaerobic, high carbon-content environments, as well as the ecological interactions between Archaea, Bacteria, plants and humans. This knowledge can allow developing small and large scale solutions for current societal or planetary needs. For instance, Dr Cadillo-Quiroz is strongly committed to natural and engineered solutions to climate change through the power of cooperating with microbes.",
      "Dr Cadillo-Quiroz's current research studies processes in landfills, artificial wetlands, lakes and ponds, northern USA forest, and tropical peatlands in the Amazon Basin. He has been recognized with a Fulbright Scholarship, a Presidential Scholarship at Cornell University, a National Science Foundation CAREER Award, and an Honorific Doctorate in Forestry by the National University of the Peruvian Amazon."
    ]
  },
  
  gradResearchers: [
    {
      name: "Jesus Marin Diaz",
      bio: "PhD. Student in Environmental Life Sciences",
      image: people_01,
      role: "ELS PhD student",
      backContent: "Jesus is a first-year Ph.D. student in Environmental Life Sciences at Arizona State University, studying carbon fluxes and ecological modeling of peatlands in the Amazon forest.\n\nHe completed his undergraduate degree in Forest Engineering at La Molina National Agrarian University (Lima, Peru), specializing in remote sensing, forest ecology, and forest biodiversity. He then pursued a master's degree in Civil Engineering at the University of Engineering and Technology (Lima, Peru), focusing on the geomorphology of Amazonian rivers, analyzing multitemporal dynamics and morpho-spatial patterns that influence island formation and river migration.\n\nJesus has extensive experience in geographical information systems (GIS) and remote sensing analysis, producing geospatial elements related to forests and rivers. He has specialized in REDD+ (Reduction of Emissions from Deforestation and Degradation) projects, contributing to the formulation of project documents, baseline establishment for GHG emission levels, LULC maps, deforestation and degradation modeling, and quantifying emission reductions for the voluntary carbon market.\n\nHis main research interest is to evaluate the interactions between geomorphological dynamics of rivers and forest ecosystems, particularly how sediment and flood presence affect carbon fluxes and stocks. Through ecological modeling, he aims to establish connections between biotic and abiotic elements of the landscape at different scales, exploring intricate ecological relationships and patterns."
    },
    {
      name: "Wanxiang Liu",
      bio: "PhD. Candidate",
      image: people_02,
      role: "EVO PhD student",
      backContent: " Wanxiang Liu is a PhD student in an Evolutionary Biology program. He is a Bioinformatician focused on studying methanogenesis and methanotrophy. His research uses computational modeling to understand how microbial activities affect atmospheric methane levels, particularly in wetlands and agricultural ecosystems. "
    },
    {
      name: "Kyleigh Bachelor",
      bio: "PhD Student, Microbiology PhD Program",
      image: people_03,
      role: "Microbiology MS student",
      backContent: "Kyleigh is a first year Master's student in the Microbiology program. She earned her B.S. in Microbiology from Northern Arizona University in 2024. Her background includes microbial ecology as well as industry experience, having worked for the United States Geological Survey as a Biologist and a Microbiologist Technician in cosmetic and hygiene microbiology testing. Kyleigh is broadly interested in how microbes interact within their environments and the ways these interactions help to shape ecosystems. She is currently working on the Howland methanotrophs project, focusing on isolating methanotrophs from soil samples. Kyleigh plans to transfer to a PhD program and aims to pursue a career in environmental research. "
    }
  ],
  
  postdocResearchers: [
    {
      name: "Jaimie West, PhD",
      bio: "Postdoctoral researcher",
      image: people_13,
      role: "Postdoctoral Researcher",
      backContent: "Dr. West is leveraging microbial community genomics to improve methane models in a subboreal forest (Howland Forest, ME). Her objective is to identify transcriptomic markers that predict rates of methane cycling, and to relate these findings to in situ methane fluxes using metatranscriptomics. By connecting genomics to function, she hopes to improve understanding of soil microbial responses to shifting environmental conditions. She earned her Ph.D. in Soil Science with a minor in Microbiology at the University of Wisconsin-Madison, studying how various disturbances and soil structural disruptions, like tillage and earthworm activity, affect soil bacterial community composition and ecological assembly. She continued exploring how soil communities reflect disturbances as an ORISE Postdoctoral Fellow at the Cold Regions Research and Engineering Laboratory, studying permafrost thaw, subarctic wildfire, and antimicrobial resistance, while also using bacterial genomics to predict phenotypic traits. Jaimie works remotely from Madison, WI, where she otherwise tries to keep up her two kids."
    }
  ],
  
  undergraduateResearchers: [
    {
      name: "David Nguyen",
      bio: "Undergraduate researcher",
      image: people_07,
      role: "Biology and Conservation BS"
    },
    {
      name: "Lance West",
      bio: "Undergraduate researcher",
      image: people_08,
      role: "Electrical Engineering BS"
    }
  ],
  
  alumni: {
    graduateAlumni: [
      {
        name: "Victor Ochoa-Henriquez",
        details: "M.S. student in Environmental Life Sciences (2023-2024)"
      },
      { name: "Lilly Vael", details: "M.S. student in Microbiology (2022-2024)" },
      { name: "Julia Furedy", details: "M.S. (4+1 BS, MS) student (2021-2024)" },
      { name: "Camila Delgado-Montes", details: "M.S. student in Biology (2020-2023)" },
      { name: "Michael Pavia", details: "Ph.D. student in Microbiology (2018-2024)" },
      { name: "Jillian Ayers", details: "M.S. (4+1 BS, MS) student in Microbiology (2019-2021)" },
      { name: "Mark Reynolds", details: "Ph.D. student in Microbiology (2015-2022)" },
      { name: "Analisa Sarno", details: "Ph.D. student in Microbiology (2013-2021)" },
      { name: "Steffen Buessecker", details: "Ph.D. student in Environmental Life Sciences (2013-2020)" },
      { name: "Julian Yu", details: "Ph.D. student in Microbiology (2014-2020)" },
      { name: "Zeni Ramirez", details: "M.S. student in Microbiology (2016-2018)" }
    ],
    
    postdocAlumni: [
      { name: "Outi Lahteenoja", details: "Postdoctoral researcher" },
      { name: "Michal Ziv-El", details: "Postdoctoral researcher" },
      { name: "Patrick Browne", details: "Postdoctoral researcher" },
      { name: "Damien Finn", details: "Postdoctoral researcher" },
      { name: "Paul Brewer", details: "Postdoctoral researcher" },
      { name: "Jie Dai", details: "Postdoctoral researcher" },
      { name: " ", details: " " },
    ],
    
    honorsThesis: [
      {
        name: "Natalie Blum",
        degree: "Environmental Engineering",
        year: 2023,
        thesisTitle: "Anaerobic oxidation of methane in wetlands"
      },
      {
        name: "Noemi Soto",
        degree: "Microbiology",
        year: 2023,
        thesisTitle: "Expanding membrane-based isolation of terrestrial Bacteria"
      },
      {
        name: "Hannah Brzezinski",
        degree: "Molecular Biology & Biotechnology",
        year: 2022,
        thesisTitle: "Ecological diversity of methanotrophs in Amazon peatlands"
      },
      {
        name: "Brandon Bourquin",
        degree: "Biological Sciences",
        year: 2020,
        thesisTitle: "Evaluating the consumption rates of primary versus secondary fermentation substrates and methane production of northern peatlands"
      },
      {
        name: "Alexander Freese",
        degree: "Microbiology",
        year: 2018,
        thesisTitle: "Assessment of the vertical stratification of microbial community structure in permafrost peatlands"
      },
      {
        name: "Kyle Brown",
        degree: "Astrobiology",
        year: 2018,
        thesisTitle: "Biotic vs. abiotic processes in hyper-arid exoplanetary atmospheres"
      },
      {
        name: "Jaime Lopez",
        degree: "Chemical Engineering",
        year: 2017,
        thesisTitle: "Trait-based Modeling of peatland methanogen communities"
      },
      {
        name: "Kaitlyn Tylor",
        degree: "Biological Sciences",
        year: 2016,
        thesisTitle: "Expanding membrane-based isolation of terrestrial Bacteria"
      },
      {
        name: "Jessica Spring",
        degree: "Microbiology",
        year: 2016,
        thesisTitle: "Early assessment on phages communities in Amazon Peat soils"
      },
      {
        name: "Divya Mahendra",
        degree: "Molecular Biology",
        year: 2014,
        thesisTitle: "Metabolic reconstruction of methane producing microbes: Methanoregula boonei 6A8 and Methanosphaerula palustris E1-9c"
      }
    ],
    
    undergraduateResearchers: [
      {
        year: "2024-2025",
        researchers: [
          { name: "Aurely Sachez Carrion", program: "NSF REU" },
          { name: "David Nguyen", program: "NSF REU" },
          { name: "Peter Herrick", program: "U Maine NSF REU" },
          { name: "Roberto Quintana", program: "NSF REU" },
          { name: "Luka Castillejo Olazabal", program: "Honors Thesis" },
          { name: "Kyla Pikes", program: "ASU Online NSF REU" }
        ]
      },
      {
        year: "2023-2024",
        researchers: [
          { name: "David Nguyen" },
          { name: "Noemi Soto" },
          { name: "Natalia Soto Rodriguez", program: "Baylor College" },
          { name: "Christian Swonger", program: "NSF REU" },
          { name: "Mikayla Shrader" },
          { name: "Aurely Sachez Carrion", program: "WAESO" }
        ]
      }
    ],
    
    highSchoolResearchers: [
      {
        year: "2023",
        name: "Karishma Sivakumar",
        school: "Basis Phoenix High School"
      },
      {
        year: "2022",
        name: "Abhinav Chede",
        school: "Basis Chandler High School"
      }
    ],
    
    internationalScholarsAndInterns: [
      {
        year: 2024,
        name: "Anabel Rabe",
        researchTitle: "Environmental & Sustainability",
        program: "DAAD RISE program"
      },
      {
        year: 2023,
        name: "Antonia Schindelmann",
        researchTitle: "Earth Sciences",
        program: "DAAD RISE program"
      }
    ]
  }
};

/**
 * Name Card Component style
 */
const MemberCard = ({ member, onMouseEnter, onMouseLeave, imageSize = "w-33 h-33" }) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <div className={`${imageSize} bg-gray-300 rounded-full overflow-hidden mx-auto`}>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    {/* name */}
    <p style={{ 
      marginTop: '8px', 
      marginBottom: '0px', 
      fontSize: '14px', 
      fontWeight: 'normal',
      lineHeight: '1.1',
      color: '#000'
    }}>
      {member.name}
    </p>
    {/* role/major - distance with name */}
    <p style={{ 
      marginTop: '4px',  // Adjust this number to change spacing: 0px=no spacing, -2px=tighter
      marginBottom: '0px', 
      fontSize: '12px', 
      color: '#666',
      lineHeight: '1.1'
    }}>
      {member.role}
    </p>
  </div>
);

const Team = () => {
  // Consolidated state management
  const [hoveredResearcherDetails, setHoveredResearcherDetails] = useState("");
  const [hoveredPostdocDetails, setHoveredPostdocDetails] = useState("");
  
  // Alumni section dropdown states
  const [openGraduates, setOpenGraduates] = useState(false);
  const [openPostdocs, setOpenPostdocs] = useState(false);
  const [openHonorsThesis, setOpenHonorsThesis] = useState(false);
  const [openUndergrads, setOpenUndergrads] = useState(false);
  const [openHighSchool, setOpenHighSchool] = useState(false);
  const [openVisiting, setOpenVisiting] = useState(false);
  
  // Alumni section toggle handlers
  const toggleGraduates = () => setOpenGraduates(!openGraduates);
  const togglePostdocs = () => setOpenPostdocs(!openPostdocs);
  const toggleHonorsThesis = () => setOpenHonorsThesis(!openHonorsThesis);
  const toggleUndergrads = () => setOpenUndergrads(!openUndergrads);
  const toggleHighSchool = () => setOpenHighSchool(!openHighSchool);
  const toggleVisiting = () => setOpenVisiting(!openVisiting);

  return (
    <div className="team-page">
      {/* Faculty Section */}
      <section className="faculty" style={{ color: "black" }}>
        <h2 className="section-title-1" style={{ color: "black" }}>
          Research Team
        </h2>
        <div className="faculty-container">
          <img src={TEAM_DATA.faculty.image} alt="Faculty" className="faculty-photo" />
          <div className="faculty-info">
            <h2 className="aaa">{TEAM_DATA.faculty.name}</h2>
            <p className="faculty-title">{TEAM_DATA.faculty.title}</p>
            <p className="faculty-contact">{TEAM_DATA.faculty.contact}</p>

            <div className="faculty-education">
              {TEAM_DATA.faculty.education.map((edu, index) => (
                <p key={index}>{edu}</p>
              ))}
            </div>

            <div className="faculty-bio">
              {TEAM_DATA.faculty.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Graduate Researchers Section */}
      <section className="mb-12" style={{ color: "black" }}>
        <h2 className="section-title-2" style={{ color: "black" }}>
          Graduate Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Researchers - 使用统一的MemberCard */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {TEAM_DATA.gradResearchers.map((researcher, index) => (
                <MemberCard
                  key={index}
                  member={researcher}
                  onMouseEnter={() => setHoveredResearcherDetails(researcher.backContent)}
                  onMouseLeave={() => setHoveredResearcherDetails("")}
                  imageSize="w-33 h-33"
                />
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

      {/* Postdoctoral Researchers Section */}
      <section className="mb-12">
        <h2 className="section-title-3" style={{ color: "black" }}>
          Postdoctoral Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Postdoctoral Researchers - 使用统一的MemberCard */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {TEAM_DATA.postdocResearchers.map((researcher, index) => (
                <MemberCard
                  key={index}
                  member={researcher}
                  onMouseEnter={() => setHoveredPostdocDetails(researcher.backContent)}
                  onMouseLeave={() => setHoveredPostdocDetails("")}
                  imageSize="w-33 h-33"
                />
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

      {/* Undergraduate Students Section */}
      <section className="mb-12">
        <h2 className="section-title-3" style={{ color: "black" }}>
          Undergraduate Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Undergraduate Researchers - 使用统一的MemberCard */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4">
              {TEAM_DATA.undergraduateResearchers.map((undergraduate, index) => (
                <MemberCard
                  key={index}
                  member={undergraduate}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  imageSize="w-32 h-32"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="alumni">
        <h2 className="section-title-4" style={{ color: "black" }}>
          Alumni
        </h2>
        
        {/* Graduates Section */}
        <div className="alumni-section mb-4">
          <div className="flex cursor-pointer mb-2" onClick={toggleGraduates}>
            <h3 className="font-bold">Graduates</h3>
            <button className="ml-2">
              <span className={`transform inline-block ${openGraduates ? "rotate-180" : ""}`}>
                &#9660;
              </span>
            </button>
          </div>
          
          {openGraduates && (
            <div className="ml-4 mt-6 pt-2">
              {TEAM_DATA.alumni.graduateAlumni.map((alumni, index) => (
                <div key={index} className="alumni-item mb-3">
                  <span className="font-medium">{alumni.name}</span>
                  <p className="text-sm text-gray-600">{alumni.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Postdoc Section */}
        <div className="alumni-section mb-4">
          <div className="flex cursor-pointer mb-2" onClick={togglePostdocs}>
            <h3 className="font-bold">Postdoctoral Researchers</h3>
            <button className="ml-2">
              <span className={`transform inline-block ${openPostdocs ? "rotate-180" : ""}`}>
                &#9660;
              </span>
            </button>
          </div>
          
          {openPostdocs && (
            <div className="ml-4 mt-6 pt-2">
              {TEAM_DATA.alumni.postdocAlumni.map((alumni, index) => (
                <div key={index} className="alumni-item mb-3">
                  <span className="font-medium">{alumni.name}</span>
                  <p className="text-sm text-gray-600">{alumni.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Barrett Honors Thesis Section */}
        <div className="alumni-section mb-4">
          <div className="flex cursor-pointer mb-2" onClick={toggleHonorsThesis}>
            <h3 className="font-bold">Barrett Honors Thesis</h3>
            <button className="ml-2">
              <span className={`transform inline-block ${openHonorsThesis ? "rotate-180" : ""}`}>
                &#9660;
              </span>
            </button>
          </div>
          
          {openHonorsThesis && (
            <div className="honors-thesis-container">
              {/* Group by year and sort in descending order */}
              {Object.entries(
                TEAM_DATA.alumni.honorsThesis.reduce((acc, thesis) => {
                  acc[thesis.year] = acc[thesis.year] || [];
                  acc[thesis.year].push(thesis);
                  return acc;
                }, {})
              )
                .sort(([yearA], [yearB]) => yearB - yearA)
                .map(([year, theses]) => (
                  <div key={year} className="year-group mb-4">
                    <h4 className="font-bold">{year}</h4>
                    <div className="text-left">
                      {theses.map((thesis, index) => (
                        <div key={index} className="mb-3">
                          <span>
                            <strong>{thesis.name}</strong>, {thesis.degree}:<br />
                            <em>{thesis.thesisTitle}</em>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        
        {/* Undergraduate Researchers Section */}
        <div className="alumni-section mb-4">
          <div className="flex cursor-pointer mb-2" onClick={toggleUndergrads}>
            <h3 className="font-bold">Undergraduate Researchers</h3>
            <button className="ml-2">
              <span className={`transform inline-block ${openUndergrads ? "rotate-180" : ""}`}>
                &#9660;
              </span>
            </button>
          </div>
          
          {openUndergrads && (
            <div>
              {TEAM_DATA.alumni.undergraduateResearchers.map((researcherGroup, index) => (
                <div key={index} className="mb-3">
                  <h4 className="font-medium">{researcherGroup.year}</h4>
                  <p>
                    {researcherGroup.researchers.map((researcher, subIndex) => (
                      <span key={subIndex}>
                        <strong>{researcher.name}</strong>
                        {researcher.program ? ` (${researcher.program})` : ""}
                        {subIndex < researcherGroup.researchers.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* High School Researchers Section */}
        <div className="alumni-section mb-4">
          <div className="flex cursor-pointer mb-2" onClick={toggleHighSchool}>
            <h3 className="font-bold">High School Researchers</h3>
            <button className="ml-2">
              <span className={`transform inline-block ${openHighSchool ? "rotate-180" : ""}`}>
                &#9660;
              </span>
            </button>
          </div>
          
          {openHighSchool && (
            <div className="researchers-container">
              {Object.entries(
                TEAM_DATA.alumni.highSchoolResearchers.reduce((acc, researcher) => {
                  acc[researcher.year] = acc[researcher.year] || [];
                  acc[researcher.year].push(researcher);
                  return acc;
                }, {})
              )
                .sort(([yearA], [yearB]) => yearB - yearA)
                .map(([year, researchers]) => (
                  <div key={year} className="year-group mb-4">
                    <h4 className="font-bold text-left">{year}</h4>
                    <div className="text-left">
                      {researchers.map((researcher, index) => (
                        <div key={index} className="mb-3">
                          <span>
                            <strong>{researcher.name}</strong><br />
                            {researcher.school}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        
        {/* Visiting Scholar Section */}
        <div className="alumni-section mb-4">
          <div className="flex cursor-pointer mb-2" onClick={toggleVisiting}>
            <h3 className="font-bold">Visiting Scholar</h3>
            <button className="ml-2">
              <span className={`transform inline-block ${openVisiting ? "rotate-180" : ""}`}>
                &#9660;
              </span>
            </button>
          </div>
          
          {openVisiting && (
            <div className="scholars-container">
              {Object.entries(
                TEAM_DATA.alumni.internationalScholarsAndInterns.reduce((acc, scholar) => {
                  // Handle year ranges like "2020-2022"
                  const yearKey = typeof scholar.year === "string" && scholar.year.includes("-") 
                    ? scholar.year 
                    : scholar.year;
                  
                  acc[yearKey] = acc[yearKey] || [];
                  acc[yearKey].push(scholar);
                  return acc;
                }, {})
              )
                .sort(([yearA], [yearB]) => {
                  // For sorting, extract the end year from ranges
                  const getMaxYear = (yearStr) => {
                    if (typeof yearStr === "string" && yearStr.includes("-")) {
                      return parseInt(yearStr.split("-")[1]);
                    }
                    return parseInt(yearStr);
                  };
                  return getMaxYear(yearB) - getMaxYear(yearA);
                })
                .map(([year, scholars]) => (
                  <div key={year} className="year-group mb-4">
                    <h4 className="font-bold text-left">{year}</h4>
                    <div className="text-left">
                      {scholars.map((scholar, index) => (
                        <div key={index} className="mb-3">
                          <span>
                            <strong>{scholar.name}</strong><br />
                            {scholar.researchTitle}
                            {scholar.program && <span><br/>({scholar.program})</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;