Sure, here's the content for the file: /publications-component/publications-component/src/components/PublicationCard.tsx

import React from 'react';
import '../styles/PublicationCard.css';

interface PublicationProps {
    title: string;
    authors: string;
    link: string;
    image: string;
}

const PublicationCard: React.FC<PublicationProps> = ({ title, authors, link, image }) => {
    return (
        <div className="publication-card">
            <img src={image} alt={title} className="publication-image" />
            <h3>{title}</h3>
            <p><strong>Authors:</strong> {authors}</p>
            <p><a href={link} target="_blank" rel="noopener noreferrer">Read more</a></p>
        </div>
    );
};

export default PublicationCard;