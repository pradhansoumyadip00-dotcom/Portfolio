
document.addEventListener('DOMContentLoaded', () => {
  // Section reveal
  const sections = document.querySelectorAll('.section-content');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  // Header hide/show on scroll
  let lastScroll = 0;
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      // scrolling down
      header.classList.add('hide');
    } else {
      // scrolling up
      header.classList.remove('hide');
    }
    lastScroll = currentScroll;
  });
});
