import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Services from './components/Services.jsx';
import TechMarquee from './components/TechMarquee.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import GitHubStats from './components/GitHubStats.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

/**
 * Root App component — assembles every section of Sasikumar C's portfolio.
 * Handles:
 *  - Loading screen on mount
 *  - Scroll reveal via IntersectionObserver
 *  - Background floating orbs
 */
export default function App() {
  const [loading, setLoading] = useState(true);

  // Fake initial loader — smooths hero entrance
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  // Scroll reveal — attaches to any element with class="reveal"
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
        <div className="loader-logo">SASIKUMAR C</div>
        <div className="loader-bar" />
      </div>

      {/* Background floating orbs (fixed layer behind content) */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Main app content */}
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <TechMarquee />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <GitHubStats />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
