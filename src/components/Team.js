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
    details: "PhD student in Biology (2020-2023)",
  },
  { name: "Michael Pavia", details: "PhD student in Microbiology (2018-2024)" },
  {
    name: "Jillian Ayers",
    details: "M.S. (4+1 BS, MS) student in Microbiology (2019-2021)",
  },
  { name: "Mark Reynolds", details: "PhD student in Microbiology (2015-2022)" },
  { name: "Analisa Sarno", details: "PhD student in Microbiology (2013-2021)" },
  {
    name: "Steffen Buessecker",
    details: "PhD student in Environmental Life Sciences (2013-2020)",
  },
  { name: "Julian Yu", details: "PhD student in Microbiology (2014-2020)" },
  { name: "Zeni Ramirez", details: "PhD student in Microbiology (2016-2018)" },
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
  { year: "2022", name: "Abhinav Chede", school: "Basis Chandler High School" },
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
      thesisTitle:
        "Early assessment on phages communities in Amazon Peat soils",
    },
    {
      name: "Divya Mahendra",
      degree: "Molecular Biology",
      year: 2014,
      thesisTitle:
        "Metabolic reconstruction of methane producing microbes: Methanoregula boonei 6A8 and Methanosphaerula palustris E1-9c",
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
                //key={index}
                //onMouseEnter={() =>
                //setHoveredPostdocDetails(undergraduate.backContent)
                //}
                //onMouseLeave={() => setHoveredPostdocDetails("")}
                //className="cursor-pointer transition-transform hover:scale-105"
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
                <h3>PhD</h3>
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

              {/* Undergraduate Alumni Column */}
              <div className="column">
                <h3>Undergraduate</h3>
                {undergradAlumni.map((alumni, index) => (
                  <div key={index} className="alumni-item">
                    <span>
                      {alumni.year} {" - "}
                      {alumni.name} {" - "}
                      {alumni.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Barrett Honors Thesis */}
            <h3>Barrett Honors Thesis</h3>
            <ul>
              {honorsThesis.map((thesis, index) => (
                <li key={index}>
                  <strong>{thesis.year}:</strong> {thesis.name}, {thesis.degree}
                  : <em>{thesis.thesisTitle}</em>
                </li>
              ))}
            </ul>

            {/* Undergraduate Researchers */}
            <h3>Undergraduate Researchers</h3>
            {undergraduateResearchers.map((researcherGroup, index) => (
              <div key={index}>
                <h4>{researcherGroup.year}</h4>
                <ul>
                  {researcherGroup.researchers.map((researcher, subIndex) => (
                    <li key={subIndex}>
                      <strong>{researcher.name}</strong>{" "}
                      {researcher.program ? `(${researcher.program})` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* High School Researchers */}
            <h3>High School Researchers</h3>
            <ul>
              {highSchoolResearchers.map((researcher, index) => (
                <li key={index}>
                  <strong>{researcher.year}:</strong> {researcher.name}:{" "}
                  <em>{researcher.school}</em>
                </li>
              ))}
            </ul>

            {/* Visiting Scholar*/}
            <h3>Visiting Scholar</h3>
            <ul>
              {internationalScholarsAndInterns.map((researcher, index) => (
                <li key={index}>
                  <strong>{researcher.year}:</strong> {researcher.name}:{" "}
                  <em>{researcher.researchTitle}{", "}{researcher.program}</em>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default Team;
