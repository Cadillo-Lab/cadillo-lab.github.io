import React, { useState, useEffect } from 'react';
import '../styles/Team.css';
import '../styles/Dropdown.css';
import facultyImage from '../assets/faculty.png'; // Faculty photo
import gradResearchers from '../assets/gradResearchers'; // Array of graduate researcher data
import postdocResearchers from '../assets/postdocResearchers'; // Array of postdoctoral researcher data
import undergradResearchers from '../assets/undergradResearchers'; // Array of undergraduate researcher data
import Dropdown from './Dropdown'; // Import the Dropdown component
import Dropdown1 from './Dropdown_visiting'; // Import the Dropdown component
import Dropdown2 from './Dropdown_ughonor'; // Import the Dropdown component
import Dropdown3 from './Dropdown_highschool'; // Import the Dropdown component

const Team = () => {
    const [gradScrollIndex, setGradScrollIndex] = useState(0);
    const [postdocScrollIndex, setPostdocScrollIndex] = useState(0);
    const [undergradScrollIndex, setUndergradScrollIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [flippedCardIndex, setFlippedCardIndex] = useState(null); // To track which card is flipped
    const itemsPerView = 1; // Show one researcher at a time

    // Automatically scroll the carousel
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setGradScrollIndex((prevIndex) =>
                    prevIndex >= gradResearchers.length - 1 ? 0 : prevIndex + 1
                );
                setPostdocScrollIndex((prevIndex) =>
                    prevIndex >= postdocResearchers.length - 1 ? 0 : prevIndex + 1
                );
                setUndergradScrollIndex((prevIndex) =>
                    prevIndex >= undergradResearchers.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000); // Adjust the interval speed (5000ms = 5 seconds)

            return () => clearInterval(interval); // Cleanup on component unmount
        }
    }, [isPaused, gradResearchers.length, postdocResearchers.length, undergradResearchers.length]);

    const handleScroll = (direction, type) => {
        if (type === 'grad') {
            setGradScrollIndex((prevIndex) =>
                direction === 'left' ? Math.max(prevIndex - 1, 0) : Math.min(prevIndex + 1, gradResearchers.length - 1)
            );
        } else if (type === 'postdoc') {
            setPostdocScrollIndex((prevIndex) =>
                direction === 'left' ? Math.max(prevIndex - 1, 0) : Math.min(prevIndex + 1, postdocResearchers.length - 1)
            );
        } else if (type === 'undergrad') {
            setUndergradScrollIndex((prevIndex) =>
                direction === 'left' ? Math.max(prevIndex - 1, 0) : Math.min(prevIndex + 1, undergradResearchers.length - 1)
            );
        }
    };

    const handleMouseEnter = () => {
        setIsPaused(true); // Pause scrolling when hovering
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume scrolling when leaving
    };

    const handleCardClick = (index) => {
        setFlippedCardIndex(flippedCardIndex === index ? null : index); // Toggle flipping
    };

    const renderCarousel = (researchers, scrollIndex, type) => (
        <div
            className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="carousel-button left"
                onClick={() => handleScroll('left', type)}
                disabled={scrollIndex === 0}
            >
                ◀
            </button>
            <div className="grad-carousel">
                <div
                    className={`grad-card ${flippedCardIndex === scrollIndex ? 'flipped' : ''}`}
                    onClick={() => handleCardClick(scrollIndex)}
                >
                    <div className="grad-card-inner">
                        {flippedCardIndex === scrollIndex ? (
                            <div className="grad-card-back">
                                <p>{researchers[scrollIndex].bio}</p>
                            </div>
                        ) : (
                            <div className="grad-card-front">
                                <img
                                    src={researchers[scrollIndex].image}
                                    alt={researchers[scrollIndex].name}
                                    className="grad-photo"
                                />
                                <h3 className="grad-name">{researchers[scrollIndex].name}</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <button
                className="carousel-button right"
                onClick={() => handleScroll('right', type)}
                disabled={scrollIndex === researchers.length - 1}
            >
                ▶
            </button>
        </div>
    );

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
                        <p>PhD Microbiology and minor in Ecology, Cornell University 2008.
                            BS Biological Sciences, San Marcos National University, Lima, Peru 1999.

                            Hinsby Cadillo-Quiroz studies how microbes participate in an ecosystem and in applied processes. He and his research team are investigating whether microbe-mediated organismal and environmental interactions drive ecosystem processes, particularly carbon cycling. They are also examining how ecosystems, in turn, affects the ecology and evolution of microorganisms and tehir interactions.

                            Dr Cadillo-Quiroz and his collaborators focus on methane-producing processes from anaerobic, high carbon-content environments, as well as the ecological interactions between Archaea, Bacteria, plants and humans. This knowledge can allow developing small and large scale solutions for current societal or planetary needs. For instance,  Dr Cadillo-Quiroz is strongly committed to natural and engineered solutions to climate change through the power of cooperating with microbes.

                            Dr Cadillo-Quiroz’s current research studies processes in landfills, artificial wetlands, lakes and ponds, northern USA forest, and tropical peatlands in the Amazon Basin. He has been recognized with a Fulbright Scholarship, a Presidential Scholarship at Cornell University, a National Science Foundation CAREER Award, and an Honorific Doctorate in Forestry by the National University of the Peruvian Amazon.</p>
                    </div>
                </div>
            </section>

            <section className="graduates">
                <h2 className="section-title">Graduate Researchers</h2>
                {renderCarousel(gradResearchers, gradScrollIndex, 'grad')}
            </section>

            <section className="postdocs">
                <h2 className="section-title">Postdoctoral Researchers</h2>
                {renderCarousel(postdocResearchers, postdocScrollIndex, 'postdoc')}
            </section>

            <section className="undergrads">
                <h2 className="section-title">Undergraduate Researchers</h2>
                {renderCarousel(undergradResearchers, undergradScrollIndex, 'undergrad')}
            </section>

            <section className="dropdown-sections">
                <Dropdown />
                <Dropdown1 />
                <Dropdown2 />
                <Dropdown3 />
            </section>
        </div>
    );
};

export default Team;
