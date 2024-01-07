import React, { useEffect } from 'react';
import HeaderPage from './Headerpage';
import { Box, IconButton, Tooltip } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactLogo from './images/logo-react-svgrepo-com.svg';
import SpringBootLogo from './images/springio-ar21.svg';
import PostgresLogo from './images/postgresql.svg';
import AndroidStudio from './images/android-studio-icon.svg';
import JavaLogo from './images/java-horizontal.svg';
import Footer from './footer';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactUs } from './emailContact';

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

const educationBoxStyle = {
  width: '60%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  border: '1px solid #3f51b5',
  borderRadius: '10px',
  boxShadow: '5px 5px 15px rgba(0,0,0,0.1)',
  margin: 'auto'
};

const projectContainerStyle = {
  width: '60%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '20px',
  marginTop: '50px',
  margin: 'auto'
};

const imageContainerStyle = {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const descriptionContainerStyle = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
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
      
      <Box style={boxStyle}>
        <Tooltip title="Email">
          <IconButton style={{ ...iconContainerStyle, backgroundColor: '#D44638' }} href="#">
            <EmailIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
          <IconButton style={{ ...iconContainerStyle, backgroundColor: '#333' }} href="https://github.com/MalekRockie">
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton style={{ ...iconContainerStyle, backgroundColor: '#0A66C2' }} href="https://www.linkedin.com/in/abdulmalek-abulgasem-788710166/">
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <div style={{paddingTop: '70px', display: 'flex', justifyContent: 'center', paddingTop:'200px', fontFamily:'open-sans'}}>
        <h4 data-aos="fade-up" style={{maxWidth: '650px'}} >Hi, my name is Abdulmalek but you can call me Malek for short.
        I'm a software developer currently studying computer science at Georgia State University.</h4>
      </div>

      <div style={{paddingTop: '200px', display: 'flex', justifyContent: 'center'}}>
        <h2 data-aos="fade-up" >Projects</h2>
      </div>

      <div style={projectContainerStyle} data-aos="fade-up">
        <div style={imageContainerStyle}>
          <img 
            style={{ width: '400px', objectFit: 'cover', borderRadius: '5px' }} 
            src="https://i.imgur.com/I59HvuT.jpg" 
            alt="Project 1" 
          />
        </div>
        <div style={descriptionContainerStyle}>
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

      <div style={projectContainerStyle} data-aos="fade-up">
        <div style={imageContainerStyle}>
          <img 
            style={{ width: '400px', height:'350px', objectFit: 'cover', borderRadius: '5px' }} 
            src="https://i.imgur.com/ojDtOjc.png" 
            alt="Project 2" 
          />
        </div>
        <div style={descriptionContainerStyle}>
          <h4 style={{ fontWeight: 'bold' }}>Barbershop Management App</h4>
          <p>An app to help barbers manage appointments and earnings</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            {/* Tools and other details for Project 2 */}
          </div>
          <button style={{ marginTop: '20px', backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '180px' }}>Show Code</button>
        </div>
      </div>

      <div style={projectContainerStyle} data-aos="fade-up">
        <div style={imageContainerStyle}>
          <img 
            style={{ width: '400px', objectFit: 'cover', borderRadius: '5px' }} 
            src="https://i.imgur.com/MXVDmi4.png" 
            alt="Project 3" 
          />
        </div>
        <div style={descriptionContainerStyle}>
          <h4 style={{ fontWeight: 'bold' }}>Text Summarizer AI</h4>
          <p>An extractive summarization based AI that summarizes text using TF-IDF and Psycholinguistic features  from an English langauge dataset .</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            {/* Tools and other details for Project 3 */}
          </div>
          <button style={{ marginTop: '20px', backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '180px' }}>Show Code</button>
        </div>
      </div>

      <div style={{paddingTop: '200px', display: 'flex', justifyContent: 'center'}}>
        <h2 data-aos="fade-up" >Education</h2>
      </div>
<div style={{paddingTop: '20px'}}></div>
      <div style={educationBoxStyle} data-aos="fade-up">
        <h4 style={{ fontWeight: 'bold' }}>Georgia State University</h4>
        <ul>
          <li>Program: Bachelor of Science in Computer Science</li>
          <li>Expected Graduation: December 2023</li>
          <li>Current GPA: 3.73</li>
        </ul>
      </div>
<div style={{paddingTop: '60px'}}></div>
      <div style={educationBoxStyle} data-aos="fade-up">
        <h4 style={{ fontWeight: 'bold' }}>Georgia State University - Perimeter</h4>
        <ul>
          <li>Program: Associate Degree in Computer Science</li>
          <li>Year of Graduation: 2020</li>
          <li>GPA: 3.48</li>
        </ul>
      </div>
<div style={{paddingTop: '300px'}}></div>
      <div data-aos="fade-up">
        <h2 style={{fontWeight:"inherit"}}>Email me:</h2>
        <ContactUs/>
      </div>
      <div style={{paddingTop: '60px'}}></div>
      <Footer/>
    </div>
  );
}
