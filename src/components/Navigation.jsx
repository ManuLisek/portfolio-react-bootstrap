import React, { useState } from 'react';
import poland from '../images/poland.webp';
import unitedKingdom from '../images/united-kingdom.webp';

function Navigation() {

  const [showNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!showNav);
  };
    
  return (        
    <nav className="navbar navbar-expand-sm sticky-sm-top fixed-top navbar-light bg-primary shadow-sm">
      <div className="container">
        <button className=" navbar-toggler my-3 ms-4" type="button" onClick={() => handleToggleNav()}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={(showNav ? 'show' : '') + ' collapse navbar-collapse'}>
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                O mnie
              </a>
            </li>
            <li className="nav-item">
              <a href="#technologies" className="nav-link">
                Technologie
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projekty
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-3 pt-lg-1 position-absolute top-0 end-0">
          <img src={poland} className='mx-3 rounded-circle w-25' alt="polish flag"/>
          <img src={unitedKingdom} className='mx-3 rounded-circle w-25' alt="british flag"/>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;