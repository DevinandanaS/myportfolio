import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Devinandana S</h3>
            <p className="text-gray-300 mt-2">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/devinandana-s-ab25472b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:devinandanas60@gmail.com" className="text-white hover:text-primary transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a href="tel:8547720392" className="text-white hover:text-primary transition-colors">
              <FaPhone size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Devinandana S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;