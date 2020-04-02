import React from 'react';
import Reveal from 'react-reveal/Reveal';

import Item from './item';


const Portfolio = () => {
  return (
      <Reveal
        fraction={0.7}>
          <section className="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">Projects</h3>
                  <div className="section-title-divider"></div>
                  <p className="section-description">Some of the projects that the company has worked on.</p>
                </div>
              </div>
              <div className="row">     
                <Item name="Cystic fibrosis Slider" desc="Web Module" />
                <Item name="CF Source" desc="Corporate website" />
                <Item name="CF Momentum" desc="Corporate website" />
                <Item name="Fluenz Tetra Nasal Spray" desc="Corporate website<" />
                <Item name="KDSD-Automated Self-billing Agreements Automation" desc="Pilot microsite" />
                <Item name="Education Funding Agency" desc="Pilot microsite" />
                <Item name="G-MAN" desc="Pilot microsite" />
                <Item name="WPP Annual Report 2012" desc="Corporate microsite" />
                <Item name="WPP Sustainability Report 2012" desc="Corporate microsite" />
                <Item name="Heineken Sustainability Report 2013" desc="Corporate microsite" />
                      
            </div>
          </div>
        </section>
     </Reveal>  

  );
};

export default Portfolio;