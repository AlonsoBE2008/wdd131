// Footer dynamic year and last modified
const yearEl = document.getElementById("year");
const lastModEl = document.getElementById("last-modified");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
if (lastModEl) {
  lastModEl.textContent = document.lastModified;
}

// Hamburger toggle (mobile)
const hamburgerBtn = document.getElementById("hamburger");
const nav = document.getElementById("primary-nav");

if (hamburgerBtn && nav) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    hamburgerBtn.textContent = isOpen ? "✕" : "☰";
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  });
}
