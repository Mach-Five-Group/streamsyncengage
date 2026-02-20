(function () {
  var heroes = document.querySelectorAll("[data-hero-reveal]");
  if (!heroes.length) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  function tokenize(hero) {
    var reservedHeight = hero.getBoundingClientRect().height;
    if (reservedHeight > 0) {
      hero.style.minHeight = reservedHeight + "px";
    }

    var nodes = hero.querySelectorAll("[data-type-text], [data-type-inline]");
    if (!nodes.length) return null;

    var tokens = [];
    var cursor = hero.querySelector(".m5-hero-cursor");

    nodes.forEach(function (node) {
      if (node.hasAttribute("data-type-text")) {
        var text = node.textContent || "";
        if (text.length) {
          tokens.push({ type: "text", value: text });
        }
        return;
      }

      if (node.hasAttribute("data-type-inline")) {
        tokens.push({ type: "inline", value: node.cloneNode(true) });
      }
    });

    hero.innerHTML = "";
    if (cursor) {
      hero.appendChild(cursor);
    }

    return { tokens: tokens, cursor: cursor };
  }

  function startTyping(hero) {
    var data = tokenize(hero);
    if (!data || !data.tokens.length) {
      hero.classList.add("is-typing");
      return;
    }

    var tokens = data.tokens;
    var cursor = data.cursor;
    var i = 0;
    var wordIndex = 0;
    var activeTextNode = null;
    var words = null;
    var minDelayMs = 28;
    var maxDelayMs = 72;
    var punctuationDelayMs = 135;

    hero.classList.add("is-typing");

    function insertBeforeCursor(node) {
      if (cursor && cursor.parentNode === hero) {
        hero.insertBefore(node, cursor);
        return;
      }
      hero.appendChild(node);
    }

    function tick() {
      if (i >= tokens.length) {
        // Release reserved space once typed content fully occupies the same layout.
        hero.style.minHeight = "";
        return;
      }

      var token = tokens[i];
      if (token.type === "inline") {
        insertBeforeCursor(token.value);
        i += 1;
        wordIndex = 0;
        words = null;
        activeTextNode = null;
        window.setTimeout(tick, 55);
        return;
      }

      if (!activeTextNode) {
        activeTextNode = document.createTextNode("");
        insertBeforeCursor(activeTextNode);
        words = token.value.match(/\S+\s*/g) || [];
      }

      var chunk = words[wordIndex] || "";
      activeTextNode.textContent += chunk;
      wordIndex += 1;

      if (wordIndex >= words.length) {
        i += 1;
        wordIndex = 0;
        words = null;
        activeTextNode = null;
      }

      var hasPunctuationPause = /[.,;:!?]\s*$/.test(chunk);
      var delay = hasPunctuationPause
        ? punctuationDelayMs
        : minDelayMs + Math.floor(Math.random() * (maxDelayMs - minDelayMs + 1));
      window.setTimeout(tick, delay);
    }

    tick();
  }

  heroes.forEach(function (hero) {
    hero.classList.add("is-armed");
  });

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      startTyping(entry.target);
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  });

  heroes.forEach(function (hero) {
    observer.observe(hero);
  });
})();
