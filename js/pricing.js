(function () {
  const buttons = Array.from(document.querySelectorAll(".js-billing-btn"));
  const priceEls = Array.from(document.querySelectorAll(".js-price"));
  const annualSubtexts = Array.from(document.querySelectorAll(".js-annual-subtext"));

  if (!buttons.length) return;

  function setBilling(mode) {
    // Update buttons
    buttons.forEach((btn) => {
      const isActive = btn.dataset.billing === mode;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");

      btn.classList.toggle("bg-bg", isActive);
      btn.classList.toggle("shadow-sm", isActive);
      btn.classList.toggle("text-text", isActive);

      btn.classList.toggle("text-muted", !isActive);
      btn.classList.toggle("hover:text-text", !isActive);
    });

    // Update prices
    priceEls.forEach((el) => {
      const monthly = el.dataset.monthly;
      const annual = el.dataset.annual;
      const val = mode === "annual" ? annual : monthly;
      if (val) el.textContent = `$${val}`;
    });

    // Show annual subtext only on annual
    annualSubtexts.forEach((el) => {
      el.classList.toggle("hidden", mode !== "annual");
    });
  }

  // Default monthly
  setBilling("monthly");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setBilling(btn.dataset.billing));
  });
})();
