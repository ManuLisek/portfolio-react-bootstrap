import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Projects from './sections/Projects';
import './styles/custom.scss';

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}

export default App;