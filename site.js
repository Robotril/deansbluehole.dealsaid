/* Dean's Blue Hole Safety and History — page behaviour */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Year */
  var yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();

  /* Hero title: split into letters that rise out of a mask */
  var h1 = $('.hero h1');
  if (h1 && !reduce) {
    var words = h1.textContent.trim().split(' '), i = 0;
    h1.innerHTML = words.map(function (w) {
      return '<span class="ln">' + w.split('').map(function (ch) {
        return '<span class="l" style="--i:' + (i++) + '">' + ch + '</span>';
      }).join('') + '</span>';
    }).join(' ');
  }

  /* Mobile menu */
  var menuBtn = $('.menu-btn'), links = $('#nav-links');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
    $$('a', links).forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.textContent = 'Menu'; });
    });
  }

  /* Entrances: once, as each part enters */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' });
  $$('.rv, .wipe').forEach(function (el) { io.observe(el); });

  /* Muted loop that plays only while in view */
  var vio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting && !reduce) { v.preload = 'auto'; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      else v.pause();
    });
  }, { threshold: 0.25 });
  $$('video[data-auto]').forEach(function (v) { vio.observe(v); });

  /* Scroll-linked: hero name settles, footer name grows in, 202 counts down */
  var hero = $('.hero'), heroName = h1, footName = $('#footName');
  var ticking = false;
  function onScroll() {
    ticking = false;
    var vh = innerHeight;
    if (heroName) {
      var p = Math.min(Math.max(scrollY / (hero.offsetHeight * 0.8), 0), 1);
      heroName.style.transform = 'scale(' + (1 - p * 0.07) + ')';
    }
    if (footName) {
      var r = footName.getBoundingClientRect();
      var q = Math.min(Math.max((vh - r.top) / (r.height + vh * 0.35), 0), 1);
      footName.style.transform = 'scale(' + (0.94 + q * 0.06) + ')';
    }
    stepOcean();
  }
  if (!reduce) addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* The depth figure counts down from 0 to 202 once */
  var dn = $('#depthNum');
  if (dn && !reduce) {
    dn.textContent = '0';
    var dio = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      dio.disconnect();
      var t0 = performance.now();
      (function tick(t) {
        var k = Math.min((t - t0) / 1800, 1), e = 1 - Math.pow(1 - k, 4);
        dn.textContent = Math.round(202 * e);
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    }, { threshold: 0.4 });
    dio.observe(dn);
  }

  /* Open water: the active rule steps down as you scroll */
  var ocean = $('#ocean'), items = $$('#oceanList li'), detail = $('#oceanDetail');
  var picL = $('.ocean-pics .pl'), picR = $('.ocean-pics .pr'), current = -1;
  function setOcean(n) {
    if (n === current) return; current = n;
    items.forEach(function (li, k) { li.classList.toggle('on', k === n); });
    detail.textContent = items[n].dataset.d;
    [[picL, items[n].dataset.l], [picR, items[n].dataset.r]].forEach(function (pair) {
      var img = pair[0]; if (!img) return;
      img.classList.remove('on');
      setTimeout(function () { img.src = pair[1]; img.onload = function () { img.classList.add('on'); }; if (img.complete) img.classList.add('on'); }, 180);
    });
  }
  function stepOcean() {
    if (!ocean) return;
    var r = ocean.getBoundingClientRect();
    var span = ocean.offsetHeight - innerHeight;
    var p = Math.min(Math.max(-r.top / span, 0), 0.9999);
    setOcean(Math.floor(p * items.length));
  }
  if (ocean) { setOcean(0); if (reduce) addEventListener('scroll', function () { requestAnimationFrame(stepOcean); }, { passive: true }); }
  onScroll();

  /* Compression pacer: 110 a minute, 30 then 2 breaths */
  var pacer = $('#pacer'), btn = $('#pacerBtn'), count = $('#pacerCount'), state = $('#pacerState'), cycleEl = $('#pacerCycle');
  var timer = null, n = 0, cycles = 0, ac = null;
  function click(hi) {
    if (!ac) return;
    var o = ac.createOscillator(), g = ac.createGain();
    o.frequency.value = hi ? 880 : 520; g.gain.value = 0.0001;
    o.connect(g); g.connect(ac.destination);
    var t = ac.currentTime; g.gain.exponentialRampToValueAtTime(0.18, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    o.start(t); o.stop(t + 0.1);
  }
  function beat() {
    n++;
    if (n <= 30) {
      count.textContent = n;
      pacer.classList.add('beat'); setTimeout(function () { pacer.classList.remove('beat'); }, 110);
      click(n === 30);
      if (n === 1) state.innerHTML = 'Push on every beat.<small>Hard and fast, 5 cm deep.</small>';
    } else if (n === 31) {
      pacer.classList.add('breathe'); count.textContent = '2';
      state.innerHTML = 'Give 2 rescue breaths.<small>Watch the chest rise.</small>';
    } else if (n >= 31 + 8) { /* about 4 seconds for the breaths */
      pacer.classList.remove('breathe'); n = 0; cycles++;
      cycleEl.textContent = cycles + (cycles === 1 ? ' cycle' : ' cycles') + ' done. Keep going until help takes over.';
    }
  }
  function stop() {
    clearInterval(timer); timer = null; n = 0;
    pacer.classList.remove('breathe');
    btn.textContent = 'Start the pacer'; btn.setAttribute('aria-pressed', 'false');
    count.textContent = '30';
    state.innerHTML = 'Practise the rhythm: 110 a minute.<small>Press start, then push on each beat.</small>';
  }
  if (btn) btn.addEventListener('click', function () {
    if (timer) return stop();
    try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); ac.resume(); } catch (e) { ac = null; }
    cycles = 0; cycleEl.textContent = '30 compressions, then 2 breaths';
    btn.textContent = 'Stop'; btn.setAttribute('aria-pressed', 'true');
    beat(); timer = setInterval(beat, 60000 / 110);
  });

  /* Lightbox for photographs and clips */
  var lb = $('#lb'), lbImg = $('#lbImg'), lbVid = $('#lbVid'), lbClose = $('#lbClose'), opener = null;
  function openLb(btnEl) {
    opener = btnEl;
    if (btnEl.dataset.video) {
      lbImg.hidden = true; lbVid.hidden = false; lbVid.src = btnEl.dataset.video;
      var p = lbVid.play(); if (p && p.catch) p.catch(function () {});
    } else {
      lbVid.hidden = true; lbImg.hidden = false; lbImg.src = btnEl.dataset.full;
      var im = $('img', btnEl); lbImg.alt = im ? im.alt : '';
    }
    lb.classList.add('open'); document.body.style.overflow = 'hidden'; lbClose.focus();
  }
  function closeLb() {
    lb.classList.remove('open'); lbVid.pause(); lbVid.removeAttribute('src'); lbVid.load();
    document.body.style.overflow = ''; if (opener) opener.focus();
  }
  $$('.g button').forEach(function (b) { b.addEventListener('click', function () { openLb(b); }); });
  lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLb();
    if (e.key === 'Tab' && lb.classList.contains('open')) { e.preventDefault(); lbClose.focus(); }
  });

  /* Essay word limits */
  var MAX = 250;
  $$('textarea[data-wordlimit]').forEach(function (ta) {
    var c = $('#' + ta.id + 'Count');
    function upd() {
      var m = ta.value.trim().match(/\S+/g), k = m ? m.length : 0, over = k > MAX;
      c.textContent = k + ' / ' + MAX + ' words';
      c.classList.toggle('over', over);
      ta.setCustomValidity(over ? 'Please keep your answer to ' + MAX + ' words or fewer.' : '');
    }
    ta.addEventListener('input', upd); upd();
  });
})();
