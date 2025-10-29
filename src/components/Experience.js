import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Network Infrastructure Management",
      description: "Wireless network infrastructure with high availability, secure connectivity, minimal downtime across departments."
    },
    {
      title: "Server & System Maintenance",
      description: "Servers, workstations, network devices with updates and monitoring; system uptime 30% higher."
    },
    {
      title: "Cloud Integration",
      description: "Cloud integrations for applications with AWS Lambda and Google Cloud Platform for reliability and latency."
    },
    {
      title: "Issue Resolution & Performance Tuning",
      description: "Critical software and network issue resolution with improvements across 10+ enterprise applications."
    },
    {
      title: "Technical Support & Troubleshooting",
      description: "IT support for hardware, software, network systems with 98% issue resolution rate via diagnostics and system interventions."
    },
    {
      title: "Deployment & DevOps Management",
      description: "Enterprise applications with Docker, Git, Linux, version control, security compliance, cross-environment deployment for 15+ systems."
    }
  ];

  return (
    <section id="experience" className="section" style={{backgroundColor: '#0f1419'}}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-header">
        <h3>IT Specialist at Smokin 6r Inc.</h3>
        <p className="company-info">Franchise Partner of Boost Mobile | Hybrid, USA</p>
        <p className="experience-period">Mar 2022 - Present</p>
      </div>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h4>{exp.title}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
