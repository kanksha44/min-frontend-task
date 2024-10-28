const showDialog = document.getElementById("showDialog");
const dialogBox = document.getElementById("dialog-box");
const closeBtn = document.getElementById("closeBtn");
const closeIcon = document.getElementById("closeIcon");
const backdrop = document.getElementById("backdrop");

showDialog.addEventListener("click", function (event) {
  dialogBox.classList.add("active");
  event.stopPropagation();
  if (showBackdrop.checked) {
    backdrop.classList.add("active");
    backdrop.style.setProperty("--backdrop-opacity", 0.5);
  }
});

closeBtn.addEventListener("click", function () {
  dialogBox.classList.remove("active");
  backdrop.classList.remove("active");
});

closeIcon.addEventListener("click", function () {
  dialogBox.classList.remove("active");
  backdrop.classList.remove("active");
});

document.addEventListener("click", function (event) {
  const closeOnOutside = document.getElementById("closeOnOutside");
  if (closeOnOutside.checked && !dialogBox.contains(event.target)) {
    dialogBox.classList.remove("active");
  }
});

document.addEventListener("keydown", function (event) {
  const closeOnEscape = document.getElementById("closeOnEscape");
  if (event.key === "Escape" && closeOnEscape.checked) {
    dialogBox.classList.remove("active");
  }
  console.log("event", event);
});

const showBackdrop = document.getElementById("showBackdrop");
showBackdrop.addEventListener("change", function () {
  if (showBackdrop.checked && dialogBox.classList.contains("active")) {
    backdrop.classList.add("active");
    backdrop.style.setProperty("--backdrop-opacity", 0.5);
  } else {
    backdrop.classList.remove("active");
  }
});

const showCloseIcon = document.getElementById("showCloseIcon");

showCloseIcon.addEventListener("change", function () {
  closeIcon.style.display = showCloseIcon.checked ? "block" : "none";
});
