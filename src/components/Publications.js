import React from "react";
import "../styles/Publications.css";
import bannerImage from "../assets/publications.png";
import publication_1 from "../assets/1.png";
import publication_2 from "../assets/2.jpg";
import publication1 from "../assets/3.png";
import publication2 from "../assets/4.png";
import publication3 from "../assets/5.png";
import publication4 from "../assets/6.png";
import publication5 from "../assets/7.png";
import publication6 from "../assets/8.png";
import publication7 from "../assets/9.png";
import publication8 from "../assets/10.png";
import publication9 from "../assets/11.png";

const Publications = () => {
  return (
    <div className="publications">
      <div className="banner">
        <img
          src={bannerImage}
          alt="Publications Banner"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>Publications</h1>
        </div>
      </div>

      <section className="publication-list">
        <div className="year-section">
          <h2>Publications from 2023</h2>
          <div className="publication-row">
            <a
              href="https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-023-01625-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publication_1} alt="Publication 1" />
            </a>
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0168192323000588?via%3Dihub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publication_2} alt="Publication 2" />
            </a>
          </div>
        </div>

        <div className="year-section">
          <h2>Publications from 2022</h2>
          <div className="publication-row">
            <a
              href="https://doi.org/10.1111/1462-2920.16469"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication1}
                alt="Genes and genome‐resolved metagenomics reveal the microbial functional make up of Amazon peatlands under geochemical gradients"
              />
            </a>

            <a
              href="https://doi.org/10.5194/gmd-15-4709-2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication2}
                alt="A map of global peatland extent created using machine learning (Peat-ML)"
              />
            </a>

            <a
              href="https://doi.org/10.1089/ast.2021.0171"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication3}
                alt="Water Vapor Adsorption Provides Daily, Sustainable Water to Soils of the Hyperarid Atacama Desert"
              />
            </a>

            <a
              href="https://doi.org/10.1128/aem.02438-21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication4}
                alt="Delineating the Drivers and Functionality of Methanogenic Niches within an Arid Landfill"
              />
            </a>

            <a
              href="https://doi.org/10.1038/s41559-022-01892-y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication5}
                alt="Coupled abiotic-biotic cycling of nitrous oxide in tropical peatlands"
              />
            </a>

            <a
              href="https://doi.org/10.1038/s41561-022-01089-9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication6}
                alt="Mineral-catalysed formation of marine NO and N2O on the anoxic early Earth"
              />
            </a>

            <a
              href="https://doi.org/10.5194/gmd-15-4709-2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication7}
                alt="A map of global peatland extent created using machine learning (Peat-ML)"
              />
            </a>

            <a
              href="https://doi.org/10.1029/2021ea002119"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication8}
                alt="Biogeosciences Perspectives on Integrated, Coordinated, Open, Networked (ICON) Science"
              />
            </a>

            <a
              href="https://doi.org/10.1016/j.cell.2022.08.023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={publication9}
                alt="Expansion of the global RNA virome reveals diverse clades of bacteriophages"
              />
            </a>
          </div>

          <div className="year-section">
            <h2>Publications from 2020 - 2021</h2>
            <div className="publication-row">
              <a
                href="https://doi.org/10.1016/j.oneear.2021.06.002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="publication1.jpg"
                  alt="Detecting vulnerability of humid tropical forests to multiple stressors"
                />
              </a>

              <a
                href="https://doi.org/10.1016/j.agrformet.2021.108504"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="publication2.jpg"
                  alt="A versatile gas flux chamber reveals high tree stem methane emissions in Amazonian peatland"
                />
              </a>

              <a
                href="https://doi.org/10.3389/fmicb.2021.659079"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="publication3.jpg"
                  alt="Microbial communities and interactions of nitrogen oxides with methanogenesis in diverse peatlands of the Amazon basin"
                />
              </a>

              <a
                href="https://doi.org/10.1038/s41587-020-0718-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="publication4.jpg"
                  alt="A genomic catalog of Earth's microbiomes"
                />
              </a>

              <a
                href="https://doi.org/10.1016/j.agrformet.2020.108167"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="publication5.jpg"
                  alt="Hydrometeorological sensitivities of net ecosystem carbon dioxide and methane exchange of an Amazonian palm swamp peatland"
                />
              </a>

              <a
                href="https://doi.org/10.3389/fmicb.2020.00746"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="publication6.jpg"
                  alt="Methanogens and Methanotrophs Show Nutrient-Dependent Community Assemblage Patterns Across Tropical Peatlands of the Pastaza-Marañón Basin, Peruvian Amazonia"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
