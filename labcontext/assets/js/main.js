// LabContext — minimal JS (mobile nav + active link hint)

(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Optional: auto-mark current page if not set
  try {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("nav a").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path && !a.hasAttribute("aria-current")) {
        a.setAttribute("aria-current", "page");
      }
    });
  } catch (e) {}
})();
