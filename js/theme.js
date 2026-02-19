(function () {
  const STORAGE_KEY = "m5_theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  }

  // Apply immediately to avoid flash
  applyTheme(getPreferredTheme());

  window.M5Theme = {
    toggle() {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    },
    set(theme) {
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);
    },
    get() {
      return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }
  };
})();
