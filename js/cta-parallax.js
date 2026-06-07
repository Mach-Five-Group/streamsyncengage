(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var wraps = document.querySelectorAll(".m5-cta-final-tile-wrap");
  if (!wraps.length) return;

  var section = document.querySelector(".m5-cta-final");
  if (!section) return;

  var ticking = false;
  var maxOffset = 60; // peak parallax shift in px (depth=1.0)

  function update() {
    var rect = section.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;

    // Normalize section center relative to viewport center: -1 (above) → +1 (below)
    var center = rect.top + rect.height / 2;
    var progress = (center - vh / 2) / vh;
    if (progress > 1) progress = 1;
    if (progress < -1) progress = -1;

    for (var i = 0; i < wraps.length; i++) {
      var w = wraps[i];
      var depth = parseFloat(w.getAttribute("data-depth") || "0.5");
      // Positive depth = tile moves opposite to scroll for parallax illusion
      var y = -progress * depth * maxOffset;
      w.style.setProperty("--parallax-y", y.toFixed(1) + "px");
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Only run when section is in/near viewport
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", onScroll, { passive: true });
          update();
        } else {
          window.removeEventListener("scroll", onScroll);
        }
      });
    }, { rootMargin: "200px 0px 200px 0px" });
    io.observe(section);
  } else {
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }
})();
