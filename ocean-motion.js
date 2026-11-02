/* Dean's Blue Hole: motion layer. Loaded by ocean.js once ocean-motion.css is ready. Page content stays as written. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  if (!reduce) root.classList.add('motion');
  var hold = document.getElementById('motion-hold');
  var NS = 'http://www.w3.org/2000/svg';

  /* ---------- 1. hero title: split into letters that surface one by one ---------- */
  var h2 = document.querySelector('#hero h2');
  if (h2 && h2.firstChild && h2.firstChild.nodeType === 3) {
    var text = h2.firstChild.nodeValue, frag = document.createDocumentFragment();
    h2.setAttribute('aria-label', h2.textContent.replace(/\s+/g, ' ').trim());
    text.split('').forEach(function (ch, i) {
      var s = document.createElement('span');
      s.className = 'kl'; s.textContent = ch; s.style.setProperty('--i', i); s.setAttribute('aria-hidden', 'true');
      frag.appendChild(s);
    });
    h2.replaceChild(frag, h2.firstChild);
  }
  if (hold) hold.remove();                               // title is split and animated from opacity 0 now

  /* ---------- 2. wave edge: three seamless sine layers drifting at different speeds ---------- */
  var hero = document.getElementById('hero');
  if (hero) {
    var waves = document.createElement('div');
    waves.className = 'waves'; waves.setAttribute('aria-hidden', 'true');
    function wave(amp, base, phase, cycles) {
      var d = 'M0 110 L0 ' + base, W = 2880;
      for (var x = 0; x <= W; x += 24) d += ' L' + x + ' ' + (base + Math.sin((x / 1440) * cycles * Math.PI * 2 + phase) * amp).toFixed(1);
      return d + ' L' + W + ' 110 Z';
    }
    waves.innerHTML = [[14, 46, 0, 2, 'w1', 's1'], [10, 64, 1.7, 3, 'w2', 's2'], [7, 84, .6, 4, 'w3', 's3']].map(function (w) {
      return '<svg class="' + w[5] + '" viewBox="0 0 2880 110" preserveAspectRatio="none"><path class="' + w[4] + '" d="' + wave(w[0], w[1], w[2], w[3]) + '"/></svg>';
    }).join('');
    hero.appendChild(waves);
  }

  /* ---------- 3. portals: stagger in, light follows the pointer ---------- */
  var portals = document.getElementById('portals');
  if (portals) {
    Array.prototype.forEach.call(portals.querySelectorAll('button'), function (b, i) { b.style.setProperty('--i', i); });
    portals.addEventListener('pointermove', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var r = b.getBoundingClientRect();
      b.style.setProperty('--px', (e.clientX - r.left) + 'px');
      b.style.setProperty('--py', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* ---------- 4. blueprint cross-section in the History tab ---------- */
  var hist = document.querySelector('#history .relative.rounded-xl');
  var fig;
  if (hist) {
    var k = 2, y0 = 90, cx = 400;                       // 1 m = 2 px, sea level at y=90
    var prof = [[0, 15], [15, 16], [25, 34], [40, 50], [140, 50], [175, 34], [202, 12]]; // [depth m, half-width m]
    function P(d, hw, side) { return [cx + side * hw * k, y0 + d * k]; }
    function smooth(pts) {                               // Catmull-Rom through the points
      var s = 'M' + pts[0][0] + ' ' + pts[0][1];
      for (var i = 0; i < pts.length - 1; i++) {
        var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
        s += ' C' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + ' ' +
          (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + ' ' + p2[0] + ' ' + p2[1];
      }
      return s;
    }
    var left = prof.map(function (p) { return P(p[0], p[1], -1); });
    var right = prof.slice().reverse().map(function (p) { return P(p[0], p[1], 1); });
    right[right.length - 1] = [cx + 15 * k, y0 + 6];      // right lip meets the shallow lagoon floor
    var holeL = smooth(left), holeR = smooth(right).replace(/^M[^C]+/, '');
    var bottomY = y0 + 202 * k;
    var cliff = 'M40 40 C140 32 240 30 300 44 S356 78 ' + (cx - 30) + ' ' + y0;
    var lagoonFloor = ' L' + (cx + 80) + ' ' + (y0 + 10) + ' L880 ' + (y0 + 12);
    var outline = cliff + ' ' + holeL.replace(/^M[^C]+/, '') + ' L' + (cx + 12 * k) + ' ' + bottomY + holeR + lagoonFloor;
    var rock = outline + ' L880 540 L40 540 Z';
    var water = 'M' + (cx - 30) + ' ' + y0 + ' ' + holeL.replace(/^M[^C]+/, '') + ' L' + (cx + 12 * k) + ' ' + bottomY + holeR + lagoonFloor + ' L880 ' + y0 + ' Z';
    var dy92 = 92 * k, tks = '';
    [0, 50, 100, 150, 202].forEach(function (m, i) {
      var y = y0 + m * k;
      tks += '<line class="tick" x1="234" x2="246" y1="' + y + '" y2="' + y + '"/><text class="tickt" x="226" y="' + (y + (m ? 4 : 16)) + '" text-anchor="end">' + m + ' m</text>';
    });
    fig = document.createElement('figure');
    fig.className = 'xsec';
    fig.innerHTML =
      '<div class="xsec-head"><h3>Inside the hole</h3><p>Depth to scale · shape approximate</p></div>' +
      '<div class="xsec-scroll"><svg viewBox="0 0 900 540" role="img" aria-labelledby="xs-t xs-d">' +
      '<title id="xs-t">Cross-section of Dean\'s Blue Hole</title>' +
      '<desc id="xs-d">A 30 meter wide entrance at the base of a rock amphitheater opens into a cavern nearly 100 meters across, reaching 202 meters (663 feet) deep. A dashed line marks William Trubridge\'s finless freedive to 92 meters in 2010.</desc>' +
      '<defs><pattern id="xs-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="rgba(2,16,32,.55)"/><line x1="0" y1="0" x2="0" y2="10" stroke="rgba(79,224,224,.16)" stroke-width="2"/></pattern>' +
      '<linearGradient id="xs-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2fc4d6" stop-opacity=".55"/><stop offset=".25" stop-color="#0b6e8f" stop-opacity=".55"/><stop offset="1" stop-color="#020d1c" stop-opacity=".9"/></linearGradient></defs>' +
      '<path class="rock fade" style="--d:.1s" d="' + rock + '"/>' +
      '<path class="water fade" style="--d:.9s" d="' + water + '"/>' +
      '<path class="wall draw" style="--d:.2s" d="' + outline + '"/>' +
      '<line class="surf draw" style="--d:.7s" x1="' + (cx - 30) + '" x2="880" y1="' + y0 + '" y2="' + y0 + '"/>' +
      '<text class="lbl fade" style="--d:1.2s" x="806" y="' + (y0 - 10) + '" text-anchor="end">Turquoise lagoon · sea level</text>' +
      '<text class="lbl fade" style="--d:1.2s" x="60" y="26"><tspan class="lblb">Rock amphitheater</tspan></text>' +
      '<text class="lbl fade" style="--d:1.3s" x="700" y="300">Limestone</text>' +
      // entrance width
      '<g class="fade" style="--d:1.6s"><path class="dim" d="M' + (cx - 30) + ' 58 H' + (cx + 30) + ' M' + (cx - 30) + ' 52 V64 M' + (cx + 30) + ' 52 V64"/>' +
      '<text class="dimt" x="' + cx + '" y="48" text-anchor="middle">30 m</text></g>' +
      // cavern width
      '<g class="fade" style="--d:1.9s"><path class="dim" d="M' + (cx - 100) + ' ' + (y0 + 120 * k) + ' H' + (cx + 100) + ' M' + (cx - 100) + ' ' + (y0 + 120 * k - 6) + ' v12 M' + (cx + 100) + ' ' + (y0 + 120 * k - 6) + ' v12"/>' +
      '<text class="dimt" x="' + cx + '" y="' + (y0 + 120 * k - 10) + '" text-anchor="middle">≈ 100 m across</text></g>' +
      // depth scale
      '<g class="fade" style="--d:1.4s"><line class="dim" x1="240" x2="240" y1="' + y0 + '" y2="' + bottomY + '"/>' + tks + '</g>' +
      '<g class="fade" style="--d:1.5s"><text class="depth-big" x="60" y="' + (bottomY - 10) + '"><tspan id="xs-num">202</tspan> m</text>' +
      '<text class="lbl" x="62" y="' + (bottomY + 14) + '">663 feet to the floor</text></g>' +
      // Trubridge dive
      '<line class="dive draw" style="--d:2.2s" x1="' + cx + '" x2="' + cx + '" y1="' + y0 + '" y2="' + (y0 + dy92) + '"/>' +
      '<g class="diverg" style="--dy:' + dy92 + 'px"><circle class="diver" cx="' + cx + '" cy="' + (y0 + dy92) + '" r="6"/><circle cx="' + cx + '" cy="' + (y0 + dy92) + '" r="11" fill="none" stroke="rgba(255,122,102,.5)" stroke-width="1.5"/></g>' +
      '<g class="fade" style="--d:4.6s"><rect x="' + (cx + 16) + '" y="' + (y0 + dy92 - 30) + '" width="236" height="44" rx="8" fill="rgba(3,22,44,.88)" stroke="rgba(255,122,102,.45)"/>' +
      '<text class="divet" x="' + (cx + 28) + '" y="' + (y0 + dy92 - 11) + '">92 m on one breath, no fins</text>' +
      '<text class="lbl" x="' + (cx + 28) + '" y="' + (y0 + dy92 + 6) + '">William Trubridge, 2010</text></g>' +
      '</svg></div>' +
      '<figcaption>The entrance is only about 30 meters wide, then the walls fall away into a cavern nearly 100 meters across. Freedivers at Vertical Blue descend along a guide line in the centre.</figcaption>';
    hist.parentNode.insertBefore(fig, hist.nextSibling);
    Array.prototype.forEach.call(fig.querySelectorAll('.draw'), function (p) {
      var len = p.getTotalLength ? Math.ceil(p.getTotalLength()) : 2000;
      p.style.setProperty('--len', len);
    });
  }

  /* ---------- 5. reveal on scroll + start the cross-section when it is seen ---------- */
  if (reduce || !('IntersectionObserver' in window)) { if (fig) fig.classList.add('go'); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('rv-in');
      io.unobserve(e.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  var vh = innerHeight, seen = [];
  Array.prototype.forEach.call(document.querySelectorAll('main section .rounded-xl, main section .group'), function (el) {
    if (el.closest('.rv') || el.closest('.xsec')) return;
    var r = el.getBoundingClientRect();
    if (r.height && r.top < vh) return;                 // already on screen at load: leave it alone
    var sib = seen.filter(function (s) { return s.parentNode === el.parentNode; }).length;
    el.style.setProperty('--rd', Math.min(sib, 5) * 70 + 'ms');
    el.classList.add('rv'); seen.push(el); io.observe(el);
  });

  if (fig) {
    var num = document.getElementById('xs-num');
    var fio = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      fio.disconnect(); fig.classList.add('go');
      var t0 = performance.now() + 1500;
      (function tick(t) {
        var p = Math.max(0, Math.min((t - t0) / 2000, 1)), e = 1 - Math.pow(1 - p, 3);
        num.textContent = Math.round(202 * e);
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
    }, { threshold: .35 });
    fio.observe(fig);
  }
})();
