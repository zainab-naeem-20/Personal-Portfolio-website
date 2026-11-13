// ANIMATIONS
AOS.init({
  duration: 2000,
  once: true,
});

// TYPING EFFECT
const words = [
  "Creative Developer",
  "Frontend Developer",
  "UI/UX Designer",
  "Software Engineering Student",
];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    charIndex++;
    typedText.textContent = currentWord.slice(0, charIndex);

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeLoop, 2000);
      return;
    }

    setTimeout(typeLoop, 100);
  } else {
    charIndex--;
    typedText.textContent = currentWord.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeLoop, 500);
      return;
    }

    setTimeout(typeLoop, 50);
  }
}

if (typedText) {
  typeLoop();
}

// HAMBURGER MENU
const navbar = document.querySelector(".navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a");

function setMenu(isOpen) {
  navMenu.classList.toggle("open", isOpen);
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle.addEventListener("click", () => {
  setMenu(!navMenu.classList.contains("open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    setMenu(false);
  }
});

// NAVBAR SHADOW ON SCROLL
function handleScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

// ACTIVE LINK ON SCROLL
const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));
