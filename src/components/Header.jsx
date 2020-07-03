/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';
import closeImage from '../assets/icons/close.svg';
import closeImageDark from '../assets/icons/closeDark.svg';
import { toggleChange, toggleTheme } from '../actions/index';

const Header = (props) => {
  const { toggleChange, toggleTheme, darkMode } = props;
  return (
    <div className="Header">
      <div className="Header__principal">
        <div className="Header__principal__toggle">
          <label htmlFor="toggle"> &#9776;</label>
          <input type="checkbox" id="toggle"  />
          <menu className="Header__menu" id="Header__menu">
            <div className='Header__menu--close'>
              <img src={darkMode === 'dark' ? closeImageDark : closeImage} alt="close" onClick={toggleChange}  className='Header__menu--close--svg'/>
            </div>
            <div className="Header__menu--title">
              <div className="Header__menu--title--text">
                Menu
              </div>
            </div>
            <a href="#projects" onClick={toggleChange} rel="noopener noreferrer">
              <li>
                Projects
              </li>
            </a>
            <a href="#skills" onClick={toggleChange} rel="noopener noreferrer">
              <li>
                Skills
              </li>
            </a>
            <a href="#contact" onClick={toggleChange} rel="noopener noreferrer">
              <li>
                Contact
              </li>
            </a>
            <a href="https://luisrodriguezgarcia.com" onClick={toggleChange} rel="noopener noreferrer">
              <li>
                Blog
              </li>
            </a>
            <li>
              <div className="Header__menu--darkClass">
                Dark mode 
                {' '}
                <input name="darkCheck" type="checkbox" className="Header__menu--darkMode" onClick={toggleTheme} /> 
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

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = {
  toggleChange,
  toggleTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);