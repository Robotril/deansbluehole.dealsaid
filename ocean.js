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
  var lx = innerWidth / 2, ly = innerHeight / 3, root = document.documentElement;
  addEventListener('pointerdown', function (e) { lx = e.clientX; ly = e.clientY; }, true);
  addEventListener('pointermove', function (e) {
    root.style.setProperty('--mx', e.clientX + 'px');
    root.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });
  function ripple() {
    if (reduce) return;
    var r = document.createElement('div');
    r.className = 'rip'; r.style.left = lx + 'px'; r.style.top = ly + 'px';
    document.body.appendChild(r);
    setTimeout(function () { r.remove(); }, 950);
  }

  var orig = window.switchTab;
  window.switchTab = function (id) {
    orig(id);
    document.body.dataset.tab = id;
    window.scrollTo({ top: 0 });
    ripple();
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
  var caus = document.createElement('div'); caus.id = 'caustics'; document.body.appendChild(caus);
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

  // Life in the water: bubbles, fish schools, deep shadows, marine snow.
  if (reduce) return;
  var c = document.createElement('canvas');
  c.id = 'ocean-bubbles';
  document.body.appendChild(c);
  var ctx = c.getContext('2d'), W, H, bubbles = [], snow = [], things = [], frame = 0;
  function size() { W = c.width = innerWidth; H = c.height = innerHeight; }
  size(); addEventListener('resize', size);
  function spawn(y) {
    return { x: Math.random() * W, y: y, r: 1.5 + Math.random() * 5, s: .25 + Math.random() * .7, w: Math.random() * 6.28 };
  }
  for (var i = 0; i < 30; i++) bubbles.push(spawn(Math.random() * innerHeight));
  for (var j = 0; j < 70; j++) snow.push({ x: Math.random() * W, y: Math.random() * H, r: .6 + Math.random() * 1.4, s: .1 + Math.random() * .3 });

  function fish(x, y, s, dir, a, ph, col) {
    ctx.save(); ctx.translate(x, y); ctx.scale(dir * s, s); ctx.globalAlpha = a; ctx.fillStyle = col;
    ctx.beginPath(); ctx.ellipse(0, 0, 10, 4, 0, 0, 6.283); ctx.fill();
    var w = Math.sin(ph) * 2.5;
    ctx.beginPath(); ctx.moveTo(-8, 0); ctx.lineTo(-17, -5 + w); ctx.lineTo(-17, 5 + w); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-1, -3.5); ctx.lineTo(3, -8); ctx.lineTo(5, -3); ctx.fill();
    ctx.restore();
  }
  function school() {
    var dir = Math.random() < .5 ? 1 : -1, y = H * (.12 + Math.random() * .7), m = [];
    for (var k = 0; k < 9; k++) m.push({ dx: -k * 22 * dir + Math.random() * 14, dy: (Math.random() - .5) * 60, p: Math.random() * 6 });
    things.push({ kind: 'school', x: dir > 0 ? -80 : W + 80, y: y, dir: dir, v: .8 + Math.random() * .6, m: m });
  }
  function shadow() {
    var dir = Math.random() < .5 ? 1 : -1;
    things.push({ kind: 'shadow', x: dir > 0 ? -300 : W + 300, y: H * (.25 + Math.random() * .5), dir: dir, v: .35, m: [] });
  }
  setTimeout(school, 2500);
  (function loop() {
    var d = parseFloat(root.style.getPropertyValue('--depth')) || 0;
    frame++;
    ctx.clearRect(0, 0, W, H);
    snow.forEach(function (p) {
      p.y += p.s; if (p.y > H) { p.y = -4; p.x = Math.random() * W; }
      ctx.fillStyle = 'rgba(210,245,255,' + (.15 + d * .55) + ')';
      ctx.fillRect(p.x, p.y, p.r, p.r);
    });
    bubbles.forEach(function (b, i) {
      b.y -= b.s; b.w += .02; b.x += Math.sin(b.w) * .35;
      if (b.y < -10) bubbles[i] = spawn(H + 10);
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 6.283);
      ctx.strokeStyle = 'rgba(190,240,255,.45)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = 'rgba(190,240,255,.07)'; ctx.fill();
    });
    if (frame % 1500 === 0) school();
    if (frame % 2400 === 0 && d > .4) shadow();
    things = things.filter(function (t) {
      t.x += t.v * t.dir;
      if (t.kind === 'school') {
        t.m.forEach(function (f) { f.p += .25; fish(t.x + f.dx, t.y + f.dy + Math.sin(f.p) * 3, 1, t.dir, .5 - d * .25, f.p, '#cdf4ff'); });
      } else {
        fish(t.x, t.y, 9, t.dir, .11, frame * .04, '#7fc8e8');
      }
      return t.x > -500 && t.x < W + 500;
    });
    requestAnimationFrame(loop);
  })();
})();
