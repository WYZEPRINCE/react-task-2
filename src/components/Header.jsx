import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logohead from "../assets/images/logohead.png";
import hamburger from "../assets/images/hamburger.png"


function Header() {
    return (
    <nav className="navbar">
      <div className="logo">
        <img src={logohead} width={70} height={45} alt="logo" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" activeClassName="active" end>MAIN</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active">GALLERY</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">PROJECTS</NavLink></li>
        <li><NavLink to="/certifications" activeClassName="active">CERTIFICATIONS</NavLink></li>
        <li><NavLink to="/contacts" activeClassName="active">CONTACTS</NavLink></li>
      </ul>
      <img className="menu-icon" src={hamburger} alt="hamburger icon" />
    </nav>
  );
}

export default Header;
