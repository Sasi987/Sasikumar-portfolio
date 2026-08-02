import React, { useEffect, useMemo, useState } from 'react';
import '../styles/hero.css';

/**
 * Hero Section
 *  - Animated heading & subtitle
 *  - Typing animation
 *  - CTA buttons
 *  - Social icons
 *  - Floating glowing particles
 */
const TYPING_PHRASES = [
  'Building modern web applications with Java and React',
  'Crafting scalable REST APIs with Spring Boot',
  'Designing pixel-perfect UI/UX experiences'
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = TYPING_PHRASES[phraseIdx];
    const speed = deleting ? 30 : 60;

    const t = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, typed.length + 1));
        if (typed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setTyped(current.slice(0, typed.length - 1));
        if (typed.length - 1 === 0) {
          setDeleting(false);
          setPhraseIdx((phraseIdx + 1) % TYPING_PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [typed, deleting, phraseIdx]);

  // Generate deterministic particles once
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 14
      })),
    []
  );

  return (
    <section id="home" className="hero section">
      {/* Floating glowing particles */}
      <div className="hero__particles" aria-hidden="true">
        {particles.map(p => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>

      <div className="container hero__inner">
        {/* Small tag */}
        <div className="hero__tag reveal">
          <span className="pulse-dot" />
          Available for opportunities
        </div>

        {/* Main heading */}
        <h1 className="hero__title reveal">
          <span className="hero__hello">Hi, I&rsquo;m</span>
          <span className="hero__name gradient-text">SASIKUMAR C</span>
        </h1>

        {/* Subtitle roles */}
        <p className="hero__roles reveal">
          <span>Java Full Stack Developer</span>
          <span className="sep">|</span>
          <span>React.js Developer</span>
          <span className="sep">|</span>
          <span>UI/UX Enthusiast</span>
        </p>

        {/* Typing text */}
        <div className="hero__typing reveal">
          <span className="type-caret">›</span>
          <span className="type-text">{typed}</span>
          <span className="type-cursor" />
        </div>

        {/* CTA buttons */}
        <div className="hero__ctas reveal">
          <a href="/resume.pdf" download className="btn btn-primary magnetic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-ghost magnetic"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-ghost magnetic"
          >
            Hire Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero__socials reveal">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.96c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.08.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.84c3.6 0 4.27 2.37 4.27 5.45v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a href="mailto:srsasikumar987@gmail.com" className="social-icon" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a
            href="https://wa.me/916382694335"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.017 2C6.484 2 2 6.484 2 12.017c0 2.083.635 4.019 1.723 5.63L2 22l4.474-1.68a9.972 9.972 0 0 0 5.542 1.72h.004c5.528 0 10.03-4.484 10.03-10.017C22.05 6.484 17.55 2 12.017 2z" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
