// ===== عناصر الصفحة =====
const loginBtn = document.getElementById("loginBtn");
const createBtn = document.querySelector(".create-account");
const modal = document.getElementById("registerModal");
const closeBtn = document.querySelector(".close");
const backBtn = document.getElementById("backToLoginBtn");
const registerBtn = document.getElementById("registerBtn");

// ===== إنشاء أو الحصول على صندوق التنبيه =====
let alertBox = document.getElementById("alertBox");
if (!alertBox) {
  alertBox = document.createElement("div");
  alertBox.id = "alertBox";
  document.body.appendChild(alertBox);
}

// ===== دالة عرض التنبيه =====
function showAlert(message, type="success") {
  alertBox.textContent = message;
  alertBox.className = type;
  alertBox.style.display = "block";

  // إخفاء بعد ثانيتين
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}

// ===== تسجيل الدخول =====
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showAlert("Please fill in all fields!", "error");
  } else {
    showAlert("Login successful ✅", "success");
    // هنا يمكنك إضافة تحويل للصفحة أو أي وظيفة أخرى
  }
});

// ===== فتح وغلق الـ modal =====
createBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
backBtn.onclick = () => modal.style.display = "none";

// ===== تسجيل حساب جديد =====
registerBtn.onclick = () => {
  const name = document.getElementById("newName").value.trim();
  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  if (!name || !email || !password) {
    showAlert("Please fill in all fields!", "error");
  } else {
    showAlert("Account created successfully ✅", "success");

    // إخفاء الـ modal ومسح الحقول
    modal.style.display = "none";
    document.getElementById("newName").value = "";
    document.getElementById("newEmail").value = "";
    document.getElementById("newPassword").value = "";
  }
}

// ===== إغلاق الـ modal عند الضغط خارجها =====
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};