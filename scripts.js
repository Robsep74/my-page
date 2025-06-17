// Load saved theme and font size on page load
  document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    const savedFont = localStorage.getItem("fontSize");

    if (savedTheme) {
      document.body.classList.add(`${savedTheme}-mode`);
    }

    if (savedFont) {
      document.body.classList.add(`font-${savedFont}`);
    }
  });

  function setTheme(mode) {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${mode}-mode`);
    localStorage.setItem("theme", mode);  // 🔥 Save selection
  }

  function setFontSize(size) {
    document.body.classList.remove("font-small", "font-medium", "font-large");
    document.body.classList.add(`font-${size}`);
    localStorage.setItem("fontSize", size);  // 🔥 Save selection
  }

  // Enable dropdown toggle
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    });
  });