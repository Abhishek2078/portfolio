import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      school: "San Diego State University",
      location: "San Diego, California",
      degree: "M.S Computer Engineering",
      gpa: "3.40",
      period: "Aug 2025 - May 2027"
    },
    {
      school: "Jain University",
      location: "Bengaluru, India",
      degree: "B.Tech Information Science & Engineering",
      gpa: "8.93 (WES: 3.9)",
      period: "Aug 2020 - Jun 2024"
    }
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span className="location">{edu.location}</span>
            </div>
            <div className="education-body">
              <p className="degree">{edu.degree}</p>
              <div className="education-footer">
                <span className="gpa">GPA: {edu.gpa}</span>
                <span className="period">{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
