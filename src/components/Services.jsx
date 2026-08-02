import React from 'react';
import '../styles/services.css';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'End-to-end web applications with clean architecture, secure APIs, and delightful user experiences.',
    points: ['Responsive layouts', 'REST APIs', 'Optimized performance']
  },
  {
    icon: '⚛️',
    title: 'Frontend Development',
    desc: 'Pixel-perfect, animated interfaces built with React.js, modern CSS, and thoughtful UX.',
    points: ['React.js components', 'Framer Motion animations', 'Accessibility first']
  },
  {
    icon: '☕',
    title: 'Java Backend Development',
    desc: 'Robust back-ends built on Core Java, Spring Boot, and MySQL — designed to scale.',
    points: ['Spring Boot APIs', 'JDBC & MySQL', 'Authentication & security']
  },
  {
    icon: '💼',
    title: 'Portfolio Websites',
    desc: 'Premium personal portfolios that showcase your work with cinematic animations and glassmorphism UI.',
    points: ['SEO-friendly', 'Blazing fast', 'Custom branding']
  }
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Services</span>
          <h2 className="section-title">What I Can Build For You</h2>
          <p className="section-subtitle">
            Premium services from front-end craft to full-stack engineering.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="service-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-card__inner">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <ul className="service-card__points">
                  {s.points.map(p => (
                    <li key={p}>
                      <span className="dot" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="service-card__link"
                >
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
