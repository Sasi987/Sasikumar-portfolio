import React from 'react';
import '../styles/projects.css';

const PROJECTS = [
  {
    title: 'Maya Industries',
    subtitle: 'Modern Responsive Portfolio',
    image: '',
    desc:
      'Maya Industries is a premium industrial manufacturing and engineering company delivering high-performance machinery solutions for fabrication, welding, cutting, drilling, and heavy-duty industrial applications.',
    tech: ['React.js', 'CSS3', 'Framer Motion'],
    features: ['Welding machine solutions', 'Gas cutting equipment', 'Drilling & heavy-duty machinery','Industrial fabrication systems'],
    demo: 'https://mayaindustriess.com/',
    github: '#',
    status: 'live',
    accent: 'purple'
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Modern Responsive Portfolio',
    desc:
      'A premium personal portfolio built with React.js — cinematic animations, glassmorphism, contact form, and SEO-optimized structure.',
    tech: ['React.js', 'CSS3', 'Framer Motion'],
    features: ['Smooth animations', 'Contact form integration', 'SEO optimized'],
    demo: 'https://sasistack.netlify.app/',
    github: '#',
    status: 'live',
    accent: 'purple'
  },
  
  
  {
    title: 'SpotStars / Melodify',
    subtitle: 'Music & Movie Categorization Platform',
    desc:
      'A vibrant platform to explore movies and music by category — browse by actor, music director, or lyricist, and search by language or director-based filters.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Category filters', 'Actor & director browsing', 'Language-based search'],
    demo: '#',
    github: '#',
    status: 'live',
    accent: 'blue'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects I&rsquo;ve Built</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my design sensibility and engineering craft.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`project-card reveal project-card--${p.accent}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Gradient border */}
              <div className="project-card__border" aria-hidden="true" />

              <div className="project-card__inner">
                {/* Image placeholder */}
                <div className="project-card__thumb">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      className="thumb-img"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <div className="thumb-grid" aria-hidden="true" />
                      <div className="thumb-content">
                        <span className="thumb-label">{p.subtitle}</span>
                        <span className="thumb-title">{p.title}</span>
                      </div>
                    </>
                  )}
                  {p.status === 'soon' && (
                    <span className="thumb-badge">Coming Soon</span>
                  )}
                  {p.status === 'live' && (
                    <span className="thumb-badge thumb-badge--live">
                      <span className="dot-live" /> Live
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="project-card__body">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.desc}</p>

                  <ul className="project-card__features">
                    {p.features.map(f => (
                      <li key={f}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="project-card__tech">
                    {p.tech.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Live Demo
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.96c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.08.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}