import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Explainable Mental Health Chatbot",
      description: "AI-powered mental health system with explainable NLP models. Crisis detection module for suicide ideation with verified helpline resources. SHAP-based explanations for emotional risk predictions. FastAPI backend and Streamlit frontend with mood tracking dashboards and visualizations.",
      tech: ["Python", "FastAPI", "Streamlit", "Hugging Face Transformers", "SHAP"]
    },
    {
      title: "Neural Network Classifier",
      description: "Feedforward neural network from scratch in MATLAB for Pima Indians Diabetes dataset. Custom modules for data preprocessing, normalization, forward propagation, backpropagation, evaluation. Network configurations (5–20 hidden units) with 76.09% test accuracy and cost convergence.",
      tech: ["MATLAB"]
    },
    {
      title: "DHCP Client–Server Configuration",
      description: "DHCP client–server model in Cisco Packet Tracer. DHCP server, switch, multiple PCs for dynamic IP assignment within local subnet. Connectivity with ICMP ping tests and IP lease allocation.",
      tech: ["Cisco Packet Tracer", "DHCP", "TCP/IP", "ICMP"]
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
