import React from 'react';
import { projects } from '../data/projects';
import uuid from 'react-uuid';

function Projects() {

  const projectsList = projects.map((project, i) => {
    return(
      <div key={uuid()} className="container px-4 text-secondary">
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className={`col-lg-6 ${i % 2 !== 0 ? 'order-lg-2' : ''}`}>
            <img className="img-fluid" src={project.image} alt={`project ${project.title}`} />
          </div>
          <div className="col-lg-6">
            <div className="project-text w-100 mt-2 mb-4 px-4 text-center text-lg-left">
              <h4 className="text-light">{project.title}</h4>
              <p className="mb-0 pt-3 text-light">{project.description}</p>
              <p className="mb-0 pt-3 text-light">{project.stack}</p>
              <hr className="d-none d-lg-block mb-0 me-0" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (        
    <section id="projects" className="py-4 bg-secondary text-center">
      <div className="container px-4 text-secondary">
        <h3 className="text-primary mb-4">Projekty</h3>
        {projectsList}
      </div>
    </section>
  );
}

export default Projects;