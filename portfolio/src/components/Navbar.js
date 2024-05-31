import * as React from "react";
import './Navbar.css';
import { Link } from "react-router-dom"

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <Link className="nav-item" to="/">
        About Me
      </Link>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#github" className="nav-item">GitHub</a>
      <a href="#contact" className="nav-item">Contact</a>
    </nav>
  );
}

export default Navbar;
