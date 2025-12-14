// Basic interactivity: nav toggle, current year, simple reveal, contact form demo
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const btn = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      // simple show/hide for small screens
      if (nav.style.display === 'block') {
        nav.style.display = '';
      } else {
        nav.style.display = 'block';
        nav.style.position = 'absolute';
        nav.style.right = '1rem';
        nav.style.top = '64px';
        nav.style.background = 'rgba(7,18,36,0.95)';
        nav.style.padding = '0.8rem';
        nav.style.borderRadius = '8px';
      }
    });

    // hide nav when a link clicked (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
          nav.style.display = '';
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Year auto-fill
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Simple reveal on scroll using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // if you want one-time reveal, unobserve:
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

  // Contact form demo (client-side only)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // NOTE: This is a demo. To actually send messages, integrate Formspree / Netlify forms / backend.
      alert('Message sent (demo). Replace with real form handling before publishing.');
      form.reset();
    });
  }
});
