import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new opportunities and interesting projects.</p>
        <div className="footer-links">
          <a href="mailto:abhishekrajmishra12345@gmail.com" className="footer-link">
            <FaEnvelope /> abhishekrajmishra12345@gmail.com
          </a>
          <a href="tel:+14322278944" className="footer-link">
            <FaPhone /> +1-432-227-8944
          </a>
          <a href="https://github.com/Abhishek2078" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/abhishek-raj-mishra" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <p className="footer-copyright">© 2024 Abhishek Raj Mishra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
