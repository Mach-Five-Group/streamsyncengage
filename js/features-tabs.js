(function () {
  document.querySelectorAll("[data-feat-root]").forEach(function (root) {
    var pills = root.querySelectorAll("[data-feat-pill]");
    var panels = root.querySelectorAll("[data-feat-panel]");
    var stage = root.querySelector("[data-feat-stage]");
    if (stage) stage.style.setProperty("--feat-active", "0");
    pills.forEach(function (p) {
      p.addEventListener("click", function () {
        var idx = p.getAttribute("data-feat-pill");
        pills.forEach(function (x) {
          if (x === p) x.setAttribute("data-active", "");
          else x.removeAttribute("data-active");
        });
        panels.forEach(function (pn) {
          if (pn.getAttribute("data-feat-panel") === idx) pn.setAttribute("data-active", "");
          else pn.removeAttribute("data-active");
        });
        if (stage) stage.style.setProperty("--feat-active", idx);
      });
    });
  });
})();
