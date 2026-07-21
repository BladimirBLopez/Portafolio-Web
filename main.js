/* ============================================================
   BLADIMIR BALDERRAMA — PORTAFOLIO
   Sistema: minimalista, secciones claras/oscuras alternadas,
   tipografía grande, mucho espacio, un solo acento (ámbar).
   ============================================================ */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --dark:        #0B0B0D;
  --dark-text:   #F5F5F7;
  --dark-muted:  #98989D;
  --dark-line:   rgba(245,245,247,0.12);

  --light:       #FFFFFF;
  --light-2:     #F5F5F7;
  --ink:         #1D1D1F;
  --ink-muted:   #6E6E73;
  --light-line:  rgba(29,29,31,0.10);

  --accent:      #F5A623;
  --accent-dim:  rgba(245,166,35,0.14);

  --display: 'Space Grotesk', sans-serif;
  --body:    'Inter', sans-serif;
}

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

body {
  font-family: var(--body);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
  background: var(--light);
  color: var(--ink);
}

a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
::selection { background: var(--accent); color: var(--dark); }

:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

.container { max-width: 1120px; margin: 0 auto; padding: 0 32px; }

/* ── CUSTOM CURSOR (solo desktop) ── */
.cursor-dot {
  position: fixed;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
  pointer-events: none;
  z-index: 999;
  transition: transform 0.15s ease;
}
@media (max-width: 900px), (hover: none) { .cursor-dot { display: none; } }

/* ── SECTION TONES ── */
.section-dark { background: var(--dark); color: var(--dark-text); }
.section-light { background: var(--light); color: var(--ink); }
.section-alt   { background: var(--light-2); color: var(--ink); }

section { padding: 120px 0; }
.hero { padding: 0; }

.eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--accent);
  margin-bottom: 18px;
}
.section-title {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(34px, 4.6vw, 56px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  margin-bottom: 20px;
}
.section-desc {
  font-size: 18px;
  line-height: 1.65;
  max-width: 560px;
  margin-bottom: 56px;
}
.section-dark .section-desc { color: var(--dark-muted); }
.section-light .section-desc, .section-alt .section-desc { color: var(--ink-muted); }

.center { text-align: center; margin-left: auto; margin-right: auto; }

.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ── BUTTONS ── */
.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 28px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 100px;
  transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
}
.btn-primary { background: var(--accent); color: #1A1200; }
.btn-primary:hover { transform: translateY(-2px); opacity: 0.92; }
.btn-secondary { border: 1px solid currentColor; opacity: 0.85; }
.btn-secondary:hover { opacity: 1; transform: translateY(-2px); }

/* ── NAV (siempre oscura, translúcida, como Apple) ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(16px) saturate(160%);
  background: rgba(11,11,13,0.72);
  border-bottom: 1px solid var(--dark-line);
}
.nav-logo { font-family: var(--display); font-weight: 700; font-size: 18px; color: var(--dark-text); }
.nav-logo span { color: var(--accent); }
.nav-menu { display: flex; align-items: center; gap: 30px; }
.nav-menu a { font-size: 13px; font-weight: 500; color: var(--dark-muted); transition: color 0.2s; }
.nav-menu a:hover, .nav-menu a.active { color: var(--dark-text); }
.nav-cta { background: var(--accent) !important; color: #1A1200 !important; padding: 9px 18px; border-radius: 100px; }
.nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
.nav-hamburger span { width: 22px; height: 2px; background: var(--dark-text); transition: all 0.25s; }

@media (max-width: 900px) {
  .nav-menu {
    position: fixed;
    top: 60px; right: -100%;
    width: min(78vw, 320px);
    height: calc(100vh - 60px);
    background: var(--dark);
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
    padding: 40px 32px;
    transition: right 0.3s ease;
  }
  .nav-menu.open { right: 0; }
  .nav-hamburger { display: flex; }
}

/* ── HERO ── */
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 90px 32px 60px;
  text-align: center;
  position: relative;
  background: radial-gradient(120% 80% at 50% 0%, #1B1610 0%, var(--dark) 55%);
}
.hero-inner { max-width: 780px; margin: 0 auto; }
.hero-eyebrow { font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 24px; }
.hero-name {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(38px, 8vw, 76px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--dark-text);
  margin-bottom: 24px;
}
.hero-name .accent-dot { color: var(--accent); }
.hero-subtitle {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--dark-muted);
  max-width: 560px;
  margin: 0 auto 40px;
}
.hero-actions { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
.hero-actions .btn-secondary { color: var(--dark-text); }

.hero-portrait {
  position: relative;
  width: 100%;
  height: clamp(320px, 46vw, 520px);
  margin: 8px 0;
  overflow: hidden;
}
.hero-portrait-img {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: auto;
  max-width: 78%;
  object-fit: contain;
  object-position: bottom center;
  -webkit-mask-image: radial-gradient(ellipse 58% 74% at 50% 44%, black 42%, transparent 90%);
          mask-image: radial-gradient(ellipse 58% 74% at 50% 44%, black 42%, transparent 90%);
}
.hero-badge { display: inline-flex; align-items: center; gap: 8px; margin-top: 4px; font-size: 13px; color: var(--dark-muted); }
.dot-live { width: 6px; height: 6px; border-radius: 50%; background: #35D07F; }

.hero-meta {
  display: flex; justify-content: center; gap: 48px;
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid var(--dark-line);
  flex-wrap: wrap;
}
.hero-stat-num { font-family: var(--display); font-size: 30px; font-weight: 700; color: var(--accent); display: block; }
.hero-stat-label { font-size: 12px; color: var(--dark-muted); margin-top: 6px; }

/* ── SOBRE MÍ ── */
.about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: start; }
.about-bio { font-size: 19px; line-height: 1.75; color: var(--ink-muted); }
.about-values { display: flex; flex-direction: column; }
.about-value {
  padding: 18px 0;
  border-top: 1px solid var(--light-line);
  font-size: 15px;
  font-weight: 500;
  display: flex; align-items: center; gap: 12px;
}
.about-value:last-child { border-bottom: 1px solid var(--light-line); }
.about-value .num { font-family: var(--display); color: var(--accent); font-weight: 700; font-size: 13px; }

.location-row { margin-top: 40px; display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--ink-muted); }
.location-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); position: relative; flex-shrink: 0; }
.location-dot::after {
  content: ''; position: absolute; inset: -8px; border-radius: 50%;
  border: 1px solid var(--accent); opacity: 0.4; animation: ping 2.2s infinite;
}
@keyframes ping { 0% { transform: scale(0.6); opacity: 0.6; } 100% { transform: scale(1.9); opacity: 0; } }

