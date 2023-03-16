import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/HeaderPage.css';

export default function HeaderPage() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-container navbar-expand navbar-custom">
      <Container>
            <Nav className="mx-auto pb-6" >
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contacts">Contact me</Nav.Link>
            </Nav>
      </Container>
    </Navbar>
  );
}
