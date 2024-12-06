import React from 'react';
import '../styles/Publications.css'; // Ensure the correct path to the CSS file
import bannerImage from '../assets/publications.png'; // Replace with the correct local path for the banner image

const Publications = () => {
    return (
        <div className="publications">
            {/* Banner Section */}
            <div className="banner">
                <img src={bannerImage} alt="Publications Banner" className="banner-image" />
                <div className="banner-overlay">
                    <h1>Publications</h1>
                </div>
            </div>

            {/* Dropdown Section */}
            <section className="publication-list">
                <h2>Explore Publications by Year</h2>
                <ul className="accordion">
                    <li>
                        <input type="checkbox" id="pub2023" />
                        <label htmlFor="pub2023">Publications from 2023</label>
                        <div className="content">
                            <ul>
                                <li>
                                    <p><strong>Title:</strong> Methanotrophic Bacteria in Tropical Peatlands</p>
                                    <p><strong>Authors:</strong> J. Smith, L. Doe, A. Cadillo</p>
                                    <p><strong>Link:</strong> <a href="https://example.com/2023-1" target="_blank" rel="noopener noreferrer">Read more</a></p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="pub2022" />
                        <label htmlFor="pub2022">Publications from 2022</label>
                        <div className="content">
                            <ul>
                                <li>
                                    <p><strong>Title:</strong> Microbial Interactions in Carbon-Rich Ecosystems</p>
                                    <p><strong>Authors:</strong> M. Johnson, A. Cadillo</p>
                                    <p><strong>Link:</strong> <a href="https://example.com/2022-1" target="_blank" rel="noopener noreferrer">Read more</a></p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="pub2020-2021" />
                        <label htmlFor="pub2020-2021">Publications from 2020-2021</label>
                        <div className="content">
                            <ul>
                                <li>
                                    <p><strong>Title:</strong> GHG Emissions and Microbial Communities</p>
                                    <p><strong>Authors:</strong> L. Brown, A. Cadillo</p>
                                    <p><strong>Link:</strong> <a href="https://example.com/2020-1" target="_blank" rel="noopener noreferrer">Read more</a></p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="pub2016-2019" />
                        <label htmlFor="pub2020-2021">Publications from 2016-2019</label>
                        <div className="content">
                            <ul>
                                <li>
                                    <p><strong>Title:</strong> GHG Emissions and Microbial Communities</p>
                                    <p><strong>Authors:</strong> L. Brown, A. Cadillo</p>
                                    <p><strong>Link:</strong> <a href="https://example.com/2020-1" target="_blank" rel="noopener noreferrer">Read more</a></p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="pub2011-2015" />
                        <label htmlFor="pub2020-2021">Publications from 2011-2015</label>
                        <div className="content">
                            <ul>
                                <li>
                                    <p><strong>Title:</strong> GHG Emissions and Microbial Communities</p>
                                    <p><strong>Authors:</strong> L. Brown, A. Cadillo</p>
                                    <p><strong>Link:</strong> <a href="https://example.com/2020-1" target="_blank" rel="noopener noreferrer">Read more</a></p>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </section>
        </div>
    );
};

export default Publications;
