// src/App.js
import React from 'react';
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import About from './Components/about'; // Add this component
import Projects from './Components/projects';
import Contact from './Components/contact'; // Add this component
import Skills from  './Components/skills'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <section id="About">
        <About /> {/* Ensure this component has relevant content */}
      </section>
      <section id="projects">
        <Projects />
        <Skills />
      </section>
      <section id="Contact">
        <Contact /> {/* Ensure this component has relevant content */}
      </section>
      
    </div>
  );
};

export default App;
