(function () {
  // ── Desktop dropdowns ──────────────────────────────────────────
  // Hover/focus is handled in CSS. JS adds: click-to-toggle (for touch + keyboard),
  // Escape to close, click-outside to close, and aria-expanded sync.

  var navItems = document.querySelectorAll(".m5-nav-item");

  function closeAll(except) {
    navItems.forEach(function (item) {
      if (item === except) return;
      item.classList.remove("is-open");
      var trigger = item.querySelector(".m5-nav-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  }

  navItems.forEach(function (item) {
    var trigger = item.querySelector(".m5-nav-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var isOpen = item.classList.contains("is-open");
      closeAll(item);
      if (isOpen) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    item.addEventListener("focusout", function (e) {
      if (!item.contains(e.relatedTarget)) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("click", function (e) {
    var inside = e.target.closest(".m5-nav-item");
    if (!inside) closeAll(null);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var anyOpen = document.querySelector(".m5-nav-item.is-open");
    if (anyOpen) {
      var trigger = anyOpen.querySelector(".m5-nav-trigger");
      closeAll(null);
      if (trigger) trigger.focus();
    }
  });

  // ── Mobile drawer ──────────────────────────────────────────────
  var drawer = document.getElementById("m5-mobile-nav");
  var openBtn = document.getElementById("js-mobile-nav-open");
  if (!drawer || !openBtn) return;

  var lastFocused = null;
  var closeTriggers = drawer.querySelectorAll("[data-mobile-nav-close]");

  function openDrawer() {
    lastFocused = document.activeElement;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("m5-mobile-nav-locked");
    var firstCloseBtn = drawer.querySelector("[data-mobile-nav-close]:not(.m5-mobile-nav-backdrop)");
    if (firstCloseBtn) firstCloseBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("m5-mobile-nav-locked");
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  openBtn.addEventListener("click", openDrawer);
  closeTriggers.forEach(function (el) {
    el.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });

  // Close drawer when window resizes to desktop width (avoids leaving it open after rotation/resize)
  var mql = window.matchMedia("(min-width: 768px)");
  function handleMql(e) {
    if (e.matches && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  }
  if (mql.addEventListener) mql.addEventListener("change", handleMql);
  else if (mql.addListener) mql.addListener(handleMql);
})();
