document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  const menuFilterBtns = document.querySelectorAll("[data-menu-filter]");
  const menuCards = document.querySelectorAll("[data-menu-category]");
  menuFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      menuFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-menu-filter");
      menuCards.forEach((card) => {
        card.style.display = (category === "all" || card.getAttribute("data-menu-category") === category) ? "flex" : "none";
      });
    });
  });

  const branchFilterBtns = document.querySelectorAll("[data-branch-filter]");
  const branchCards = document.querySelectorAll("[data-branch-city]");
  branchFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      branchFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const city = btn.getAttribute("data-branch-filter");
      branchCards.forEach((card) => {
        card.style.display = (city === "all" || card.getAttribute("data-branch-city") === city) ? "flex" : "none";
      });
    });
  });

  const toast = document.getElementById("toast-banner");
  const orderBtns = document.querySelectorAll(".order-mini-btn");
  let toastTimer;
  orderBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemName = btn.getAttribute("data-item");
      if (toast) {
        toast.textContent = `${itemName} added to your table tray!`;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");
  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("full-name").value;
      const branch = document.getElementById("branch-select").value;
      formFeedback.textContent = `Shukriya, ${name}! Your table booking / inquiry has been sent to our ${branch} lounge.`;
      formFeedback.style.display = "block";
      contactForm.reset();
    });
  }
});
