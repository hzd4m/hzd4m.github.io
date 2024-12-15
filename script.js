// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Effect
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Scroll-triggered Gradient Effect
    const body = document.body;
    window.addEventListener("scroll", () => {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const gradientStart = `hsb(210, 50%, ${20 + scrollPercentage * 20}%)`;
        const gradientEnd = `hsb(210, 70%, ${40 + scrollPercentage * 20}%)`;
        body.style.background = `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`;
    });

    // Interactive Section Animations
    const interactiveItems = document.querySelectorAll(".interactive-item");
    interactiveItems.forEach((item) => {
        const scaleEffect = (scale, outline) => {
            item.style.transform = `scale(${scale})`;
            item.style.outline = outline;
        };

        item.addEventListener("mouseenter", () => scaleEffect(1.05, ""));
        item.addEventListener("mouseleave", () => scaleEffect(1, ""));
        item.addEventListener("focus", () => scaleEffect(1.05, `2px solid var(--accent-color)`));
        item.addEventListener("blur", () => scaleEffect(1, "none"));
    });

    // Header Menu Toggle for Mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", menu.classList.contains("open"));
    });

    // Button Hover Sound Effect
    const buttons = document.querySelectorAll(".button");
    const hoverSound = new Audio("hover-sound.mp3"); // Preload audio for better performance
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => hoverSound.play());
    });
});
