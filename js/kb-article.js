(function () {
  var content = document.getElementById("m5-kb-content");
  if (!content) return;

  // ── Reading progress bar ───────────────────────────────────────
  var progressBar = document.getElementById("m5-kb-progress-bar");
  if (progressBar) {
    var raf = null;
    function updateProgress() {
      var doc = document.documentElement;
      var scrolled = window.scrollY || doc.scrollTop;
      var max = doc.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, Math.max(0, (scrolled / max) * 100)) : 0;
      progressBar.style.transform = "scaleX(" + (pct / 100) + ")";
      raf = null;
    }
    function onScroll() {
      if (raf == null) raf = window.requestAnimationFrame(updateProgress);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateProgress();
  }

  // ── Auto-generated TOC from <h2>/<h3> in the article body ──────
  var tocList = document.getElementById("m5-kb-toc-list");
  var tocEmpty = document.getElementById("m5-kb-toc-empty");
  var headings = content.querySelectorAll("h2, h3");
  var tocLinks = [];

  if (tocList) {
    if (headings.length === 0) {
      if (tocEmpty) tocEmpty.classList.remove("hidden");
    } else {
      headings.forEach(function (h, i) {
        if (!h.id) {
          var slug = (h.textContent || "").trim().toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
          h.id = slug || ("section-" + i);
        }
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        a.className = "m5-kb-toc-link block text-muted hover:text-text transition py-1 pl-3 border-l-2 border-transparent" +
          (h.tagName === "H3" ? " m5-kb-toc-link-h3" : "");
        a.addEventListener("click", function (e) {
          e.preventDefault();
          var target = document.getElementById(h.id);
          if (!target) return;
          var top = target.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: top, behavior: "smooth" });
          history.replaceState(null, "", "#" + h.id);
        });
        li.appendChild(a);
        tocList.appendChild(li);
        tocLinks.push({ link: a, heading: h });
      });

      // Active-section highlighting on scroll
      var activeRaf = null;
      function updateActive() {
        var scrollPos = window.scrollY + 140;
        var current = null;
        tocLinks.forEach(function (entry) {
          if (entry.heading.offsetTop <= scrollPos) {
            current = entry;
          }
        });
        tocLinks.forEach(function (entry) {
          entry.link.classList.toggle("is-active", entry === current);
        });
        activeRaf = null;
      }
      function onActiveScroll() {
        if (activeRaf == null) activeRaf = window.requestAnimationFrame(updateActive);
      }
      window.addEventListener("scroll", onActiveScroll, { passive: true });
      updateActive();
    }
  }

  // ── Copy-code buttons on <pre> blocks ──────────────────────────
  var preBlocks = content.querySelectorAll("pre");
  preBlocks.forEach(function (pre) {
    if (pre.querySelector(".m5-kb-copy-code")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "m5-kb-copy-code";
    btn.setAttribute("aria-label", "Copy code");
    btn.textContent = "Copy";
    btn.addEventListener("click", function () {
      var code = pre.querySelector("code");
      var text = code ? code.textContent : pre.textContent;
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = "Copied";
        btn.classList.add("is-copied");
        setTimeout(function () {
          btn.textContent = "Copy";
          btn.classList.remove("is-copied");
        }, 1800);
      }).catch(function () {});
    });
    pre.appendChild(btn);
  });

  // ── Image captions: <em> directly after <img> becomes a caption ─
  // Also wrap each image in a lightbox-trigger element.
  var images = content.querySelectorAll("img");
  var lightbox = document.getElementById("m5-kb-lightbox");
  var lightboxImg = document.getElementById("m5-kb-lightbox-img");
  var lightboxCaption = document.getElementById("m5-kb-lightbox-caption");
  var lightboxClose = document.getElementById("m5-kb-lightbox-close");
  var lastFocused = null;

  function openLightbox(src, alt, captionText) {
    if (!lightbox || !lightboxImg) return;
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    if (lightboxCaption) {
      if (captionText) {
        lightboxCaption.textContent = captionText;
        lightboxCaption.style.display = "block";
      } else {
        lightboxCaption.style.display = "none";
      }
    }
    lightbox.classList.remove("hidden");
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("m5-mobile-nav-locked");
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.classList.add("hidden");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("m5-mobile-nav-locked");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  images.forEach(function (img) {
    // Find caption (an <em> immediately after the image, possibly with whitespace nodes between)
    var captionEl = null;
    var sib = img.nextSibling;
    while (sib) {
      if (sib.nodeType === 3 && sib.textContent.trim() === "") {
        sib = sib.nextSibling;
        continue;
      }
      if (sib.nodeType === 1 && sib.tagName === "EM") {
        captionEl = sib;
      }
      break;
    }
    if (captionEl) captionEl.classList.add("m5-kb-image-caption");

    img.classList.add("m5-kb-image");
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      openLightbox(img.src, img.alt, captionEl ? captionEl.textContent : "");
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.closest("#m5-kb-lightbox-close")) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  // ── Copy link button (share section) ───────────────────────────
  var copyLinkBtn = document.getElementById("m5-kb-copy-link");
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", function () {
      var label = copyLinkBtn.querySelector(".m5-kb-copy-link-label");
      var url = copyLinkBtn.getAttribute("data-permalink") || window.location.href;
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(url).then(function () {
        if (label) label.textContent = "Copied";
        copyLinkBtn.classList.add("is-copied");
        setTimeout(function () {
          if (label) label.textContent = "Copy link";
          copyLinkBtn.classList.remove("is-copied");
        }, 1800);
      }).catch(function () {});
    });
  }
})();
