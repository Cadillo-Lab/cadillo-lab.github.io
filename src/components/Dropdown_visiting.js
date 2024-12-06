import React, { useState } from 'react';
import '../styles/Dropdown.css'; // Import your CSS for styling

// List of visiting scientists
const visitingScientistsList = [
    'Dr. Jiaxue Song, Assistant Professor, Department of Environmental Science and Engineering at Shanghai Normal University, China. 2012-2013.',
];

const VisitingScientistsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to handle the dropdown's open/close state
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h2>Visiting Scientists</h2>
                <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {visitingScientistsList.map((scientist, index) => (
                        <li key={index} className="dropdown-item">
                            {index + 1}. {scientist}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default VisitingScientistsDropdown;
