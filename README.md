# Sasikumar C — Premium Portfolio

An ultra-premium, modern, futuristic React.js portfolio website built with plain CSS.
Apple + Tesla + Stripe inspired UI. Dark theme, glassmorphism, neon gradients, floating orbs.

## Tech Stack

- **React.js 18** + **React Router**
- **Framer Motion** (optional — used sparingly; primary animations are pure CSS)
- **Plain CSS** (App.css + per-component CSS files under `src/styles/`)
- **Vite** build tool

> No Tailwind. No Bootstrap. No MUI. No Chakra. Just React + CSS.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server (localhost:3000)
npm start

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
sasikumar-portfolio/
├── public/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Services.jsx
    │   ├── TechMarquee.jsx
    │   ├── Projects.jsx
    │   ├── Experience.jsx
    │   ├── Education.jsx
    │   ├── Achievements.jsx
    │   ├── GitHubStats.jsx
    │   ├── Testimonials.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        ├── navbar.css
        ├── hero.css
        ├── about.css
        ├── skills.css
        ├── services.css
        ├── marquee.css
        ├── projects.css
        ├── experience.css
        ├── education.css
        ├── achievements.css
        ├── github.css
        ├── testimonials.css
        ├── contact.css
        └── footer.css
```

## Features

- 🎨 Glassmorphism cards with backdrop-filter blur
- 🌌 3D floating blurred background orbs
- ✨ Neon blue / purple / cyan gradients
- 🔤 Inter + Poppins from Google Fonts
- 📱 Fully responsive: 1200px / 992px / 768px / 576px breakpoints
- 🖱️ Smooth scrolling & scroll-reveal animations
- 🎭 Typing animation in Hero
- 📊 Animated counters, progress bars, streak grid
- 🏆 Vertical animated education timeline
- 📬 Working contact form with validation & success UI
- 📱 Floating WhatsApp button
- ⬆️ Back-to-top button
- 🎯 SEO-ready meta tags in `index.html`
- 🌗 Custom scrollbar & selection color
- 🔊 Subtle noise/mesh background overlay

## Customization

- Update contact details in `Contact.jsx`, `Footer.jsx`, `About.jsx`, and `Hero.jsx`.
- Add real project links in `Projects.jsx` (replace `#` placeholders).
- Replace `/resume.pdf` in `Hero.jsx` & `About.jsx` with your actual resume file placed in `public/`.
- Update social URLs (GitHub, LinkedIn) throughout components.
- Add a real EmailJS / API endpoint to `Contact.jsx` `handleSubmit` — currently simulates a success response.

## Deployment

Deploys instantly on **Vercel** or **Netlify** — just connect the repo.

```bash
npm run build
# Output: dist/
```

---

Designed & developed by **Sasikumar C** © 2026
