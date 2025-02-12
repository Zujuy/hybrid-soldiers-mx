import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/events" className="nav-link">Eventos</Link>
      <Link to="/signup" className="nav-link">Registrate</Link>
    </nav>
  );
};

export default Navbar;