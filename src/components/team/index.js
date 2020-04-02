import React from 'react';
import Reveal from 'react-reveal/Reveal';

import Avatar from './avatar';
import Profile from './profile';
import Socials from './socials';

import img1 from '../../resources/img/team-1.jpg'; 
import img2 from '../../resources/img/team-2.jpg'; 
import img3 from '../../resources/img/team-3.jpg'; 


const Team = () => {
    return (
        <Reveal
          fraction={0.7}>
         <section className="team" name="team">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">Our Team</h3>
                  <div className="section-title-divider"></div>
                  <p className="section-description">Our team consists of expert professionals.</p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-3">
                  <div className="member">
                    <Avatar img={img1}/>
                    <Profile name="Ivana Pantazi" title="CEO/Front End Web Developer"/>
                    <Socials>
                      <a href="https://www.facebook.com/ivpweb"/>
                      <a href="https://www.facebook.com/ivpweb"/>
                      <a href="https://www.facebook.com/ivpweb"/>
                      <a href="https://www.facebook.com/ivpweb"/>
                    </Socials>
                  </div>
                </div> 
                <div className="col-md-3">
                  <div className="member">
                     <Avatar img={img2}/>
                    <Profile name="Stergios Zissakis" title="Back End Developer/Programmer"/>
                  </div>
                </div>                   
                <div className="col-md-3">
                  <div className="member">
                     <Avatar img={img3}/>
                    <Profile name="Angelica Koumanakou" title="Graphic Designer/Illustrator"/>
                     <Socials to="https://www.facebook.com/ivpweb" />
                  </div>
                </div>                                          
              </div>
            </div>
          </section>
       </Reveal>  

    );
};

export default Team;