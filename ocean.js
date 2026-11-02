/* Dean's Blue Hole: "The Descent". Adds atmosphere only; all page content stays as written. */
(function () {
  // Load the stylesheet from here so index.html only needs the one script line.
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'ocean.css?v=4';
  document.head.appendChild(css);
  // Motion layer: its script waits for its stylesheet so the intro never flashes.
  // Hold the hero title back until it can surface (released by ocean-motion.js, or after 2.5 s regardless).
  var hold = document.createElement('style');
  hold.id = 'motion-hold';
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) hold.textContent = '#hero h2,#hero .hero-where,#hero .hero-depth{opacity:0}';
  document.head.appendChild(hold);
  setTimeout(function () { hold.remove(); }, 2500);
  var mcss = document.createElement('link');
  mcss.rel = 'stylesheet';
  mcss.href = 'ocean-motion.css?v=3';
  mcss.onload = mcss.onerror = function () {
    var ms = document.createElement('script'); ms.src = 'ocean-motion.js?v=3'; document.body.appendChild(ms);
  };
  document.head.appendChild(mcss);

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

  var doors = [['history','fa-water',"History of Dean's Blue Hole"],['gallery','fa-images','Gallery'],
    ['work','fa-newspaper','Follow the impact'],['about','fa-hand-holding-heart',"About Deal's Aid"],
    ['scholarship','fa-gift','Giveaway Application']];
  var portals = document.createElement('nav');
  portals.id = 'portals';
  portals.innerHTML = doors.map(function (d) {
    return '<button type="button" onclick="switchTab(\'' + d[0] + '\')"><i class="fas ' + d[1] + '"></i>' + d[2] + '</button>';
  }).join('');
  main.parentNode.insertBefore(portals, main);

  var brand = document.querySelector('header .flex-shrink-0');
  if (brand) {
    brand.setAttribute('role', 'link'); brand.setAttribute('aria-label', 'Home'); brand.tabIndex = 0;
    var home = function () { window.switchTab('safety'); };
    brand.addEventListener('click', home);
    brand.addEventListener('keydown', function (e) { if (e.key === 'Enter') home(); });
  }

  var orig = window.switchTab;
  window.switchTab = function (id) {
    orig(id);
    document.body.dataset.tab = id;
    window.scrollTo({ top: 0 });
    ripple();
    if (window.oceanSwim) window.oceanSwim();
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

  // Life in the water: bubbles, snow, and red snappers, Nassau groupers and a great hammerhead.
  if (reduce) return;
  function mk(z) {
    var c = document.createElement('canvas');
    c.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:' + z;
    document.body.appendChild(c); return c;
  }
  var back = mk(1), front = mk(45), bx = back.getContext('2d'), fx = front.getContext('2d');
  var W, H, bubbles = [], snow = [], things = [], frame = 0;
  function size() { W = back.width = front.width = innerWidth; H = back.height = front.height = innerHeight; }
  size(); addEventListener('resize', size);
  function spawn(y) { return { x: Math.random() * W, y: y, r: 1.5 + Math.random() * 5, s: .25 + Math.random() * .7, w: Math.random() * 6.28 }; }
  for (var i = 0; i < 30; i++) bubbles.push(spawn(Math.random() * innerHeight));
  for (var j = 0; j < 70; j++) snow.push({ x: Math.random() * W, y: Math.random() * H, r: .6 + Math.random() * 1.4, s: .1 + Math.random() * .3 });

  // Red snapper, facing right, about 55 units long.
  function snapper(c, ph) {
    var w = Math.sin(ph) * 3;
    c.fillStyle = '#c23a35';
    c.beginPath(); c.moveTo(-15, 0); c.lineTo(-29, -10 + w); c.lineTo(-25, w * .5); c.lineTo(-29, 11 + w); c.closePath(); c.fill();
    c.fillStyle = '#b02c2b';
    c.beginPath(); c.moveTo(12, -9.5); c.lineTo(10, -14); c.lineTo(7, -11.5); c.lineTo(5, -15.5); c.lineTo(2, -12); c.lineTo(0, -16);
    c.lineTo(-3, -12); c.lineTo(-6, -14.5); c.lineTo(-9.5, -9); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(-2, 8); c.lineTo(-9, 14); c.lineTo(-12, 6); c.fill();
    var g = c.createLinearGradient(0, -12, 0, 11);
    g.addColorStop(0, '#c83636'); g.addColorStop(.5, '#e8807b'); g.addColorStop(1, '#f9dedb');
    c.fillStyle = g;
    c.beginPath(); c.moveTo(26, 3); c.bezierCurveTo(19, -11, -2, -13.5, -16, -2); c.bezierCurveTo(-4, 11.5, 14, 11.5, 26, 3); c.fill();
    c.strokeStyle = 'rgba(110,20,20,.35)'; c.lineWidth = .9;
    c.beginPath(); c.arc(12, 0, 8, -1.3, 1.3); c.stroke();
    c.beginPath(); c.moveTo(26, 3.2); c.lineTo(20.5, 4.6); c.stroke();
    c.fillStyle = '#f2a8a3';
    c.beginPath(); c.moveTo(12, 3); c.quadraticCurveTo(7, 12, 3, 5); c.fill();
    c.fillStyle = '#e8672c'; c.beginPath(); c.arc(18.5, -3, 2.1, 0, 6.3); c.fill();
    c.fillStyle = '#2a0808'; c.beginPath(); c.arc(18.9, -3, 1.1, 0, 6.3); c.fill();
  }
  // Nassau grouper, facing right, about 65 units long, dark with blue-white bands and speckles.
  function grouper(c, ph) {
    var w = Math.sin(ph) * 2.5;
    c.fillStyle = '#2a3238';
    c.beginPath(); c.moveTo(-21, -2); c.quadraticCurveTo(-35, -13 + w, -34, w * .5); c.quadraticCurveTo(-35, 13 + w, -21, 3); c.fill();
    c.fillStyle = '#222c34';
    c.beginPath(); c.moveTo(14, -11.5); c.lineTo(8, -17); c.lineTo(-4, -15.5); c.lineTo(-17, -9); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(-8, 10); c.lineTo(-14, 15); c.lineTo(-18, 7); c.fill();
    var g = c.createLinearGradient(0, -14, 0, 12);
    g.addColorStop(0, '#252c31'); g.addColorStop(.5, '#58584f'); g.addColorStop(1, '#9d9482');
    c.fillStyle = g;
    c.beginPath(); c.moveTo(31, 2); c.bezierCurveTo(22, -14, -4, -15.5, -22, -3); c.bezierCurveTo(-8, 13.5, 18, 12.5, 31, 2); c.fill();
    c.strokeStyle = 'rgba(190,238,255,.85)'; c.lineWidth = 1.7; c.lineCap = 'round';
    [[20, -10, 15, 0], [9, -12, 5, 2], [-3, -12, -7, 2], [-13, -9, -15, 1]].forEach(function (b) {
      c.beginPath(); c.moveTo(b[0], b[1]); c.quadraticCurveTo(b[0] - 3, (b[1] + b[3]) / 2, b[2], b[3]); c.stroke();
    });
    c.fillStyle = 'rgba(216,246,255,.8)';
    [[26, -3], [12, 6], [2, 5], [-8, 6], [-16, 3], [16, -7], [-2, -6], [23, 2]].forEach(function (p) {
      c.beginPath(); c.arc(p[0], p[1], .9, 0, 6.3); c.fill();
    });
    c.fillStyle = '#34424c';
    c.beginPath(); c.moveTo(13, 4); c.quadraticCurveTo(6, 14, -1, 6); c.fill();
    c.strokeStyle = 'rgba(0,0,0,.4)'; c.lineWidth = .9;
    c.beginPath(); c.moveTo(31, 2.4); c.lineTo(22, 5.6); c.stroke();
    c.fillStyle = '#d9b25a'; c.beginPath(); c.arc(24, -3, 1.9, 0, 6.3); c.fill();
    c.fillStyle = '#0b0f12'; c.beginPath(); c.arc(24.3, -3, 1, 0, 6.3); c.fill();
  }
  // Great hammerhead, facing right, about 150 units long, with the wide flat head and tall swept dorsal fin.
  function shark(c, ph) {
    var w = Math.sin(ph * .5) * 5;
    c.rotate(Math.sin(ph * .5) * .02);
    c.fillStyle = '#52707f';
    c.beginPath(); c.moveTo(-42, -2.5); c.lineTo(-78 + w, -30); c.quadraticCurveTo(-58 + w * .6, -4, -55 + w * .5, 2);
    c.lineTo(-68 + w, 14); c.quadraticCurveTo(-50, 3, -42, 2.5); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(25, -10); c.quadraticCurveTo(15, -26, -1, -38); c.quadraticCurveTo(-4, -20, -11, -11); c.fill();
    c.beginPath(); c.moveTo(-26, -6.5); c.lineTo(-33, -14); c.lineTo(-36, -5); c.fill();
    c.fillStyle = '#6a8898';
    c.beginPath(); c.moveTo(29, 6); c.lineTo(8, 27); c.quadraticCurveTo(15, 12, 12, 7); c.fill();
    var g = c.createLinearGradient(0, -14, 0, 12);
    g.addColorStop(0, '#506674'); g.addColorStop(.5, '#9eadb6'); g.addColorStop(.62, '#eaeff2'); g.addColorStop(1, '#f8fbfc');
    c.fillStyle = g;
    c.beginPath(); c.moveTo(47, -5); c.bezierCurveTo(30, -13.5, -10, -14, -43, -3); c.bezierCurveTo(-8, 11.5, 28, 12.5, 47, 5); c.fill();
    c.beginPath(); c.moveTo(42, -5.5); c.quadraticCurveTo(54, -10, 68, -6.5); c.quadraticCurveTo(75, -2.5, 68, 1);
    c.quadraticCurveTo(56, 1.5, 42, 5.5); c.closePath(); c.fill();
    c.strokeStyle = 'rgba(15,40,55,.45)'; c.lineWidth = .9;
    for (var k = 0; k < 4; k++) { c.beginPath(); c.moveTo(34 - k * 3, -6); c.quadraticCurveTo(32 - k * 3, -2, 34 - k * 3, 2); c.stroke(); }
    c.fillStyle = '#04141f'; c.beginPath(); c.arc(70, -2.8, 1.5, 0, 6.3); c.fill();
  }
  function put(c, fn, x, y, s, dir, a, ph) {
    c.save(); c.translate(x, y); c.scale(dir * s, s); c.globalAlpha = a; fn(c, ph); c.restore();
  }
  function school(layer) {
    var fr = layer === 'front', grp = Math.random() > .62, dir = Math.random() < .5 ? 1 : -1;
    var s = (fr ? 2 : 1.15) * (grp ? 1.25 : 1), n = grp ? (fr ? 3 : 2) : (fr ? 9 : 8), m = [];
    for (var k = 0; k < n; k++) m.push({ dx: -k * (grp ? 60 : 26) * s * dir + Math.random() * 18, dy: (Math.random() - .5) * (grp ? 40 : 90) * s, p: Math.random() * 6, ox: 0, oy: 0, vx: 0, vy: 0 });
    things.push({ layer: layer, kind: 'school', species: grp ? 'grouper' : 'snapper', fn: grp ? grouper : snapper, boost: 1, x: dir > 0 ? -160 : W + 160,
      y: H * (.15 + Math.random() * .65), dir: dir, v: (fr ? 6.5 : 2.4) * (grp ? .7 : 1), s: s, a: fr ? .97 : .6, m: m });
  }
  function bigShark(layer) {
    var fr = layer === 'front', dir = Math.random() < .5 ? 1 : -1;
    things.push({ layer: layer, kind: 'shark', species: 'shark', boost: 1, x: dir > 0 ? -400 : W + 400, y: H * (.25 + Math.random() * .5),
      dir: dir, v: fr ? 5 : 1.4, s: fr ? 3.4 : 1.9, a: fr ? .93 : .3, m: [], ph: 0 });
  }
  // Tab switches send fish across. Capped so fast tab switching never clogs the screen:
  // at most 2 groups in front, 3 behind, and a short gap between new groups.
  var MAX_FRONT = 2, MAX_BACK = 3, COOLDOWN = 600, lastSwim = -1e9;
  function count(layer) { return things.filter(function (t) { return t.layer === layer; }).length; }
  window.oceanSwim = function () {
    var now = performance.now();
    if (now - lastSwim < COOLDOWN) return;
    lastSwim = now;
    if (count('front') < MAX_FRONT) { if (Math.random() < .6) school('front'); else bigShark('front'); }
    if (count('back') < MAX_BACK && Math.random() < .35) school('back');
  };
  setTimeout(function () { school('back'); }, 700);
  setTimeout(function () { school('back'); }, 4200);

  var puffs = [];                                  // bubble bursts from clicked fish
  (function loop() {
    var d = parseFloat(root.style.getPropertyValue('--depth')) || 0;
    frame++;
    bx.clearRect(0, 0, W, H); fx.clearRect(0, 0, W, H);
    snow.forEach(function (p) {
      p.y += p.s; if (p.y > H) { p.y = -4; p.x = Math.random() * W; }
      bx.fillStyle = 'rgba(210,245,255,' + (.15 + d * .55) + ')'; bx.fillRect(p.x, p.y, p.r, p.r);
    });
    bubbles.forEach(function (b, i) {
      b.y -= b.s; b.w += .02; b.x += Math.sin(b.w) * .35;
      if (b.y < -10) bubbles[i] = spawn(H + 10);
      bx.beginPath(); bx.arc(b.x, b.y, b.r, 0, 6.283);
      bx.strokeStyle = 'rgba(190,240,255,.45)'; bx.lineWidth = 1; bx.stroke();
      bx.fillStyle = 'rgba(190,240,255,.07)'; bx.fill();
    });
    var nb = things.filter(function (t) { return t.layer === 'back'; }).length;
    if (frame % 360 === 0 && nb < 3) school('back');
    if (frame % 1500 === 0 && d > .25) bigShark('back');
    things = things.filter(function (t) {
      var c = t.layer === 'front' ? fx : bx;
      t.boost = 1 + (t.boost - 1) * .975;
      t.x += t.v * t.dir * t.boost; t.ph = (t.ph || 0) + (t.kind === 'shark' ? .06 : .25) * t.boost;
      if (t.kind === 'school') {
        t.m.forEach(function (f) {
          f.p += .28 * t.boost;
          f.ox += f.vx; f.oy += f.vy; f.vx *= .94; f.vy *= .94;
          f.sx = t.x + f.dx + f.ox; f.sy = t.y + f.dy + f.oy + Math.sin(f.p * .6) * 5;
          put(c, t.fn, f.sx, f.sy, t.s, f.vx ? (f.vx > 1.5 ? 1 : f.vx < -1.5 ? -1 : t.dir) : t.dir, t.a, f.p);
        });
      } else put(c, shark, t.x, t.y, t.s, t.dir, t.a, t.ph);
      return t.x > -700 && t.x < W + 700;
    });
    puffs = puffs.filter(function (b) {
      b.y += b.vy; b.x += b.vx; b.vy *= .97; b.vx *= .95; b.life -= .016;
      fx.beginPath(); fx.arc(b.x, b.y, b.r, 0, 6.283);
      fx.strokeStyle = 'rgba(220,250,255,' + Math.max(0, b.life) + ')'; fx.lineWidth = 1.4; fx.stroke();
      return b.life > 0;
    });
    requestAnimationFrame(loop);
  })();

  // Click a fish or shark: it reacts, bubbles burst, and you learn something about it.
  var facts = {
    snapper: ['Red snapper can live for more than 50 years.', 'Red snapper often school around reefs and wrecks.', 'Young red snapper hide in seagrass before moving to the reef.'],
    grouper: ['Nassau groupers are critically endangered. The Bahamas protects them with a closed season from December to February.', 'Nassau groupers can change colour in seconds.', 'Groupers swallow prey whole by opening their huge mouths fast.'],
    shark: ['Great hammerheads use their wide head to pin stingrays to the sand.', 'The Bahamas has been a shark sanctuary since 2011.', 'A hammerhead\'s eyes sit on the ends of its head, giving it a wide field of view.']
  }, names = { snapper: 'Red snapper', grouper: 'Nassau grouper', shark: 'Great hammerhead' }, factN = {};
  function hit(x, y) {
    for (var i = things.length - 1; i >= 0; i--) {
      var t = things[i];
      if (t.kind === 'shark') {
        if (Math.abs(x - (t.x + 15 * t.s * t.dir)) < 70 * t.s && Math.abs(y - t.y) < 24 * t.s) return { t: t };
      } else for (var j = 0; j < t.m.length; j++) {
        var f = t.m[j]; if (f.sx === undefined) continue;
        if (Math.abs(x - f.sx) < 34 * t.s && Math.abs(y - f.sy) < 16 * t.s) return { t: t, f: f };
      }
    }
    return null;
  }
  var tip = document.createElement('div'); tip.className = 'fishfact'; tip.setAttribute('role', 'status'); tip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tip);
  var tipT;
  function fact(sp, x, y) {
    var list = facts[sp]; factN[sp] = ((factN[sp] || 0) + 1) % list.length;
    tip.innerHTML = '<b>' + names[sp] + '</b>' + list[factN[sp]];
    tip.style.left = Math.max(12, Math.min(innerWidth - 292, x - 140)) + 'px';
    tip.style.top = Math.max(76, y - 110) + 'px';
    tip.classList.remove('on'); void tip.offsetWidth; tip.classList.add('on');
    clearTimeout(tipT); tipT = setTimeout(function () { tip.classList.remove('on'); }, 4200);
  }
  function burst(x, y) {
    for (var k = 0; k < 12; k++) {
      var a = Math.random() * 6.283, sp = 1 + Math.random() * 3;
      puffs.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.6, r: 2 + Math.random() * 5, life: 1 });
    }
  }
  addEventListener('pointerdown', function (e) {
    if (e.target.closest && e.target.closest('a,button,input,textarea,select,label,[onclick],[role="button"],#imageModal')) return;
    var h = hit(e.clientX, e.clientY); if (!h) return;
    var t = h.t; burst(e.clientX, e.clientY); fact(t.species, e.clientX, e.clientY);
    if (t.kind === 'shark') {                         // whips its tail, turns away and bolts
      t.dir = e.clientX < t.x ? 1 : -1; t.boost = 3.2;
    } else {                                          // the school scatters away from your finger
      t.boost = 2.8;
      t.m.forEach(function (f) {
        var dx = f.sx - e.clientX, dy = f.sy - e.clientY, d = Math.hypot(dx, dy) || 1, kick = (t.layer === 'front' ? 11 : 6) * (0.6 + Math.random() * .8);
        f.vx += dx / d * kick; f.vy += dy / d * kick;
      });
    }
  }, true);
  // Show a pointer over fish so people know they can tap them.
  var hoverQ = false;
  addEventListener('pointermove', function (e) {
    if (hoverQ) return; hoverQ = true;
    requestAnimationFrame(function () { hoverQ = false; document.body.classList.toggle('over-fish', !!hit(e.clientX, e.clientY) && !(e.target.closest && e.target.closest('a,button,input,textarea'))); });
  }, { passive: true });
})();
