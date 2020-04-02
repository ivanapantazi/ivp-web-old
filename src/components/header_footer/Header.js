import React, { Component } from 'react';
import { Nav} from 'react-bootstrap';
import { Link } from 'react-scroll';

import logo from '../../resources/img/logo.png'; // with import

class Header extends Component {

   constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
    render() {
        return (
          <header className={this.state.scroll > this.state.top ? "header fixed-nav" : "header"} name="header">
            <div className="container">            
                <div id="logo" className="pull-left">
                     <Link to="top" spy={true} smooth={true} duration={500}><img src={logo} alt="" title="" /></Link>
                </div>               
                 <nav id="nav-menu-container">
                    <Nav className="nav-menu">
                       <li>
                         <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>Home</Link>
                      </li>
                      <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-40}>About</Link>
                      </li>
                       <li>
                        <Link activeClass="active" to="services" spy={true} smooth={true} duration={500} offset={-50}>Services</Link>
                      </li>
                      <li>
                        <Link activeClass="active" to="team" spy={true} smooth={true} duration={500} offset={-50}>Team</Link>
                      </li>
                      <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                      </li>
                    </Nav>
                </nav>
              </div>
          </header>
        );
    }
}

export default Header;


