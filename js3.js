document.addEventListener("DOMContentLoaded", function() {

  // صندوق التنبيه
  const alertBox = document.createElement("div");
  alertBox.id = "alertBox";
  alertBox.style.position = "fixed";
  alertBox.style.top = "20px";
  alertBox.style.right = "20px";
  alertBox.style.padding = "15px 25px";
  alertBox.style.borderRadius = "8px";
  alertBox.style.display = "none";
  alertBox.style.fontWeight = "bold";
  alertBox.style.zIndex = "1000";
  document.body.appendChild(alertBox);

  function showAlert(message, type="success") {
    alertBox.textContent = message;
    alertBox.style.backgroundColor = type === "success" ? "#2ECC40" : "#FF4136";
    alertBox.style.color = "#fff";
    alertBox.style.display = "block";
    setTimeout(() => { alertBox.style.display = "none"; }, 2000);
  }

  // تمرير سلس عند الضغط على قائمة التخصصات
  document.querySelectorAll(".specialty-list a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElem = document.getElementById(targetId);
      targetElem.scrollIntoView({ behavior: "smooth" });
    });
  });

  // التحقق من تعبئة النموذج وإظهار تنبيه عند الحجز
  document.querySelectorAll(".appointment-form").forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const doctor = form.querySelector("select").value;
      const date = form.querySelector("input[type='date']").value;
      const time = form.querySelector("input[type='time']").value;

      if(!doctor || !date || !time) {
        showAlert("Please fill in all fields!", "error");
      } else {
        showAlert(`Appointment booked with ${doctor} on ${date} at ${time}`);
        form.reset();
      }
    });
  });

});