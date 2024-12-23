// Team.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Team.css';
import facultyImage from '../assets/faculty.png';
import MichaelImage from '../assets/Michael.png';

const Team = () => {
    const [currentGradIndex, setCurrentGradIndex] = useState(0);
    const [currentPostdocIndex, setCurrentPostdocIndex] = useState(0);

    const gradResearchers = [
        {
            name: "Michael Pavia",
            bio: "PhD. Candidate",
            image: MichaelImage,
            // Add fallback image handling
            onError: (e) => {
                e.target.src = '../assets/default-profile.png';
                e.target.onerror = null;
            }
        },
        {
            name: "Graduate Researcher 2",
            bio: "PhD student in Microbiology Program",
            image: "grad2-image.jpg"
        },
        {
            name: "Graduate Researcher 3",
            bio: "PhD student in Environmental Engineering",
            image: "grad3-image.jpg"
        },
        {
            name: "Graduate Researcher 4",
            bio: "PhD student in Biology Program",
            image: "grad4-image.jpg"
        },
        {
            name: "Graduate Researcher 5",
            bio: "PhD student in Environmental Science",
            image: "grad5-image.jpg"
        }
    ];

    const postdocResearchers = [
        {
            name: "Postdoc Researcher 1",
            bio: "Research focus on microbial ecology",
            image: "postdoc1-image.jpg"
        },
        {
            name: "Postdoc Researcher 2",
            bio: "Research focus on environmental engineering",
            image: "postdoc2-image.jpg"
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
        }, 2000);

        const postdocInterval = setInterval(() => {
            setCurrentPostdocIndex((prevIndex) => 
                prevIndex === postdocResearchers.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => {
            clearInterval(gradInterval);
            clearInterval(postdocInterval);
        };
    }, []);

    return (
        <div className="team-page">
            <section className="faculty">
                <h2 className="section-title">Faculty</h2>
                <div className="faculty-container">
                    <img src={facultyImage} alt="Faculty" className="faculty-photo" />
                    <div className="faculty-info">
                        <h2>Hinsby Cadillo-Quiroz</h2>
                        <p>Associate Professor</p>
                        <p>Email: hinsby@asu.edu</p>
                        <p>PhD Microbiology and minor in Ecology, Cornell University 2008...</p>
                    </div>
                </div>
            </section>

            <section className="researchers">
                <h2 className="section-title">Graduate Researchers</h2>
                <div className="researcher-carousel">
                    <div className="carousel-container">
                        {gradResearchers.map((researcher, index) => (
                            <div 
                                key={index} 
                                className={`carousel-item ${index === currentGradIndex ? 'active' : ''}`}
                            >
                                <div className="researcher-circle">
                                    <img 
                                        src={researcher.image} 
                                        alt={researcher.name} 
                                        className="researcher-photo"
                                    />
                                </div>
                                <div className="researcher-info">
                                    <h3>{researcher.name}</h3>
                                    <p>{researcher.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-indicators">
                        {gradResearchers.map((_, index) => (
                            <span 
                                key={index} 
                                className={`indicator ${index === currentGradIndex ? 'active' : ''}`}
                                onClick={() => setCurrentGradIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="researchers">
                <h2 className="section-title">Postdoctoral Researchers</h2>
                <div className="researcher-carousel">
                    <div className="carousel-container">
                        {postdocResearchers.map((researcher, index) => (
                            <div 
                                key={index} 
                                className={`carousel-item ${index === currentPostdocIndex ? 'active' : ''}`}
                            >
                                <div className="researcher-circle">
                                    <img 
                                        src={researcher.image} 
                                        alt={researcher.name} 
                                        className="researcher-photo"
                                    />
                                </div>
                                <div className="researcher-info">
                                    <h3>{researcher.name}</h3>
                                    <p>{researcher.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-indicators">
                        {postdocResearchers.map((_, index) => (
                            <span 
                                key={index} 
                                className={`indicator ${index === currentPostdocIndex ? 'active' : ''}`}
                                onClick={() => setCurrentPostdocIndex(index)}
                            />
                        ))}
                    </div>
                </div>
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
