// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-8">Feel free to reach out to me through the form below or via email.</p>
        <form className="mx-auto max-w-md">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg"/>
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg"/>
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
