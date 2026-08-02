import React from 'react';
import '../styles/github.css';

export default function GitHubStats() {
  return (
    <section id="github" className="github-stats section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">GitHub</span>
          <h2 className="section-title">GitHub Statistics</h2>
          <p className="section-subtitle">
            Live overview of contributions, top languages, and streaks.
          </p>
        </div>

        <div className="github__grid">
          {/* GitHub Stats */}
          <div className="github-card glass-card reveal">
            <div className="github-card__head">
              <h3>GitHub Stats</h3>
              <span className="github-card__pill">Overview</span>
            </div>
            <div className="stats-row">
              <div className="stat">
                <div className="stat__val">120<span>+</span></div>
                <div className="stat__label">Commits</div>
              </div>
              <div className="stat">
                <div className="stat__val">18<span>+</span></div>
                <div className="stat__label">Repositories</div>
              </div>
              <div className="stat">
                <div className="stat__val">42<span>+</span></div>
                <div className="stat__label">Pull Requests</div>
              </div>
              <div className="stat">
                <div className="stat__val">A+</div>
                <div className="stat__label">Grade</div>
              </div>
            </div>
          </div>

          {/* Top Languages */}
          <div className="github-card glass-card reveal">
            <div className="github-card__head">
              <h3>Top Languages</h3>
              <span className="github-card__pill">Usage</span>
            </div>
            <ul className="lang-list">
              {[
                { name: 'Java', pct: 42, color: '#f89820' },
                { name: 'JavaScript', pct: 24, color: '#f7df1e' },
                { name: 'HTML', pct: 14, color: '#e34c26' },
                { name: 'CSS', pct: 12, color: '#264de4' },
                { name: 'SQL', pct: 8, color: '#22D3EE' }
              ].map(l => (
                <li key={l.name} className="lang-item">
                  <div className="lang-item__head">
                    <span><span className="lang-dot" style={{ background: l.color }} />{l.name}</span>
                    <span>{l.pct}%</span>
                  </div>
                  <div className="lang-bar">
                    <div
                      className="lang-fill"
                      style={{ width: `${l.pct}%`, background: l.color }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribution Streak */}
          <div className="github-card glass-card reveal">
            <div className="github-card__head">
              <h3>Contribution Streak</h3>
              <span className="github-card__pill">Streak</span>
            </div>
            <div className="streak-grid">
              <div className="streak-block">
                <div className="streak-block__val">
                  <span className="gradient-text">28</span>
                </div>
                <div className="streak-block__label">Current Streak</div>
                <div className="streak-block__sub">Days in a row</div>
              </div>
              <div className="streak-block">
                <div className="streak-block__val">
                  <span className="gradient-text">65</span>
                </div>
                <div className="streak-block__label">Longest Streak</div>
                <div className="streak-block__sub">Personal best</div>
              </div>
            </div>

            <div className="streak-heat">
              {Array.from({ length: 35 }).map((_, i) => {
                const intensity = Math.random();
                return (
                  <div
                    key={i}
                    className="heat-cell"
                    style={{
                      background: `rgba(34, 211, 238, ${0.08 + intensity * 0.7})`
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
