import React from 'react';
import dev from '../assets/illustrations/dev.svg';
import Header from './Header';
import '../styles/components/Intro.styl';

const Intro = () => (
  <div>
    <Header />
    <div className='Intro'>
      <div className='Intro__details'>
        <h1>Hi There!</h1>
        <h4>
          I’m Luis Antonio Rodríguez García
          <br />
          <br />
          {' '}
        <span>
          I'm a Site Reliability Engineer and Full Stack developer in Javascript, PHP and Python.
          <br />
          <br />
          I have broad knowledge in Linux based security systems with over 20 years of experience.
          <br />
          <br />
          Outgoing, determined and goal oriented, excellent for teamwork and collaborative work.
          <br />
          <br />
        </span>
        </h4>
        <a href='#contact'> Contact me </a>
      </div>
      <div className='Intro__thumbnail'>
        <img src={dev} alt="I’m Luis Antonio Rodríguez García and I’m a Full Stack developer!" />
      </div>
    </div>
  </div>  
);

export default Intro;
