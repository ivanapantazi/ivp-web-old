import React, { Component } from 'react';


class Socials extends Component {

   state = {
      boxes:[1,2,3,4],
      url:[
          'https://www.facebook.com/ivpweb',
          'https://twitter.com/Ivana_Pantazi',
          'https://www.linkedin.com/in/ivanap',
          'https://plus.google.com/u/0/109101972305496039941'
      ],
      class:[
          'fa fa-facebook',
          'fa fa-twitter',
          'fa fa-linkedin',
          'fa fa-google-plus'
      ]
  }

  showSocial = () => (
      this.state.boxes.map((box,i)=>(
        <a key={i} href={this.state.url[i]} target="_blank" rel="noopener noreferrer"><i className={this.state.class[i]}></i></a>
      ))
     
  )


  render() {
    return (
      <div className="social">   
        {this.showSocial()}
      </div>
    );
    }
}
export default Socials;