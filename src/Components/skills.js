import React from 'react';
import Navbar from './navbar'; // Import the Navbar component
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Add the Navbar component */}

      <header className="bg-pink-800 text-white py-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl text-left font-bold ">My Skills</h1>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-4 text-blue-950">
          Technical Skills             <i className="fa fa-computer text-black-500"></i>
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg flex items-center space-x-2">
              <i className="fab fa-html5 text-orange-600"></i>
              <span>HTML & CSS</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fab fa-js text-yellow-500"></i>
              <span>JavaScript</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fab fa-bootstrap text-blue-800"></i>
              <span>bootstrap</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fa fa-database text-blue-500"></i>
              <span>mangodb</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fab fa-react text-blue-400"></i>
              <span>React</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fab fa-node text-green-500"></i>
              <span>Node.js</span>
            </li>
        
          <li className="text-lg flex items-center space-x-2">
              <i className="fab fa-js text-yellow-500"></i>
              <span>Express.js</span>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold border-b-2 border-gray-800 text-blue-950 pb-2 mb-4">Soft Skills            <i className="fab fa-rocketchat text-black-900"></i>
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg flex items-center space-x-2">
              <i className="fas fa-comments text-gray-600"></i>
              <span>Communication</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fas fa-lightbulb text-yellow-600"></i>
              <span>Problem-Solving</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fas fa-users text-blue-600"></i>
              <span>Team Collaboration</span>
            </li>
            <li className="text-lg flex items-center space-x-2">
              <i className="fas fa-clock text-gray-600"></i>
              <span>Time Management</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-pink-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          {/* Optional footer content */}
        </div>
      </footer>
    </div>
  );
};

export default Skills;
