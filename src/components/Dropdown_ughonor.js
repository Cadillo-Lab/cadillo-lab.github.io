// Undergraduate Honors Thesis Dropdown Component
import React, { useState } from 'react';
import '../styles/Dropdown_ughonor.css'; // Make sure this CSS file is created or imported

const thesisList = [
    'Natalie Blum, 2023 - current, Environmental Engineering major, "Anaerobic oxidation of methane in wetlands".',
    'Noemi Soto, 2022 - current, Microbiology, "Expanding membrane-based isolation of terrestrial Bacteria".',
    'Hannah Brzezinski, 2022, Molecular Biology & Biotechnology major, "Ecological diversity of methanotrophs in Amazon peatlands".',
    'Brandon Bourquin, 2020, Biological Sciences major, "Evaluating the consumption rates of primary versus secondary fermentation substrates and methane production of northern peatlands".',
    'Alexander Freese, 2018 Microbiology major, "Assessment of the vertical stratification of microbial community structure in permafrost peatlands".',
    'Kyle Brown, 2018, Astrobiology major, "Biotic vs. abiotic processes in hyper-arid exoplanetary atmospheres".',
    'Jaime Lopez, 2017, Chemical Engineering major, "Trait-based Modeling of peatland methanogen communities".',
    'Jessica Spring, 2015 - 2016, Microbiology major, "Early assessment on phages communities in Amazon Peat soils".',
    'Kaitlyn Tylor, 2015-2016: "Ferrous iron, organic matter, and pH as drivers of chemodenitrification in tropical peat soil" (attending University of Illinois at Chicago from 2016).',
    'Divya Mahendra, 2013-2014: "Preliminary Metabolic Reconstruction of Methane Producing Microbes: Methanoregula boonei 6A8 and Methanosphaerula palustris E1-9c. (Currently at Masters in Biomedical Informatics, ASU).'
];

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h2>Undergraduate Honors Thesis</h2>
                <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {thesisList.map((thesis, index) => (
                        <li key={index} className="dropdown-item">
                            {index + 1}. {thesis}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
