import React, { useContext } from 'react';
import { LangContext } from '../Context/LangContext';
import saper from '../images/saper.webp';
import quiz from '../images/quiz.webp';
import top5 from '../images/top5.webp';
import wtyker from '../images/wtyker.webp';
import portfolio from '../images/portfolio.webp';
import uuid from 'react-uuid';

function Projects() {

  const [lang] = useContext(LangContext);
  const projects = [
    {
      title: lang.projects.saper.title,
      image: saper,
      description: lang.projects.saper.description,
      stack: lang.projects.saper.stack,
    },
    {
      title: lang.projects.quiz.title,
      image: quiz,
      description: lang.projects.quiz.description,
      stack: lang.projects.quiz.stack,
    },
    {
      title: lang.projects.top5.title,
      image: top5,
      description: lang.projects.top5.description,
      stack: lang.projects.top5.stack,
    },
    {
      title: lang.projects.wtyker.title,
      image: wtyker,
      description: lang.projects.wtyker.description,
      stack: lang.projects.wtyker.stack,
    },
    {
      title: lang.projects.portfolio.title,
      image: portfolio,
      description: lang.projects.portfolio.description,
      stack: lang.projects.portfolio.stack,
    },
  ];
  const projectsList = projects.map((project, i) => {
    return(
      <div key={uuid()} className="container px-4 text-secondary">
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <figure className={`figure col-lg-6 hover-img bg-black overflow-hidden position-relative rounded-3 ${i % 2 !== 0 ? 'order-lg-2' : ''}`}>
            <img className="img-fluid" src={project.image} alt={`project ${lang.projects.portfolio.title}`} />
            <figcaption className="d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
              {project.title === 'Portfolio'
                ? ''
                : <button type="button" className="btn btn-primary px-5 mx-3">{lang.projects.buttonLive}</button>}
              <button type="button" className="btn btn-primary px-5 mx-3">{lang.projects.buttonGithub}</button>
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
        <h3 className="text-primary mb-4">{lang.projects.title}</h3>
        {projectsList}
      </div>
    </section>
  );
}

export default Projects;