import React, { useState, useEffect } from "react";
import "./Home.css";
// Assuming you have a folder named 'assets' in your src directory with the icon files
import { FaLaptopCode, FaBug, FaDatabase, FaCloud, FaMobileAlt, FaPalette, FaProjectDiagram, FaGitAlt, FaBars } from 'react-icons/fa';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSidebarOpen]);

  return (
    <div className="home">
      {/* Sidebar button for mobile view */}
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* The Sidebar itself */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setIsSidebarOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsSidebarOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsSidebarOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsSidebarOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsSidebarOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>

      <section id="home" className="section-home">
        <h2>Welcome to My Portfolio</h2>
        
        <div className="home-content">
          <h1>Hi, I'm Brian Kamau</h1>
          <p>
            I am a passionate Web Developer dedicated to building modern, responsive, 
            and user-friendly websites.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
        <h3>Education</h3>

          I’m a passionate software developer with a journey that began in 2022. 
          Pursued a Diploma in Software Engineering at KISE College from June 2022 to February 2024, 
          majoring in Full-Stack Web Development.
        </p>
        <p>
          My mission is to craft impactful digital experiences that not only solve problems but 
          also drive growth. With a strong focus on excellence and a love for technology, I’m 
          always excited to take on new challenges and turn visions into reality.
        </p>
        <p>
          I also served as a Web Development teacher/attachee at Ubunifu College, Nairobi, where I mentored 
          aspiring developers and shared my expertise in building modern web applications.
        </p>
        <p>Let’s build something great together.</p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>Transforming Ideas Into Innovative Digital Solutions</p>
        <div className="skills-grid">
          <div className="skill-card">
            <FaCloud className="skill-icon" />
            <strong>Web Hosting</strong>
            <p>Hosting my portfolio on Vercel and familiar with cloud platforms like Firebase.</p>
          </div>
          <div className="skill-card">
            <FaBug className="skill-icon" />
            <strong>Debugging</strong>
            <p>Proficient in identifying and resolving software bugs to ensure smooth application performance.</p>
          </div>
          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <strong>Backend Development</strong>
            <p>Creating robust server-side applications with PHP, Laravel, and SQL databases.</p>
          </div>
          <div className="skill-card">
            <FaProjectDiagram className="skill-icon" />
            <strong>API Calls</strong>
            <p>Experience in creating projects that integrate with APIs, like a weather website using React JS.</p>
          </div>
          <div className="skill-card">
            <FaLaptopCode className="skill-icon" />
            <strong>Frontend Development</strong>
            <p>Building interactive user interfaces with HTML, CSS, JavaScript, and React JS.</p>
          </div>
          <div className="skill-card">
            <FaMobileAlt className="skill-icon" />
            <strong>Responsive Design</strong>
            <p>Creating responsive website designs that provide an optimal viewing experience on both phone and laptop screens.</p>
          </div>
          <div className="skill-card">
            <FaPalette className="skill-icon" />
            <strong>UI/UX Design</strong>
            <p>Designing intuitive and user-friendly interfaces with tools like Figma.</p>
          </div>
          <div className="skill-card">
            <FaGitAlt className="skill-icon" />
            <strong>Version Control</strong>
            <p>Using GitHub for version control to manage and host my projects efficiently.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Check out some of my amazing projects below!</p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>React Portfolio</h3>
            <p>A modern portfolio built with React and deployed on Vercel.</p>
            <a href="https://react-portfoilio-2025.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <div className="project-card">
            <h3>Laravel Voting System</h3>
            <p>An online voting system built with Laravel for secure and efficient voting.</p>
            <a href="https://github.com/Yuikamaa1/laravel_voting_system_2025" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
          <div className="project-card">
            <h3>Library Management System</h3>
            <p>A library management system built with Laravel to manage books and users.</p>
            <a href="https://github.com/Yuikamaa1/library-system" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p><strong>Phone:</strong> +254711591305</p>
        <p><strong>Email:</strong> kamaub700@gmail.com</p>
        <p><strong>Location:</strong> Kikuyu, Kiambu County</p>
        <p><strong>Open Hours:</strong> 9am - 5pm</p>
      </section>
    </div>
  );
}

export default Home;