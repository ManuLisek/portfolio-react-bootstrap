import React, { useContext } from 'react';
import uuid from 'react-uuid';
import saper from '../images/saper.webp';
import wtyker from '../images/wtyker.webp';
import kancelaria from '../images/kancelaria.webp';
import portfolio from '../images/portfolio.webp';
import { LangContext } from '../context/LangContext';

function Projects() {
  const [lang] = useContext(LangContext);
  const projects = [
    {
      title: lang.projects.saper.title,
      image: saper,
      description: lang.projects.saper.description,
      stack: lang.projects.saper.stack,
      live: 'https://manulisek.github.io/saper-javascript/',
      github: 'https://github.com/ManuLisek/saper-javascript',
    },
    {
      title: lang.projects.wtyker.title,
      image: wtyker,
      description: lang.projects.wtyker.description,
      stack: lang.projects.wtyker.stack,
      live: 'https://manulisek.github.io/wtyker-react-redux/',
      github: 'https://github.com/ManuLisek/wtyker-react-redux',
    },
    {
      title: lang.projects.portfolio.title,
      image: portfolio,
      description: lang.projects.portfolio.description,
      stack: lang.projects.portfolio.stack,
      github: 'https://github.com/ManuLisek/portfolio-react-bootstrap',
    },
    {
      title: lang.projects.kancelaria.title,
      image: kancelaria,
      description: lang.projects.kancelaria.description,
      stack: lang.projects.kancelaria.stack,
      live: 'https://kancelaria-frontend.vercel.app',
      github: 'https://github.com/ManuLisek/kancelaria-frontend',
    },
  ];
  const projectsList = projects.map((project, i) => {
    return (
      <div key={uuid()} className="container px-4 text-secondary">
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <figure
            className={`figure col-lg-6 hover-img bg-black overflow-hidden position-relative rounded-3 ${
              i % 2 !== 0 ? 'order-lg-2' : ''
            }`}
          >
            <img
              className="img-fluid"
              src={project.image}
              alt={`project ${lang.projects.portfolio.title}`}
            />
            <figcaption className="d-flex  justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
              {project.title === lang.projects.portfolio.title ? (
                ''
              ) : (
                <a href={project.live} target="blank">
                  <button
                    type="button"
                    className="btn btn-primary px-3 px-sm-5 m-2"
                  >
                    {lang.projects.buttonLive}
                  </button>
                </a>
              )}
              <a href={project.github} target="blank">
                <button
                  type="button"
                  className="btn btn-primary px-3 px-sm-5 m-2"
                >
                  {lang.projects.buttonGithub}
                </button>
              </a>
            </figcaption>
          </figure>
          <div className="col-lg-6">
            <div className="project-text w-100 mt-2 mb-4 px-sm-4 text-center text-lg-left">
              <h4 className="text-light">{project.title}</h4>
              <p className="pt-3 text-light">{project.description}</p>
              <p className="pt-3 pb-4 text-light">{project.stack}</p>
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
        <h3 className="text-primary mb-4">{lang.projects.title}</h3>
        {projectsList}
      </div>
    </section>
  );
}

export default Projects;
