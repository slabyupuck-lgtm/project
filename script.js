document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const toTop = document.getElementById('toTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      toTop.style.display = 'block';
    } else {
      toTop.style.display = 'none';
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const cards = document.querySelectorAll('.hero-card');
  
  cards.forEach(card => {
    const img = card.querySelector('img');
    
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const rotateY = (x - 0.5) * 12;
      const rotateX = (0.5 - y) * 8;
      
      img.style.transform = `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.04)`;
    });
    
    card.addEventListener('mouseleave', () => {
      img.style.transform = '';
    });
  });

  document.querySelectorAll('img').forEach(img => {
    if ('loading' in HTMLImageElement.prototype) {
      img.loading = 'lazy';
    }
  });

  const search = document.getElementById('search');
  
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll('.hero-card').forEach(c => {
        const txt = (c.innerText || '').toLowerCase();
        c.style.display = txt.includes(q) ? 'block' : 'none';
      });
    });
  }
});