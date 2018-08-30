import React, { Component } from 'react';
import './App.css';
import NavbarHeader from './js/NavbarHeader'
import Headroom from 'react-headroom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headroom> <NavbarHeader /> </Headroom>
        <div className="First-image Parallax">
        </div>
        <div className="About">

        </div>
        <div className="Second-image Parallax"></div>
        <div className="Experience"></div>
        <div className="Third-image Parallax">
        </div>
        <div className="Projects">
        </div>
        <div className="Fourth-image Parallax">
        </div>
        <div className="Extras">
        </div>
        <div className="Contact"></div>
      </div>
    );
  }
}

export default App;
