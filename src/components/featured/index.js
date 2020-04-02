import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../resources/img/logo.png'; // with import

var ReactRotatingText = require('react-rotating-text');

const Featured = () => {
    return (
        <section className="hero" name="top" id="hero">
            <div className="hero-container">
              <div className="wow fadeIn">
                <div className="hero-logo">
                  <img src={logo}  alt=""/>
                </div>
                <h2>We create
                  <span className="rotating">
                    <ReactRotatingText items={['functional websites', 'working mobile apps', 'beautiful graphics']} />
                  </span>
                </h2>
                <div className="actions">
                  <Link className="btn-get-started" to="about" spy={true} smooth={true} duration={500} offset={-85}>Get Started</Link>
                  <Link className="btn-services" to="services" spy={true} smooth={true} duration={500} offset={-60}>Our Services</Link>
                </div>
              </div>
            </div>
        </section>
    );
};

export default Featured;