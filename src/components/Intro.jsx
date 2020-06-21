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
        <h4>I’m Luis Antonio Rodríguez García <br /> I’m a Full Stack developer!</h4>
        <a href='#contact'> Contact me </a>
      </div>
      <div className='Intro__thumbnail'>
        <img src={dev} alt="I’m Luis Antonio Rodríguez García and I’m a Full Stack developer!" />
      </div>
    </div>
  </div>  
);

export default Intro;
