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
      
        <About /> {/* Ensure this component has relevant content */}
      
        <Projects />
        <Skills />
    
      
        <Contact /> {/* Ensure this component has relevant content */}
      
      
    </div>
  );
};

export default App;
