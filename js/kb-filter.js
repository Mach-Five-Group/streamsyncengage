(function () {
  var searchInput = document.getElementById("kb-search");
  var grid = document.getElementById("kb-articles");
  var empty = document.getElementById("kb-empty");
  var filters = document.querySelectorAll(".m5-kb-filter");
  if (!grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll(".m5-kb-card-wrap"));
  var activeCategory = "all";
  var query = "";

  function apply() {
    var q = query.trim().toLowerCase();
    var visible = 0;
    cards.forEach(function (card) {
      var matchesCat = activeCategory === "all" || card.dataset.category === activeCategory;
      var matchesQuery = q === "" || (card.dataset.search || "").indexOf(q) !== -1;
      var show = matchesCat && matchesQuery;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });
    if (empty) empty.classList.toggle("hidden", visible !== 0);
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      query = e.target.value || "";
      apply();
    });
  }

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      activeCategory = btn.dataset.filter || "all";
      apply();
    });
  });
})();
