import React from 'react';
import '../styles/skills.css';

// Skill categories with progress values
const SKILL_GROUPS = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'blue',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'Bootstrap', level: 82 },
      { name: 'UI/UX Design', level: 80 }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'purple',
    skills: [
      { name: 'Core Java', level: 90 },
      { name: 'OOP Concepts', level: 92 },
      { name: 'JDBC', level: 82 },
      { name: 'Servlets', level: 78 },
      { name: 'JSP', level: 76 },
      { name: 'Spring Boot', level: 80 },
      { name: 'REST API', level: 82 }
    ]
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: 'cyan',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'SQL Queries', level: 88 }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'pink',
    skills: [
      { name: 'VS Code', level: 92 },
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Postman', level: 82 },
      { name: 'Microsoft Office', level: 88 },
      { name: 'Vercel', level: 80 },
      { name: 'Netlify', level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A carefully curated toolkit spanning front-end, back-end, databases, and dev tools.
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={group.title} className={`skill-card glass-card reveal skill-card--${group.color}`}>
              <div className="skill-card__head">
                <div className="skill-card__icon">{group.icon}</div>
                <div>
                  <h3 className="skill-card__title">{group.title}</h3>
                  <span className="skill-card__count">{group.skills.length} skills</span>
                </div>
              </div>

              <div className="skill-list">
                {group.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__label">
                      <span>{skill.name}</span>
                      <span className="skill-item__pct">{skill.level}%</span>
                    </div>
                    <div className="skill-item__bar">
                      <div
                        className="skill-item__fill"
                        style={{ width: `${skill.level}%`, transitionDelay: `${idx * 0.05}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
