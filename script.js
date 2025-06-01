// Toggle mobile nav
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
  });
  
  // Toggle dark mode
  document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Scroll reveal animations
  ScrollReveal().reveal('.section', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false,
    interval: 200
  });
  