import React from 'react';
import dev from '../assets/illustrations/dev.svg';

const Intro = () => (
  <>
    <div className='Details'>
      <h1>Hi There!</h1>
      <h4>I’m John and I’m a JAMStack engineer!</h4>
      <input type='button' href="#contact" name='Hire me' />
    </div>
    <div className='Thumbnail'>
      <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
    </div>
  </>
);

export default Intro;
