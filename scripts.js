document.addEventListener("DOMContentLoaded", function () {
  // Theme and font size from localStorage
  const savedTheme = localStorage.getItem("theme");
  const savedFont = localStorage.getItem("fontSize");

  if (savedTheme) {
    document.body.classList.add(`${savedTheme}-mode`);
  }

  if (savedFont) {
    document.body.classList.add(`font-${savedFont}`);
  }

  // Theme switch
  window.setTheme = function (mode) {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${mode}-mode`);
    localStorage.setItem("theme", mode);
  };

  // Font size switch
  window.setFontSize = function (size) {
    document.body.classList.remove("font-small", "font-medium", "font-large");
    document.body.classList.add(`font-${size}`);
    localStorage.setItem("fontSize", size);
  };

  // Dropdown menus
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    });
  });

  // Collapsible sections
  document.querySelectorAll(".collapsible-toggle").forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('#portfolioCarousel');

  if (carousel) {
    carousel.addEventListener('slide.bs.carousel', function () {
      const videos = carousel.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0; // Rewind to start (optional)
      });
    });
  }
});

