// تمييز الرابط النشط (الصفحة الحالية) في الـ Navbar
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.textDecoration = "underline";
      link.style.color = "#caf0f8";
    }
  });
});

