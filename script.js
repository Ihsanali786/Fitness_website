// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Scroll to top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "⬆️";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px"; 0
  scrollBtn.style.padding = "10px";
  scrollBtn.style.display = "none";
  scrollBtn.style.background = "#e91e63";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.cursor = "pointer";
  document.body.appendChild(scrollBtn);
  
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    fadeInOnScroll();
  });
  
  // Fade-in animation
  const fadeElements = document.querySelectorAll("section");
  
  function fadeInOnScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fadeElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transition = "all 1s ease-out";
      el.style.transform = "translateY(50px)";
    });
    fadeInOnScroll();
  });
  