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
    // Add hover effect with JavaScript to enhance accessibility
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-10px) scale(1.05)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0) scale(1)";
    });

    // Focus effect for keyboard navigation
    item.addEventListener("focus", () => {
      item.style.transform = "translateY(-10px) scale(1.05)";
      item.style.outline = `2px solid var(--accent-color)`;
    });

    item.addEventListener("blur", () => {
      item.style.transform = "translateY(0) scale(1)";
      item.style.outline = "none";
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
