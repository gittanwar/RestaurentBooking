// src/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={require('./images/logo.png')} alt="logo" />
      </div>
      <nav className={isOpen ? 'nav open' : 'nav'}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Menu</Link></li>
          <li><Link to="/FAQ" onClick={closeMenu}>FAQ</Link></li>
          <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className='book'>
        <a href='/BookingForm' onClick={closeMenu}>Book a Table</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
