(function () {
  'use strict';

  document.querySelectorAll('.docs-content pre').forEach(function (pre) {
    var code = pre.querySelector('code');
    if (!code) return;

    // Wrap pre in a relative container so the button lives outside
    // the pre's overflow-x:auto scroll context.
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;margin-top:1rem';
    pre.style.marginTop = '0';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    var btn = document.createElement('button');
    btn.className = 'm5-copy-btn';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', 'Copy code');
    btn.textContent = 'Copy';

    btn.addEventListener('click', function () {
      var text = code.innerText;
      if (!navigator.clipboard) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showCopied(btn);
        return;
      }
      navigator.clipboard.writeText(text).then(function () {
        showCopied(btn);
      });
    });

    wrapper.appendChild(btn);
  });

  function showCopied(btn) {
    btn.textContent = 'Copied!';
    btn.setAttribute('data-copied', 'true');
    setTimeout(function () {
      btn.textContent = 'Copy';
      btn.removeAttribute('data-copied');
    }, 2000);
  }
})();
