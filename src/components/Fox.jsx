import React from 'react';
import fox from '../images/fox.webp';

function Fox() {

  return (        
    <div className="container d-flex align-items-center flex-column justify-content-center min-vh-100">
      <div className="container-fluid">
        <img className="img-fluid" src={fox} alt="fox"/>
      </div>
      <h1 className="masthead-heading">Michał Lisowiec</h1>
      <h2 className="masthead-subheading">Junior Front-end Developer</h2>
    </div>
  );
}

export default Fox;