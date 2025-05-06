import React from "react";
import { Link } from "react-scroll";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-pic-container">
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          // alt="Profile"
          className="profile-pic"
        />
      </div>
      <h2>My Portfolio</h2>
      <ul>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;