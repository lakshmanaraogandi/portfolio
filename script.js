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

// Modal logic for projects
const projects = [
  {
    id: 1,
    title: "CFD in Turbomachines",
    description: "Performed a detailed CFD simulation on transonic compressor stages using ANSYS CFX and validated results with MATLAB post-processing scripts.",
    images: ["images/turbo1.jpg", "images/turbo2.jpg"]
  },
  {
    id: 2,
    title: "Wind Tunnel CFD Analysis",
    description: "Created car body geometry in CATIA & NX, ran aerodynamic simulations in ANSYS Fluent, and analyzed drag performance.",
    images: ["images/windtunnel1.jpg"]
  },
  {
    id: 3,
    title: "Flight Path Prediction with ML",
    description: "Trained a regression model using ADS-B data to predict helicopter flight paths, visualized in Matplotlib.",
    images: ["images/flight1.png", "images/flight2.png"]
  },
  {
    id: 4,
    title: "Rotating Detonation Engine Study",
    description: "A comprehensive literature-based study on RDE technology and its potential impact on future propulsion systems.",
    images: ["images/rde1.jpg"]
  }
];

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalGallery = document.getElementById("modal-gallery");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projectId = parseInt(card.getAttribute("data-project"));
    const project = projects.find(p => p.id === projectId);

    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalGallery.innerHTML = project.images.map(src => `<img src="${src}" alt="${project.title} image">`).join("");

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
