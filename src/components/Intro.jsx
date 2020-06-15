import React from 'react';
import dev from '../assets/illustrations/dev.svg';

const Intro = () => (
  <div className='Intro'>
    <div className='Details'>
      <h1>Hi There!</h1>
      <h4>I’m Luis Antonio Rodríguez García I’m a Full Stack developer!</h4>
      <input type='button' href="#contact" value='Contact me' />
    </div>
    <div className='Thumbnail'>
      <img src={dev} alt="I’m Luis Antonio Rodríguez García and I’m a Full Stack developer!" />
    </div>
  </div>
);

export default Intro;
