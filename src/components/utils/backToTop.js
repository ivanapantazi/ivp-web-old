import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class BackToTop extends Component {
   constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }


  scrollToTop() {
    scroll.scrollToTop();
  }

    render() {
        return (
          <a onClick={() => scroll.scrollToTop()}></a>
        );
    }
}

export default BackToTop;