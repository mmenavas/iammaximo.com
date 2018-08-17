import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import './Header.css';

const Header = props => (
  <header className="header">
    <Navbar className="header__nav" brand="Maximo Mena" right>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </Navbar>
  </header>
);

export default Header;



