import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Wave from './components/Wave';
import Shape from './components/Shape';
import 'mdbreact/dist/css/mdb.css';
import 'animate.css';
import './styles/custom.scss';

function App() {

  return (
    <>
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
    </>
  );
}

export default App;