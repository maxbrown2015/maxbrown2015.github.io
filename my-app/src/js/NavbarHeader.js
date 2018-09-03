import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../css/NavbarHeader.css'

class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToLocation = this.scrollToLocation.bind(this);
  }

  scrollToLocation(event) {
    this.props.tellParentToScroll(event);
  }

  render() {
    return (
      <Navbar className="MyNavbar">
        <Navbar.Header className="MyName">
          <Navbar.Brand>
            <a className="MyName">Maxwell Brown</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight className="Links">
          <NavItem eventKey={1} href="#About" onSelect={this.scrollToLocation}>About</NavItem>
          <NavItem eventKey={2} href="#Work" onSelect={this.scrollToLocation}>Work</NavItem>
          <NavItem eventKey={3} href="#Projects" onSelect={this.scrollToLocation}>Projects</NavItem>
          <NavItem eventKey={4} href="#Contact" onSelect={this.scrollToLocation}>Contact</NavItem>
          <NavItem eventKey={5} href="" onSelect={this.scrollToLocation}>Resume</NavItem>
        </Nav>
      </Navbar>
    )
  }
}


export default NavbarHeader;