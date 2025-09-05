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

// Menú móvil
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Scroll suave
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

// Resaltar sección activa
const secciones = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  secciones.forEach(seccion => {
    const seccionTop = seccion.offsetTop - 80;
    if(window.scrollY >= seccionTop) {
      current = seccion.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('activo');
    if(link.getAttribute('href') === '#' + current) {
      link.classList.add('activo');
    }
  });
});