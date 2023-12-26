(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
})();

function setThemeModeInLocalStorage() {
  var savedTheme = localStorage.getItem("theme");

  if (savedTheme !== undefined || savedTheme !== null) {
    if (savedTheme === "light-mode") {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.setItem("theme", "light-mode");
    }
  }

  document.body.classList.toggle("light-mode");
}

function getSavedThemeModeFromLocalStorage() {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme !== undefined || savedTheme !== null) {
    if (savedTheme === "light-mode") {
      document.body.classList.toggle("light-mode");
    } else {
      document.body.classList.toggle("main-content");
    }
  }
}

function openPage(url) {
  if (url !== undefined || url !== null) {
    window.open(url);
  }
}
