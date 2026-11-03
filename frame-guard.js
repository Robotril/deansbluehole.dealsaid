/* Anti-clickjacking: dealsaid.org must never run inside another site's frame,
   where a hidden overlay could trick visitors into clicking or typing. GitHub Pages
   can't send the X-Frame-Options header, so this script does the same job. */
(function () {
  if (window.top === window.self) return;
  document.documentElement.style.display = 'none';
  try { window.top.location.replace(window.location.href); } catch (e) { /* blocked: page stays hidden */ }
})();
