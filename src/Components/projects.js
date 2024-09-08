// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Login and Registration Form</h3>
            <p className="mb-4">A registration form is used to create a new account and a login form is used to enter the details of a registered user. Many websites implement these two forms on separate pages.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/DhanashreeTukaramVyavahare/my-frist-login-page" // Replace with your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://my-frist-login-page.vercel.app/" // Replace with your Vercel link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* New Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">food website</h3>
            <p className="mb-4">A weather dashboard that provides real-time weather updates, including current conditions, forecasts, and weather maps. Ideal for keeping track of weather patterns.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/DhanashreeTukaramVyavahare/food-website" // Replace with your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://food-website-sage-nine.vercel.app/" // Replace with your live demo link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* New Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">my-website</h3>
            <p className="mb-4">A portfolio website is a curated, online space that showcases your best work. It's one of the most practical and memorable ways to share your work with press, potential collaborators or employers. Much like your PDF portfolio, a portfolio website can be used when applying for jobs or internships.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/DhanashreeTukaramVyavahare/my-website" // Replace with your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://my-website-six-rose.vercel.app/" // Replace with your live demo link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
