import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import AboutText from './aboutText';


class About extends Component {

  state:{
    show: false
  }
  render() {
    return (
        <Reveal
          fraction={0.7}
          onReveal={()=>{
            this.setState({
              show:true
            })
          }}
          >
          <section className="about" name="about">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="section-title">About Us</h3>
                    <div className="section-title-divider"></div>
                  </div>
                </div>
              </div>
              <div className="container about-container">
                <AboutText/>
              </div>
          </section>
        </Reveal>      
      );
    }
}
export default About;