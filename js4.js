// ===== Contact Form Validation =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // منع الإرسال الافتراضي

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // التحقق من صحة البريد
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // إذا كل شيء تمام
    alert("✅ Your message has been sent successfully!");
    form.reset(); // مسح الحقول
  });
});

