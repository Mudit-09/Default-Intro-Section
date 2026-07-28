document.addEventListener("DOMContentLoaded", () => {
    const openMenuBtn = document.querySelector(".open-menu");
    const closeMenuBtn = document.querySelector(".close-menu");
    const nav = document.querySelector(".nav");
    const overlay = document.querySelector(".overlay");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  
    function openMobileMenu() {
      nav.classList.add("active");
      overlay.classList.add("active");
    }
  
    function closeMobileMenu() {
      nav.classList.remove("active");
      overlay.classList.remove("active");
    }
  
    if (openMenuBtn) openMenuBtn.addEventListener("click", openMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMobileMenu);
    if (overlay) overlay.addEventListener("click", closeMobileMenu);
  
    dropdownBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const parentDropdown = btn.closest(".dropdown");
  
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
          if (dropdown !== parentDropdown) {
            dropdown.classList.remove("active");
            const btnImg = dropdown.querySelector(".dropdown-btn");
            if (btnImg) btnImg.setAttribute("aria-expanded", "false");
          }
        });
  
        const isActive = parentDropdown.classList.toggle("active");
        btn.setAttribute("aria-expanded", isActive ? "true" : "false");
      });
    });
  
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.classList.remove("active");
          const btnImg = dropdown.querySelector(".dropdown-btn");
          if (btnImg) btnImg.setAttribute("aria-expanded", "false");
        });
      }
    });
  });