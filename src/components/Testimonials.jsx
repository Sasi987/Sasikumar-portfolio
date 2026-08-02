import React from 'react';
import '../styles/testimonials.css';

const TESTIMONIALS = [
  {
    initials: 'RK',
    name: 'Rahul Krishnan',
    role: 'Senior Software Engineer',
    quote:
      'Sasikumar delivers with the polish of a senior developer. His attention to UI detail and clean backend code stood out throughout our collaboration.',
    color: 'blue'
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    quote:
      'Working with Sasikumar was seamless. He translated designs into pixel-perfect React components with smooth animations and thoughtful interactions.',
    color: 'purple'
  },
  {
    initials: 'AJ',
    name: 'Arun Jayakumar',
    role: 'Product Manager',
    quote:
      'He grasps requirements quickly and ships fast. Sasikumar consistently balances speed with quality — a rare combination in early-career developers.',
    color: 'cyan'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card glass-card reveal testimonial-card--${t.color}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="testimonial-card__quote-icon">&ldquo;</div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__foot">
                <div className={`testimonial-avatar testimonial-avatar--${t.color}`}>
                  <span>{t.initials}</span>
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
