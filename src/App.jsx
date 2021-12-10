import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Technologies from './sections/Technologies';
import './styles/custom.scss';

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
        <Technologies />
      </main>
    </>
  );
}

export default App;