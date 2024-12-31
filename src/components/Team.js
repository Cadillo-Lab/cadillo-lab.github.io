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
    "Steffen Buessecker, PhD student",
    "Analissa Sarno, PhD student",
    "Mark Reynolds, PhD student",
    "Outi Lahteenoja, Postdoctoral researcher",
    "Michal Ziv-El, Postdoctoral researcher",
    "Patrick Browne, Postdoctoral researcher",
    "Damien Finn, Postdoctoral researcher",
    "Paul Brewer, Postdoctoral researcher",
    "Jillian Ayers, BS and MS student",
    "Gandhar Pandit, MS student",
    "Zeni Ramirez, BS and MS student",
  ];

  const ugstudentData = ["Zack Brownell", "Noemi Soto"];

  const visitingScientists = [
    "Dr. Jiaxue Song, Assistant Professor, Department of Environmental Science and Engineering at Shanghai Normal University, China. 2012-2013.",
  ];

  const honorsThesis = [
    {
      name: "Natalie Blum",
      year: "2023 - current",
      major: "Environmental Engineering",
      thesis: "Anaerobic oxidation of methane in wetlands",
    },
    {
      name: "Noemi Soto",
      year: "2022 - current",
      major: "Microbiology",
      thesis: "Expanding membrane-based isolation of terrestrial Bacteria",
    },
  ];

  const undergradAlumni = {
    "2021-2022": [
      "Joshua Hislop (NSF REU)",
      "Anna Burns (NSF REU)",
      "Sara Santiago (WAESO)",
      "Hannah Brzezinski (LEAP)",
      "Kameren Silas",
      "Rory Locket (WAESO)",
    ],
    "2020-2021": [
      "Sarah Avalle",
      "David Denogan",
      "Elizabeth Ardilla (WAESO)",
      "Rachel Campos",
      "Joseph Boyd",
    ],
    "2018-2019": [
      "Jacqueline Winston (NSF REU)",
      "Angela Mercado (Engineering)",
      "Elias Rodriguez (Microbiology)",
      "Alexandra Gernandez (Engineering)",
      "Jordan Canin (Microbiology)",
      "Nandini Mishra (Biochemistry)",
      "Morgan Yorkell (Microbiology)",
      "Hebah Bahta (Microbiology)",
    ],
  };

  const highSchoolStudents = [
    {
      name: "Sarah Bodansky",
      year: "2015-2016",
      school: "Horizon High School",
      achievement:
        "Research project presented at the Science and Engineering Fair - Microbiology",
    },
    {
      name: "Christina Moon",
      year: "2015-2016",
      school: "Corona del Sol High School",
      achievement:
        "Research project presented at the Science and Engineering Fair - Microbiology",
    },
  ];

  return (
    <div className="team-page">
      {/* Faculty Section - Keep original */}
      <section className="faculty">
        <h2 className="section-title">Faculty</h2>
        <div className="faculty-container">
          <img src={facultyImage} alt="Faculty" className="faculty-photo" />
          <div className="faculty-info">
            <h2>Hinsby Cadillo-Quiroz</h2>
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
      <section className="mb-12">
        <h2 className="section-title">Graduate Researchers</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4">
              {gradResearchers.map((researcher, index) => (
                <div
                  key={index}
                  onClick={() => handleGradClick(researcher)}
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
                  {/* Add the role below the name */}
                  <p className="text-center text-xs text-gray-500">
                    {researcher.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-gray-100 p-4 rounded-lg min-h-[300px]">
            <p className="whitespace-pre-line">
              {selectedGradText ||
                "Click on a graduate researcher's image to see their details"}
            </p>
          </div>
        </div>
      </section>

      {/* New Postdoctoral Researchers Section */}
      <section className="mb-12">
        <h2 className="section-title">Postdoctoral Researchers</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {postdocResearchers.map((researcher, index) => (
                <div
                  key={index}
                  onClick={() => handlePostdocClick(researcher)}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={researcher.image}
                      alt={researcher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2-3 text-sm">{researcher.name}</p>
                  {/* Add the role below the name */}
                  <p className="text-cen3ter text-gray-500">
                    {researcher.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-gray-100 p-4 rounded-lg min-h-[300px]">
            <p className="whitespace-pre-line">
              {selectedPostdocText ||
                "Click on a postdoctoral researcher's image to see their details"}
            </p>
          </div>
        </div>
      </section>

      <section className="alumni">
        <h2 className="section-title">Graduate/Postdoctoral Alumni</h2>
        <ul className="alumni-list">
          {alumniData.map((alumni, index) => (
            <li key={index} className="alumni-item">
              {alumni}
            </li>
          ))}
        </ul>
      </section>

      {/* Other sections remain the same */}
      <section className="Undergraduate">
        <h2 className="section-title">Undergraduate Students</h2>
        <ul className="ug-list">
          {ugstudentData.map((student, index) => (
            <li key={index} className="alumni-item">
              {student}
            </li>
          ))}
        </ul>
      </section>

      <section className="honors">
        <h2 className="section-title">Undergraduate Honors Thesis</h2>
        <ul className="honors-list">
          {honorsThesis.map((student, index) => (
            <li key={index} className="honors-item">
              <strong>{student.name}</strong>, {student.year}, {student.major}{" "}
              major, "{student.thesis}"
            </li>
          ))}
        </ul>
      </section>

      <section className="visiting">
        <h2 className="section-title">Visiting Scientists</h2>
        <ul className="visiting-list">
          {visitingScientists.map((scientist, index) => (
            <li key={index} className="visiting-item">
              {scientist}
            </li>
          ))}
        </ul>
      </section>

      <section className="undergrad-alumni">
        <h2 className="section-title"></h2>

        <div className="undergrad-section">
          <h3>Undergraduate Alumni</h3>
          {Object.entries(undergradAlumni).map(([year, students]) => (
            <div key={year} className="year-group">
              <h4>{year}</h4>
              <ul className="student-list">
                {students.map((student, index) => (
                  <li key={index}>{student}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="highschool-section">
          <h3>High School Students</h3>
          <div className="note">
            <p>
              <em>
                High school students participate in our lab through the
                Southwest Center for Education and the Natural Environment
                (SCENE) program in partnership with local high school students
                and ASU's Global Institute of Sustainability
              </em>
            </p>
          </div>
          <ul className="highschool-list">
            {highSchoolStudents.map((student, index) => (
              <li key={index} className="highschool-item">
                <strong>{student.name}</strong>, {student.year},{" "}
                {student.school}.
                {student.achievement && <span> {student.achievement}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Team;
