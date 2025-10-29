import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // If you have a PDF resume file, place it in public/ folder and link it here
    // For now, this will show a placeholder message
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update this with your actual PDF path
    link.download = 'Abhishek_Raj_Mishra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section resume-section">
      <h2 className="section-title">Resume</h2>
      <div className="resume-content">
        <div className="resume-card">
          <div className="resume-icon">
            <FaFilePdf />
          </div>
          <h3>Download My Resume</h3>
          <p className="resume-description">
            View my complete professional background, including education, experience, 
            projects, and technical skills. Available in PDF format for easy sharing.
          </p>
          <button onClick={handleDownload} className="download-btn">
            <FaDownload /> Download PDF
          </button>
        </div>
        
        <div className="resume-preview">
          <h3>Key Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-label">Education:</span>
              <span className="highlight-value">M.S Computer Engineering @ SDSU</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Experience:</span>
              <span className="highlight-value">IT Specialist @ Smokin 6r Inc.</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Resolutions:</span>
              <span className="highlight-value">98% Issue Resolution Rate</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Teaching:</span>
              <span className="highlight-value">150+ B.Tech Students</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Placements:</span>
              <span className="highlight-value">90% for 200+ Students</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Publications:</span>
              <span className="highlight-value">2 Research Papers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
