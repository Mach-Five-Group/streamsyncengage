(function () {
  var groups = document.querySelectorAll("[data-word-reveal-group]");
  if (!groups.length) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    groups.forEach(function (group) {
      group.querySelectorAll(".m5-word-reveal").forEach(function (el) {
        el.classList.add("is-revealed");
      });
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(".m5-word-reveal").forEach(function (el) {
        el.classList.add("is-revealed");
      });
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.25,
    rootMargin: "0px 0px -10% 0px",
  });

  groups.forEach(function (group) {
    observer.observe(group);
  });
})();
