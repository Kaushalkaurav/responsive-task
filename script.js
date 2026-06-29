const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
 
  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
 
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));
 
  // Add to cart micro-interaction
  document.querySelectorAll('.product-add').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = '✓';
      btn.style.background = 'var(--terra)';
      setTimeout(() => { btn.textContent = '+'; btn.style.background = ''; }, 1200);
    });
  });
 
  // Email form
  document.querySelector('.email-submit').addEventListener('click', () => {
    const input = document.querySelector('.email-input');
    if (input.value.includes('@')) {
      input.value = '';
      input.placeholder = '✓ You\'re subscribed!';
      setTimeout(() => { input.placeholder = 'your@email.com'; }, 3000);
    }
  });