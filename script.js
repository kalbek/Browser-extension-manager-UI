document.getElementById("theme-toggle").addEventListener("click", () => {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const themeContainer = document.getElementById("theme-toggle");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "./assets/images/icon-sun.svg";
    themeContainer.style.backgroundColor = "var(--neutral-700)";
  } else {
    themeIcon.src = "./assets/images/icon-moon.svg";
    themeContainer.style.backgroundColor = "var(--neutral-300)";
  }
});
