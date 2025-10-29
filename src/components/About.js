import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-text">
          Computer Engineering graduate with expertise in machine learning, cloud computing, 
          and network infrastructure. Proven track record in IT operations, DevOps, NLP-based 
          applications, and neural network development.
        </p>
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>M.S Candidate</h3>
            <p>Computer Engineering<br />San Diego State University</p>
          </div>
          <div className="highlight-card">
            <h3>IT Specialist</h3>
            <p>98% Issue Resolution<br />Cloud & DevOps Expert</p>
          </div>
          <div className="highlight-card">
            <h3>AI Researcher</h3>
            <p>ML/NLP Projects<br />Published Research</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
