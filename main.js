document.addEventListener('DOMContentLoaded', () => {

  // ── CURSOR ──
  try {
    const cursor = document.getElementById('cursor');
    if (cursor) {
      document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX - 4 + 'px';
        cursor.style.top  = e.clientY - 4 + 'px';
      });
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
      });
    }
  } catch (err) { console.error('Cursor init error:', err); }

  // ── HAMBURGER ──
  try {
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('navMenu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('open')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
      });
      navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }));
    }
  } catch (err) { console.error('Hamburger init error:', err); }

  // ── SCROLL REVEAL ──
  try {
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => revealObserver.observe(el));
  } catch (err) { console.error('Reveal observer error:', err); }

  // ── SKILL BARS (si existen) ──
  try {
    document.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.animationPlayState = 'paused';
    });
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
            bar.style.animationDelay = `${i * 0.1}s`;
            bar.style.animationPlayState = 'running';
          });
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skill-group').forEach(g => skillObserver.observe(g));
  } catch (err) { console.error('Skill bars error:', err); }

  // ── SMOOTH SCROLL ──
  try {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  } catch (err) { console.error('Smooth scroll error:', err); }

  // ── NAV ACTIVE ──
  try {
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-menu a');
    const activeSectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => activeSectionObserver.observe(s));
  } catch (err) { console.error('Nav active error:', err); }

  // ── BACK TO TOP ──
  try {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      });
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  } catch (err) { console.error('Back to top error:', err); }

  // ── FILTROS DE PORTAFOLIO ──
  try {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const visibleCount = document.getElementById('visibleCount');
    const totalCount = document.getElementById('totalCount');

    if (totalCount) {
      totalCount.textContent = projectCards.length;
    }
    if (visibleCount) {
      visibleCount.textContent = projectCards.length;
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        let visibleProjects = 0;

        projectCards.forEach(card => {
          const categories = (card.getAttribute('data-category') || '').split(' ');

          if (filter === 'all' || categories.includes(filter)) {
            card.classList.remove('hidden');
            visibleProjects++;
          } else {
            card.classList.add('hidden');
          }
        });

        if (visibleCount) {
          visibleCount.textContent = visibleProjects;
        }

        document.querySelectorAll('.project-card:not(.hidden)').forEach((card, index) => {
          card.style.animation = 'none';
          void card.offsetHeight;
          card.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s forwards`;
        });
      });
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  } catch (err) { console.error('Filter init error:', err); }

  // ── MEJORAR EXPERIENCIA EN MÓVIL ──
  try {
    if (window.innerWidth < 768) {
      const cursorEl = document.getElementById('cursor');
      if (cursorEl) {
        cursorEl.style.display = 'none';
      }
    }

    function adjustProjectCards() {
      const cards = document.querySelectorAll('.project-card');
      if (window.innerWidth < 480) {
        cards.forEach(card => {
          const info = card.querySelector('.project-info');
          if (info) {
            info.style.overflow = 'hidden';
          }
        });
      }
    }

    adjustProjectCards();
    window.addEventListener('resize', adjustProjectCards);
  } catch (err) { console.error('Mobile tweaks error:', err); }

});