import React from 'react';
import '../styles/marquee.css';

// Tech stack marquee — infinite horizontal scroll of technologies
const TECH = [
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'JavaScript', icon: '𝗝𝗦' },
  { name: 'HTML5', icon: '🔥' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'REST API', icon: '🔗' },
  { name: 'Git', icon: '🌿' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Postman', icon: '📮' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Netlify', icon: '🚀' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Bootstrap', icon: '🅱️' }
];

export default function TechMarquee() {
  // Duplicate for seamless loop
  const track = [...TECH, ...TECH];

  return (
    <section className="marquee-section">
      <div className="marquee-title reveal">
        <span className="section-tag">Tech Stack</span>
      </div>

      <div className="marquee">
        <div className="marquee__track">
          {track.map((t, i) => (
            <div key={i} className="marquee__item">
              <span className="marquee__icon">{t.icon}</span>
              <span className="marquee__name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse row */}
      <div className="marquee marquee--reverse">
        <div className="marquee__track">
          {track.map((t, i) => (
            <div key={i} className="marquee__item">
              <span className="marquee__icon">{t.icon}</span>
              <span className="marquee__name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
