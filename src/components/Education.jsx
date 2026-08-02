import React from 'react';
import '../styles/education.css';

const EDUCATION = [
  {
    degree: 'B.E. Computer Science Engineering',
    school: 'Priyadarshini Engineering College, Anna University',
    period: '2023 – 2025',
    score: '75%',
    desc: 'Focused on Data Structures, Algorithms, DBMS, Web Technologies, and Software Engineering.'
  },
  {
    degree: 'Diploma in ECE',
    school: 'SRM Valliammai Polytechnic College',
    period: '2021 – 2022',
    score: '80%',
    desc: 'Foundational studies in Electronics & Communication Engineering.'
  },
  {
    degree: 'HSC (Higher Secondary)',
    school: 'Dominic Savio Hr Sec School',
    period: '2019 – 2020',
    score: '65%',
    desc: 'Completed Higher Secondary Education with a focus on Science & Mathematics.'
  }
];

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Journey</h2>
        </div>

        <div className="timeline">
          <div className="timeline__line" />
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.degree}
              className={`timeline-item reveal timeline-item--${i % 2 === 0 ? 'left' : 'right'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="timeline-item__dot">
                <span />
              </div>

              <div className="timeline-item__card glass-card">
                <div className="timeline-item__head">
                  <span className="timeline-item__period">{edu.period}</span>
                  <span className="timeline-item__score">{edu.score}</span>
                </div>
                <h3 className="timeline-item__degree">{edu.degree}</h3>
                <p className="timeline-item__school">{edu.school}</p>
                <p className="timeline-item__desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
