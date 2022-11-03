import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => (
  <div className="container">
    <h1>Math Magicians</h1>
    <ul>
      <li><span><NavLink to="/">Home</NavLink></span></li>
      <li><span><NavLink to="/calculator">Calculator</NavLink></span></li>
      <li><span><NavLink to="/quote">Quote</NavLink></span></li>
    </ul>
  </div>
);

export default Header;
