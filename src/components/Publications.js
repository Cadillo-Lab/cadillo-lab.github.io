import React from "react";
import "../styles/Publications.css";
import bannerImage from "../assets/publication.png";
import publication_1 from "../assets/1.png";
import publication_2 from "../assets/2.jpg";
import publication1 from "../assets/3.png";
import publication2 from "../assets/4.png";
import publication3 from "../assets/5.png";
import publication4 from "../assets/6.png";
import publication6 from "../assets/8.png";
import publication7 from "../assets/9.png";
import publication8 from "../assets/10.png";
import publication9 from "../assets/11.png";
import publication10 from "../assets/12.png";
import publication11 from "../assets/13.png";
import publication12 from "../assets/14.png";
import publication13 from "../assets/15.png";
import publication14 from "../assets/16.png";
import publication15 from "../assets/17.png";
import publication16 from "../assets/18.png";
import publication17 from "../assets/19.png";
import publication18 from "../assets/20.png";
import publication19 from "../assets/21.png";
import publication20 from "../assets/22.png";
import publication21 from "../assets/23.png";
import publication22 from "../assets/24.png";
import publication23 from "../assets/25.jpeg";
import publication24 from "../assets/26.png";
import publication25 from "../assets/27.png";
import publication26 from "../assets/28.png";
import publication27 from "../assets/29.png";
import publication29 from "../assets/31.png";
import publication30 from "../assets/32.png";
import publication31 from "../assets/33.png";
import publication32 from "../assets/34.png";
import publication33 from "../assets/35.png";
import publication34 from "../assets/36.png";
import publication35 from "../assets/37.jpeg";
import publication36 from "../assets/38.png";
import publication37 from "../assets/39.png";
import publication38 from "../assets/40.png";
import publication39 from "../assets/41.png";
import publication40 from "../assets/42.png";
import publicationnew1 from "../assets/publicationnew1.png";
import publicationnew2 from "../assets/publicationnew2.png";
import publicationnew3 from "../assets/publicationnew3.png";
import publicationnew4 from "../assets/publicationnew4.png";
import publicationnew5 from "../assets/publicationnew5.png";
import publicationnew6 from "../assets/publicationnew6.png";
import publicationnew7 from "../assets/publicationnew7.png";
import publicationnew8 from "../assets/publicationnew8.png";
import publicationnew9 from "../assets/publicationnew9.png";
import publicationchanged from "../assets/publication-changed1.png";
import publicationchanged2 from "../assets/publicationchanged2.png";

