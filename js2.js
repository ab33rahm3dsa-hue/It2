// ===== Doctors Page Script =====

// ميزة: عند الضغط على التخصص ينزل smoothly إلى القسم
document.querySelectorAll('.specialty-list a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // يمنع القفز المفاجئ
    const targetId = this.getAttribute('href'); // يجيب الـ id من الرابط
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

