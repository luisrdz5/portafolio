import React from 'react';
import '../styles/components/Footer.styl';
import { connect } from 'react-redux';

const Footer = (props) =>  {
  const { social } = props;
  
  return (
    <div className='Footer'>
      <div className='Footer-info'>
        <h2>Luis Antonio Rodríguez García</h2>
        <span>
          © All rights are reserved | 
          {' '}
          {new Date().getFullYear()}
          {' '}
          |
          by
          {' '}
          <a href="https://luisrodriguezgarcia.com" rel="noopener noreferrer" target="_blank">
            Luis Antonio Rodríguez García
          </a>
        </span>
      </div>
      <div className='Footer-social'>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img src={icon} alt={name} />
          </a>
          ))}
      </div>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    social: state.social,
  };
};

export default connect(mapStateToProps, null)(Footer);