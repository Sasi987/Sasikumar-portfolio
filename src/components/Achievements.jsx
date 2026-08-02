import React from 'react';
import '../styles/achievements.css';

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Full Stack Development Ambassador',
    desc: 'Recognized for consistent hands-on learning and delivery in full-stack web development.'
  },
  {
    icon: '🚀',
    title: 'Multiple Web Projects Built',
    desc: 'Designed and shipped multiple end-to-end web projects — from music platforms to responsive portfolios.'
  },
  {
    icon: '📚',
    title: 'Active Learner in Modern Web',
    desc: 'Continuously exploring modern web technologies — React ecosystem, Spring Boot, and cloud deployments.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Milestones & Recognition</h2>
        </div>

        <div className="achievements__grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a.title}
              className="achievement-card glass-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="achievement-card__icon">{a.icon}</div>
              <div className="achievement-card__body">
                <h3 className="achievement-card__title">{a.title}</h3>
                <p className="achievement-card__desc">{a.desc}</p>
              </div>
              <div className="achievement-card__glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
