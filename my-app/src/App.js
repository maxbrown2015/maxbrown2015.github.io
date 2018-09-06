import React, { Component } from 'react';
import './css/App.css';
import Headroom from 'react-headroom'
import NavbarHeader from './js/NavbarHeader'
import Contact from './js/Contact'
import About from './js/About'
import Work from './js/Work'
import Projects from './js/Projects'
  
class App extends Component {
  constructor(props) {
    super(props);
    this.selectScroll = this.selectScroll.bind(this);
    this.navigateToSection = this.navigateToSection.bind(this);
    
    // add refs for navigation 
    this.aboutRef = React.createRef();
    this.workRef = React.createRef();
    this.projectsRef = React.createRef();
    this.extrasRef = React.createRef();
    this.contactRef = React.createRef();
  }

  selectScroll(eventKey) {
    console.log(eventKey)
    switch(eventKey) {
      case 1: {
        this.navigateToSection(this.aboutRef);
        break;
      }
      case 2: {
        this.navigateToSection(this.workRef);
        break;
      }
      case 3: {
        this.navigateToSection(this.projectsRef);
        break;
      }
      case 4: {
        this.navigateToSection(this.contactRef);
        break;
      }
      default: {
        break;
      }
    }
  }

  navigateToSection(theRef) {
    window.scrollTo({top: theRef.current.offsetTop, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App container-fluid">
        <Headroom> <NavbarHeader tellParentToScroll={this.selectScroll}/> </Headroom>
        <div className="row">
          <div className="First-image Parallax">
          <div className="Profile-image"></div>
          </div>
        </div>
        <div className="row">
        <div className="About" ref={this.aboutRef}>
          <About />
        </div>
        </div>
        
        <div className="row">
        <div className="Second-image Parallax"></div>
        <div className="Work" ref={this.workRef}>
          <Work />
        </div>
        </div>

        <div className="row">
        <div className="Fourth-image Parallax">
        </div>
        </div>
        <div className="row">
        <div className="Projects" ref={this.projectsRef}>
          <Projects />
        </div>
        </div>
        <div ref={this.contactRef}><Contact header={true}/></div>
      </div>
    );
  }
}

export default App;
