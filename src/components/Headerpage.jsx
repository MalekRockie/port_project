import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/HeaderPage.css';
import './style.scss';
import { motion, AnimatePresence } from 'framer-motion';
import 'particles.js/particles';


export default function HeaderPage() {
  useEffect(() => {
  window.particlesJS.load('particles-js', '/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
}, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div style={{ position: 'relative' }}>
          <Navbar expand="lg" className="navbar-container navbar-expand navbar-custom" style={{ zIndex: 2, width: '100%', overflow: 'hidden' }}>
            <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
            <div id="navbar-content">
              <Container className="d-flex flex-column justify-content-center align-items-center">
                <Nav className="mx-auto pb-6">
                  <Nav.Link>Skills</Nav.Link>
                  <Nav.Link>Projects</Nav.Link>
                  <Nav.Link>Education</Nav.Link>
                  <Nav.Link>Contact me</Nav.Link>
                </Nav>
                <div className="text-center text-white mt-3">Abdulmalek Abulgasem</div>
              </Container>
            </div>
          </Navbar>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
