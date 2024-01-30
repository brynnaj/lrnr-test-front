// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <div className="logo">lrnr</div>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/account" className="nav-link">Account</Link>
        <Link to="/quiz-generation" className="nav-link">Quiz Generation</Link>
      </div>
    </nav>
  );
};

export default Navbar;
