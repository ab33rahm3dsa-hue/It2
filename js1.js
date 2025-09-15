// ترحيب بالمستخدم في الصفحة الرئيسية
document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = document.querySelector("main h2");
  
  // إضافة تأثير صغير للعنوان
  welcomeText.style.opacity = 0;
  setTimeout(() => {
    welcomeText.style.transition = "opacity 1.5s ease";
    welcomeText.style.opacity = 1;
  }, 300);
});

