import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';


class Services extends Component {

   state = {
     show: false,
      boxes:[1,2,3,4,5,6],
      icons:['fa fa-code','fa fa-bar-chart','fa fa-photo','fa fa-paper-plane','fa fa-life-ring','fa fa-shopping-basket'],
      desc:[
          'We have a wide range of web development services from start-up business to long established businesses',
          'We have set out service levels which will help you identify the type of development that suits your business needs best',
          'We offer supreme design quality, transforming design ideas and illustrations into functional reality',
          'We provide Project management services to our clients from Analysis of project, to Testing and Going Live',
          'All our projects are backed by qualified technical expertise of the highest caliber ensuring best quality and support',
          'We can offer a range of different website packages,including fully function e-commerce websites with online payment facilities'
      ],
      heading:['WEB DEVELOPMENT','BUSINESS NEEDS','WEB DESIGN','PROJECT MANAGEMENt','QUALITY AND SUPPORT','DIFFERENT SOLUTIONS']

  }

  showBoxes = () => (
      this.state.boxes.map((box,i)=>(
        <div className="col-md-4 service-item" key={i}>
            <div className="service-icon"><i className={this.state.icons[i]}></i></div>
            <h4 className="service-title">{this.state.heading[i]}</h4>
            <p className="service-description">{this.state.desc[i]}</p>
        </div>
      ))
     
  )

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
          <section className="services" name="services">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">Our Services</h3>
                      <div className="section-title-divider"></div>
                      <p className="section-description">All our web design and development service levels are flexible and tailored to individual requirements</p>
                    </div>
                  </div>
                    
                  <div className="row">
                     {this.showBoxes()}
                  </div>
                </div>  
            </section>
          </Reveal>      
      );
    }
}
export default Services;