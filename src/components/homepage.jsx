import React, { useEffect, useState } from 'react';
import HeaderPage from './navbar';
import { Box, Button, IconButton, Tooltip, List, ListItem, ListItemIcon, useTheme, useMediaQuery  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactLogo from './images/logo-react-svgrepo-com.svg';
import SpringBootLogo from './images/springio-ar21.svg';
import PostgresLogo from './images/postgresql.svg';
import AndroidStudio from './images/android-studio-icon.svg';
import JavaLogo from './images/java-horizontal.svg';
import PythonLogo from './images/icons8-python.svg';
import GitLogo from './images/Git-Logo-2Color.svg';
import GitHubLogo from './images/github-mark.svg';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import Footer from './footer';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactUs } from './emailContact';
import MobileNav from './MobileNav';

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
  padding: '20px',
  border: '1px solid #3f51b5',
  borderRadius: '10px',
  boxShadow: '5px 5px 15px rgba(0,0,0,0.1)',
  margin: 'auto',
  textAlign: 'left',
  fontFamily:'open-sans'
};

const projectContainerStyle = {
  display: 'flex',
  flexDirection: 'row', // Stack vertically on smaller screens
  alignItems: 'center',
  padding: '20px',
  marginTop: '20px',
  margin: 'auto',
  fontFamily: 'open-sans',

  '@media (min-width: 500px)': { // Adjust this breakpoint as needed
    flexDirection: 'row', // Side by side on larger screens
    justifyContent: 'space-evenly', // Space out items evenly
    alignItems: 'flex-start', // Align items to the start of the flex container
  },
};

const imageContainerStyle = {
  width: '100%', // Full width on smaller screens
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px', // Space between image and description on smaller screens

  '@media (min-width: 900px)': { // Adjust this breakpoint as needed
    width: 'auto', // Auto width on larger screens
    flex: '1 1 45%', // Flex-grow, flex-shrink, flex-basis
    marginBottom: '0', // No margin on the bottom for larger screens
  },
};

const descriptionContainerStyle = {
  width: '100%', // Full width on smaller screens
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  padding: '0 20px', // Padding on the sides for smaller screens

  '@media (min-width: 900px)': { // Adjust this breakpoint as needed
    width: 'auto', // Auto width on larger screens
    flex: '1 1 45%', // Flex-grow, flex-shrink, flex-basis
    padding: '0', // Remove padding for larger screens
  },
};


const GradientButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  width: '200px',
  padding: '10px 5px',
  borderRadius: '5px',
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
  background: 'linear-gradient(45deg, #f52a6d, #5E42A6)', // Normal state gradient
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, #c0245d, #4e3686)', // Darker hover state gradient
    opacity: 0,
    transition: 'opacity 0.5s ease',
    zIndex: 1, // Ensure this layer is below the text
  },

  '& > span': {
    position: 'relative',
    zIndex: 2, // Ensures text is above the pseudo-element
  },

  '&:hover::before': {
    opacity: 1,
  },
}));


const skillsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '200px',
  marginBottom: '50px',
};

