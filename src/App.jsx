import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './styles/custom.scss';

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;