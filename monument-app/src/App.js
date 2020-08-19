import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
