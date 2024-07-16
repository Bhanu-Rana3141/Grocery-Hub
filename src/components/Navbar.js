import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="Images/1_Logo.png" alt="logo" />
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to='' className='links'>Home</Link></li>
        <li><Link to='' className='links'>About</Link></li>
        <li><Link to='' className='links'>Categories</Link></li>
        <li><Link to='' className='links'>Login/Register</Link></li>
        <li><Link to='' className='links'>Cart</Link></li>
        <img id='cart' src="Images/cart.png" alt="cart" />
      </ul>

      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}
