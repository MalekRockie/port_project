import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navbarStyle = {
  height: '300px'
};

const navLinkStyle = {
  fontSize: '25px',
  margin: '0 40px'
};

export default function HeaderPage() {
  return (
    <Navbar bg="light" expand="lg" style={navbarStyle} className="navbar-expand justify-content-center">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#skills" style={navLinkStyle}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={navLinkStyle}>Projects</Nav.Link>
            <Nav.Link href="#education" style={navLinkStyle}>Education</Nav.Link>
            <Nav.Link href="#contacts" style={navLinkStyle}>Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
