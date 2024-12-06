import React, { useState, useEffect } from 'react';
import '../styles/Research.css';
import amazonImage from '../assets/amazon.png';
import northernImage from '../assets/northern.jpg';
import bannerImage1 from '../assets/research-image.png';
import bannerImage2 from '../assets/research-banner.jpg';

const Research = () => {
    const bannerImages = [bannerImage1, bannerImage2];
    const topicImages = [amazonImage, northernImage];
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState('');

    const projects = [
        {
            title: 'Amazon Peatlands: Interdisciplinary studies to understand ecosystem, microbes, and fluxes',
            description: 'Detailed description of the Amazon Peatlands project...'
        },
        {
            title: 'Northern Peatlands: Climate and its effects on microbial activity',
            description: 'Detailed description of the Northern Peatlands project...'
        },
        {
            title: 'CH4 and GHG emissions as microbiome responses to manipulations: Landfill case',
            description: 'Detailed description of the CH4 and GHG emissions project...'
        },
        {
            title: 'Culturable Diversity of Archaea and Bacteria and the role of their traits in Ecosystem functions',
            description: 'Detailed description of the Culturable Diversity of Archaea and Bacteria project...'
        },
        {
            title: 'Landscape ecology of soil, GHG, and microbiomes post gold mining in the Amazon',
            description: 'Detailed description of the Landscape Ecology of Soil project...'
        },
        {
            title: 'Anthropogenic drivers and interface with carbon stability in soils',
            description: 'Detailed description of the Anthropogenic Drivers project...'
        }
    ];

    const openDialog = (content) => {
        setDialogContent(content);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setDialogContent('');
    };

    // Banner image navigation functions
    const nextBanner = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    };

    const prevBanner = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
    };

    // Topic image navigation functions
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
                <img src={bannerImages[currentBannerIndex]} alt="Research Banner" className="banner-image" />
                <button className="nav-button next" onClick={nextBanner}>❯</button>
            </div>

            {/* Topics Section */}
            <section className="topics">
                <h2>Topics</h2>
                <p>
                    The Cadillo Lab (Ecology of Microbes and Ecosystems) engages in interdisciplinary and transdisciplinary projects,
                    spanning molecular, microbial, ecological, spatial, and applied sciences.
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

            {/* Current Projects Section */}
            <section className="projects">
                <h2>Current Projects</h2>
                <ul className="accordion">
                    {projects.map((project, index) => (
                        <li key={index}>
                            <input type="checkbox" id={`project${index}`} />
                            <label htmlFor={`project${index}`} onClick={() => openDialog(project.description)}>
                                {project.title}
                            </label>
                            <div className="content"></div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Dialog Box */}
            {isDialogOpen && (
                <div className="dialog-overlay" onClick={closeDialog}>
                    <div className="dialog-box">
                        <h3>Project Details</h3>
                        <p>{dialogContent}</p>
                        <button onClick={closeDialog}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Research;
