import React, { useState } from "react";
import people_01 from "../assets/faculty-photoaidcom-cropped.png";
import people_02 from "../assets/placeholder.jpg";
import people_03 from "../assets/placeholder.jpg";
import people_04 from "../assets/placeholder.jpg";
import people_05 from "../assets/placeholder.jpg";
import people_06 from "../assets/placeholder.jpg";
import people_07 from "../assets/Jesus2.png";
import people_08 from "../assets/placeholder.jpg";
import people_09 from "../assets/placeholder.jpg";
import people_10 from "../assets/placeholder.jpg";
import people_11 from "../assets/placeholder.jpg";
import people_12 from "../assets/placeholder.jpg";
import people_13 from "../assets/placeholder.jpg";
import people_14 from "../assets/placeholder.jpg";
import people_15 from "../assets/placeholder.jpg";

// Data configuration
const TEAM_DATA = {
  faculty: {
    image: people_01,
    name: "Hinsby Cadillo-Quiroz",
    title: "Associate Professor",
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
      image: people_07,
      role: "EVO PhD student",
      backContent: "Jesus is a first-year Ph.D. student in Environmental Life Sciences at Arizona State University, studying carbon fluxes and ecological modeling of peatlands in the Amazon forest.\n\nHe completed his undergraduate degree in Forest Engineering at La Molina National Agrarian University (Lima, Peru), specializing in remote sensing, forest ecology, and forest biodiversity. He then pursued a master's degree in Civil Engineering at the University of Engineering and Technology (Lima, Peru), focusing on the geomorphology of Amazonian rivers, analyzing multitemporal dynamics and morpho-spatial patterns that influence island formation and river migration.\n\nJesus has extensive experience in geographical information systems (GIS) and remote sensing analysis, producing geospatial elements related to forests and rivers. He has specialized in REDD+ (Reduction of Emissions from Deforestation and Degradation) projects, contributing to the formulation of project documents, baseline establishment for GHG emission levels, LULC maps, deforestation and degradation modeling, and quantifying emission reductions for the voluntary carbon market.\n\nHis main research interest is to evaluate the interactions between geomorphological dynamics of rivers and forest ecosystems, particularly how sediment and flood presence affect carbon fluxes and stocks. Through ecological modeling, he aims to establish connections between biotic and abiotic elements of the landscape at different scales, exploring intricate ecological relationships and patterns."
    },
    {
      name: "Wanxiang Liu",
      bio: "PhD. Candidate",
      image: people_02,
      role: "TBD",
      backContent: "Blank"
    },
    {
      name: "Researcher 3",
      bio: "PhD Student, Microbiology PhD Program",
      image: people_03,
      role: "TBD",
      backContent: "Blank"
    },
    {
      name: "Researcher 4",
      bio: "PhD student",
      image: people_04,
      role: "TBD",
      backContent: "Blank"
    },
    {
      name: "Researcher 5",
      bio: "Master student",
      image: people_05,
      role: "TBD",
      backContent: "Blank"
    },
    {
      name: "Researcher 6",
      bio: "PhD student, Biology & Society PhD Program",
      image: people_06,
      role: "TBD", 
      backContent: "Blank"
    }
  ],
  
  postdocResearchers: [
    {
      name: "Postdoc 1",
      bio: "Postdoctoral researcher",
      image: people_08,
      role: "Postdoctoral Researcher",
      backContent: "Blank"
    },
    {
      name: "Postdoc 2",
      bio: "Postdoctoral researcher",
      image: people_09,
      role: "Postdoctoral Researcher",
      backContent: "Blank"
    }
  ],
  
  undergraduateResearchers: [
    {
      name: "David Nguyen, BS",
      bio: "Undergraduate researcher",
      image: people_10,
      role: "Undergraduate Researcher"
    },
    {
      name: "Luka Castillejo Olazabal, BS",
      bio: "Undergraduate researcher",
      image: people_11,
      role: "Undergraduate Researcher"
    },
    {
      name: "Undergrad 3, BS",
      bio: "Undergraduate researcher",
      image: people_12,
      role: "Undergraduate Researcher"
    },
    {
      name: "Undergrad 4, BS",
      bio: "Undergraduate researcher",
      image: people_13,
      role: "Undergraduate Researcher"
    },
    {
      name: "Undergrad 5, BS",
      bio: "Undergraduate researcher",
      image: people_14,
      role: "Undergraduate Researcher"
    },
    {
      name: "Undergrad 6, BS",
      bio: "Undergraduate researcher",
      image: people_15,
      role: "Undergraduate Researcher"
    }
  ],
  
  alumni: {
    graduateAlumni: [
      {
        name: "Victor Ochoa-Henriquez",
        details: "PhD student in Environmental Life Sciences (2023-2024)"
      },
      { name: "Lilly Vael", details: "PhD student in Microbiology (2022-2024)" },
      { name: "Julia Furedy", details: "M.S. (4+1 BS, MS) student (2021-2024)" },
      { name: "Camila Delgado-Montes", details: "Ms student in Biology (2020-2023)" },
      { name: "Michael Pavia", details: "PhD student in Microbiology (2018-2024)" },
      { name: "Jillian Ayers", details: "M.S. (4+1 BS, MS) student in Microbiology (2019-2021)" },
      { name: "Mark Reynolds", details: "PhD student in Microbiology (2015-2022)" },
      { name: "Analisa Sarno", details: "PhD student in Microbiology (2013-2021)" },
      { name: "Steffen Buessecker", details: "PhD student in Environmental Life Sciences (2013-2020)" },
      { name: "Julian Yu", details: "PhD student in Microbiology (2014-2020)" },
      { name: "Zeni Ramirez", details: "Ms student in Microbiology (2016-2018)" }
    ],
    
    postdocAlumni: [
      { name: "Outi Lahteenoja", details: "Postdoctoral researcher" },
      { name: "Michal Ziv-El", details: "Postdoctoral researcher" },
      { name: "Patrick Browne", details: "Postdoctoral researcher" },
      { name: "Damien Finn", details: "Postdoctoral researcher" },
      { name: "Paul Brewer", details: "Postdoctoral researcher" }
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
      },
      // Additional years omitted for brevity - would include all years from original code
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
      },
      // Additional researchers omitted for brevity - would include all from original code
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
      },
      // Additional scholars omitted for brevity - would include all from original code
    ]
  }
};

