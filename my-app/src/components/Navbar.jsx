import React, { useState } from 'react';


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setDropdownOpen(false);
    }
  };

  window.onclick = closeDropdown;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="jirc_logo.png" alt="Logo" />
        </div>
        <div className="navbar-text">
          <span>TechForge</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="https://example.com">About</a></li>
        <li><a href="https://example.com">Techno</a></li>
        <li><a href="https://example.com">PC</a></li>
        <li><a href="https://example.com">Android</a></li>
        <a href="https://example.com"><img className="search" src="search-icon-256x256-v6gfhlc1.png" alt="Search" /></a>
      </ul>
    </nav>
  );
}

export default Navbar;
