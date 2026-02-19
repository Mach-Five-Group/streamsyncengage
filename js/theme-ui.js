(function () {
  const el = document.getElementById("js-theme-toggle");
  if (!el) return;

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function sync() {
    el.setAttribute("aria-checked", getTheme() === "dark" ? "true" : "false");
  }

  sync();

  el.addEventListener("click", () => {
    if (window.M5Theme?.toggle) window.M5Theme.toggle();
    sync();
  });

  window.addEventListener("storage", (e) => {
    if (e.key === "m5_theme") sync();
  });
})();
