import React, { useEffect, useState } from 'react';
import HeaderPage from './navbar';
import { Box, Button, IconButton, Tooltip, useTheme, useMediaQuery  } from '@mui/material';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skillBox from './images/skillBox.svg';
import ReactLogo from './images/reactLogo.svg';
import jsLogo from './images/js.svg';
import nextjsLogo from './images/nextjs.svg';
import SpringBootLogo from './images/springBoot.svg';
import PostgresLogo from './images/postgresql.svg';
import AndroidStudio from './images/android-studio-icon.svg';
import JavaLogo from './images/java.svg';
import PythonLogo from './images/icons8-python.svg';
import GitLogo from './images/git.svg';
import GitHubLogo from './images/github-mark.svg';
import myImg from './images/MyImg.jpg';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/HMS.png';
import project4 from './images/AIS.png';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactUs } from './emailContact';
import  Footer from './footer';
import MobileNav from './MobileNav';
import './css/responsive-styles.css';
import 'particles.js/particles';
import { scroller, Element } from 'react-scroll';



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

const projects = [
  {
    id: 1,
    title: 'Hotel Management System',
    subtitle: 'Full-stack enterprise solution for hotel operations',
    description: 'A scalable full-stack system used by hotel staff for managing reservations, check-ins, and room management. Built using Next.js, Electron.js, Spring Boot, and PostgreSQL.',
    detail: 'This commercial-grade system was developed for a real business in Libya. The stack includes a Next.js frontend for customers, an Electron.js desktop app for internal hotel staff, and a robust Spring Boot backend serving over 40 APIs. Designed with scalability and role-based access control in mind.',
    bullets: [
      'Next.js website showcasing hotel details and available rooms (currently awaiting payment gateway integration)',
      'Electron.js desktop application for staff to manage bookings, check-ins, check-outs, and cancellations',
      'Spring Boot backend with over 40 RESTful APIs supporting both frontend and desktop applications',
      'JWT authentication system with role-based access control (admin, staff roles)',
      'PostgreSQL database designed for efficiency, normalization, and future scalability',
      'Modular architecture allowing independent development and maintenance of each layer'
    ],
    image: project3, // Replace this with your actual image path if you have one
    tools: ['Next.js', 'Electron.js', 'Spring Boot', 'PostgreSQL', 'JWT', 'Java'],
    liveUrl: '#', // You can link to GitHub or demo when ready
    githubUrl: '#' // Optional: link to repo if public
  },
  {
    id: 2,
    title: 'AI Workout Assistant',
    subtitle: 'Real-time fitness feedback with computer vision',
    description: 'An AI-powered assistant that gives real-time posture and form feedback during workouts.',
    detail: 'Developed a commercial-grade exercise tracker using MediaPipe and OpenCV with 92% rep-count accuracy. Built using Python.',
    bullets: [
      'AI-powered rep counting and posture detection using MediaPipe pose estimation',
      'Designed extensible configuration system using Python dataclasses and Enum types',
      'Created registry pattern (`EXERCISES` dict) for dynamic exercise management',
      'Enabled adding new workouts through structured `ExerciseConfig` class (joint mappings, thresholds)',
      'Biomechanical parameterization: Angle thresholds, velocity checks, and body side detection',
      'Architecture: Followed MVC pattern with separation of tracking logic and UI'
    ],
    image: project4,
    tools: ['Python', 'MediaPipe', 'OpenCV'],
    liveUrl: '#',
    githubUrl: 'https://github.com/MalekRockie/SuperTrainer'
  },
  {
    id: 3,
    title: "Sports Pick-up Application",
    subtitle: "Connecting athletes for casual games",
    description: "A game pick-up application that connects athletes looking to join or organize local sports events. Built with a collaborative team effort, the app supports real-time communication and dynamic event planning.",
    detail: "Developed using React, Spring Boot, and PostgreSQL, this application enables users to discover local sports games, create events, invite friends, and manage availability. The app includes real-time messaging using WebSockets for seamless communication between players.",
    bullets: [
      "User authentication system using Firebase Auth",
      "Location-based event discovery integrated with Google Maps API",
      "Real-time messaging functionality using WebSocket",
      "Event management system with RSVP and calendar integration",
      "Collaborated in a team of two to design and implement full-stack features"
    ],
    image: project1,
    tools: ["React", "Spring Boot", "PostgreSQL", "WebSocket", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: 'Barber Management App',
    subtitle: 'Streamlining barber shop reservations',
    description: 'A mobile application for managing barbershop reservations.',
    detail: 'This Android-based app helps barbershops manage appointments, customer profiles, and daily schedules efficiently. Includes real-time notifications and admin dashboard.',
    bullets: [
      'Appointment scheduling system',
      'Admin panel for managing staff and services',
      'Push notification integration'
    ],
    image: project2,
    tools: ['Android Studio', 'Java', 'SQLite'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const options = {
  duration: 1000,
  smooth: true,
};

export default function Homepage() {
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const handleScroll = () => {
    scroller.scrollTo('projects', options);
  };

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
      <div data-aos="fade-up" className='IntroSection'>
        <div className='IntroSectionLeftSide'>
          <h5 style={{color: 'grey'}}>SOFTWARE ENGINEER</h5>
          <h1>Hi, I'm Malek</h1>
          <h4>I builds things that work. Not just code, but solutions. Whether it’s backend systems, AI applications, or full-stack platforms, I focus on making technology purposeful. </h4>
          <div>
            <button className='myProjectButton' onClick={handleScroll}>
              My Projects
            </button>
          </div>
        </div>
      
        <div className='IntroSectionRightSide'>
          <img 
            src={myImg}
            alt="Profile Picture"
            className="profile-picture"/>
        </div>
      </div>


      <div className='skillSection'>
        <div>MY SKILLS</div>

        <div className='skillGrid' data-aos="fade-up">
          <div className='skillBorder'>
            <div className='skillContent'>
              <img
                src={ReactLogo}
                alt="Skill"
                className='skillLogo'
              />
            <div className='skillTitle'>ReactJs</div>
            </div>
          </div>
          <div className='skillBorder'>
            <img
              src={JavaLogo}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>Java</div>
          </div>
          <div className='skillBorder'>
            <img
              src={nextjsLogo}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>Next.Js</div>
          </div>
          <div className='skillBorder'>
            <img
              src={jsLogo}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>JavaScript</div>
          </div>
          <div className='skillBorder'>
            <img
              src={SpringBootLogo}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>Spring Boot</div>
          </div>
          <div className='skillBorder'>
            <img
              src={PostgresLogo}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>PostgreSQL</div>
          </div>
          <div className='skillBorder'>
            <img
              src={AndroidStudio}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>Android Studio</div>
          </div>
          <div className='skillBorder'>
            <img
              src={PythonLogo}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>Python</div>
          </div>
          <div className='skillBorder'>
            <img
              src={GitLogo}
              alt="Skill"
              className='skillLogo'
            />
            <div className='skillTitle'>Git</div>
          </div>
        </div>

      </div>

      <div className="pseudo-divider" />

      <div id="projects" className='projectSection'>
      <Element name="projects"></Element>

        <div>
          My Projects
        </div>
        
        <div className='projectGrid' data-aos="fade-up">

          {projects.map(project => (
          <div key={project.id} className='projectContainer'>
            <div className='imageContainerStyle'>
              <img className='pImage' src={project.image} alt={project.title} />
            </div>
            <div className='projectLabel'>{project.title}</div>
            <div className='projectDescription'>{project.description}</div>
            <div 
              className='detailButton'
              onClick={() => {
                setSelectedProject(project);
                setIsDialogOpen(true);
              }}
            >
              View Details
            </div>
          </div>
        ))}

        </div>
      </div>

      {isDialogOpen && (
        <div 
        className={`dialogOverlay ${isDialogOpen ? 'active' : ''}`} 
        onClick={(e) => e.target === e.currentTarget && setIsDialogOpen(false)}
      >
          <div className='projectDetailDialog'>
            <div className='projectDetailContainer'>
              <div className='detailImageContainer'>
                <img className='projectDetailImage' src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className='projectDetails'>
                <div>{selectedProject.title}</div>
                <h4 style={{ color: '#888', fontWeight: '200px' }}>{selectedProject.subtitle}</h4>

                {/* Description */}
                <p className='projectDetailDescription'>{selectedProject.detail}</p>

                {/* Bullet Points */}
                <ul className="project-detail-bullets">
                  {selectedProject.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>

                {/* Tools / Tech Stack */}
                <div className="tools-used">
                  {selectedProject.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">{tool}</span>
                  ))}
                </div>

                {/* Close Button */}
                <button className="close-dialog-button" onClick={() => setIsDialogOpen(false)}>
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Contact section*/}
      <div className='emailTitle'>Contact me
        <div className='emailSection' id='contact'>
          <div className='emailLabel'>
            Open to new opportunities, collaborations, or just a good tech chat. Feel free to drop a message!
            <div className='email'>Email: MalekTech@Yahoo.com</div>
          </div>
          <ContactUs/>
        </div>
      </div>

      <div className='footer'>
        ABDULMALEK ABULGASEM © 2025
      </div>
    </div>
  );
}
