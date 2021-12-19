import React from 'react';
import { projects } from '../data/projects';
import uuid from 'react-uuid';
import '../styles/custom.scss';

function Projects() {

  const projectsList = projects.map((project, i) => {
    return(
      <div key={uuid()} className="container px-4 text-secondary">
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <figure className={`figure col-lg-6 hover-img bg-black overflow-hidden position-relative rounded-3 ${i % 2 !== 0 ? 'order-lg-2' : ''}`}>
            <img className="img-fluid" src={project.image} alt={`project ${project.title}`} />
            <figcaption className="d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
              {project.title === 'Portfolio'
                ? ''
                : <button type="button" className="btn btn-primary px-5 mx-3">Strona</button>}
              <button type="button" className="btn btn-primary px-5 mx-3">Github</button>
            </figcaption>
          </figure>
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