import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "MATLAB", "Dart", "C", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django", "FastAPI", "React", "Streamlit", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face Transformers", "OpenCV", "SHAP"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["Natural Language Processing (NLP)", "Computer Vision", "Neural Networks", "Federated Learning", "Model Evaluation & Visualization"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Firebase Firestore"]
    },
    {
      title: "Networking & Systems",
      skills: ["Cisco Packet Tracer", "DHCP Configuration", "TCP/IP", "ICMP", "Network Security", "Linux System Administration"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Lambda, EC2, S3)", "Google Cloud Platform (BigQuery, Compute Engine)", "Docker", "Git", "CI/CD Pipelines"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["VS Code", "JIRA", "Agile/Scrum", "GitHub Actions", "MATLAB IDE", "Linux Shell Scripting"]
    }
  ];

  return (
    <section id="skills" className="section" style={{backgroundColor: '#0f1419'}}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