export default function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      {isMobile ? <MobileNav /> : <HeaderPage />}
      <Box to="projects" smooth={true} duration={1000} style={boxStyle}>
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

      {/*My introduction*/}
      <div style={{paddingTop: '70px', display: 'flex', justifyContent: 'center', paddingTop:'200px', fontFamily:'open-sans'}}>
        <h4 data-aos="fade-up" style={{maxWidth: '650px'}} >Hi, my name is Abdulmalek but you can call me Malek for short.
        I'm a software developer currently studying computer science at Georgia State University.</h4>
      </div>

    {/* Skills Section */}
      <div data-aos="fade-up" style={skillsContainerStyle}>
        <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '20px', fontFamily: 'open-sans' }}>Skills</h2>
        <img src={ReactLogo} alt="React" style={{ width: '40px', height: '70px', margin: '10px' }} />
        <img src={JavaLogo} alt="Java" style={{ width: '90px', height: '30px', margin: '10px' }} />
        <img src={SpringBootLogo} alt="Spring Boot" style={{ width: '100px', height: '50px', margin: '10px' }} />
        <img src={PostgresLogo} alt="PostgreSQL" style={{ width: '40px', height: '70px', margin: '10px' }} />
        <img src={AndroidStudio} alt="Android Studio" style={{ width: '40px', height: '70px', margin: '10px' }} />
        <img src={PythonLogo} alt="Python" style={{ width: '50px', height: '70px', margin: '10px' }} />
        <img src={GitLogo} alt="Python" style={{ width: '90px', height: '70px', margin: '10px' }} />
        <img src={GitHubLogo} alt="Github" style={{ width: '60px', height: '60px', margin: '10px' }} />
      </div>

      <div id='projects' style={{paddingTop: '200px', display: 'flex', justifyContent: 'center',fontFamily:'open-sans'}}>
        <h2 data-aos="fade-up" >Projects</h2>
      </div>

      {/*Project 1*/}
      <div id='projects' style={projectContainerStyle} data-aos="fade-up">
        <div style={imageContainerStyle}>
          <img 
            style={{ width: '400px', objectFit: 'cover', borderRadius: '5px', border: '0.1px solid #737373'}} 
            src={project1} 
            alt="Project 1" 
          />
        </div>
        <div style={descriptionContainerStyle}>
          <h4 style={{ fontWeight: 'bold' }}>Usports</h4>
          <p>An app to plan and connect with your friends and other people to play soccer</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <p style={{ marginRight: '10px' }}><b>Tools:</b></p>
            <img src={ReactLogo} alt="React" style={{ width: '35px', height: '35px', marginRight: '7px' }}/>
            <img src={JavaLogo} alt="Java" style={{ width: '95px', height: '35px', marginRight: '7px' }}/>
            <img src={SpringBootLogo} alt="Spring Boot" style={{ width: '70px', height: '40px', marginRight: '7px' }}/>
            <img src={PostgresLogo} alt="PostgreSQL" style={{ width: '35px', height: '35px', marginRight: '7px' }}/>
          </div>
        <div style={{paddingTop:'10px'}}>
          <a href='https://github.com/MalekRockie/USport'>
            <GradientButton variant="contained">
              <span>Show Github</span>
            </GradientButton>
          </a>
        </div>
        </div>
      </div>

      {/*Project 2*/}
      <div id='projects' style={projectContainerStyle} data-aos="fade-up">
        <div style={imageContainerStyle}>
          <img 
            style={{ width: '400px', objectFit: 'cover', borderRadius: '5px', border: '0.1px solid #737373'}} 
            src={project4} 
            alt="Project 1" 
          />
        </div>
        <div style={descriptionContainerStyle}>
          <h4 style={{ fontWeight: 'bold' }}>ServiceMe</h4>
          <p>An app I worked on as a school project that serves to provide people with a way to get or provide a variety of serivces locally.</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <p style={{ marginRight: '10px' }}><b>Tools:</b></p>
            <img src={ReactLogo} alt="React" style={{ width: '35px', height: '35px', marginRight: '7px' }}/>
            <img src={JavaLogo} alt="Java" style={{ width: '95px', height: '35px', marginRight: '7px' }}/>
            <img src={SpringBootLogo} alt="Spring Boot" style={{ width: '70px', height: '40px', marginRight: '7px' }}/>
            <img src={PostgresLogo} alt="PostgreSQL" style={{ width: '35px', height: '35px', marginRight: '7px' }}/>
          </div>
          <div style={{paddingTop:'10px'}}>
            <a href='https://github.com/MalekRockie/service-app'>
              <GradientButton variant="contained">
                <span>Show Github</span>
              </GradientButton>
            </a>
        </div>
        </div>
      </div>

      {/*Project 3*/}
      <div style={projectContainerStyle} data-aos="fade-up">
        <div style={imageContainerStyle}>
          <img 
            style={{ width: '400px', height:'350px', objectFit: 'cover', borderRadius: '5px' }} 
            src={project2} 
            alt="Project 2" 
          />
        </div>
        <div style={descriptionContainerStyle}>
          <h4 style={{ fontWeight: 'bold' }}>Barbershop Management App</h4>
          <p>An app to help barbers manage appointments and earnings</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <p style={{ marginRight: '10px' }}><b>Tools:</b></p>
            <img src={JavaLogo} alt="Java" style={{ width: '85px', height: '35px', marginRight: '7px' }}/>
              <img src={AndroidStudio} alt="Android Studio" style={{width: '35px', height: '35px', marginRight: '7px' }}/>
          </div>
          <div style={{paddingTop:'10px'}}>
          <a href='https://github.com/MalekRockie/Barbershop-Management-App'>
            <GradientButton variant="contained">
              <span>Show Github</span>
            </GradientButton>
            </a>
        </div>
        </div>
      </div>

      {/*Project 4*/}
      <div style={projectContainerStyle} data-aos="fade-up">
        <div style={imageContainerStyle}>
          <img 
            style={{ width: '400px', objectFit: 'cover', borderRadius: '5px' }} 
            src={project3} 
            alt="Project 3" 
          />
        </div>
        <div style={descriptionContainerStyle}>
          <h4 style={{ fontWeight: 'bold' }}>Text Summarizer AI</h4>
          <p>An extractive summarization based AI that summarizes text using TF-IDF and Psycholinguistic features  from an English langauge dataset .</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <p style={{ marginRight: '10px' }}><b>Tools:</b></p>
            <img src={PythonLogo} alt="Python" style={{ width: '35px', height: '35px', marginRight: '7px' }}/>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            {/* Tools and other details for Project 3 */}
          </div>
          <div style={{paddingTop:'10px'}}>
          <a href='https://github.com/MalekRockie/TextSummarizer-AI'>
            <GradientButton variant="contained">
              <span>Show Github</span>
            </GradientButton>
            </a>
        </div>
        </div>
      </div>

      <div id='education' style={{paddingTop: '200px', display: 'flex', justifyContent: 'center'}}>
        <h2 data-aos="fade-up" style={{fontFamily:'open-sans'}} >Education</h2>
      </div>

      {/* Education Entry 1 - Current Education at Georgia State University */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
        <div style={educationBoxStyle} data-aos="fade-up">
          <img
          style={{height: '150px', paddingRight: '80px'}}
          src='https://commkit.gsu.edu/wp-content/themes/gsu-flex-2.1/images/logo.png'/>
          <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left'
            }}
          >
            <h4 style={{ fontWeight: 'bold' }}>Georgia State University</h4>
            <ul>
              <li>Program: Bachelor of Science in Computer Science</li>
              <li>Expected Graduation: Dececmber 2023</li>
              <li>Current GPA: 3.73</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Entry 2 - Previous Education at Georgia State University */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', paddingBottom: '200px'}}>
        <div style={educationBoxStyle} data-aos="fade-up">
          <img
          style={{height: '150px', paddingRight: '70px'}}
          src='https://commkit.gsu.edu/wp-content/themes/gsu-flex-2.1/images/logo.png'/>
          <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left'
            }}
          >
            <h4 style={{ fontWeight: 'bold' }}>Georgia State University - Perimeter</h4>
            <ul>
              <li>Program: Associate Degree in Computer Science</li>
              <li>Year of Graduation: 2020</li>
              <li>GPA: 3.48</li>
            </ul>
          </div>
        </div>
      </div>

      {/*Contact section*/}
      <div id='contact' data-aos="fade-up" style={{paddingBottom: '100px'}}>
        <h2 style={{fontWeight:"inherit"}}>Email me:</h2>
        <ContactUs/>
      </div>
        <Footer/>
    </div>
  );
}
