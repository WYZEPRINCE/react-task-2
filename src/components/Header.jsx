import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logohead from "../assets/images/logohead.png";
import hamburger from "../assets/images/hamburger.png";
import cancelIcon from "../assets/images/cancel.png"; // Add your cancel icon import

function Header() {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logohead} width={70} height={45} alt="logo" />
      </div>
      
      {/* Desktop navigation links */}
      <ul className="nav-links">
        <li><NavLink to="/" activeClassName="active" end>MAIN</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active">GALLERY</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">PROJECTS</NavLink></li>
        <li><NavLink to="/certifications" activeClassName="active">CERTIFICATIONS</NavLink></li>
        <li><NavLink to="/contacts" activeClassName="active">CONTACTS</NavLink></li>
      </ul>

      {/* Mobile menu icon - toggles between hamburger and cancel */}
      <img 
        className="menu-icon" 
        
        src={isDropdownOpen ? cancelIcon : hamburger} 
        alt={isDropdownOpen ? "cancel icon" : "hamburger icon"}
        onClick={toggleDropdown}
        style={{ cursor: 'pointer' }}
      />

      {/* Mobile dropdown menu */}
      {isDropdownOpen && (
        <div className="mobile-dropdown">
          <ul className="mobile-nav-links">
            <li><NavLink to="/" activeClassName="active" end onClick={closeDropdown}>MAIN</NavLink></li>
            <li><NavLink to="/gallery" activeClassName="active" onClick={closeDropdown}>GALLERY</NavLink></li>
            <li><NavLink to="/projects" activeClassName="active" onClick={closeDropdown}>PROJECTS</NavLink></li>
            <li><NavLink to="/certifications" activeClassName="active" onClick={closeDropdown}>CERTIFICATIONS</NavLink></li>
            <li><NavLink to="/contacts" activeClassName="active" onClick={closeDropdown}>CONTACTS</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;