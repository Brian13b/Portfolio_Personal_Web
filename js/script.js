// Modo oscuro
const modeButton = document.getElementById("mode-toggle");
const body = document.body;
const icon = modeButton.querySelector("i");

modeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Scroll suave para los enlaces internos
document.querySelectorAll('nav a, .footer-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href.startsWith('#')) {
      const target = document.querySelector(href);
      if(target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Resaltar sección activa en el menú
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if(window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('activo');
    if(link.getAttribute('href') === '#' + current) {
      link.classList.add('activo');
    }
  });
});

// Efecto para botones
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 2px 16px rgba(162,89,255,0.18)';
    btn.style.transform = 'translateY(-2px) scale(1.04)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
    btn.style.transform = 'none';
  });
});