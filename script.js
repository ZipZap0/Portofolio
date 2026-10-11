/**
 * Script Interaktif Portofolio
 * Menangani: Responsive mobile navigation drawer, navbar scroll state, dan auto-close menu
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-btn');
  const header = document.getElementById('navbar');
  const yearElement = document.getElementById('currentYear');

  // 1. Tampilkan tahun terkini pada footer
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Toggle Menu Hamburger pada Layar Mobile
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Tutup menu mobile ketika salah satu link navigasi diklik
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Tutup menu jika user mengklik area di luar navbar
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && navMenu.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // 3. Efek Shadow pada Header saat Melakukan Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
