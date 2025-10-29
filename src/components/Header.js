import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-name">Abhishek Raj Mishra</h1>
          <div className="hero-subtitle">
            <p>Computer Engineering</p>
            <p className="location">San Diego State University</p>
          </div>
          <div className="hero-contact">
            <a href="tel:+14322278944" className="contact-item">
              <FaPhone /> +1-432-227-8944
            </a>
            <a href="mailto:abhishekrajmishra12345@gmail.com" className="contact-item">
              <FaEnvelope /> Email
            </a>
            <a href="https://github.com/Abhishek2078" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/abhishek-raj-mishra" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://abhishekrajmishra.com.np" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaGlobe /> Portfolio
            </a>
          </div>
          <div className="cta-buttons">
            <a href="#resume" className="btn btn-primary">View Resume</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
