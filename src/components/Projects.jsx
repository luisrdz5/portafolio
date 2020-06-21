/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Projects.styl';
import starIcon from '../assets/icons/star.svg';
import forkIcon from '../assets/icons/fork.svg';

const Projects = (props) => {
    const { projects } = props;
    return(
      <div className='Projects' id='projects'>
        <h1>Projects</h1>
        <div className='Projects-container'>
          {projects.map(project => (
            <div className='card' key={project.id}>
              <div className='card-image'>
                <img src={project.image} alt={project.title} />
              </div>
              <div className='card-content'>

                <h2>
                  {project.title}
                </h2>
                <div className='Projects-item-github-information'>
                  {project.stars && (
                    <>
                      <img src={starIcon} alt="stars" />
                      <span>
                        {project.stars}
                      </span>
                    </>
                  )}
                  {project.forks && (
                    <>
                      <img src={forkIcon} alt="stars" />
                      <span>
                        {project.forks}
                      </span>
                    </>
                  )}
                </div>
                <p>{project.description}</p>
                <p>
                  {project.blogLink &&(
                    <a target='_blank' href={project.blogLink}>
                      <button type='button'>Blog</button>
                    </a>
                  )}
                  {project.github && (
                    <a target='_blank' href={project.github}>
                      <button type='button'>github</button>
                    </a>
                  )}
                  {project.urlDemo && (
                    <a target='_blank' href={project.urlDemo}>
                      <button type='button'>Demo</button>
                    </a>
                  )}
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title">
                  Card Title
                  <i className="material-icons right">close</i>
                </span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
            ))}
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      projects: state.projects,
    };
  };


export default connect(mapStateToProps, null)(Projects);