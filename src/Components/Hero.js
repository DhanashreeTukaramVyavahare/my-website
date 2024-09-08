import React from 'react';
import profilePhoto from '../assets/photo.jfif'; // Ensure the path is correct
import backgroundimage from '../assets/background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center bg-red-200 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundimage} // Background image
          alt="Decorative background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center text-center md:text-left p-0">
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={profilePhoto}
            alt="Profile of Dhanashree Vyavahare"
            className="w-3/4 h-auto rounded-e-full border-4 border-black shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-blue-900">Dhanashree Vyavahare</span> <br />
            <span className="text-blue-500">Fullstack Developer</span> <br />
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Creating amazing digital experiences with a blend of front-end and back-end skills.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
          <div className="icons-container flex justify-center md:justify-start space-x-5 md:items-center mt-4">
            <a
              href="https://github.com/DhanashreeTukaramVyavahare"
              className="bg-gray-800 text-white p-3 md:p-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl md:text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/dhanu_vyavahare/"
              className="bg-gray-800 text-white p-3 md:p-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/vyavahare-dhanashree-7848b2315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="bg-gray-800 text-white p-3 md:p-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl md:text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
