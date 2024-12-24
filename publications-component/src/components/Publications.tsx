import React from 'react';
import PublicationCard from './PublicationCard';
import '../styles/Publications.css';

const publicationsData = {
    2023: [
        {
            title: 'Methanotrophic Bacteria in Tropical Peatlands',
            authors: 'J. Smith, L. Doe, A. Cadillo',
            link: 'https://example.com/2023-1',
            image: require('../assets/publication2023-1.png')
        }
    ],
    2022: [
        {
            title: 'Microbial Interactions in Carbon-Rich Ecosystems',
            authors: 'M. Johnson, A. Cadillo',
            link: 'https://example.com/2022-1',
            image: require('../assets/publication2022-1.png')
        }
    ],
    2020: [
        {
            title: 'GHG Emissions and Microbial Communities',
            authors: 'L. Brown, A. Cadillo',
            link: 'https://example.com/2020-1',
            image: require('../assets/publication2020-1.png')
        }
    ],
    2016: [
        {
            title: 'GHG Emissions and Microbial Communities',
            authors: 'L. Brown, A. Cadillo',
            link: 'https://example.com/2016-1',
            image: require('../assets/publication2016-1.png')
        }
    ],
    2011: [
        {
            title: 'GHG Emissions and Microbial Communities',
            authors: 'L. Brown, A. Cadillo',
            link: 'https://example.com/2011-1',
            image: require('../assets/publication2011-1.png')
        }
    ]
};

const Publications = () => {
    return (
        <div className="publications">
            <h1>Publications</h1>
            {Object.keys(publicationsData).map(year => (
                <div key={year} className="publication-year">
                    <h2>{year}</h2>
                    <div className="publication-list">
                        {publicationsData[year].map((pub, index) => (
                            <PublicationCard key={index} publication={pub} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Publications;