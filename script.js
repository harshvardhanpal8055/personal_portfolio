// Animate skill bars
const fills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const percent = entry.target.getAttribute('data-percent');
      entry.target.style.width = percent;
    }
  });
}, { threshold: 0.5 });
fills.forEach(f => observer.observe(f));

// Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});
