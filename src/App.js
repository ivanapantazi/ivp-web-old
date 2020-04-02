import React, { Component } from 'react';
import './resources/styles.css';

import PreloadScreen from './components/utils/preloader';
import Featured from './components/featured';
import Header from './components/header_footer/Header';
import About from './components/about';
import Services from './components/services';
import Team from './components/team';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PreloadScreen/>
        <Featured/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
