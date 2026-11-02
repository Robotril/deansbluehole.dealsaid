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
    // Letters are grouped into words so the title only ever wraps between words, never mid-word.
    var li = 0;
    text.split(' ').forEach(function (word, wi) {
      if (wi) frag.appendChild(document.createTextNode(' '));
      var w = document.createElement('span'); w.className = 'kw';
      word.split('').forEach(function (ch) {
        var s = document.createElement('span');
        s.className = 'kl'; s.textContent = ch; s.style.setProperty('--i', li++); s.setAttribute('aria-hidden', 'true');
        w.appendChild(s);
      });
      frag.appendChild(w);
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

  /* ---------- 4b. dive buddy: the logo's robot, snorkelling in the hero ---------- */
  if (hero) {
    var tips = [
      ['Never dive alone', 'Use a buddy who stays at the surface if you go deep.'],
      ['Rip currents', 'If one catches you, swim parallel to the shore.'],
      ['Know your limits', 'Don\'t swim out farther than you can comfortably return.'],
      ['Monitor buoyancy', 'In a blue hole you can descend faster than expected.'],
      ['Keep the exit in sight', 'Vertical walls can mess with your sense of direction.'],
      ['Snorkelers', 'Stay above the rim. Strong pulls can happen near the centre.'],
      ['Untrained?', 'The safest area is the outer shallow basin.'],
      ['Marine life', 'Shuffle your feet for stingrays, and don\'t touch coral.'],
      ['Drowning CPR', 'Give 2 rescue breaths first, then compressions.']
    ];
    var dive = document.createElement('div');
    dive.className = 'dive-robo';
    dive.innerHTML = '<div class="robo-say" role="status" aria-live="polite"></div>' +
      '<div class="robo" role="button" tabindex="0" aria-label="Dive buddy robot. Press for a safety tip."><svg viewBox="0 0 120 156" aria-hidden="true">' +
      '<g class="r-all"><g class="r-jump">' +
      '<g class="r-arm-l"><path d="M28 114 L17 136" stroke="#3F86A8" stroke-width="7" stroke-linecap="round"/><circle cx="16" cy="139" r="6" fill="#5BA9CC"/></g>' +
      '<g class="r-arm-r"><path d="M92 114 L103 136" stroke="#3F86A8" stroke-width="7" stroke-linecap="round"/><circle cx="104" cy="139" r="6" fill="#5BA9CC"/></g>' +
      '<rect x="52" y="98" width="16" height="12" fill="#3F86A8"/><rect x="30" y="106" width="60" height="42" rx="9" fill="#EE7A3C"/>' +
      '<rect x="43" y="116" width="34" height="18" rx="4" fill="rgba(0,0,0,.16)"/><circle cx="51" cy="125" r="3" fill="#F2B705"/><circle cx="60" cy="125" r="3" fill="#4fe0e0"/><circle cx="69" cy="125" r="3" fill="#fff" opacity=".8"/>' +
      '<g class="r-head"><path d="M46 32 L38 10 M74 32 L82 10" stroke="#6B4A3A" stroke-width="3.2" stroke-linecap="round"/><circle class="r-bulb" cx="38" cy="9" r="5"/><circle class="r-bulb" cx="82" cy="9" r="5"/>' +
      '<rect x="14" y="27" width="92" height="76" rx="13" fill="#5BA9CC"/><rect x="24" y="37" width="72" height="57" rx="8" fill="#F6A93B"/>' +
      '<circle cx="46" cy="58" r="10" fill="#fff" stroke="#1B2433" stroke-width="3"/><circle cx="74" cy="58" r="10" fill="#fff" stroke="#1B2433" stroke-width="3"/>' +
      '<g class="r-pupils"><circle cx="46" cy="58" r="5" fill="#1B2433"/><circle cx="74" cy="58" r="5" fill="#1B2433"/><circle cx="47.8" cy="56.2" r="1.6" fill="#fff"/><circle cx="75.8" cy="56.2" r="1.6" fill="#fff"/></g>' +
      '<rect class="r-lid" x="34" y="46" width="24" height="24" fill="#F6A93B"/><rect class="r-lid" x="62" y="46" width="24" height="24" fill="#F6A93B"/>' +
      // mask: tinted lens over both eyes, strap, nose bridge
      '<path d="M8 52 H22 M98 52 H112" stroke="#1B2433" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M26 46 Q26 40 34 40 H86 Q94 40 94 46 V64 Q94 72 84 72 Q74 72 68 64 Q64 60 60 60 Q56 60 52 64 Q46 72 36 72 Q26 72 26 64 Z" fill="rgba(80,170,240,.38)" stroke="#12A9D9" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M33 46 L44 46" stroke="rgba(255,255,255,.75)" stroke-width="3" stroke-linecap="round"/>' +
      '<g class="r-smile"><path d="M40 78 Q60 95 80 78 Q60 85 40 78Z" fill="#1B2433"/><path d="M46 80 Q60 85 74 80 L73 82.5 Q60 87 47 82.5Z" fill="#fff"/></g><ellipse class="r-o" cx="60" cy="83" rx="4.5" ry="5" fill="#1B2433"/>' +
      // snorkel tube rising beside the head
      '<path d="M40 84 Q22 86 22 66 V12" fill="none" stroke="#F7A8E8" stroke-width="7" stroke-linecap="round"/><path d="M18 30 H26 M18 34 H26" stroke="#1B2433" stroke-width="1.6"/>' +
      '</g></g></g></svg></div>' +
      '<span class="bub" style="--b:0"></span><span class="bub" style="--b:1"></span><span class="bub" style="--b:2"></span><span class="bub" style="--b:3"></span>';
    hero.appendChild(dive);
    var robo = dive.querySelector('.robo'), say = dive.querySelector('.robo-say'), pupils = dive.querySelector('.r-pupils'), t = {};
    function act(cls, ms) { if (reduce) return; robo.classList.remove(cls); void robo.offsetWidth; robo.classList.add(cls); clearTimeout(t[cls]); t[cls] = setTimeout(function () { robo.classList.remove(cls); }, ms); }
    function speak(html, ms) { say.innerHTML = html; say.classList.add('on'); clearTimeout(t.say); t.say = setTimeout(function () { say.classList.remove('on'); }, ms); }
    var tipN = Math.floor(Math.random() * tips.length);
    function tip() { var x = tips[tipN++ % tips.length]; speak('<b>' + x[0] + '.</b> ' + x[1], 5200); act(Math.random() < .5 ? 'wave' : 'hop', 1300); }
    robo.addEventListener('click', tip);
    robo.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tip(); } });
    setTimeout(function () { act('wave', 1300); speak(innerWidth < 640 ? 'Hi! Tap me for a safety tip.' : 'Hi! I\'m your dive buddy. Click me for a safety tip.', 4800); }, reduce ? 400 : 2600);
    (function blink() { if (!reduce && !document.hidden) act('blink', 200); t.blink = setTimeout(blink, 2400 + Math.random() * 3600); })();
    if (!reduce) {
      var px = innerWidth / 2, py = innerHeight / 3, ox = 0, oy = 0, run = false;
      var look = function () {
        var b = robo.getBoundingClientRect(), dx = px - (b.left + b.width / 2), dy = py - (b.top + b.height * .37), d = Math.hypot(dx, dy) || 1, m = Math.min(1, d / 260);
        var tx = dx / d * 3.4 * m, ty = dy / d * 3 * m; ox += (tx - ox) * .18; oy += (ty - oy) * .18;
        pupils.setAttribute('transform', 'translate(' + ox.toFixed(2) + ' ' + oy.toFixed(2) + ')');
        if (Math.abs(tx - ox) > .02 || Math.abs(ty - oy) > .02) requestAnimationFrame(look); else run = false;
      };
      addEventListener('pointermove', function (e) { px = e.clientX; py = e.clientY; if (!run) { run = true; requestAnimationFrame(look); } }, { passive: true });
    }
  }


  /* ---------- 4c. gallery viewer: swipe, arrows and keys to move between photos and videos ---------- */
  (function () {
    var modal = document.getElementById('imageModal');
    var grid = document.querySelector('#gallery');
    if (!modal || !grid || !window.openModal) return;
    var box = modal.firstElementChild, img = document.getElementById('modalImg'), vid = document.getElementById('modalVideo');
    function items() {
      return Array.prototype.map.call(grid.querySelectorAll('[onclick^="openModal"],[onclick^="openVideo"]'), function (el) {
        var m = el.getAttribute('onclick').match(/^(openModal|openVideo)\('([^']+)'\)/);
        return m ? { video: m[1] === 'openVideo', src: m[2] } : null;
      }).filter(Boolean);
    }
    var list = [], idx = -1, origImg = window.openModal, origVid = window.openVideo;
    var nav = document.createElement('div'); nav.className = 'gnav';
    nav.innerHTML = '<button type="button" class="gnav-btn prev" aria-label="Previous photo"><i class="fas fa-chevron-left"></i></button>' +
      '<span class="gnav-count" aria-live="polite"></span>' +
      '<button type="button" class="gnav-btn next" aria-label="Next photo"><i class="fas fa-chevron-right"></i></button>';
    box.appendChild(nav);
    var hint = document.createElement('p'); hint.className = 'gnav-hint'; hint.textContent = 'Swipe to see more'; box.appendChild(hint);
    var count = nav.querySelector('.gnav-count');
    function find(src) { for (var i = 0; i < list.length; i++) if (decodeURI(list[i].src) === decodeURI(src)) return i; return -1; }
    function update() { nav.hidden = list.length < 2 || idx < 0; count.textContent = (idx + 1) + ' / ' + list.length; }
    window.openModal = function (src) { origImg(src); list = items(); idx = find(src); update(); };
    window.openVideo = function (src) { origVid(src); list = items(); idx = find(src); update(); };
    function show(step) {
      if (idx < 0 || list.length < 2) return;
      idx = (idx + step + list.length) % list.length;
      var it = list[idx]; (it.video ? origVid : origImg)(it.src); update();
      var el = it.video ? vid : img;
      if (!reduce) { el.classList.remove('gslide-l', 'gslide-r'); void el.offsetWidth; el.classList.add(step > 0 ? 'gslide-r' : 'gslide-l'); }
    }
    nav.querySelector('.prev').addEventListener('click', function (e) { e.stopPropagation(); show(-1); });
    nav.querySelector('.next').addEventListener('click', function (e) { e.stopPropagation(); show(1); });
    addEventListener('keydown', function (e) {
      if (modal.classList.contains('hidden')) return;
      if (e.key === 'ArrowRight') show(1); else if (e.key === 'ArrowLeft') show(-1); else if (e.key === 'Escape' && window.closeModal) window.closeModal();
    });
    // swipe: the photo follows your finger, then slides to the next one
    var sx = 0, sy = 0, dragging = false, swiped = false;
    modal.addEventListener('touchstart', function (e) { if (e.touches.length !== 1) return; sx = e.touches[0].clientX; sy = e.touches[0].clientY; dragging = true; swiped = false; }, { passive: true });
    modal.addEventListener('touchmove', function (e) {
      if (!dragging) return;
      var dx = e.touches[0].clientX - sx, dy = e.touches[0].clientY - sy;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) { var el = list[idx] && list[idx].video ? vid : img; el.style.transform = 'translateX(' + dx * .6 + 'px)'; el.style.opacity = String(1 - Math.min(Math.abs(dx) / 600, .4)); }
    }, { passive: true });
    modal.addEventListener('touchend', function (e) {
      if (!dragging) return; dragging = false;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      img.style.transform = vid.style.transform = ''; img.style.opacity = vid.style.opacity = '';
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) { swiped = true; show(dx < 0 ? 1 : -1); }
    });
    // a swipe must not count as a tap on the dark background (which closes the viewer)
    modal.addEventListener('click', function (e) { if (swiped) { e.stopPropagation(); e.preventDefault(); swiped = false; } }, true);
  })();

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
