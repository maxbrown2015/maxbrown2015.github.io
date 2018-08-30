import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../css/NavbarHeader.css'

class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Fixed'>
      <Navbar className='NavbarHeader'>
        <Navbar.Brand>
          <a>React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar>
      </div>
    );
  }
}


export default NavbarHeader;