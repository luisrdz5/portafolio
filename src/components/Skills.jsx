import React from 'react';
import dev from '../assets/illustrations/skills.svg';
import '../styles/components/Skills.styl';


export const Skills = () => {

    return (
      <div className='Skills'>
        <div className='Skills-container'>
          <div className='Skills-image'>
            <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
          </div>
          <div className='Skills-details'>
            <h1>Hi There!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
              standard dummy.
            </p>
            <input type='button' href="#contact" value='Contact me' />
          </div>
        </div>
      </div>
    )
}

export default Skills