import React from "react";
import { Link } from "react-scroll";
import "./Sidebar.css";
import { FaUserCircle } from "react-icons/fa"; // Import avatar icon

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-pic-container">
        <FaUserCircle className="profile-icon" /> {/* Avatar icon */}
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