import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../css/NavbarHeader.css'

class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar className="Navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a>Maxwell Brown</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Work</NavItem>
          <NavItem eventKey={3} href="#">Projects</NavItem>
          <NavItem eventKey={4} href="#">Extra</NavItem>
          <NavItem eventKey={5} href="#">Resume</NavItem>
        </Nav>
      </Navbar>
    )
  }
}


export default NavbarHeader;