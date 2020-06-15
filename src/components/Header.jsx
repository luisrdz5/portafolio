import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';

import avatarGrey from '../assets/images/avatar-grey.png';
import flag from '../assets/images/flag.png';
import searchIcon from '../assets/images/search-icon.png';
import logo from '../assets/images/logo.png';
import shoppingCart from '../assets/images/logo_shopping_cart.png';

const Header = (props) => {
  
  
  return (
  <div className="Header">
        <div className="Header__principal">  
            <div className="Header__principal__toggle">            
                <label for="toggle"> &#9776;</label>
                <input type="checkbox" id="toggle" />
                <menu className="Header__menu" id="Header__menu">
                <div className="Header__menu--title">
                    <div className="Header__menu--title--text">
                        Menu
                    </div>
                </div>            
                    <li>
                        <a href="./">About</a>
                    </li>
                    <li>
                        <a href="./">Projects</a>
                    </li>
                    <li>
                        <a href="./">Contact</a>
                    </li>
                    <li>
                        <a href="./">Blog</a>
                    </li>
                    <li>
                        <div className="Header__menu--dark">
                        Dark mode <input name="dark" type="checkbox" className="Header__menu--darkMode" /> 
                        </div>
                    </li>                
                </menu>
            </div>
            <div className="Header__principal--title">
                <a href="./">Luis Antonio Rodríguez García</a>
            </div>               
        </div>
  </div>
)};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);