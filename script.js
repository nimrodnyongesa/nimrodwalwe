/* ═══════════════════════════════════════════
   PORTFOLIO v2 — Script
   ═══════════════════════════════════════════ */

// ─── Typing Effect ───
const phrases = [
  'Fullstack Engineer',
  'AI Systems Builder',
  'Backend Architect',
  'Agent Pipeline Designer',
  'DevOps Practitioner'
];

const typed = document.getElementById('typed');
let phraseIdx = 0, charIdx = 0, deleting = false;

function type() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typed.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      setTimeout(() => { deleting = true; type(); }, 2000);
      return;
    }
    setTimeout(type, 70);
  } else {
    typed.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 40);
  }
}
type();

// ─── Scroll Animations ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));

// ─── Nav Scroll ───
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);

  // Active link
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// ─── Mobile Menu ───
const burger = document.getElementById('burger');
const navLinksContainer = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
});

navLinksContainer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinksContainer.classList.remove('open');
  });
});

// ─── Background Grid Canvas ───
const canvas = document.getElementById('gridCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w, h, cols, rows;
  const gap = 40;
  const dots = [];

  function resize() {
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
    cols = Math.ceil(w / gap);
    rows = Math.ceil(h / gap);
    dots.length = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          x: c * gap + gap / 2,
          y: r * gap + gap / 2,
          baseAlpha: Math.random() * 0.3 + 0.05,
          phase: Math.random() * Math.PI * 2
        });
      }
    }
  }

  let mouse = { x: -1000, y: -1000 };
  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = -1000; mouse.y = -1000;
  });

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    const time = t * 0.001;
    dots.forEach(d => {
      const dx = d.x - mouse.x;
      const dy = d.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const proximity = Math.max(0, 1 - dist / 200);
      const pulse = Math.sin(time + d.phase) * 0.15 + 0.85;
      const alpha = (d.baseAlpha + proximity * 0.6) * pulse;
      const radius = 1 + proximity * 2;
      ctx.beginPath();
      ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(10, 132, 255, ${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
