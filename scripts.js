// Load saved theme, font size, enable dropdowns, and collapsible sections
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const savedFont = localStorage.getItem("fontSize");

  if (savedTheme) {
    document.body.classList.add(`${savedTheme}-mode`);
  }

  if (savedFont) {
    document.body.classList.add(`font-${savedFont}`);
  }

  // Enable dropdown toggle
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    });
  });

  // Collapsible section toggles
  document.querySelectorAll('.collapsible-toggle').forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});

// Set theme
function setTheme(mode) {
  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add(`${mode}-mode`);
  localStorage.setItem("theme", mode);
}

// Set font size
function setFontSize(size) {
  document.body.classList.remove("font-small", "font-medium", "font-large");
  document.body.classList.add(`font-${size}`);
  localStorage.setItem("fontSize", size);
}

