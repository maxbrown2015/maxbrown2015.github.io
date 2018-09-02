import React, { Component } from 'react';
import '../css/Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = this.props.header ? <h2 className="Contact-header">Contact</h2> : <div></div>
    return (
      <div className="Contact">
        {header}
        <hr className="H-line"></hr>
        <div className="Email-container">
          <a href="mailto:maxbrown@sas.upenn.edu">maxbrown@sas.upenn.edu</a>
        </div>
        <div className="Icon-container">
          <div className="Icon-item"><a href="https://www.linkedin.com/in/maxwell-brown-2371a7102/"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></div>
          <div className="Icon-item"><a href="https://github.com/maxbrown2015" className="Icon-item"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></div>
          <div className="Icon-item"><a href="https://upenn.joinhandshake.com/users/4650607" className="Icon-item"><i className="fa fa-handshake-o" aria-hidden="true"></i></a></div>
        </div>
      </div>)
  }
}

export default Contact;