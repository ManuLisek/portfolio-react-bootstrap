import React, { useState, useLayoutEffect, useContext } from 'react';
import { LangContext } from '../Context/LangContext';
import { useWindowScrollPosition } from '../hooks/useWindowScrollPosition';
import about from '../images/about.webp';

function About() {

  const [lang] = useContext(LangContext);
  const scrollPosition = useWindowScrollPosition();
  const [swinging, setSwinging] = useState(false);
  useLayoutEffect(() => {
    if(scrollPosition > 199){
      setSwinging(true);
    }
  });

  return (        
    <section id="about" className="py-4 text-center bg-light">
      <div className="container px-4 text-secondary">
        <h3 className="mb-4">{lang.about.title}</h3>
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className="col-xl-8 col-lg-7">
            <img className={(swinging ? 'swinging' : '') + ' img-fluid mb-3 mb-lg-0 w-75'} src={about} alt="Me in the Alps"/>
          </div>
          <div className="col-xl-4 col-lg-5">
            <p>{lang.about.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;