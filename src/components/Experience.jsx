import React from 'react';
import '../styles/experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Where I&rsquo;ve Worked</h2>
        </div>

        <div className="experience__wrap">
          <div className="experience-card glass-card reveal">
            <div className="experience-card__left">
              <div className="experience-card__icon">💼</div>
              <span className="experience-card__badge">Internship</span>
            </div>

            <div className="experience-card__body">
              <div className="experience-card__head">
                <div>
                  <h3 className="experience-card__title">Full Stack Development Intern</h3>
                  <p className="experience-card__meta">1 Month · Remote</p>
                </div>
                <span className="experience-card__period">2024</span>
              </div>

              <p className="experience-card__desc">
                Completed a one-month Full Stack Development internship focused on hands-on
                delivery of production-quality UI components and full-stack fundamentals.
              </p>

              <ul className="experience-card__list">
                <li>
                  <span className="mark" />
                  Built reusable <strong>frontend components</strong> using React.js and modern CSS.
                </li>
                <li>
                  <span className="mark" />
                  Designed <strong>responsive layouts</strong> optimized for mobile, tablet, and desktop.
                </li>
                <li>
                  <span className="mark" />
                  Learned and applied <strong>Java-based web development</strong> concepts including
                  Servlets, JSP, and REST APIs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
