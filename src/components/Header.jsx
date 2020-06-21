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
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://blog.luisrodriguezgarcia.com">Blog</a>
            </li>
            <li>
              <div className="Header__menu--darkClass">
                Dark mode 
                {' '}
                <input name="darkCheck" type="checkbox" className="Header__menu--darkMode" /> 
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