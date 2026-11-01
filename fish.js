/* Fish that swim across the screen when a menu link is used.
   Faster than before, and capped so repeated taps never fill the screen. */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var cv = document.createElement('canvas');
  cv.setAttribute('aria-hidden', 'true');
  cv.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:45';
  document.body.appendChild(cv);
  var fx = cv.getContext('2d'), W = 0, H = 0, dpr = 1;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
  }
  size(); addEventListener('resize', size);

  var MAX_ON_SCREEN = 2;   // never more than two groups at once
  var COOLDOWN = 700;      // ms between new groups, however fast the taps
  var things = [], running = false, last = 0, lastSpawn = -1e9;

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
  function put(c, fn, x, y, s, dir, ph) {
    c.save(); c.translate(x, y); c.scale(dir * s, s); fn(c, ph); c.restore();
  }

  // Speeds are in pixels per second, so they hold on any screen refresh rate.
  function school() {
    var grp = Math.random() > .62, dir = Math.random() < .5 ? 1 : -1;
    var s = (W < 700 ? 1.3 : 2) * (grp ? 1.25 : 1), n = grp ? 3 : 7, m = [];
    for (var k = 0; k < n; k++) m.push({ dx: -k * (grp ? 60 : 26) * s * dir + Math.random() * 18, dy: (Math.random() - .5) * (grp ? 40 : 90) * s, p: Math.random() * 6 });
    things.push({ kind: 'school', fn: grp ? grouper : snapper, x: dir > 0 ? -160 : W + 160,
      y: H * (.2 + Math.random() * .6), dir: dir, v: (grp ? 520 : 720) * (W < 700 ? .7 : 1), s: s, m: m, ph: 0 });
  }
  function bigShark() {
    var dir = Math.random() < .5 ? 1 : -1, s = W < 700 ? 2.2 : 3.4;
    things.push({ kind: 'shark', x: dir > 0 ? -400 : W + 400, y: H * (.3 + Math.random() * .4),
      dir: dir, v: (W < 700 ? 420 : 600), s: s, m: [], ph: 0 });
  }

  function loop(t) {
    var dt = Math.min((t - last) / 1000, 0.05); last = t;
    fx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fx.clearRect(0, 0, W, H);
    things = things.filter(function (o) {
      o.x += o.v * o.dir * dt;
      o.ph += (o.kind === 'shark' ? 4 : 16) * dt;
      if (o.kind === 'school') {
        o.m.forEach(function (f) {
          f.p += 18 * dt;
          put(fx, o.fn, o.x + f.dx, o.y + f.dy + Math.sin(f.p * .6) * 5, o.s, o.dir, f.p);
        });
      } else put(fx, shark, o.x, o.y, o.s, o.dir, o.ph);
      var reach = o.kind === 'shark' ? 500 : 160 + o.m.length * 70 * o.s;
      return o.dir > 0 ? o.x < W + reach : o.x > -reach;
    });
    if (things.length) requestAnimationFrame(loop);
    else { running = false; fx.clearRect(0, 0, W, H); }
  }

  function swim() {
    var now = performance.now();
    if (things.length >= MAX_ON_SCREEN || now - lastSpawn < COOLDOWN) return;
    lastSpawn = now;
    if (Math.random() < .7) school(); else bigShark();
    if (!running) { running = true; last = now; requestAnimationFrame(loop); }
  }
  window.oceanSwim = swim;

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a) swim();
  });
})();
