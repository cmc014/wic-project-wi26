// javascript.js

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.getElementById("togglebutton");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    toggleBtn.textContent = sidebar.classList.contains("open") ? "CLOSE" : "OPEN";
  });
});