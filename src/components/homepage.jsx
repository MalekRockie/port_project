import React, { useEffect } from 'react';
import HeaderPage from './Headerpage';
import { Box, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);

  return (
    <div>
      <HeaderPage/>

    <div data-aos="fade-up" style={{paddingTop: '250px', display: 'flex', justifyContent: 'center'}}>
      <h2>Projects</h2>
    </div>
      <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center' }}>
  <div
    style={{
      width: '60%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '20px',
    }}
    data-aos="fade-up"
  >
    <img 
      style={{ width: '50%', objectFit: 'cover', borderRadius: '5px',marginRight: '20px' }} 
      src="https://i.imgur.com/vhbB5zU.jpeg" 
      alt="Description 3" 
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left'
      }}
    >
      <h4 style={{ fontWeight: 'bold', textAlign: 'left' }}>Usports</h4>
      <p>An app to plan and connect with your friends and other people to play soccer</p>
      <button style={{ marginTop: '20px', backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Show Code</button>
    </div>
  </div>
</div>


      
    </div>
  )
}
