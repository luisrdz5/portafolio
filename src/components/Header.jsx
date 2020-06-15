/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Header__principal">  
        <div className="Header__principal__toggle">            
          <label htmlFor="toggle"> &#9776;</label>
          <input type="checkbox" id="toggle" />
          <menu className="Header__menu" id="Header__menu">
            <div className="Header__menu--title">
              <div className="Header__menu--title--text">
                Menu
              </div>
            </div>            
            <li>
              <Link to="./">About</Link>
            </li>
            <li>
              <Link to="./">Projects</Link>
            </li>
            <li>
              <Link to="./">Contact</Link>
            </li>
            <li>
              <Link to="./">Blog</Link>
            </li>
            <li>
              <div className="Header__menu--dark">
                Dark mode 
                {' '}
                <input name="dark" type="checkbox" className="Header__menu--darkMode" /> 
              </div>
            </li>                
          </menu>
        </div>
        <div className="Header__principal--title">
          <Link to="./">Luis Antonio Rodríguez García</Link>
        </div>
      </div>
    </div>
)};

export default connect(null, null)(Header);