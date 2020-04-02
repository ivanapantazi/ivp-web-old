import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import Info from './info';
import SendData from './form';


class Contact extends Component {

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
          <section className="contact" name="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">Contact Us</h3>
                  <div className="section-title-divider"></div>
                  <p className="section-description">If you are having trouble identifying the web development service that suits your needs, please contact us and we will work out a package for you, be sure to list all requirements in as much detail as possible.</p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-3 col-md-push-2">
                  <Info icon="fa fa-map-marker" text="KD Tower - Suite 2,Cotterells, Hemel Hempstead,HP1 1FW,Herts, UK" />
                  <Info icon="fa fa-envelope" text="info@ivpweb.com" />
                  <Info icon="fa fa-phone" text="+44 (0)208 1332094" />
                </div>
                
                <div className="col-md-5 col-md-push-2">
                  <SendData/>
                </div>
                
              </div>
            </div>
          </section>
        </Reveal>      
      );
    }
}
export default Contact;