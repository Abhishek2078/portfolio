import React from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Teaching Assistant, Jain University",
      description: "Labs and coursework for 150+ B.Tech students in Software & Data Engineering.",
      period: "May 2024 - Present"
    },
    {
      title: "Student Placement Coordinator, Jain University",
      description: "15+ placement drives with 30+ companies; 90% placement for 200+ students.",
      period: "Aug 2023 - May 2024"
    },
    {
      title: "Research Paper",
      description: "Convolutional Neural Networks for Early Identification of Skin Cancer, Tuijin Jishu Q3 Journal (2024)."
    },
    {
      title: "Journal Publication",
      description: "Cursor Movement by Hand Gesture, IJRPR (2023)."
    },
    {
      title: "Study in India Scholarship",
      description: "Ministry of Education, Government of India (2020)."
    }
  ];

  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements & Leadership</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            {achievement.period && (
              <span className="period">{achievement.period}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
