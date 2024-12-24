// Team.jsx
import React, { useState, useEffect } from 'react';
import facultyImage from '../assets/faculty.png';
import MichaelImage from '../assets/Michael.png';
import lillyImage from '../assets/lilly.jpg';
import victorImage from '../assets/Victor.jpg';
import juliaImage from '../assets/Julia.png';
import aliceImage from '../assets/Alice.png';
import jesusImage from '../assets/Jesus2.png';
import jieImage from '../assets/jie.jpg';
import janaImage from '../assets/Jana_2.png';

const Team = () => {
    const [currentGradIndex, setCurrentGradIndex] = useState(0);
    const [currentPostdocIndex, setCurrentPostdocIndex] = useState(0);
    const [flippedStates, setFlippedStates] = useState({});

    const handleFlip = (index, section) => {
        setFlippedStates(prev => ({
            ...prev,
            [`${section}-${index}`]: !prev[`${section}-${index}`]
        }));
    };

    const gradResearchers = [
        {
            name: "Michael Pavia",
            bio: "PhD. Candidate",
            image: MichaelImage,
            backContent: "Research focus: Studying microbial communities in wetland ecosystems"
        },
        {
            name: "Lilly Vael",
            bio: "PhD Student, Microbiology PhD Program",
            image: lillyImage,
            backContent: "Research focus: Investigating microbial interactions in anaerobic environments"
        },
        {
            name: "Victor Ochoa-Henriquez",
            bio: "PhD student",
            image: victorImage,
            backContent: "Research focus: Analyzing methane-cycling processes in natural ecosystems"
        },
        {
            name: "Julia C. Furedy",
            bio: "Master student",
            image: juliaImage,
            backContent: "Research focus: Environmental microbiology and ecosystem processes"
        },
        {
            name: "Alice Sansonetti",
            bio: "PhD student, Biology & Society PhD Program",
            image: aliceImage,
            backContent: "Research focus: Studying the intersection of microbial ecology and society"
        },
        {
            name: "Jesus Marin Diaz",
            bio: "PhD. Student in Environmental Life Sciences",
            image: jesusImage,
            backContent: "Research focus: Environmental microbiology and biogeochemistry"
        }
    ];

    const postdocResearchers = [
        {
            name: "Jie Dai, PhD",
            bio: "Postdoctoral researcher",
            image: jieImage,
            backContent: "Research interests: Microbial ecology, biogeochemistry, and environmental microbiology. Currently working on understanding methane-cycling microorganisms in wetland ecosystems."
        },
        {
            name: "Jana Taumer, PhD",
            bio: "Postdoctoral researcher",
            image: janaImage,
            backContent: "Research focus: Investigating microbial communities in anaerobic environments and their role in carbon cycling. Expertise in molecular biology and bioinformatics."
        }
    ];

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
        "Zeni Ramirez, BS and MS student"
    ];

    const ugstudentData = [
        "Zack Brownell",
        "Noemi Soto"
    ];

    const visitingScientists = [
        "Dr. Jiaxue Song, Assistant Professor, Department of Environmental Science and Engineering at Shanghai Normal University, China. 2012-2013."
    ];

    const honorsThesis = [
        {
            name: "Natalie Blum",
            year: "2023 - current",
            major: "Environmental Engineering",
            thesis: "Anaerobic oxidation of methane in wetlands"
        },
        {
            name: "Noemi Soto",
            year: "2022 - current",
            major: "Microbiology",
            thesis: "Expanding membrane-based isolation of terrestrial Bacteria"
        }
    ];

    const undergradAlumni = {
        "2021-2022": ["Joshua Hislop (NSF REU)", "Anna Burns (NSF REU)", "Sara Santiago (WAESO)", 
                      "Hannah Brzezinski (LEAP)", "Kameren Silas", "Rory Locket (WAESO)"],
        "2020-2021": ["Sarah Avalle", "David Denogan", "Elizabeth Ardilla (WAESO)", 
                      "Rachel Campos", "Joseph Boyd"],
        "2018-2019": ["Jacqueline Winston (NSF REU)", "Angela Mercado (Engineering)", 
                      "Elias Rodriguez (Microbiology)", "Alexandra Gernandez (Engineering)", 
                      "Jordan Canin (Microbiology)", "Nandini Mishra (Biochemistry)", 
                      "Morgan Yorkell (Microbiology)", "Hebah Bahta (Microbiology)"]
    };

    const highSchoolStudents = [
        {
            name: "Sarah Bodansky",
            year: "2015-2016",
            school: "Horizon High School",
            achievement: "Research project presented at the Science and Engineering Fair - Microbiology"
        },
        {
            name: "Christina Moon",
            year: "2015-2016",
            school: "Corona del Sol High School",
            achievement: "Research project presented at the Science and Engineering Fair - Microbiology"
        }
    ];

    useEffect(() => {
        const gradInterval = setInterval(() => {
            setCurrentGradIndex((prevIndex) => 
                prevIndex === gradResearchers.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        const postdocInterval = setInterval(() => {
            setCurrentPostdocIndex((prevIndex) => 
                prevIndex === postdocResearchers.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            clearInterval(gradInterval);
            clearInterval(postdocInterval);
        };
    }, []);

    const ResearcherCarousel = ({ researchers, currentIndex, setCurrentIndex, section }) => (
    <div className="researcher-carousel">
        <div className="carousel-container">
            {researchers.map((researcher, index) => (
                <div 
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    style={{
                        // Ensure all items are positioned absolutely but only current one is visible
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        opacity: index === currentIndex ? 1 : 0,
                        pointerEvents: index === currentIndex ? 'auto' : 'none', // Only allow interactions with visible card
                        zIndex: index === currentIndex ? 2 : 1
                    }}
                >
                    <div 
                        className={`researcher-flip-card ${flippedStates[`${section}-${index}`] ? 'flipped' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling
                            handleFlip(index, section);
                        }}
                    >
                        <div className="researcher-flip-inner">
                            {/* Front of card */}
                            <div className="researcher-flip-front">
                                <div className="researcher-info">
                                    <h3>{researcher.name}</h3>
                                    <p>{researcher.bio}</p>
                                </div>
                                <div className="researcher-circle">
                                    <img 
                                        src={researcher.image}
                                        alt={researcher.name}
                                        className="researcher-photo"
                                    />
                                </div>
                            </div>

                            {/* Back of card */}
                            <div className="researcher-flip-back">
                                <p>{researcher.backContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="carousel-indicators">
            {researchers.map((_, index) => (
                <span 
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
    </div>
);

    return (
        <div className="team-page">
            {/* Faculty Section */}
            <section className="faculty">
                <h2 className="section-title">Faculty</h2>
                <div className="faculty-container">
                    <img src={facultyImage} alt="Faculty" className="faculty-photo" />
                    <div className="faculty-info">
                        <h2>Hinsby Cadillo-Quiroz</h2>
                        <p className="faculty-title">Associate Professor</p>
                        <p className="faculty-contact">Email: hinsby@asu.edu</p>
                        
                        <div className="faculty-education">
                            <p>PhD Microbiology and minor in Ecology, Cornell University 2008.</p>
                            <p>BS Biological Sciences, San Marcos National University, Lima, Peru 1999.</p>
                        </div>

                        <div className="faculty-bio">
                            <p>Hinsby Cadillo-Quiroz studies how microbes participate in an ecosystem and in applied processes. He and his research team are investigating whether microbe-mediated organismal and environmental interactions drive ecosystem processes, particularly carbon cycling. They are also examining how ecosystems, in turn, affects the ecology and evolution of microorganisms and their interactions.</p>
                            <p>Dr Cadillo-Quiroz and his collaborators focus on methane-producing processes from anaerobic, high carbon-content environments, as well as the ecological interactions between Archaea, Bacteria, plants and humans. This knowledge can allow developing small and large scale solutions for current societal or planetary needs. For instance, Dr Cadillo-Quiroz is strongly committed to natural and engineered solutions to climate change through the power of cooperating with microbes.</p>
                            <p>Dr Cadillo-Quiroz's current research studies processes in landfills, artificial wetlands, lakes and ponds, northern USA forest, and tropical peatlands in the Amazon Basin. He has been recognized with a Fulbright Scholarship, a Presidential Scholarship at Cornell University, a National Science Foundation CAREER Award, and an Honorific Doctorate in Forestry by the National University of the Peruvian Amazon.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Graduate Researchers Section */}
            <section className="researchers">
                <h2 className="section-title">Graduate Researchers</h2>
                <ResearcherCarousel 
                    researchers={gradResearchers}
                    currentIndex={currentGradIndex}
                    setCurrentIndex={setCurrentGradIndex}
                    section="grad"
                />
            </section>

            {/* Postdoctoral Researchers Section */}
            <section className="researchers">
                <h2 className="section-title">Postdoctoral Researchers</h2>
                <ResearcherCarousel 
                    researchers={postdocResearchers}
                    currentIndex={currentPostdocIndex}
                    setCurrentIndex={setCurrentPostdocIndex}
                    section="postdoc"
                />
            </section>

            {/* Other sections remain the same */}
            <section className="Undergraduate">
                <h2 className="section-title">Undergraduate Students</h2>
                <ul className="ug-list">
                    {ugstudentData.map((student, index) => (
                        <li key={index} className="alumni-item">{student}</li>
                    ))}
                </ul>
            </section>

            <section className="alumni">
                <h2 className="section-title">Graduate/Postdoctoral Alumni</h2>
                <ul className="alumni-list">
                    {alumniData.map((alumni, index) => (
                        <li key={index} className="alumni-item">{alumni}</li>
                    ))}
                </ul>
            </section>

            <section className="visiting">
                <h2 className="section-title">Visiting Scientists</h2>
                <ul className="visiting-list">
                    {visitingScientists.map((scientist, index) => (
                        <li key={index} className="visiting-item">{scientist}</li>
                    ))}
                </ul>
            </section>

            <section className="honors">
                <h2 className="section-title">Undergraduate Honors Thesis</h2>
                <ul className="honors-list">
                    {honorsThesis.map((student, index) => (
                        <li key={index} className="honors-item">
                            <strong>{student.name}</strong>, {student.year}, {student.major} major, "{student.thesis}"
                        </li>
                    ))}
                </ul>
            </section>
            
            
            <section className="undergrad-alumni">
                <h2 className="section-title">Undergrad and High School Alumni</h2>
                
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
                    <h3>Research Experience for High School Students</h3>
                    <div className="note">
                        <p><em>High school students participate in our lab through the Southwest Center 
                        for Education and the Natural Environment (SCENE) program in partnership with 
                        local high school students and ASU's Global Institute of Sustainability</em></p>
                    </div>
                    <ul className="highschool-list">
                        {highSchoolStudents.map((student, index) => (
                            <li key={index} className="highschool-item">
                                <strong>{student.name}</strong>, {student.year}, {student.school}. 
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