import React, { useEffect, useRef, useState } from 'react';
import '../styles/about.css';

// Animated counter hook — increments to target once card is in view
function useCounter(target, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const duration = 1600;
    const startTime = performance.now();
    const tick = now => {
      const p = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return value;
}

export default function About() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const yrs = useCounter(1, inView);
  const projects = useCounter(10, inView);
  const learning = useCounter(15, inView);

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">A Passionate Developer<br />Crafting Digital Experiences</h2>
        </div>

        <div className="about__grid" ref={ref}>
          {/* Profile Card */}
          <div className="about__profile glass-card reveal">
            <div className="about__avatar">
              <div className="avatar-inner">
                <span><img src="https://i.ibb.co/fzQKRtBP/f41d82d9-e987-4c4c-9da9-c4f9a67d52e-fotor-2026073081135.png"  /></span>
              </div>
              <div className="avatar-ring" />
            </div>
            <h3 className="about__name">Sasikumar C</h3>
            <p className="about__role">Java Full Stack Developer</p>
            <ul className="about__meta">
              <li>
                <strong>Location</strong>
                <span>Sholinganallur, Chennai</span>
              </li>
              <li>
                <strong>Email</strong>
                <span>srsasikumar987@gmail.com</span>
              </li>
              <li>
                <strong>Phone</strong>
                <span>+91 63826 94335</span>
              </li>
              <li>
                <strong>Availability</strong>
                <span className="badge-avail">Open to Work</span>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="about__content reveal">
            <p className="about__lead">
              Motivated and results-driven <span className="hl">Computer Science Engineering</span>{' '}
              student with strong skills in <span className="hl">Java, React.js, HTML, CSS, JavaScript</span>,
              and modern web development. Passionate about creating scalable, user-friendly, and
              high-performance applications.
            </p>
            <p className="about__body">
              I love turning complex problems into elegant, performant interfaces — combining thoughtful
              UI/UX with clean, maintainable code. From building responsive React front-ends to
              designing REST APIs with Spring Boot, I bring an end-to-end mindset to every project.
            </p>

            {/* Counters */}
            <div className="about__counters">
              <div className="counter-card">
                <div className="counter-value">
                  {yrs}<span>+</span>
                </div>
                <div className="counter-label">Year of Experience</div>
              </div>
              <div className="counter-card">
                <div className="counter-value">
                  {projects}<span>+</span>
                </div>
                <div className="counter-label">Projects Built</div>
              </div>
              <div className="counter-card">
                <div className="counter-value">
                  {learning}<span>+</span>
                </div>
                <div className="counter-label">Technologies Learned</div>
              </div>
            </div>

            <div className="about__ctas">
              <a href="sasi@.pdf" download className="btn btn-primary">Download Resume</a>
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-ghost"
              >
                Let&rsquo;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
