import React from "react";
import "./Home.css";


function Home() {
  return (
    <div className="home">
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
          I’m a passionate software developer with a journey that began in 2022. Over the years, 
          I’ve worked with startups, small businesses, and enterprises to bring innovative ideas 
          to life through web, mobile, and backend development.
        </p>
        <p>
          My mission is to craft impactful digital experiences that not only solve problems but 
          also drive growth. With a strong focus on excellence and a love for technology, I’m 
          always excited to take on new challenges and turn visions into reality.
        </p>
        <p>
          I also served as a Web Development teacher at Ubunifu College, Nairobi, where I mentored 
          aspiring developers and shared my expertise in building modern web applications.
        </p>
        <p>Let’s build something great together.</p>
        <h3>Education</h3>
        <p>
          Pursued a Diploma in Software Engineering at KISE College from June 2022 to February 2024, 
          majoring in Full-Stack Web Development.
        </p>
      </section>

      <section id="skills" className="section">
  <h2>Skills</h2>
  <p>Transforming Ideas Into Innovative Digital Solutions</p>
  <div className="skills-grid">
    <div className="skill-card">
      <strong>Web Development</strong>
      <p>Building responsive and scalable websites using React, HTML, CSS, and Bootstrap.</p>
    </div>
    <div className="skill-card">
      <strong>Backend Development</strong>
      <p>Creating robust server-side applications with Node.js, Express, and Laravel.</p>
    </div>
    <div className="skill-card">
      <strong>Mobile App Development</strong>
      <p>Developing cross-platform mobile apps using React Native and Flutter.</p>
    </div>
    <div className="skill-card">
      <strong>Web Penetration Testing</strong>
      <p>Conducting security assessments to safeguard applications from threats.</p>
    </div>
    <div className="skill-card">
      <strong>UI/UX Design</strong>
      <p>Designing intuitive interfaces with tools like Figma and Adobe XD.</p>
    </div>
    <div className="skill-card">
      <strong>Project Consulting</strong>
      <p>Providing tailored advice for software projects and technology stacks.</p>
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