import React from 'react';
import Navigation from '../components/Navigation';
import Fox from '../components/Fox';

function Header() {
  return (
    <header className="bg-primary text-secondary text-center svg-border-rounded vh-100">
      <Navigation />
      <Fox />
    </header>
  );
}

export default Header;
