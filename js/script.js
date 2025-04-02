// Presentation JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const nextButton = document.getElementById('next-button');
  const prevButton = document.getElementById('prev-button');
  const indicatorContainer = document.querySelector('.slide-indicator');
  
  let currentSlide = 0;
  
  // Create indicator dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    indicatorContainer.appendChild(dot);
  });
  
  const indicators = document.querySelectorAll('.indicator-dot');
  
  // Initialize first slide
  slides[0].classList.add('active');
  
  // Navigation functions
  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }
  
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }
  
  // Event listeners
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });
  
  // Create falling sakura petals
  function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    
    const size = Math.random() * 15 + 5;
    const left = Math.random() * window.innerWidth;
    const opacity = Math.random() * 0.6 + 0.4;
    const duration = Math.random() * 10 + 8;
    
    sakura.style.width = `${size}px`;
    sakura.style.height = `${size}px`;
    sakura.style.left = `${left}px`;
    sakura.style.opacity = opacity;
    sakura.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(sakura);
    
    // Remove sakura after animation completes
    setTimeout(() => {
      sakura.remove();
    }, duration * 1000);
  }
  
  // Create sakura petals periodically
  setInterval(createSakura, 300);
});
