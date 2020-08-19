import React from 'react';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Blog from './components/Blog/Blog';
import Contact from './components/Landing/Contact/Contact';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
