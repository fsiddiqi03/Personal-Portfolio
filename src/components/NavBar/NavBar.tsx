import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="home-link-container">
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link
            to="https://drive.google.com/file/d/1iqUuCjanuElEoio7ozq1ZaUVc8t-qvGY/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
