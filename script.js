document.addEventListener("DOMContentLoaded", () => {
    const openMenuBtn = document.querySelector(".open-menu");
    const closeMenuBtn = document.querySelector(".close-menu");
    const nav = document.querySelector(".nav");
    const overlay = document.querySelector(".overlay");
    const navLinks = document.querySelectorAll(".nav-link");
  
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
  
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (e) => {
        // Check if clicked item is a dropdown or contains a dropdown
        const isDropdown = navLink.classList.contains("dropdown");
        if (!isDropdown) return;
  
        e.stopPropagation();
  
        // Close other open dropdowns
        navLinks.forEach((otherLink) => {
          if (otherLink !== navLink) {
            otherLink.classList.remove("link-open", "active");
            const btnImg = otherLink.querySelector(".dropdown-btn");
            if (btnImg) btnImg.setAttribute("aria-expanded", "false");
          }
        });
  
        // Toggle link-open class expected by Cypress spec
        const isActive = navLink.classList.toggle("link-open");
        navLink.classList.toggle("active", isActive);
  
        const btn = navLink.querySelector(".dropdown-btn");
        if (btn) btn.setAttribute("aria-expanded", isActive ? "true" : "false");
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-link")) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("link-open", "active");
          const btn = navLink.querySelector(".dropdown-btn");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      }
    });
  });