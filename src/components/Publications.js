import React from "react";
import "../styles/Publications.css";
import publicationsData from "../content/publications.json";

const assetUrl = (path) => process.env.PUBLIC_URL + path;

// Rebuild the section tree from the ordered list using nestLevel (0 = top level).
// A section becomes a child of the nearest preceding section with a smaller nestLevel.
// This reproduces the nesting of the original hand-written markup exactly.
const buildSectionTree = (sections) => {
  const roots = [];
  const stack = [];
  sections.forEach((section) => {
    const node = { ...section, children: [] };
    const level = Math.max(0, Number(section.nestLevel) || 0);
    while (stack.length > level) stack.pop();
    if (stack.length === 0) roots.push(node);
    else stack[stack.length - 1].children.push(node);
    stack.push(node);
  });
  return roots;
};

const publicationLink = (pub) =>
  pub.link || (pub.doi ? `https://doi.org/${pub.doi}` : undefined);

const renderSection = (section, key) => (
  <div className="year-section" key={key}>
    <h2>{`Publications from ${section.label}`}</h2>
    <div className="publication-row">
      {section.publications.map((pub, index) => (
        <a
          key={index}
          href={publicationLink(pub)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assetUrl(pub.image)} alt={pub.title || "Publication"} />
        </a>
      ))}
    </div>
    {section.children.map((child, index) => renderSection(child, index))}
  </div>
);

const Publications = () => {
  const sections = buildSectionTree(publicationsData.sections);

  return (
    <div className="publications">
      <div className="banners">
        <img
          src={assetUrl(publicationsData.banner.src)}
          alt={publicationsData.banner.alt}
          className="banner-images"
        />
      </div>

      <section className="publication-list">
        {sections.map((section, index) => renderSection(section, index))}
      </section>
    </div>
  );
};

export default Publications;
