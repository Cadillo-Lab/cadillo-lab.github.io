import React, { useState } from "react";
import TEAM_DATA from "../content/team.json";

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
        src={process.env.PUBLIC_URL + member.image}
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
          <img src={process.env.PUBLIC_URL + TEAM_DATA.faculty.image} alt="Faculty" className="faculty-photo" />
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