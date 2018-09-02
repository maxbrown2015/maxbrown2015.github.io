import React, { Component } from 'react';
import '../css/Extras.css';

class Extras extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(<div className="Extras">
    <div className="Extras-header"><h2>Extras</h2></div>
    <hr className="Extras-line"></hr>
    <div className="Extras-content"></div>
    </div>)
  }
}

export default Extras;