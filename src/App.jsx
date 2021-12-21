import React from 'react';
import Header from './Sections/Header';
import About from './Sections/About';
import Technologies from './Sections/Technologies';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Wave from './Components/Wave';
import Shape from './Components/Shape';
import { LangProvider } from './Context/LangContext';
import './styles/custom.scss';

function App() {

  return (
    <>
      <LangProvider>
        <Header />
        <main>
          <Wave bg="bg-light" fill="#ba8f59" />
          <About />
          <Wave bg="bg-secondary" fill="#d7c3a3" />
          <Technologies />
          <Projects />
          <Wave bg="bg-dark" fill="#473520" />
          <Contact />
        </main>
        <Shape />
      </LangProvider>
    </>
  );
}

export default App;