@media (max-width: 800px) { .about-grid { grid-template-columns: 1fr; gap: 36px; } }

/* ── SERVICIOS / HABILIDADES ── */
.services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--dark-line); border: 1px solid var(--dark-line); }
.service-card { background: var(--dark); padding: 40px; }
.service-num { font-family: var(--display); font-size: 14px; color: var(--accent); font-weight: 700; margin-bottom: 20px; }
.service-title { font-family: var(--display); font-size: 22px; font-weight: 600; margin-bottom: 12px; }
.service-desc { font-size: 15px; color: var(--dark-muted); line-height: 1.65; margin-bottom: 18px; }
.service-tools { display: flex; flex-wrap: wrap; gap: 8px; }
.service-tool { font-size: 12px; color: var(--dark-muted); border: 1px solid var(--dark-line); padding: 5px 11px; border-radius: 100px; }
@media (max-width: 700px) { .services-grid { grid-template-columns: 1fr; } .service-card { padding: 32px 24px; } }

/* ── PORTAFOLIO ── */
.filter-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 48px; }
.filter-btn {
  font-size: 13px; font-weight: 500;
  padding: 10px 18px;
  background: transparent;
  border: 1px solid var(--light-line);
  border-radius: 100px;
  color: var(--ink-muted);
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn.active { background: var(--ink); color: var(--light); border-color: var(--ink); }

.portfolio-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 28px;
}
.project-card {
  display: block;
  padding: 0;
  border: none;
}
.portfolio-list .project-card:last-child { border: none; }
.project-card.hidden { display: none; }
.project-card:nth-child(even) { direction: ltr; }

.project-visual {
  position: relative;
  aspect-ratio: 3/4;
  border-radius: 12px;
  overflow: hidden;
  background: var(--light-2);
  margin-bottom: 18px;
}
.project-image { width: 100%; height: 100%; object-fit: contain; transition: transform 0.5s ease; }
.project-card:hover .project-image { transform: scale(1.03); }
.project-num {
  position: absolute; top: 14px; left: 14px;
  font-size: 12px; font-weight: 600;
  background: rgba(255,255,255,0.92);
  padding: 5px 11px; border-radius: 100px;
  color: var(--ink);
}

.project-title { font-family: var(--display); font-size: 19px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.01em; }
.project-desc { font-size: 13.5px; color: var(--ink-muted); line-height: 1.55; margin-bottom: 14px; }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.project-tag { font-size: 11px; color: var(--ink-muted); border: 1px solid var(--light-line); padding: 4px 10px; border-radius: 100px; }
.project-link { font-size: 14px; font-weight: 600; color: var(--accent); display: inline-flex; align-items: center; gap: 6px; }

@media (min-width: 1100px) {
  .portfolio-list { grid-template-columns: repeat(3, 1fr); gap: 48px 32px; }
}
@media (max-width: 420px) {
  .portfolio-list { gap: 28px 14px; }
  .project-title { font-size: 16px; }
  .project-desc { font-size: 12.5px; }
}

/* ── EXPERIENCIA ── */
.timeline { border-top: 1px solid var(--dark-line); }
.timeline-item { padding: 36px 0; border-bottom: 1px solid var(--dark-line); display: grid; grid-template-columns: 200px 1fr; gap: 32px; }
.timeline-date { font-size: 13px; color: var(--dark-muted); padding-top: 4px; }
.timeline-role { font-family: var(--display); font-size: 20px; font-weight: 600; margin-bottom: 4px; }
.timeline-company { font-size: 14px; color: var(--accent); margin-bottom: 16px; }
.timeline-desc li { font-size: 14.5px; color: var(--dark-muted); padding: 4px 0; }
@media (max-width: 700px) { .timeline-item { grid-template-columns: 1fr; gap: 10px; } }