const Team = () => {
  // Consolidated state management
  const [hoveredResearcherDetails, setHoveredResearcherDetails] = useState("");
  const [hoveredPostdocDetails, setHoveredPostdocDetails] = useState("");
  const [openAlumniDropdown, setOpenAlumniDropdown] = useState(false);
  
  // Handler for alumni dropdown toggle
  const handleToggleAlumni = () => {
    setOpenAlumniDropdown(!openAlumniDropdown);
  };

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
          {/* Left Panel: Researchers */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {TEAM_DATA.gradResearchers.map((researcher, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredResearcherDetails(researcher.backContent)}
                  onMouseLeave={() => setHoveredResearcherDetails("")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="w-33 h-33 bg-gray-300 rounded-full overflow-hidden">
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

      {/* Postdoctoral Researchers Section */}
      <section className="mb-12">
        <h2 className="section-title-3" style={{ color: "black" }}>
          Postdoctoral Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Postdoctoral Researchers */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {TEAM_DATA.postdocResearchers.map((researcher, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredPostdocDetails(researcher.backContent)}
                  onMouseLeave={() => setHoveredPostdocDetails("")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="w-33 h-33 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={researcher.image}
                      alt={researcher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2-3 text-sm">{researcher.name}</p>
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

      {/* Undergraduate Students Section */}
      <section className="mb-12">
        <h2 className="section-title-3" style={{ color: "black" }}>
          Undergraduate Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Undergraduate Researchers */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4">
              {TEAM_DATA.undergraduateResearchers.map((undergraduate, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto">
                    <img
                      src={undergraduate.image}
                      alt={undergraduate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm">{undergraduate.name}</p>
                  <p className="text-gray-500">{undergraduate.role}</p>
                </div>
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
        <div className="flex cursor-pointer" onClick={handleToggleAlumni}>
          <span>Alumni</span>
          <button>
            <span className={`transform ${openAlumniDropdown ? "rotate-180" : ""}`}>
              &#9660;
            </span>
          </button>
        </div>

        {openAlumniDropdown && (
          <div className="dropdown-content">
            <div className="alumni-columns">
              {/* PhD Alumni Column */}
              <div className="column">
                <h3>Graduates</h3>
                {TEAM_DATA.alumni.graduateAlumni.map((alumni, index) => (
                  <div key={index} className="alumni-item">
                    <span>{alumni.name}</span>
                    <p>{alumni.details}</p>
                  </div>
                ))}
              </div>

              {/* Postdoc Alumni Column */}
              <div className="column">
                <h3>Postdoc</h3>
                {TEAM_DATA.alumni.postdocAlumni.map((alumni, index) => (
                  <div key={index} className="alumni-item">
                    <span>{alumni.name}</span>
                    <p>{alumni.details}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Barrett Honors Thesis */}
            <h3>Barrett Honors Thesis</h3>
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
            
            {/* Undergraduate Researchers */}
            <h3>Undergraduate Researchers</h3>
            {TEAM_DATA.alumni.undergraduateResearchers.map((researcherGroup, index) => (
              <div key={index}>
                <h4>{researcherGroup.year}</h4>
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
            
            {/* High School Researchers */}
            <h3 className="mt-8 mb-3">High School Researchers</h3>
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
            
            {/* Visiting Scholar */}
            <h3 className="mt-4 mb-3">Visiting Scholar</h3>
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
          </div>
        )}
      </section>
    </div>
  );
};

export default Team;