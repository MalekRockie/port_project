import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/HeaderPage.css';
import './style.scss';
import './css/Styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import 'particles.js/particles';
import IconButton from '@mui/material/IconButton';

export default function HeaderPage() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div>
      {/* <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div> */}
      <div className="navBarContainer">
        <div className='navTitle'>ABDULMALEK ABULGASEM</div>
          <div className="container purple topBotomBordersIn">
            <Link onClick={scrollToTop} smooth={true} duration={1000}>Home</Link>
            <Link to="projects" smooth={true} duration={1000}>Projects</Link>
            <Link to="skillSection" smooth={true} duration={1000}>Skills</Link>
            {/* <Link to="education" smooth={true} duration={1000}>Education</Link> */}
            <Link to="contact" smooth={true} duration={1000}>Contact me</Link>
          </div>
      </div>
    </div>
  );
}
