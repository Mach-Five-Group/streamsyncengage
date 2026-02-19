class M5Button extends HTMLElement {
  connectedCallback() {
    if (this.dataset.m5Init) return;
    this.dataset.m5Init = "1";

    const variant = this.getAttribute("variant") || "primary";
    const size = this.getAttribute("size") || "md";

    const base = [
      "inline-flex", "items-center", "justify-center", "gap-2",
      "rounded-md", "font-medium",
      "transition", "duration-150",
      "focus:outline-none",
    ];

    const sizes = {
      sm: ["h-9", "px-3", "text-sm"],
      md: ["h-10", "px-4", "text-sm"],
      lg: ["h-11", "px-5", "text-base"],
    };

    const variants = {
      primary:   ["bg-accent", "text-white", "hover:bg-primary-700", "active:bg-primary-800", "shadow-sm"],
      secondary: ["bg-surface", "text-text", "border", "border-border", "hover:bg-surface2"],
      ghost:     ["bg-transparent", "text-text", "hover:bg-surface"],
      link:      ["bg-transparent", "text-accent", "hover:underline", "underline-offset-4"],
    };

    this.classList.add(
      ...base,
      ...(sizes[size] || sizes.md),
      ...(variants[variant] || variants.primary)
    );
  }
}

customElements.define("m5-button", M5Button);
