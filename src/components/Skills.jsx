import React from 'react';
import { connect } from 'react-redux';
import dev from '../assets/illustrations/skills.svg';
import '../styles/components/Skills.styl';


export const Skills = (props) => {
  const { skills } = props;

    return (
      <div className='Skills' id='skills'>
        <div className='Skills-container'>
          <div className='Skills-image'>
            <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
          </div>
          <div className='Skills-details'>
            <h1>Skills</h1>
            <div className='Skills-grid'>
              {skills.map(skill => (
                <div className='Skills-grid-skill' key={skill.id}>
                  <div className='Skills-grid-image'>
                    <img src={skill.image} alt={skill.description} />
                  </div>
                  <div className='Skills-grid-description'>
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
            <a href='#contact'> Contact me </a>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
  };
};

export default connect(mapStateToProps, null)(Skills)