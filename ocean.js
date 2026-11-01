/* Dean's Blue Hole: "The Descent". Adds atmosphere only; all page content stays as written. */
(function () {
  // Load the stylesheet from here so index.html only needs the one script line.
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'ocean.css';
  document.head.appendChild(css);

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var main = document.querySelector('main');

  // Hero: reuses the page's own title, location and depth line.
  var hero = document.createElement('section');
  hero.id = 'hero';
  hero.innerHTML =
    '<img src="WhatsApp%20Image%202025-11-25%20at%208.54.27%20PM%20(5).jpeg" alt="Dean\'s Blue Hole">' +
    '<div class="hero-in"><p class="hero-where">Long Island, Bahamas</p>' +
    '<h2>Dean\'s Blue Hole<span>Safety and History</span></h2>' +
    '<div class="hero-depth"><b id="heroDepth">202</b><p>meters (663 feet) deep</p></div></div>';
  main.parentNode.insertBefore(hero, main);

  // One orchestrated moment: the number sinks to 202 on load.
  var num = document.getElementById('heroDepth');
  if (!reduce) {
    var t0 = performance.now();
    (function tick(t) {
      var p = Math.min((t - t0) / 2200, 1), e = 1 - Math.pow(1 - p, 3);
      num.textContent = Math.round(202 * e);
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  // Track which tab is showing so the hero only crowns the first page.
  var orig = window.switchTab;
  window.switchTab = function (id) {
    orig(id);
    document.body.dataset.tab = id;
    window.scrollTo({ top: 0 });
  };
  document.body.dataset.tab = 'safety';

  // Videos were nested inside the About banner; give them a home in the Gallery.
  var grid = document.querySelector('#gallery .grid');
  document.querySelectorAll('[onclick^="openVideo"]').forEach(function (v) {
    var img = v.querySelector('img');
    if (img) img.onerror = function () { img.style.visibility = 'hidden'; };
    if (grid) grid.appendChild(v);
  });

  // Depth gauge: scroll position maps to meters, 0 to 202.
  var gauge = document.createElement('div');
  gauge.id = 'gauge';
  gauge.setAttribute('aria-hidden', 'true');
  var ticks = '<i></i>';
  for (var k = 0; k <= 10; k++) ticks += '<u style="top:' + k * 10 + '%"></u>';
  gauge.innerHTML = ticks + '<em id="gaugeVal">0 m</em>';
  document.body.appendChild(gauge);
  var val = document.getElementById('gaugeVal');

  function depth() {
    var max = document.documentElement.scrollHeight - innerHeight;
    var p = max > 0 ? Math.min(scrollY / max, 1) : 0;
    document.documentElement.style.setProperty('--depth', p.toFixed(3));
    val.style.top = p * 100 + '%';
    val.textContent = Math.round(p * 202) + ' m';
  }
  addEventListener('scroll', depth, { passive: true });
  addEventListener('resize', depth);
  depth();

  // Bubbles rising through the water.
  if (reduce) return;
  var c = document.createElement('canvas');
  c.id = 'ocean-bubbles';
  document.body.appendChild(c);
  var ctx = c.getContext('2d'), W, H, bubbles = [];
  function size() { W = c.width = innerWidth; H = c.height = innerHeight; }
  size(); addEventListener('resize', size);
  function spawn(y) {
    return { x: Math.random() * W, y: y, r: 1.5 + Math.random() * 5, s: .25 + Math.random() * .7, w: Math.random() * 6.28 };
  }
  for (var i = 0; i < 34; i++) bubbles.push(spawn(Math.random() * innerHeight));
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    bubbles.forEach(function (b, i) {
      b.y -= b.s; b.w += .02; b.x += Math.sin(b.w) * .35;
      if (b.y < -10) bubbles[i] = spawn(H + 10);
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, 6.283);
      ctx.strokeStyle = 'rgba(190,240,255,.45)';
      ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = 'rgba(190,240,255,.07)'; ctx.fill();
    });
    requestAnimationFrame(loop);
  })();
})();