const Publications = () => {
  return (
    <div className="publications">
      <div className="banners">
        <img
          src={bannerImage}
          alt="Publications Banner"
          className="banner-images"
        />
      </div>

      <section className="publication-list">
        <div className="year-section">
          <h2>Publications from 2024</h2>
          <div className="publication-row">
            <a
              href="https://journals.asm.org/doi/10.1128/spectrum.00387-24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew1} alt="Publication 1" />
            </a>
            <a
              href="https://www.sciencedirect.com/science/article/pii/S016770122400109X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew2} alt="Publication 2" />
            </a>
            <a
              href="https://nap.nationalacademies.org/catalog/27157/a-research-agenda-toward-atmospheric-methane-removal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew3} alt="Publication 2" />
            </a>
            <a
              href="https://www.researchgate.net/publication/383460219_Tropical_peat_composition_may_provide_a_negative_feedback_on_fire_occurrence_and_severity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew4} alt="Publication 2" />
            </a>
            <a
              href="https://www.researchgate.net/publication/381582183_A_global_atlas_of_soil_viruses_reveals_unexplored_biodiversity_and_potential_biogeochemical_impacts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew5} alt="Publication 2" />
            </a>
            <a
              href="https://www.researchgate.net/publication/371024995_Assessment_of_vegetation_and_peat_soil_characteristics_of_a_fire-impacted_tropical_peatland_in_Costa_Rica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew6} alt="Publication 2" />
            </a>
          </div>
        </div>

        <div className="year-section">
          <h2>Publications from 2023</h2>
          <div className="publication-row">
            <a
              href="https://www.researchgate.net/publication/374630017_Unraveling_the_functional_dark_matter_through_global_metagenomics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew7} alt="Publication 2" />
            </a>
            <a
              href="https://www.researchgate.net/publication/373218617_BinaRena_a_dedicated_interactive_platform_for_human-guided_exploration_and_binning_of_metagenomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew8} alt="Publication 2" />
            </a>
            <a
              href="https://doi.org/10.1111/1462-2920.16469"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={publicationnew9} alt="Publication 2" />
            </a>
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
                src={publicationchanged}
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
                  src={publication10}
                  alt="Detecting vulnerability of humid tropical forests to multiple stressors"
                />
              </a>

              <a
                href="https://doi.org/10.1016/j.agrformet.2021.108504"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={publication11}
                  alt="A versatile gas flux chamber reveals high tree stem methane emissions in Amazonian peatland"
                />
              </a>

              <a
                href="https://doi.org/10.3389/fmicb.2021.659079"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={publication12}
                  alt="Microbial communities and interactions of nitrogen oxides with methanogenesis in diverse peatlands of the Amazon basin"
                />
              </a>

              <a
                href="https://doi.org/10.1038/s41587-020-0718-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={publication13}
                  alt="A genomic catalog of Earth's microbiomes"
                />
              </a>

              <a
                href="https://doi.org/10.1016/j.agrformet.2020.108167"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={publication14}
                  alt="Hydrometeorological sensitivities of net ecosystem carbon dioxide and methane exchange of an Amazonian palm swamp peatland"
                />
              </a>

              <a
                href="https://doi.org/10.3389/fmicb.2020.00746"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={publication15}
                  alt="Methanogens and Methanotrophs Show Nutrient-Dependent Community Assemblage Patterns Across Tropical Peatlands of the Pastaza-Marañón Basin, Peruvian Amazonia"
                />
              </a>
            </div>
            <div className="year-section">
              <h2>Publications from 2020 - 2021</h2>
              <div className="publication-row">
                <a
                  href="https://baas.aas.org/pub/2020n3i475"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication16}
                    alt="Planetary Habitability Informed by Planet Formation and Exoplanet Demographics"
                  />
                </a>

                <a
                  href="https://doi.org/10.5194/bg-16-4601-2019"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication17}
                    alt="The effects of sterilization and inhibition methods on abiotic N2O production from organic-rich tropical soils"
                  />
                </a>

                <a
                  href="https://doi.org/10.1073/pnas.1801317115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication18}
                    alt="A potential shift from a carbon sink to a source in Amazonian peatlands under a changing climate"
                  />
                </a>

                <a
                  href="https://doi.org/10.13140/RG.2.1.2152.9044"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication19}
                    alt="Diversity and evolution of bacterial symbionts of weevils (Insecta: Curculionoidea)"
                  />
                </a>

                <a
                  href="https://doi.org/10.1016/j.ejsobi.2017.08.001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication20}
                    alt="Soil microbial community composition is correlated to soil carbon processing along a boreal wetland formation gradient"
                  />
                </a>

                <a
                  href="https://doi.org/10.1016/j.geoderma.2017.03.026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication21}
                    alt="Changes of community structure and abundance of methanogens in soils along a freshwater–brackish water gradient in subtropical estuarine marshes"
                  />
                </a>

                <a
                  href="https://doi.org/10.1038/ismej.2016.104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication22}
                    alt="Genomic composition and dynamics among Methanomicrobiales predict adaptation to contrasting environments"
                  />
                </a>

                <a
                  href="https://doi.org/10.1002/9781118960608"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication23}
                    alt="Methanosphaerula. Bergey’s Manual of Systematics of Archaea and Bacteria"
                  />
                </a>

                <a
                  href="https://doi.org/10.1016/j.ecss.2016.08.003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication24}
                    alt="Factors regulating community composition of methanogens and sulfate-reducing bacteria in brackish marsh sediments in the Min River estuary, southeastern China"
                  />
                </a>
              </div>
            </div>
            <div className="year-section">
              <h2>Publications from 2011 - 2015</h2>
              <div className="publication-row">
                <a
                  href="https://doi.org/10.1128/genomeA.01280-15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication25}
                    alt="Complete genome sequence of Methanosphaerula palustris E1-9CT, a hydrogenotrophic methanogen isolated from a minerotrophic fen peatland"
                  />
                </a>

                <a
                  href="https://doi.org/10.1038/ncomms9289"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication26}
                    alt="Exometabolite niche partitioning among sympatric soil bacteria"
                  />
                </a>

                <a
                  href="https://doi.org/10.1099/mic.0.000117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication27}
                    alt="Genome of Methanoregula boonei reveals adaptation to oligotrophic peatlands environments"
                  />
                </a>

                <a
                  href="https://doi.org/10.3389/fmicb.2015.00277"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publicationchanged2}
                    alt="Isolation of a significant fraction of non-phototroph diversity from a desert Biological Soil Crust"
                  />
                </a>

                <a
                  href="https://doi.org/10.1093/gbe/evu003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication29}
                    alt="Recombination shapes genome architecture in an organism from the Archaeal domain"
                  />
                </a>

                <a
                  href="https://doi.org/10.1099/ijs.0.059964-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication30}
                    alt="Methanobacterium paludis sp. nov., and a novel strain of Methanobacterium lacus isolated from northern peatlands"
                  />
                </a>

                <a
                  href="https://doi.org/10.1128/genomeA.00870-14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication31}
                    alt="Complete genome sequence of Methanoregula formicica SMSPT, a mesophilic hydrogenotrophic methanogen isolated from a methanogenic upflow anaerobic sludge blanket reactor"
                  />
                </a>

                <a
                  href="https://doi.org/10.1128/genomeA.00876-14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication32}
                    alt="Complete genome sequence of Methanolinea tarda NOBI-1T, a hydrogenotrophic methanogen isolated from methanogenic digester sludge"
                  />
                </a>

                <a
                  href="https://doi.org/10.1155/2013/586369"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication33}
                    alt="Contribution of transcriptomics to systems-level understanding of methanogenic Archaea"
                  />
                </a>

                <a
                  href="https://doi.org/10.1111/gcb.12131"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication34}
                    alt="Methane emissions from wetlands: biogeochemical, microbial, and modeling perspectives from local to global scales"
                  />
                </a>

                <a
                  href="https://doi.org/10.3389/fmicb.2012.00081"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication35}
                    alt="Seasonal Changes in methanogenesis and methanogens in three peatlands New York State"
                  />
                </a>

                <a
                  href="https://doi.org/10.1371/journal.pbio.1001265"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication36}
                    alt="Patterns of Gene Flow Define Species of Thermophilic Archaea"
                  />
                </a>

                <a
                  href="https://doi.org/10.1007/s10533-011-9644.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication37}
                    alt="Methanogen diversity and community composition in peatlands of the central to northern Appalachian Mountain region, North America"
                  />
                </a>

                <a
                  href="https://doi.org/10.1099/ijs.0.035048-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication38}
                    alt="Methanolinea mesophila, sp. nov., a hydrogenotrophic methanogen isolated from a rice field in Taiwan, and proposal of the new archaeal family Methanoregulaceae fam. nov. within the order Methanomicrobiale"
                  />
                </a>

                <a
                  href="https://doi.org/10.1021/es200480k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication39}
                    alt="A Role for Dehalobacter spp. in the Reductive Dehalogenation of Dichlorobenzenes and Monochlorobenzene"
                  />
                </a>

                <a
                  href="https://doi.org/10.1099/ijs.0.021782-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={publication40}
                    alt="Methanoregula boonei gen. nov., sp. nov., an acidiphilic methanogen isolated from an acidic peat bog"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
