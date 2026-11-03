/* MGT motion layer: the robot helper, tilting cards and scroll reveals. Listens to events from app.js. */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lite = () => !window.FX || window.FX.tier !== 'full';   // perf.js: slower devices get the calm version
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const COURSES = window.MGT_COURSES || [];
  const href = c => '#' + (c.public ? '' : 'c-') + c.id;

  /* ---------- the robot (drawn to match the Dean's Blue Hole mascot) ---------- */
  const SVG = `<svg viewBox="0 0 120 156" aria-hidden="true">
    <ellipse cx="60" cy="152" rx="30" ry="4" fill="rgba(0,0,0,.28)"/>
    <g class="r-all"><g class="r-jump">
      <g class="r-pack"><rect x="20" y="100" width="15" height="34" rx="5" fill="#8C97A8"/><rect x="85" y="100" width="15" height="34" rx="5" fill="#8C97A8"/>
        <rect x="22" y="104" width="11" height="4" rx="2" fill="#F2B705"/><rect x="87" y="104" width="11" height="4" rx="2" fill="#F2B705"/>
        <g class="r-flame"><path d="M22 134 Q27.5 160 33 134Z" fill="#FF8A3D"/><path d="M24.5 134 Q27.5 151 30.5 134Z" fill="#FFE27A"/>
          <path d="M87 134 Q92.5 160 98 134Z" fill="#FF8A3D"/><path d="M89.5 134 Q92.5 151 95.5 134Z" fill="#FFE27A"/></g></g>
      <g class="r-arm-l"><path d="M28 114 L17 136" stroke="var(--robo-frame-dark)" stroke-width="7" stroke-linecap="round"/><circle cx="16" cy="139" r="6" fill="var(--robo-frame)"/></g>
      <g class="r-arm-r"><path d="M92 114 L103 136" stroke="var(--robo-frame-dark)" stroke-width="7" stroke-linecap="round"/><circle cx="104" cy="139" r="6" fill="var(--robo-frame)"/></g>
      <rect x="52" y="98" width="16" height="12" fill="var(--robo-frame-dark)"/>
      <rect x="30" y="106" width="60" height="42" rx="9" fill="var(--robo-body)"/>
      <rect x="43" y="116" width="34" height="18" rx="4" fill="rgba(0,0,0,.16)"/>
      <circle cx="51" cy="125" r="3" fill="#F2B705"/><circle cx="60" cy="125" r="3" fill="#4fe0e0"/><circle cx="69" cy="125" r="3" fill="#fff" opacity=".8"/>
      <g class="r-head">
        <path d="M46 32 L38 10 M74 32 L82 10" stroke="var(--robo-antenna)" stroke-width="3.2" stroke-linecap="round"/>
        <circle class="r-bulb" cx="38" cy="9" r="5"/><circle class="r-bulb" cx="82" cy="9" r="5"/>
        <rect x="14" y="27" width="92" height="76" rx="13" fill="var(--robo-frame)"/>
        <rect x="24" y="37" width="72" height="57" rx="8" fill="var(--robo-face)"/>
        <rect class="r-face-glow" x="24" y="37" width="72" height="57" rx="8" fill="#FFF8E6"/>
        <circle cx="46" cy="59" r="10.5" fill="#fff" stroke="var(--robo-ink)" stroke-width="3"/>
        <circle cx="74" cy="59" r="10.5" fill="#fff" stroke="var(--robo-ink)" stroke-width="3"/>
        <g class="r-pupils"><circle cx="46" cy="59" r="5" fill="var(--robo-ink)"/><circle cx="74" cy="59" r="5" fill="var(--robo-ink)"/>
          <circle cx="47.8" cy="57.2" r="1.6" fill="#fff"/><circle cx="75.8" cy="57.2" r="1.6" fill="#fff"/></g>
        <rect class="r-lid" x="34" y="47" width="24" height="24" fill="var(--robo-face)"/>
        <rect class="r-lid" x="62" y="47" width="24" height="24" fill="var(--robo-face)"/>
        <g class="r-smile"><path d="M37 73 Q60 95 83 73 Q60 81 37 73Z" fill="var(--robo-ink)"/><path d="M44 75.6 Q60 81 76 75.6 L74.6 78.4 Q60 83 45.4 78.4Z" fill="#fff"/></g>
        <ellipse class="r-o" cx="60" cy="80" rx="5" ry="6" fill="var(--robo-ink)"/>
      </g>
    </g></g>
  </svg>`;

  const robots = new Set();
  function makeRobo(label) {
    const el = document.createElement('div');
    el.className = 'robo'; el.tabIndex = 0; el.setAttribute('role', 'button'); el.setAttribute('aria-label', label);
    el.innerHTML = SVG;
    const say = document.createElement('div'); say.className = 'robo-say'; say.setAttribute('role', 'status'); say.setAttribute('aria-live', 'polite');
    const r = { el, say, pupils: $('.r-pupils', el), timers: {}, ox: 0, oy: 0, tx: 0, ty: 0 };
    r.act = (cls, ms) => {
      if (reduce && cls !== 'sad') return;
      el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
      clearTimeout(r.timers[cls]); r.timers[cls] = setTimeout(() => el.classList.remove(cls), ms);
    };
    r.speak = (html, ms = 3200) => {
      say.innerHTML = html; say.classList.add('on');
      clearTimeout(r.timers.say); r.timers.say = setTimeout(() => say.classList.remove('on'), ms);
    };
    const blink = () => { if (!document.hidden && el.isConnected) { r.act('blink', 200); if (Math.random() < .25) setTimeout(() => r.act('blink', 200), 260); } r.timers.blink = setTimeout(blink, 2200 + Math.random() * 3600); };
    if (!reduce) r.timers.blink = setTimeout(blink, 1800);
    const tip = () => {
      const c = pick(COURSES);
      r.speak(pick([
        `Try <a href="${href(c)}">${c.title}</a>. ${c.tag}`,
        `Psst… <a href="${href(c)}">${c.title}</a> has ${c.flat.length} lessons and ${c.games.length} games.`,
        `Today's pick: <a href="${href(c)}">${c.title}</a>. ${c.tag}`
      ]), 5200);
      r.act(pick(['wave', 'hop']), 1300);
    };
    el.addEventListener('click', tip);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tip(); } });
    robots.add(r);
    return r;
  }

  /* eyes follow the pointer: one shared loop, idle when nothing moves */
  let px = innerWidth / 2, py = innerHeight / 3, looping = false;
  function look() {
    let moving = false;
    robots.forEach(r => {
      if (!r.el.isConnected) { robots.delete(r); return; }
      const b = r.el.getBoundingClientRect(); if (!b.width) return;
      const cx = b.left + b.width / 2, cy = b.top + b.height * .38, dx = px - cx, dy = py - cy, d = Math.hypot(dx, dy) || 1, m = Math.min(1, d / 260);
      r.tx = dx / d * 3.6 * m; r.ty = dy / d * 3.2 * m;
      r.ox += (r.tx - r.ox) * .18; r.oy += (r.ty - r.oy) * .18;
      if (Math.abs(r.tx - r.ox) > .02 || Math.abs(r.ty - r.oy) > .02) moving = true;
      r.pupils.setAttribute('transform', `translate(${r.ox.toFixed(2)} ${r.oy.toFixed(2)})`);
    });
    if (moving && !document.hidden) requestAnimationFrame(look); else looping = false;
  }
  if (!reduce) addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; if (!looping) { looping = true; requestAnimationFrame(look); } }, { passive: true });

  /* ---------- home hero robot ---------- */
  let hero = null;
  function mountHero() {
    const slot = $('#view .robo-slot'); if (!slot) return;
    hero = makeRobo('Robot helper. Press for a course idea.');
    slot.append(hero.say, hero.el);
    setTimeout(() => { hero.act('boot', 1200); }, reduce ? 0 : 1900);
    setTimeout(() => { hero.act('wave', 1300); hero.speak(innerWidth < 560 ? 'Hi! Tap me for a course idea.' : (fine ? 'Hi! I\'m your study buddy. Move your mouse around, I\'ll follow. Click me for a course idea.' : 'Hi! I\'m your study buddy. Click me for a course idea.'), 5200); }, reduce ? 300 : 2500);
    countUp();
    if (!reduce && fine) fly(slot);
  }
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches && innerWidth > 760;

  /* hero numbers count up once the headline has grown */
  function countUp() {
    $$('#view .hero-stats dd').forEach((dd, k) => {
      const end = parseInt(dd.textContent, 10); if (!end || reduce) return;
      const t0 = performance.now() + 1100 + k * 120;
      dd.textContent = '0';
      const step = t => { const p = Math.max(0, Math.min((t - t0) / 1400, 1)); dd.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))); if (p < 1 && dd.isConnected) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }

  /* jetpack flight: the robot chases the pointer around the right side of the hero, then flies home */
  function fly(slot) {
    const heroEl = slot.closest('.hero'); if (!heroEl) return;
    let x = 0, y = 0, vx = 0, vy = 0, tx = 0, ty = 0, raf = 0, idle = 0, flying = false, lastSpark = 0, ready = false;
    setTimeout(() => { ready = true; }, 3400);            // let it land and say hi first
    const home = () => { tx = 0; ty = 0; };
    const sparks = [];
    function spark() {
      const hb = heroEl.getBoundingClientRect(), sb = slot.getBoundingClientRect();
      const s = document.createElement('span'); s.className = 'spark';
      s.style.left = (sb.left - hb.left + sb.width * (Math.random() < .5 ? .23 : .77)) + 'px';
      s.style.top = (sb.top - hb.top + sb.height * .93) + 'px';
      s.style.setProperty('--dx', (Math.random() * 30 - 15 - vx * 4).toFixed(1) + 'px');
      heroEl.appendChild(s); sparks.push(s);
      setTimeout(() => { s.remove(); sparks.splice(sparks.indexOf(s), 1); }, 800);
    }
    function tick(now) {
      raf = 0;
      if (!slot.isConnected) return;
      vx += (tx - x) * .045; vy += (ty - y) * .045; vx *= .86; vy *= .86; x += vx; y += vy;
      const speed = Math.hypot(vx, vy), away = Math.hypot(x, y);
      slot.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`; hero.el.style.rotate = `${Math.max(-18, Math.min(18, vx * 1.6)).toFixed(1)}deg`; // only the robot tilts, its speech bubble stays level
      const nowFlying = speed > .35 || away > 6;
      if (nowFlying !== flying) { flying = nowFlying; hero.el.classList.toggle('fly', flying); if (!flying) hero.act('hop', 750); }
      if (flying && !lite() && speed > 1.2 && now - lastSpark > 40 && sparks.length < 26) { lastSpark = now; spark(); }
      if (now - idle > 2600 && (tx || ty)) home();
      if (speed > .02 || away > .5 || tx || ty) raf = requestAnimationFrame(tick);
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    heroEl.addEventListener('pointermove', e => {
      if (!ready) return;
      const hb = heroEl.getBoundingClientRect(), w = slot.offsetWidth, h = slot.offsetHeight;
      const hx = slot.offsetLeft, hy = slot.offsetTop;                       // home position inside the hero
      const px = e.clientX - hb.left, py = e.clientY - hb.top;
      const band = $('.hx-band', heroEl), maxY = band ? band.offsetHeight - h * .55 : hb.height - h - 24;
      const wantX = Math.max(band ? 16 : hb.width * .56, Math.min(hb.width - w - 48, px + 70));
      const wantY = Math.max(band ? 40 : 200, Math.min(maxY, py - h * .45)); // stay over the photo band, clear of the headline
      tx = wantX - hx; ty = wantY - hy; idle = performance.now(); kick();
    });
    heroEl.addEventListener('pointerleave', () => { home(); kick(); });
    /* hero parallax: the headline drifts up and fades as you scroll */
    const inner = $('.hero-in', heroEl);
    if (inner) {
    const onScroll = () => { if (!heroEl.isConnected) { removeEventListener('scroll', onScroll); return; } const s = Math.min(scrollY, 700); inner.style.transform = `translateY(${(s * .28).toFixed(1)}px)`; inner.style.opacity = (1 - s / 820).toFixed(3); };
      addEventListener('scroll', onScroll, { passive: true });
    }
  }

  /* ---------- corner buddy on every other page ---------- */
  let buddy = null, wrap = null, closed = false;
  try { closed = sessionStorage.getItem('mgt.robo.off') === '1'; } catch (e) { /* storage unavailable */ }
  function ensureBuddy() {
    if (wrap || closed) return;
    wrap = document.createElement('div'); wrap.className = 'robo-buddy hidden';
    buddy = makeRobo('Robot helper. Press for a course idea.');
    const x = document.createElement('button'); x.className = 'r-x'; x.type = 'button'; x.setAttribute('aria-label', 'Hide the robot'); x.textContent = '×';
    x.onclick = e => { e.stopPropagation(); wrap.classList.add('hidden'); closed = true; try { sessionStorage.setItem('mgt.robo.off', '1'); } catch (er) { /* ignore */ } };
    wrap.append(buddy.say, buddy.el, x); document.body.appendChild(wrap);
  }
  function pop(ms) { if (!wrap || closed) return; wrap.classList.add('up'); clearTimeout(pop.t); pop.t = setTimeout(() => wrap.classList.remove('up'), ms); }

  addEventListener('mgt:answer', e => {
    if (!buddy || closed) return;
    pop(2200);
    if (e.detail.right) { buddy.act('hop', 750); buddy.speak(pick(['Nice!', 'You got it!', 'Big brain move.', 'Correct! Keep going.', 'Nailed it.']), 1800); }
    else { buddy.act('sad', 1250); buddy.speak(pick(['Not quite. Read the explanation, then keep going.', 'Close one! Check the explanation.', 'Oops. You\'ll get the next one.']), 2600); }
  });
  addEventListener('mgt:complete', () => { if (!buddy || closed) return; pop(2800); buddy.act('spin', 1050); setTimeout(() => buddy.act('cheer', 950), 300); buddy.speak('Lesson complete! Woohoo!', 2600); });
  addEventListener('mgt:win', () => { if (!buddy || closed) return; pop(2800); buddy.act('cheer', 950); buddy.act('hop', 750); buddy.speak(pick(['You did it!', 'Game over… and you won.', 'Champion move!']), 2600); });

  /* ---------- per-route setup: hero/buddy, tilt, reveals ---------- */
  let io = null, firstRoute = true, lastKind = '';
  function wipe() {
    const w = document.createElement('div'); w.className = 'wipe'; w.setAttribute('aria-hidden', 'true');
    document.body.appendChild(w); setTimeout(() => w.remove(), 900);
  }
  function kineticHeadings(observe) {
    $$('#view :is(.sec-head h2, .split h2, .cta-band h2, .m-cat-h h2, .chap h2, .close h2, .grow h2, .pick h2, .mo-h)').forEach(h => {
      if (h.children.length || h.classList.contains('kin')) return;
      if (h.getBoundingClientRect().top + scrollY < innerHeight) return;
      h.innerHTML = h.textContent.trim().split(/\s+/).map((wd, i) => `<span class="wm"><span class="wi" style="--wi:${i}">${wd}</span></span>`).join(' ');
      h.classList.add('kin'); observe(h);
    });
  }
  function onRoute() {
    const hash = location.hash.slice(1) || 'home', kind = /-(g?\d+)$/.test(hash) ? 'detail' : hash.replace(/-.*/, '');
    if (!firstRoute && !reduce && !lite() && kind !== 'detail' && kind !== lastKind) wipe();
    firstRoute = false; lastKind = kind;
    const isHome = !!$('#view .robo-slot');
    if (isHome) { mountHero(); if (wrap) wrap.classList.add('hidden'); }
    else { ensureBuddy(); if (wrap && !closed) { wrap.classList.remove('hidden'); } }

    $$('#view .ccard, #view .cat-tile, #view .lang-card, #view .aud-card').forEach(c => c.classList.add('tilt'));

    if (reduce || !('IntersectionObserver' in window)) return;
    if (io) io.disconnect();
    io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('rv-in'); if (en.target.classList.contains('kin')) en.target.classList.add('kin-in'); io.unobserve(en.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    kineticHeadings(h => io.observe(h));
    const vh = innerHeight, groups = new Map();
    $$('#view :is(.aud-card, .cat-tile, .steps li, .values article, .big-stats > div, .ccard, .lessons li, .catalog li, .faq details, .lang-card, .game-card, .roles .card, .plan, .plan-side .card, .drive-feature > *, .sec-head, .split > *, .chap-head p, .chap-list li, .mo, .duo-row, .gt, .grow-steps li, .stair-pics > div, .stair-note, .pick-btns, .close-row)').forEach(el => {
      if (el.closest('.rv')) return;
      const top = el.getBoundingClientRect().top + scrollY; if (top < vh) return; // measured from page top: the view scrolls up smoothly on route change
      const n = groups.get(el.parentNode) || 0; groups.set(el.parentNode, n + 1);
      el.style.setProperty('--rd', Math.min(n, 6) * 60 + 'ms'); el.classList.add('rv'); io.observe(el);
    });
  }
  addEventListener('mgt:route', onRoute);

  /* homepage extras: the large robot in the showcase, and the one moving picture */
  function homeExtras() {
    $$('#view .robo-art').forEach(a => { if (!a.firstChild) a.innerHTML = SVG.replace('<svg ', '<svg class="robo-svg" '); });
    const cell = $('#view .m-vid'), vid = cell && $('video', cell);
    if (!vid || reduce || lite()) return;          // slower devices and reduced motion keep the still frame
    const io2 = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { if (!vid.getAttribute('src')) vid.src = vid.dataset.src; vid.play().then(() => cell.classList.add('playing')).catch(() => {}); }
      else vid.pause();
    }), { threshold: .2 });
    io2.observe(cell);
  }
  addEventListener('mgt:route', homeExtras);
  document.addEventListener('click', e => {
    const t = e.target.closest && e.target.closest('[data-top]');
    if (t) { e.preventDefault(); scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }
  });
  addEventListener('mgt:picked', e => {
    if (hero && hero.el.isConnected) { hero.act('hop', 750); hero.speak('Nice! ' + e.detail.first + ' is a great first pick.', 3600); }
  });

  /* tilt + light, shared handler */
  if (!reduce) document.addEventListener('pointermove', e => {
    if (lite()) return;
    const c = e.target.closest && e.target.closest('.tilt'); if (!c) return;
    const b = c.getBoundingClientRect(), x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
    c.style.setProperty('--ry', ((x - .5) * 10).toFixed(2) + 'deg'); c.style.setProperty('--rx', ((.5 - y) * 8).toFixed(2) + 'deg');
    c.style.setProperty('--sx', (x * 100).toFixed(1) + '%'); c.style.setProperty('--sy', (y * 100).toFixed(1) + '%');
  }, { passive: true });

  onRoute(); homeExtras(); // app.js rendered the first view before this file loaded
})();
