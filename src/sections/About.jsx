import React from 'react';
import about from '../images/about.webp';

function About() {

  return (        
    <section id="about" className="py-4 text-center bg-light">
      <div className="container px-4 text-secondary">
        <h3 className="mb-4">O mnie</h3>
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0 w-75" src={about} alt="Me in the Alps"/>
          </div>
          <div className="col-xl-4 col-lg-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;