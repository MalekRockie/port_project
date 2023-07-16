import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/HeaderPage.css';
import './style.scss';
import { motion, AnimatePresence } from 'framer-motion';
import 'particles.js/particles';
import IconButton from '@mui/material/IconButton';


export default function Footer() {

    useEffect(() => {
        window.particlesJS.load('footer-particles-js', '/particles.json', function () {
          console.log('callback - particles.js config loaded');
        });
      }, []);

  return (
    <div>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
            >
                <div style={{ position: 'relative'}}>
                <Navbar expand="lg" className="navbar-container navbar-expand navbar-custom" style={{ zIndex: 2, width: '100%', overflow: 'hidden' , height: '200px' }}>
                    <div id="footer-particles-js" style={{ position: 'absolute', width: '100%'}}></div>
                    <div id="navbar-content">
                    </div>
                </Navbar>
                </div>
            </motion.div>
        </AnimatePresence>
    </div>
  )
}
