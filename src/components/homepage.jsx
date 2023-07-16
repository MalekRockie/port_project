import React, { useEffect } from 'react';
import HeaderPage from './Headerpage';
import { Box, Button, Tooltip, IconButton } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactLogo from './images/logo-react-svgrepo-com.svg';
import SpringBootLogo from './images/springio-ar21.svg';
import PostgresLogo from './images/postgresql.svg';
import AndroidStudio from './images/android-studio-icon.svg'
import JavaLogo from './images/java-horizontal.svg'
import Footer from './footer';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const boxStyle = {
  position: 'fixed',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  transition: '0.5s',
  zIndex: 100
};


// Style for the individual icon containers
const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  padding: '10px',
  margin: '10px',
  borderRadius: '10px',
  transition: '0.5s',
  zIndex: 1
};

export default function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);

  return (
    <div>
      <HeaderPage/>
      
    {/* The boxes */}
    <Box style={boxStyle}>
            <Tooltip title="Email">
              <IconButton style={{ ...iconContainerStyle, backgroundColor: '#D44638' }} href="#">
                <EmailIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="GitHub">
              <IconButton style={{ ...iconContainerStyle, backgroundColor: '#333' }} href="#">
                <GitHubIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <IconButton style={{ ...iconContainerStyle, backgroundColor: '#0A66C2' }} href="#">
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </Box>

      <div style={{paddingTop: '70px', display: 'flex', justifyContent: 'center'}}>
        <h4 data-aos="fade-up" style={{maxWidth: '650px'}} >Hi, my name is Abdulmalek but you can call me Malek for short.
         I'm a software developer currently studying computer science at Georgia State University.</h4>
      </div>


      <div style={{paddingTop: '200px', display: 'flex', justifyContent: 'center'}}>
        <h2 data-aos="fade-up" >Projects</h2>
      </div>

      {/*Project 1 */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
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
            style={{ width: '50%', objectFit: 'cover', borderRadius: '5px', marginRight: '20px' }} 
            src="image-place-holder" 
            alt="Project 1" 
          />

          <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left'
            }}
          >
            <h4 style={{ fontWeight: 'bold' }}>Usports</h4>
            <p>An app to plan and connect with your friends and other people to play soccer</p>
            
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ marginRight: '10px' }}><b>Tools:</b></p>
              <img src={ReactLogo} alt="React" style={{ width: '35px', height: '35px', marginRight: '7px' }}/>
              <img src={JavaLogo} alt="Java" style={{ width: '95px', height: '35px', marginRight: '7px' }}/>
              <img src={SpringBootLogo} alt="Spring Boot" style={{ width: '70px', height: '40px', marginRight: '7px' }}/>
              <img src={PostgresLogo} alt="PostgreSQL" style={{ width: '35px', height: '35px', marginRight: '7px' }}/>
            </div>

            <button style={{ marginTop: '20px', backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '180px' }}>Show Code</button>
          </div>
        </div>
      </div>

      {/* Project 2 */}
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
            style={{ width: '50%', objectFit: 'cover', borderRadius: '5px', marginRight: '20px' }} 
            src="image-place-holder" 
            alt="Project 2" 
          />

          <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left'
            }}
          >
            <h4 style={{ fontWeight: 'bold' }}>Barbershop management app</h4>
            <p>An mobile app to help barbers set up appointments and manage their earnings</p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ marginRight: '10px' }}>Tools:</p>
              <img src={JavaLogo} alt="Java" style={{ width: '95px', height: '35px', marginRight: '7px' }}/>
              <img src={AndroidStudio} alt="Android Studio" style={{width: '35px', height: '35px', marginRight: '7px' }}/>
            </div>

            <button style={{ marginTop: '20px', backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '180px' }}>Show Code</button>
          </div>
        </div>
      </div>

      {/* Project 3 */}
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
            style={{ width: '50%', objectFit: 'cover', borderRadius: '5px', marginRight: '20px' }} 
            src="image-place-holder" 
            alt="Project 3" 
          />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
                maxHeight: '250px', // Set a max-height
                overflow: 'auto' // Add scrollbars if content overflows
              }}
            >
            <h4 style={{ fontWeight: 'bold' }}>Make my habits</h4>
            <p>A Java-based Android app for efficient habit tracking and progress visualization.</p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ marginRight: '10px' }}>Tools:</p>
              <img src={JavaLogo} alt="Java" style={{ width: '95px', height: '35px', marginRight: '7px' }}/>
              <img src={AndroidStudio} alt="Android Studio" style={{width: '35px', height: '35px', marginRight: '7px' }}/>
            </div>

            <button style={{ marginTop: '20px', backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '180px' }}>Show Code</button>
          </div>
        </div>
      </div>
      <div style={{paddingBottom:'300px'}}></div>

            <Footer/>
    </div>
  )
}
