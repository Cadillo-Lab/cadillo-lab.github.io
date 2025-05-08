import React, { useState } from "react";
import facultyImage from "../assets/faculty-photoaidcom-cropped.png";
import MichaelImage from "../assets/placeholder.jpg";
import lillyImage from "../assets/placeholder.jpg";
import victorImage from "../assets/placeholder.jpg";
import juliaImage from "../assets/placeholder.jpg";
import aliceImage from "../assets/placeholder.jpg";
import jesusImage from "../assets/Jesus2.png";
import jieImage from "../assets/placeholder.jpg";
import janaImage from "../assets/placeholder.jpg";
import david1 from "../assets/placeholder.jpg";
import luka from "../assets/placeholder.jpg";
import ug1 from "../assets/placeholder.jpg";
import ug2 from "../assets/placeholder.jpg";
import ug3 from "../assets/placeholder.jpg";
import ug4 from "../assets/placeholder.jpg";

const Team = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [hoveredResearcherDetails, setHoveredResearcherDetails] = useState("");
  const [hoveredPostdocDetails, setHoveredPostdocDetails] = useState("");
  const [openAlumniDropdown, setOpenAlumniDropdown] = useState(false);
  const [openDropdownPhD, setOpenDropdownPhD] = useState(null);
  const [openDropdownPostdoc, setOpenDropdownPostdoc] = useState(null);
  const [openDropdownUndergrad, setOpenDropdownUndergrad] = useState(null);

  const graduateAlumni = [
    {
      name: "Victor Ochoa-Henriquez",
      details: "PhD student in Environmental Life Sciences (2023-2024)",
    },
    { name: "Lilly Vael", details: "PhD student in Microbiology (2022-2024)" },
    { name: "Julia Furedy", details: "M.S. (4+1 BS, MS) student (2021-2024)" },
    {
      name: "Camila Delgado-Montes",
      details: "Ms student in Biology (2020-2023)",
    },
    {
      name: "Michael Pavia",
      details: "PhD student in Microbiology (2018-2024)",
    },
    {
      name: "Jillian Ayers",
      details: "M.S. (4+1 BS, MS) student in Microbiology (2019-2021)",
    },
    {
      name: "Mark Reynolds",
      details: "PhD student in Microbiology (2015-2022)",
    },
    {
      name: "Analisa Sarno",
      details: "PhD student in Microbiology (2013-2021)",
    },
    {
      name: "Steffen Buessecker",
      details: "PhD student in Environmental Life Sciences (2013-2020)",
    },
    { name: "Julian Yu", details: "PhD student in Microbiology (2014-2020)" },
    { name: "Zeni Ramirez", details: "Ms student in Microbiology (2016-2018)" },
  ];

  const postdocAlumni = [
    { name: "Outi Lahteenoja", details: "Postdoctoral researcher" },
    { name: "Michal Ziv-El", details: "Postdoctoral researcher" },
    { name: "Patrick Browne", details: "Postdoctoral researcher" },
    { name: "Damien Finn", details: "Postdoctoral researcher" },
    { name: "Paul Brewer", details: "Postdoctoral researcher" },
  ];

  const handleToggleAlumni = () => {
    setOpenAlumniDropdown(!openAlumniDropdown);
  };

  const handleTogglePhD = (index) => {
    setOpenDropdownPhD(openDropdownPhD === index ? null : index);
  };

  const handleTogglePostdoc = (index) => {
    setOpenDropdownPostdoc(openDropdownPostdoc === index ? null : index);
  };

  const handleToggleUndergrad = (index) => {
    setOpenDropdownUndergrad(openDropdownUndergrad === index ? null : index);
  };

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
      name: "Jesus Marin Diaz",
      bio: "PhD. Student in Environmental Life Sciences",
      image: jesusImage,
      role: "EVO PhD student",
      backContent:
        "Jesus is a first-year Ph.D. student in Environmental Life Sciences at Arizona State University, studying carbon fluxes and ecological modeling of peatlands in the Amazon forest.\n\nHe completed his undergraduate degree in Forest Engineering at La Molina National Agrarian University (Lima, Peru), specializing in remote sensing, forest ecology, and forest biodiversity. He then pursued a master's degree in Civil Engineering at the University of Engineering and Technology (Lima, Peru), focusing on the geomorphology of Amazonian rivers, analyzing multitemporal dynamics and morpho-spatial patterns that influence island formation and river migration.\n\nJesus has extensive experience in geographical information systems (GIS) and remote sensing analysis, producing geospatial elements related to forests and rivers. He has specialized in REDD+ (Reduction of Emissions from Deforestation and Degradation) projects, contributing to the formulation of project documents, baseline establishment for GHG emission levels, LULC maps, deforestation and degradation modeling, and quantifying emission reductions for the voluntary carbon market.\n\nHis main research interest is to evaluate the interactions between geomorphological dynamics of rivers and forest ecosystems, particularly how sediment and flood presence affect carbon fluxes and stocks. Through ecological modeling, he aims to establish connections between biotic and abiotic elements of the landscape at different scales, exploring intricate ecological relationships and patterns.",
    },
    {
      name: "Wanxiang Liu",
      bio: "PhD. Candidate",
      image: MichaelImage,
      role: "TBD",
      backContent: "Blank",
    },
    {
      name: "3",
      bio: "PhD Student, Microbiology PhD Program",
      image: lillyImage,
      role: "TBD",
      backContent: "Blank",
    },
    {
      name: "4",
      bio: "PhD student",
      image: victorImage,
      role: "TBD",
      backContent: "Blank",
    },
    {
      name: "5",
      bio: "Master student",
      image: juliaImage,
      role: "TBD",
      backContent: "Blank",
    },
    {
      name: "6",
      bio: "PhD student, Biology & Society PhD Program",
      image: aliceImage,
      role: "TBD",
      backContent: "Blank",
    },
  ];

  const postdocResearchers = [
    {
      name: "TBD",
      bio: "Postdoctoral researcher",
      image: jieImage,
      role: "Postdoctoral Researcher",
      backContent: "Blank",
    },
    {
      name: "TBD",
      bio: "Postdoctoral researcher",
      image: janaImage,
      role: "Postdoctoral Researcher",
      backContent: "Blank",
    },
  ];

  const undergraduateResearchers = [
    {
      year: "2024-2025",
      researchers: [
        { name: "Aurely Sachez Carrion", program: "NSF REU" },
        { name: "David Nguyen", program: "NSF REU" },
        { name: "Peter Herrick", program: "U Maine NSF REU" },
        { name: "Roberto Quintana", program: "NSF REU" },
        { name: "Luka Castillejo Olazabal", program: "Honors Thesis" },
        { name: "Kyla Pikes", program: "ASU Online NSF REU" },
      ],
    },
    {
      year: "2023-2024",
      researchers: [
        { name: "David Nguyen" },
        { name: "Noemi Soto" },
        { name: "Natalia Soto Rodriguez", program: "Baylor College" },
        { name: "Christian Swonger", program: "NSF REU" },
        { name: "Mikayla Shrader" },
        { name: "Aurely Sachez Carrion", program: "WAESO" },
      ],
    },
    {
      year: "2022-2023",
      researchers: [
        { name: "Johanan Uchiasu" },
        { name: "Noemi Soto" },
        { name: "Natalie Blum" },
        { name: "Alexandria Quinones" },
        { name: "Mikayla Shrader" },
        { name: "Leo Soberon" },
      ],
    },
    {
      year: "2021-2022",
      researchers: [
        { name: "Joshua Hislop", program: "NSF REU" },
        { name: "Anna Burns", program: "NSF REU" },
        { name: "Sara Santiago", program: "WAESO" },
        { name: "Hannah Brzezinski", program: "LEAP" },
        { name: "Kameren Silas" },
        { name: "Rory Locket", program: "WAESO" },
      ],
    },
    {
      year: "2020-2021",
      researchers: [
        { name: "Sarah Avalle" },
        { name: "David Denogan" },
        { name: "Elizabeth Ardilla", program: "WAESO" },
        { name: "Rachel Campos" },
        { name: "Joseph Boyd" },
      ],
    },
    {
      year: "2018-2019",
      researchers: [
        { name: "Jacqueline Winston", program: "NSF REU" },
        { name: "Angela Mercado", program: "NSF REU" },
        { name: "McKaela Smith" },
        { name: "Karim Ramirez Soto" },
        { name: "Che Jimenez" },
        { name: "Majid Esaghi" },
        { name: "Jonathon Taylor" },
        { name: "Jill Ayers" },
        { name: "Maria Anak" },
        { name: "Heba Bahta" },
        { name: "Duy 'Simon' Chau" },
        { name: "Arubah Ahmed" },
        { name: "Samer Ahuad" },
        { name: "Britney Bean" },
        { name: "Alexis Pluhar" },
        { name: "Giselle Avila" },
        { name: "Sherry Hudson" },
        { name: "Jordan Canin" },
      ],
    },
    {
      year: "2017-2018",
      researchers: [
        { name: "Josue Hernandez" },
        { name: "Alexandra Kasis" },
        { name: "Sana Lohdi" },
        { name: "Bhargav Monokutia" },
        { name: "Amanda Richardson" },
        { name: "Elias Rodriguez" },
        { name: "Michael Rojo" },
        { name: "Marrisol Sanchez" },
        { name: "Vanessa Trujillo" },
        { name: "Janeth Flores" },
        { name: "Luis Gutierrez" },
        { name: "Brian Bacacao", program: "WAESO" },
        { name: "Coleen Adams", program: "CBBG" },
        { name: "Francisco Campa" },
      ],
    },
    {
      year: "2016-2017",
      researchers: [
        { name: "Zacchary Zamora" },
        { name: "Jaime Lopez" },
        { name: "Sarita Layton" },
        { name: "Andrew Martinez" },
        { name: "Sonia Sabrowski" },
        { name: "Darian Curl" },
        { name: "Emily Angeles" },
        { name: "Jana Djokic" },
        { name: "Sophia Le" },
        { name: "Chelsea Elizabeth" },
        { name: "Nabil Fidai" },
        { name: "Kendra Yin" },
      ],
    },
    {
      year: "2015-2016",
      researchers: [
        { name: "Jacob Hrjkal" },
        { name: "Jessica Spring", program: "ASM" },
        { name: "Amit Anilkumar" },
        { name: "Kaitlyn Tylor" },
        { name: "Martin Gonzales" },
        { name: "Jack Liu" },
        { name: "Frederick Elick" },
        { name: "Brittany Kaminsky" },
        { name: "Zeni Ramirez" },
        { name: "Alexander Frese" },
        { name: "Rohini Nott" },
        { name: "Keneth Barker" },
        { name: "Vanessa Hendrix" },
        { name: "Fatema Kermani" },
        { name: "Summer Rhodes" },
        { name: "Reena Ygot" },
        { name: "Debbie Chang" },
        { name: "Jack Liu" },
      ],
    },
    {
      year: "2014-2015",
      researchers: [
        { name: "Eric Hummel" },
        { name: "Pablo Cruz-Ramos" },
        { name: "Divya Mahendra" },
        { name: "Daniel Molina" },
        { name: "Deanna Becker" },
        { name: "Joseph Gonzales" },
        { name: "Roland Rightheart" },
        { name: "Jenessa Vanderberg" },
        { name: "Karen Baker" },
        { name: "Chantal Uwiringimana" },
        { name: "Atris Mustafa" },
        { name: "Emily Yee" },
        { name: "Noraldin Mustafa" },
        { name: "Carlos Courtney" },
      ],
    },
    {
      year: "2013-2014",
      researchers: [
        { name: "Jesus Montijo" },
        { name: "Jazmine Mayberry", program: "LBL" },
        { name: "Zeke Clemmens" },
        { name: "Noor Lallmamode" },
        { name: "Ashley Kirk" },
        { name: "Nghia Millard" },
        { name: "Alex Wiedman" },
        { name: "Tiffany Malsimuck" },
        { name: "Eric Hummel" },
        { name: "Logan Kurgan" },
      ],
    },
    {
      year: "2012-2013",
      researchers: [
        { name: "Viet Truong" },
        { name: "Michael Crusoe" },
        { name: "Gayle Frost" },
        { name: "Mayra Buenrostro" },
        { name: "Gracie Parish" },
        { name: "Cynthia Hurtado" },
        { name: "Pablo Cruz Ramos" },
        { name: "Sean Dunn" },
        { name: "Michael Crusoe" },
        { name: "Natasha Hizeman" },
      ],
    },
  ];

  const highSchoolResearchers = [
    {
      year: "2023",
      name: "Karishma Sivakumar",
      school: "Basis Phoenix High School",
    },
    {
      year: "2022",
      name: "Abhinav Chede",
      school: "Basis Chandler High School",
    },
    {
      year: "2017",
      name: "Farin Shiehzadegan",
      school: "Basis Chandler High School",
    },
    { year: "2017", name: "Erik Barraza Cordova", school: "North High School" },
    { year: "2016", name: "Afroza Rahman", school: "Maryvale High School" },
    { year: "2016", name: "Marissa Plata", school: "Shadow Ridge High School" },
    { year: "2016", name: "Sarah Bodansky", school: "Horizon High School" },
    {
      year: "2016",
      name: "Christina Moon",
      school: "Corona del Sol High School",
    },
    { year: "2015", name: "Rohini Nott", school: "BASIS Chandler" },
    { year: "2015", name: "Priyanka Konan", school: "Hamilton High School" },
    {
      year: "2014",
      name: "Ruohan (Hannah) Miao",
      school: "Hamilton High School",
    },
    { year: "2014", name: "Jeba Sania", school: "Paragon Science Academy" },
    { year: "2013", name: "Lindsay Wilson", school: "Bioscience High School" },
    {
      year: "2013",
      name: "Saisanjana Kalagara",
      school: "Corona del Sol High School",
    },
  ];

  const undergraduate = [
    {
      name: "David Nguyen, BS",
      bio: "Undergraduate researcher",
      image: david1,
      role: "Undergraduate Researcher",
    },
    {
      name: "Luka Castillejo Olazabal, BS",
      bio: "Undergraduate researcher",
      image: luka,
      role: "Undergraduate Researcher",
    },
    {
      name: "Placeholer, BS",
      bio: "Undergraduate researcher",
      image: ug1,
      role: "Undergraduate Researcher",
    },
    {
      name: "Placeholer, BS",
      bio: "Undergraduate researcher",
      image: ug2,
      role: "Undergraduate Researcher",
    },
    {
      name: "Placeholer, BS",
      bio: "Undergraduate researcher",
      image: ug3,
      role: "Undergraduate Researcher",
    },
    {
      name: "Placeholer, BS",
      bio: "Undergraduate researcher",
      image: ug4,
      role: "Undergraduate Researcher",
    },
  ];

  const internationalScholarsAndInterns = [
    {
      year: 2024,
      name: "Anabel Rabe",
      researchTitle: "Environmental & Sustainability",
      program: "DAAD RISE program",
    },
    {
      year: 2023,
      name: "Antonia Schindelmann",
      researchTitle: "Earth Sciences",
      program: "DAAD RISE program",
    },
    {
      year: 2022,
      name: "Sara Houbertz",
      researchTitle: "Georesource management",
      program: "DAAD RISE program",
    },
    {
      year: 2022,
      name: "Tim Giorgio Pekarev",
      researchTitle: "Natural Resource Management",
      program: "PROMOS program",
    },
    {
      year: 2022,
      name: "Swantje Furtak",
      researchTitle: "Biochemistry",
      program: "PROMOS program",
    },
    {
      year: "2020-2022",
      name: "Dr Kari Gallego Bravo",
      researchTitle: "Landfill and microbial interactions research",
      program: "Research scholar",
    },
    {
      year: 2019,
      name: "Sofia Kasper",
      researchTitle: "Geography",
      program: "DAAD RISE program",
    },
    {
      year: 2018,
      name: "Marie Jacobs",
      researchTitle: "Geography",
      program: "DAAD RISE program",
    },
    {
      year: 2018,
      name: "Dr. Catarina Martins",
      researchTitle: "Postdoctoral Research",
      program: "Endeavour program",
    },
    {
      year: 2017,
      name: "Dr. Tingting Li",
      researchTitle: "Atmospheric Physics",
      program: "Visiting Scholar",
    },
    {
      year: 2017,
      name: "Lena Hartmann",
      researchTitle: "Biotechnology",
      program: "DAAD RISE program",
    },
    {
      year: 2017,
      name: "Marcella Beck",
      researchTitle: "Environmental Sciences",
      program: "DAAD RISE program",
    },
    {
      year: "2012-2013",
      name: "Dr. Jiaxue Song",
      researchTitle: "Environmental Sciences and Engineering",
      program: "Visiting Scholar",
    },
    {
      year: 2015,
      name: "Esther Smollich",
      researchTitle: "Environmental Sciences",
      program: "DAAD RISE program",
    },
    {
      year: 2012,
      name: "Steffen Bussecker",
      researchTitle: "GeoEcology",
      program: "DAAD RISE program",
    },
  ];

  const graduateStudents = [
    {
      name: "Victor Ochoa-Henriquez",
      program: "Environmental Life Sciences",
      year: "2023-2024",
    },
    {
      name: "Lilly Vael",
      program: "Microbiology",
      year: "2022-2024",
    },
    {
      name: "Julia Furedy",
      program: "M.S. (4+1 BS, MS)",
      year: "2021-2024",
    },
    {
      name: "Camila Delgado-Montes",
      program: "Biology",
      year: "2020-2023",
    },
    {
      name: "Michael Pavia",
      program: "Microbiology",
      year: "2018-2024",
    },
    {
      name: "Jillian Ayers",
      program: "Microbiology (4+1 BS, MS)",
      year: "2019-2021",
    },
    {
      name: "Mark Reynolds",
      program: "Microbiology",
      year: "2015-2022",
    },
    {
      name: "Analisa Sarno",
      program: "Microbiology",
      year: "2013-2021",
    },
    {
      name: "Steffen Buessecker",
      program: "Environmental Life Sciences",
      year: "2013-2020",
    },
    {
      name: "Julian Yu",
      program: "Microbiology",
      year: "2014-2020",
    },
    {
      name: "Zeni Ramirez",
      program: "Microbiology",
      year: "2016-2018",
    },
  ];

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
      name: "Damien Finn, Postdoctoral researcher",
      details: "Details about Damien...",
    },
    {
      name: "Damien Finn, Postdoctoral researcher",
      details: "Details about Damien...",
    },
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
      degree: "Environmental Engineering",
      year: 2023,
      thesisTitle: "Anaerobic oxidation of methane in wetlands",
    },
    {
      name: "Noemi Soto",
      degree: "Microbiology",
      year: 2023,
      thesisTitle: "Expanding membrane-based isolation of terrestrial Bacteria",
    },
    {
      name: "Hannah Brzezinski",
      degree: "Molecular Biology & Biotechnology",
      year: 2022,
      thesisTitle: "Ecological diversity of methanotrophs in Amazon peatlands",
    },
    {
      name: "Brandon Bourquin",
      degree: "Biological Sciences",
      year: 2020,
      thesisTitle:
        "Evaluating the consumption rates of primary versus secondary fermentation substrates and methane production of northern peatlands",
    },
    {
      name: "Alexander Freese",
      degree: "Microbiology",
      year: 2018,
      thesisTitle:
        "Assessment of the vertical stratification of microbial community structure in permafrost peatlands",
    },
    {
      name: "Kyle Brown",
      degree: "Astrobiology",
      year: 2018,
      thesisTitle:
        "Biotic vs. abiotic processes in hyper-arid exoplanetary atmospheres",
    },
    {
      name: "Jaime Lopez",
      degree: "Chemical Engineering",
      year: 2017,
      thesisTitle: "Trait-based Modeling of peatland methanogen communities",
    },
    {
      name: "Kaitlyn Tylor",
      degree: "Biological Sciences",
      year: 2016,
      thesisTitle: "Expanding membrane-based isolation of terrestrial Bacteria",
    },
    {
      name: "Jessica Spring",
      degree: "Microbiology",
      year: 2016,
      thesisTitle: "Early assessment on phages communities in Amazon Peat soils",
    },
    {
      name: "Divya Mahendra",
      degree: "Molecular Biology",
      year: 2014,
      thesisTitle:
        "Metabolic reconstruction of methane producing microbes: Methanoregula boonei 6A8 and Methanosphaerula palustris E1-9c",
    },
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
          Research Team
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
                    setHoveredPostdocDetails(researcher.backContent)
                  }
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

      {/* Undergraduate Students Section */}
      <section className="mb-12">
        <h2 className="section-title-3" style={{ color: "black" }}>
          Undergraduate Researchers
        </h2>
        <div className="flex flex-wrap gap-8">
          {/* Left Panel: Undergraduate Researchers */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4">
              {undergraduate.map((undergraduate, index) => (
                <div
                  key={index}
                  // onMouseEnter={() =>
                  // setHoveredPostdocDetails(undergraduate.backContent)
                  // }
                  // onMouseLeave={() => setHoveredPostdocDetails("")}
                  // className="cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={undergraduate.image}
                      alt={undergraduate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2-3 text-sm">
                    {undergraduate.name}
                  </p>
                  <p className="text-center text-gray-500">
                    {undergraduate.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="alumni">
        <h2 className="section-title-4" style={{ color: "black" }}>
          Alumni
        </h2>
        <div className="flex" onClick={handleToggleAlumni}>
          <span>Alumni</span>
          <button>
            <span
              className={`transform ${openAlumniDropdown ? "rotate-180" : ""}`}
            >
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
                {graduateAlumni.map((alumni, index) => (
                  <div key={index} className="alumni-item">
                    <span>{alumni.name}</span>
                    <p>{alumni.details}</p>
                  </div>
                ))}
              </div>

              {/* Postdoc Alumni Column */}
              <div className="column">
                <h3>Postdoc</h3>
                {postdocAlumni.map((alumni, index) => (
                  <div key={index} className="alumni-item">
                    <span>{alumni.name}</span>
                    <p>{alumni.details}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Barrett Honors Thesis - Modified for better display */}
            <h3>Barrett Honors Thesis</h3>
            <div className="honors-thesis-container">
              {/* Group by year and sort in descending order */}
              {Object.entries(
                honorsThesis.reduce((acc, thesis) => {
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
            
            {/* Undergraduate Researchers - Keep as is */}
            <h3>Undergraduate Researchers</h3>
            {undergraduateResearchers.map((researcherGroup, index) => (
              <div key={index}>
                <h4>{researcherGroup.year}</h4>
                <p>
                  {researcherGroup.researchers.map((researcher, subIndex) => (
                    <span key={subIndex}>
                      <strong>{researcher.name}</strong>
                      {researcher.program ? ` (${researcher.program})` : ""}
                      {subIndex < researcherGroup.researchers.length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
                </p>
              </div>
            ))}
            
            {/* MODIFIED: High School Researchers - with extra spacing and left alignment */}
            <h3 className="mt-8 mb-3">High School Researchers</h3>
            <div className="researchers-container">
              {Object.entries(
                highSchoolResearchers.reduce((acc, researcher) => {
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
            
            {/* MODIFIED: Visiting Scholar - with left alignment */}
            <h3 className="mt-4 mb-3">Visiting Scholar</h3>
            <div className="scholars-container">
              {Object.entries(
                internationalScholarsAndInterns.reduce((acc, scholar) => {
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