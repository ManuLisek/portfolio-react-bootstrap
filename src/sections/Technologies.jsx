import React from 'react';
import { technologies } from '../data/technologies';
import uuid from 'react-uuid';

function Technologies() {

  const skills = technologies.map(skill => {
    return(
      <div key={uuid()} className="col-lg-3 col-md-4 col-sm-6 mb-5 w-sm-50 ">
        <div className="card bg-light border-0 h-100">
          <div className="card-body p-4 p-lg-5 pt-0 pt-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap"></i></div>
            <h4 className="fs-6 text fw-bold">{skill.technology}</h4>
            <skill.image color={skill.color}/>
          </div>
        </div>
      </div>
    );
  });

  return (        
    <section id="technologies" className="py-4 bg-secondary text-center">
      <div className="container px-4">
        <h3 className="text-primary mb-4">Technologies</h3>
        <div className="row gx-lg-5 justify-content-center">
          {skills}
        </div>
      </div>
    </section>
  );
}

export default Technologies;