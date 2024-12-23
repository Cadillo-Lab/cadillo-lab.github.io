import React, { useState } from 'react';
import '../styles/Research.css';

// Import your images
import bannerImage1 from '../assets/research1.png';
import bannerImage2 from '../assets/research-banner.jpg';
import amazonImage from '../assets/amazon.png';
import northernImage from '../assets/northern.jpg';

const Research = () => {
    const bannerImages = [bannerImage1, bannerImage2];
    const topicImages = [amazonImage, northernImage];
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const projects = [
        {
            title: 'Amazon Peatlands: interdisciplinary studies to understand ecosystem, microbes and fluxes',
            content: `Methane (CH4) concentrations in the global atmosphere are increasing, with rapid acceleration observed in recent years. The exact cause of such increase is uncertain, however isotopic evidence and transport models point to a biogenic source – tropical wetlands and the Amazon basin. In fact, modeled remote sensing products suggest the occurrence of key regional CH4 hotspot regions over the Amazon. Our work focus on those regions as areas of overlap with Amazon peatlands and possible control on emissions, also as regions where anthropogenic pressures are increasing through deforestation, agriculture and mining, and also as regions where local communities are disproportionally affected by climate change and conservation efforts yet communities are the key to possible natural solutions.`
        },
        {
            title: 'Northern peatlands: Climate and its effects on microbial activity',
            content: 'Detailed content about Northern peatlands and their relationship with climate change...'
        },
        {
            title: 'CH4 and GHG emissions as microbiome responses to manipulations: Landfill case',
            content: 'Information about microbiome responses in landfill environments...'
        },
        {
            title: 'Culturable Diversity of Archaea and Bacteria and the role of their traits in Ecosystem functions',
            content: 'Details about microbial diversity and ecosystem functions...'
        },
        {
            title: 'Landscape ecology of soil, GHG, and microbiomes post gold mining in the Amazon',
            content: 'Research findings on post-mining ecological impacts...'
        },
        {
            title: 'Anthropogenic drivers and interface with carbon stability in soils',
            content: 'Analysis of human impacts on soil carbon stability...'
        }
    ];

    // Banner navigation functions
    const nextBanner = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    };

    const prevBanner = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
    };

    // Topic navigation functions
    const nextTopic = () => {
        setCurrentTopicIndex((prevIndex) => (prevIndex + 1) % topicImages.length);
    };

    const prevTopic = () => {
        setCurrentTopicIndex((prevIndex) => (prevIndex - 1 + topicImages.length) % topicImages.length);
    };

    return (
        <div className="research">
            {/* Banner Section */}
            <div className="banner">
                <button className="nav-button prev" onClick={prevBanner}>❮</button>
                <img 
                    src={bannerImages[currentBannerIndex]} 
                    alt="Research Banner" 
                    className="banner-image" 
                />
                <button className="nav-button next" onClick={nextBanner}>❯</button>
            </div>

            {/* Topics Section */}
            <section className="topics">
                <h2>Topics</h2>
                <p>
                    The Cadillo Lab (Ecology of Microbes and Ecosystems) engages in interdisciplinary 
                    and transdisciplinary projects, spanning molecular, microbial, ecological, spatial, 
                    and applied sciences.
                </p>
                <div className="topics-slideshow">
                    <button className="nav-button prev" onClick={prevTopic}>❮</button>
                    <img
                        src={topicImages[currentTopicIndex]}
                        alt={`Topic ${currentTopicIndex}`}
                        className="topic-image"
                    />
                    <button className="nav-button next" onClick={nextTopic}>❯</button>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects">
                <h2>Current Projects and Interests</h2>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="project-header"
                            >
                                <span className="project-title">{project.title}</span>
                                <span className={`dropdown-arrow ${expandedIndex === index ? 'rotated' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <div className={`project-content ${expandedIndex === index ? 'expanded' : ''}`}>
                                <p>{project.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Research;