/* ── EDUCACIÓN + IDIOMAS ── */
.edu-lang-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 64px; }
.edu-list { display: flex; flex-direction: column; }
.edu-item { padding: 24px 0; border-top: 1px solid var(--light-line); }
.edu-item:last-child { border-bottom: 1px solid var(--light-line); }
.edu-year { font-size: 13px; color: var(--accent); font-weight: 600; margin-bottom: 6px; }
.edu-degree { font-family: var(--display); font-size: 19px; font-weight: 600; margin-bottom: 4px; }
.edu-institution { font-size: 14px; color: var(--ink-muted); }

.lang-list { display: flex; flex-direction: column; gap: 20px; }
.lang-item { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 16px; border-bottom: 1px solid var(--light-line); }
.lang-name { font-family: var(--display); font-size: 19px; font-weight: 600; }
.lang-level { font-size: 13px; color: var(--accent); font-weight: 600; }

@media (max-width: 800px) { .edu-lang-grid { grid-template-columns: 1fr; gap: 40px; } }

/* ── CONTACTO ── */
.contact-inner { max-width: 640px; margin: 0 auto; text-align: center; }
.contact-title {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(34px, 5.5vw, 60px);
  letter-spacing: -0.025em;
  line-height: 1.08;
  color: var(--dark-text);
  margin-bottom: 20px;
}
.contact-title .accent-dot { color: var(--accent); }
.contact-sub { font-size: 17px; color: var(--dark-muted); max-width: 460px; margin: 0 auto 48px; }
.contact-links { display: flex; flex-direction: column; }
.contact-link {
  display: flex; align-items: center; justify-content: center; gap: 12px;
  padding: 20px 0;
  border-top: 1px solid var(--dark-line);
  font-size: 16px;
  font-weight: 500;
  color: var(--dark-text);
  transition: color 0.2s;
}
.contact-links a:last-child { border-bottom: 1px solid var(--dark-line); }
.contact-link:hover { color: var(--accent); }

/* ── BACK TO TOP ── */
.back-to-top {
  position: fixed;
  right: 20px; bottom: 20px;
  width: 46px; height: 46px;
  border-radius: 50%;
  border: none;
  background: var(--ink);
  color: var(--light);
  font-size: 16px;
  cursor: pointer;
  opacity: 0; visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 199;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.back-to-top.visible { opacity: 1; visibility: visible; transform: translateY(0); }

/* ── FOOTER ── */
footer {
  padding: 40px 32px;
  display: flex; flex-wrap: wrap;
  justify-content: space-between; align-items: center;
  gap: 16px;
  max-width: 1120px;
  margin: 0 auto;
}
.footer-brand { font-family: var(--display); font-weight: 700; font-size: 15px; }
.footer-brand span { color: var(--accent); }
.footer-copy { font-size: 12px; color: var(--ink-muted); }
.footer-social { display: flex; gap: 22px; }
.social-link { font-size: 12px; font-weight: 500; color: var(--ink-muted); }
.social-link:hover { color: var(--accent); }

/* ── RESPONSIVE GLOBAL ── */
@media (max-width: 900px) {
  .container { padding: 0 22px; }
  section { padding: 80px 0; }

  /* hero completo en una sola pantalla — el scroll cae directo en "Sobre mí" */
  html { scroll-snap-type: y proximity; }
  .hero { scroll-snap-align: start; }
  #sobre { scroll-snap-align: start; }

  .hero {
    height: 100svh;
    min-height: 100svh;
    padding: 64px 18px 14px;
    justify-content: space-between;
    overflow: hidden;
  }
  .hero-inner { max-width: 100%; }
  .hero-eyebrow { font-size: 11px; margin-bottom: 10px; }
  .hero-name {
    font-size: clamp(19px, 6vw, 26px);
    line-height: 1.12;
    margin-bottom: 10px;
  }
  .hero-subtitle { font-size: 12px; line-height: 1.4; margin: 0 auto 14px; }
  .hero-actions { margin-bottom: 0; gap: 8px; }
  .btn-primary, .btn-secondary { padding: 9px 16px; font-size: 12px; }

  .hero-portrait { height: 20svh; margin: 6px 0; }
  .hero-portrait-img { max-width: 62%; }

  .hero-badge { font-size: 10.5px; margin-top: 0; }
  .hero-meta { gap: 18px; margin-top: 10px; padding-top: 10px; }
  .hero-stat-num { font-size: 19px; }
  .hero-stat-label { font-size: 9px; margin-top: 2px; }
}
@media (max-width: 380px) {
  .hero-name { font-size: clamp(17px, 6vw, 22px); }
  .hero-portrait { height: 17svh; }
  .hero-subtitle br { display: none; }
}
