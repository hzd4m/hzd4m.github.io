// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Scroll-triggered gradient effect for the body
  const body = document.body;
  window.addEventListener("scroll", () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const gradientStart = `hsb(210, 50%, ${20 + scrollPercentage * 20}%)`;
    const gradientEnd = `hsb(210, 70%, ${40 + scrollPercentage * 20}%)`;
    body.style.background = `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`;
  });

  // Interactive section animations
    const interactiveItems = document.querySelectorAll(".interactive-item");
  interactiveItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.05)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
    item.addEventListener("focus", () => {
      item.style.outline = `2px solid var(--accent-color)`;
      item.style.transform = "scale(1.05)";
    });
    item.addEventListener("blur", () => {
      item.style.outline = "none";
      item.style.transform = "scale(1)";
    });
  });
});

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Button hover sound effect (example, optional)
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const audio = new Audio("hover-sound.mp3"); // Replace with your sound file
      audio.play();
    });
  });
});
