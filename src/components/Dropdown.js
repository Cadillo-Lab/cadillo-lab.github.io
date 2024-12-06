import React, { useState } from 'react';
import '../styles/Dropdown.css'; // Import your CSS for styling

// List of alumni
const alumniList = [
    'Steffen Buesssecker, PhD student.',
    'Analissa Sarno, PhD student.',
    'Mark Reynolds, PhD student.',
    'Outi Lahteenojia, Postdoctoral researcher.',
    'Michal Ziv-El, Postdoctoral researcher.',
    'Patrick Browne, Postdoctoral researcher.',
    'Damien Finn, Postdoctoral researcher.',
    'Paul Brewer, Postdoctoral researcher.',
    'Jillian Ayers, BS and MS student.',
    'Gandhar Pandit, MS student.',
    'Zeni Ramirez, BS and MS student.',
];

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to handle the dropdown's open/close state
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h2>Graduate/Postdoctoral Alumni</h2>
                <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {alumniList.map((alumni, index) => (
                        <li key={index} className="dropdown-item">
                            {index + 1}. {alumni}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
