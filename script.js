const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
});

mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});

// Package buttons auto-fill the form
document.querySelectorAll("[data-package]").forEach(btn => {
  btn.addEventListener("click", () => {
    const pkg = btn.getAttribute("data-package");
    const select = document.getElementById("packageSelect");
    if (select && pkg) select.value = pkg;
  });
});

// Contact form -> opens email draft (no backend)
const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const name = encodeURIComponent(data.get("name") || "");
  const email = encodeURIComponent(data.get("email") || "");
  const date = encodeURIComponent(data.get("date") || "");
  const pkg = encodeURIComponent(data.get("package") || "");
  const details = encodeURIComponent(data.get("details") || "");

  const subject = `Wedding Website Inquiry - ${decodeURIComponent(pkg)}`;
  const body =
`Hi Knotte Studios!

Name: ${decodeURIComponent(name)}
Email: ${decodeURIComponent(email)}
Wedding date: ${decodeURIComponent(date)}
Package: ${decodeURIComponent(pkg)}

Details:
${decodeURIComponent(details)}

Thanks!`;

  const mailto = `mailto:hello@knottestudios.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
