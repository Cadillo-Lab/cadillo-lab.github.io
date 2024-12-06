import React, { useState } from 'react';
import '../styles/Dropdown_ughonor.css'; // Ensure this CSS file is created or imported

const alumniData = {
    "2021-2022": [
        'Joshua Hislop (NSF REU)',
        'Anna Burns (NSF REU)',
        'Sara Santiago (WAESO)',
        'Hannah Brzezinski (LEAP)',
        'Kameren Silas',
        'Rory Locket (WAESO)'
    ],
    "2020-2021": [
        'Sarah Avalle',
        'David Denogan',
        'Elizabeth Ardilla (WAESO)',
        'Rachel Campos',
        'Joseph Boyd'
    ],
    "2017-2018": [
        'Josue Hernandez',
        'Alexandra Kasis',
        'Sana Lohdi',
        'Bhargav Monokutia',
        'Amanda Richardson',
        'Elias Rodriguez',
        'Michael Rojo',
        'Marisol Sanchez',
        'Vanessa Trujillo',
        'Janeth Flores',
        'Luis Gutierrez',
        'Brian Bacacao (WAESO)',
        'Coleen Adams (CBBG)',
        'Francisco Campa'
    ],
    "2018-2019": [
        'Jacqueline Winston (NSF REU)',
        'Angela Mercado (Engineering)',
        'Elias Rodriguez (Microbiology)',
        'Alexandra Gernandez (Engineering)',
        'Jordan Canin (Microbiology)',
        'Nandini Mishra (Biochemistry)',
        'Morgan Yorkell (Microbiology)',
        'Hebah Bahta (Microbiology)'
    ],
    "2016-2017": [
        'Zacchary Zamora',
        'Jaime Lopez',
        'Sarita Layton',
        'Andrew Martinez',
        'Sonia Sabrowski',
        'Darian Curl',
        'Emily Angeles',
        'Jana Djokic',
        'Sophia Le',
        'Chelsea Elizabeth',
        'Nabil Fidai',
        'Kendra Yin'
    ],
    "2015-2016": [
        'Jack Liu (Biosciences)',
        'Martin Martinez (Microbiology)',
        'Zacchary Zamora (Microbiology, IMSD student)',
        'Jaime Lopez (Chemical Engineering, SCEB intern)',
        'Timothy Walczyck (Biology)',
        'Deana Becker (Molecular Biosciences & Biotech)'
    ],
    "2014-2015": [
        'Logan Kurgon (Chemistry)',
        'Timothy Millea (Computer Science)',
        'Tiya Lallmamode (Chemical Engineering, SCEB intern)'
    ],
    "2013-2014": [
        'Miandra Ellis (Biological Sciences)',
        'Jazmine Mayberry (Biochemistry)',
        'Pablo Cruz (Microbiology)'
    ],
    "2012-2013": [
        'Viet Trug',
        'Michael Crusoe',
        'Gayle Frost',
        'Mayra Buenrostro',
        'Gracie Parish',
        'Cynthia Hurtado',
        'Pablo Cruz Ramos',
        'Sean Dunn',
        'Michael Crusoe',
        'Natasha Hizeman'
    ],
    "2011-2012": [
        'Gayle Frost (Sustainability)',
        'Mayra Buenrostro (Microbiology)',
        'Michael Crusoe (Microbiology, SOLUR student)'
    ],
    "Research Experience for High School Students": [
        'Sarah Bodansky, 2015-2016, Horizon High School. Research project presented at the Science and Engineering Fair - Microbiology',
        'Christina Moon, 2015-2016, Corona del Sol High School. Research project presented at the Science and Engineering Fair - Microbiology',
        'Rohini Nott, 2014-2015, BASIS Chandler. Research project gained the Silver Medal in the Arizona Science and Engineering Fair - Microbiology',
        'Priyanka Konan, 2014-2015, Hamilton High School, Research project gained the Silver Medal in the Arizona Science and Engineering Fair - Microbiology',
        'Ruohan (Hannah) Miao, 2013-2014, Hamilton High School',
        'Jeba Sania, 2013-2014, Paragon Science Academy',
        'Lindsay Wilson, 2012-2013, Bioscience High School. Research project gained the Silver Medal in the Arizona Science and Engineering Fair - Microbiology (went on to Northern Arizona University)',
        'Saisanjana Kalagara, 2012-2013, Corona del Sol High School. Research project gained the Silver Medal in the Arizona Science and Engineering Fair - Microbiology (went on to Brown University)'
    ]
};

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h2>Undergrad and High School Alumni</h2>
                <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {Object.entries(alumniData).map(([year, names]) => (
                        <li key={year} className="dropdown-item">
                            <strong>{year}</strong>
                            <ul>
                                {names.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
