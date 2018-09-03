import React, { Component } from 'react';
import '../css/Extras.css';
import VimeoContainer from './VimeoContainer'

class Extras extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(<div className="Extras">
    <div className="Extras-header"><h2>Extras</h2></div>
    <hr className="Extras-line"></hr>
    <div className="Extras-content">
    <VimeoContainer />
    <div className="Extras-description">I created this video on a whim using footage from my Spring Break trip to Zion National Park.</div>
    </div>
    </div>)
  }
}

export default Extras;