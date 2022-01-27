import React, { useState, useLayoutEffect, useContext } from 'react';
import { LangContext } from '../context/LangContext';
import { useMousePosition } from '../hooks/useMousePosition';
import { useWindowScrollPosition } from '../hooks/useWindowScrollPosition';
import Arrow from './Arrow';
import fox from '../images/fox.webp';

function Fox() {

  const [lang] = useContext(LangContext);
  const scrollPosition = useWindowScrollPosition();
  const mousePosition = useMousePosition();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [isMouseMoved, setIsMouseMoved] = useState(false);
  const ballPosition = isMouseMoved 
    ? {left: `${x}%`, top: `${y}%`, transform: `translate(${x}%, ${y}%)`} 
    : {left: `${31}%`, top: `${22}%`, transform: `translate(${31}%, ${22}%)`};

  useLayoutEffect(() => {
    if(x > 0){
      setIsMouseMoved(true);
    }
    setX(mousePosition.x * 60 / window.innerWidth);
    setY((mousePosition.y * 40 / window.innerHeight) + scrollPosition/18);
  });

  return (        
    <div className="fox-container container d-flex align-items-center flex-column justify-content-center min-vh-100 pb-4">
      <div className="fox container-fluid">
        <img className="img-fluid" src={fox} alt={lang.fox.alt}/>
        <div className="container">
          <div className="eyes position-relative">
            <div className="eye position-relative d-inline-block overflow-hidden rounded-circle">
              <div className="eyelid position-absolute bg-eyelid"></div>
              <div className="ball position-absolute bg-secondary rounded-circle" 
                style={ballPosition}></div>
            </div>
            <div className="eye position-relative d-inline-block overflow-hidden rounded-circle">
              <div className="eyelid position-absolute bg-eyelid"></div>
              <div className="ball position-absolute bg-secondary rounded-circle" 
                style={ballPosition}></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="masthead-heading">{lang.fox.header}</h1>
      <h2 className="masthead-subheading">{lang.fox.subheader}</h2>
      <Arrow />
    </div>
  );
}

export default Fox;