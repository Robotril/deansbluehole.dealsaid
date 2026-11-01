/* MGT — Deal's Aid learning site. Hash-routed single page app. */
(() => {
'use strict';

/* ---------- data ---------- */
const COURSES = window.MGT_COURSES || [];
const byId = Object.fromEntries(COURSES.map(c => [c.id, c]));
COURSES.forEach(c => {
  c.flat = [];
  c.units.forEach((u, ui) => u.lessons.forEach(l => { l.unit = u.t; l.ui = ui; c.flat.push(l); }));
  c.games = c.games || [];
});
const CATS = [
  { id: 'youth', name: 'Youth Courses', short: 'Youth', blurb: 'Elementary and primary-level Math and English. Friendly, interactive lessons build a strong foundation in numbers, reading and writing while keeping it fun.' },
  { id: 'wellness', name: 'Cooking & Diet', short: 'Cooking & Diet', blurb: 'Cook healthy meals that taste great and change your fitness and diet habits. Practical skills for a happier, healthier life.' },
  { id: 'money', name: 'Financial Courses', short: 'Financial', blurb: 'Money skills for personal and professional success. Complex ideas turned into practical knowledge you can use for better decisions.' },
  { id: 'creative', name: 'Creative & Life Skills', short: 'Life Skills', blurb: 'Life-saving CPR and first aid, storytelling, film and photography, information technology, the road, the garden, the hive and the henhouse.' },
  { id: 'lang', name: 'Languages', short: 'Languages', blurb: 'Spanish, French and American Sign Language. Speaking, reading and understanding, with culture and practical communication built in.' }
];
const catOf = id => CATS.find(c => c.id === id) || CATS[3];
const TOTAL_LESSONS = COURSES.reduce((n, c) => n + c.flat.length, 0);
const TOTAL_GAMES = COURSES.reduce((n, c) => n + c.games.length, 0);
const EMAIL = 'dealsaid54@gmail.com', PHONE = '+1 (242) 814-3630', TEL = '+12428143630';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');

const mem = {};
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? (k in mem ? mem[k] : d) : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } },
  set(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* memory only */ } }
};

async function hash(s) {
  try {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('mgt:' + s));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  } catch (e) { let h = 7; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0; return 'x' + h; }
}

/* ---------- auth (demo: stored in this browser) ---------- */
const auth = {
  user() {
    const e = store.get('mgt.session', null); if (!e) return null;
    const u = store.get('mgt.users', {})[e]; return u ? { ...u, email: e } : null;
  },
  async signup(name, email, pw) {
    email = email.trim().toLowerCase();
    const users = store.get('mgt.users', {});
    if (users[email]) throw new Error('An account with that email already exists. Log in instead.');
    users[email] = { name: name.trim(), pw: await hash(pw), joined: Date.now() };
    store.set('mgt.users', users); store.set('mgt.session', email);
  },
  async login(email, pw) {
    email = email.trim().toLowerCase();
    const u = store.get('mgt.users', {})[email];
    if (!u || u.pw !== await hash(pw)) throw new Error("That email and password don't match an account in this browser. Check them, or create a free account.");
    store.set('mgt.session', email);
  },
  logout() { store.set('mgt.session', null); }
};

/* ---------- progress ---------- */
const prog = {
  key() { const u = auth.user(); return 'mgt.progress.' + (u ? u.email : 'guest'); },
  get() { return store.get(this.key(), { done: {}, games: {}, last: null }); },
  save(p) { store.set(this.key(), p); },
  done(cid, n) { return !!this.get().done[cid + ':' + n]; },
  complete(cid, n) { const p = this.get(); p.done[cid + ':' + n] = true; this.save(p); },
  game(cid, n, v) { const p = this.get(); const k = cid + ':g' + n; if (v !== undefined) { p.games[k] = v; this.save(p); } return p.games[k]; },
  last(h) { const p = this.get(); if (h) { p.last = h; this.save(p); } return p.last; },
  count(c) { const p = this.get(); return c.flat.reduce((n, _, i) => n + (p.done[c.id + ':' + (i + 1)] ? 1 : 0), 0); },
  pct(c) { return c.flat.length ? this.count(c) / c.flat.length : 0; },
  reset() { this.save({ done: {}, games: {}, last: null }); }
};

/* ---------- routes ---------- */
const base = c => (c.public ? '' : 'c-') + c.id;
const lessonHref = (c, n) => '#' + base(c) + '-' + n;
const gameHref = (c, n) => '#' + base(c) + '-g' + n;
let pending = null;

function parse(h) {
  const m = h.match(/^(c-)?([a-z]+)(?:-(g?)(\d+))?$/);
  if (!m || !byId[m[2]]) return null;
  return { c: byId[m[2]], game: m[3] === 'g', n: m[4] ? +m[4] : 0 };
}

const PUBLIC = { home: viewHome, about: viewAbout, services: viewServices, contact: viewContact, volunteer: viewVolunteer, login: () => viewAuth('login'), signup: () => viewAuth('signup') };
const MEMBER = { members: viewMembers, languages: viewLanguages, account: viewAccount };

function route() {
  const h = decodeURIComponent(location.hash.slice(1)) || 'home';
  let v;
  if (PUBLIC[h]) v = PUBLIC[h]();
  else if (MEMBER[h]) v = auth.user() ? MEMBER[h]() : gate(h);
  else {
    const r = parse(h);
    if (!r) v = viewHome();
    else if (!r.c.public && !auth.user()) v = gate(h);
    else if (r.game) v = r.c.games[r.n - 1] ? viewGame(r.c, r.n) : viewCourse(r.c);
    else if (r.n) v = r.c.flat[r.n - 1] ? viewLesson(r.c, r.n) : viewCourse(r.c);
    else v = viewCourse(r.c);
  }
  render(v, h);
}

function gate(h) { pending = h; return viewAuth('login', 'Log in or create a free account to open Premium Learning.'); }

let cleanup = [];
function render(v, h) {
  cleanup.forEach(f => f()); cleanup = [];
  document.body.dataset.area = v.area || 'public';
  $('#site-header').innerHTML = header(v.area || 'public', h);
  const main = $('#view');
  main.innerHTML = v.html;
  main.classList.remove('enter'); void main.offsetWidth; main.classList.add('enter');
  document.title = (v.title ? v.title + ' · ' : '') + 'MGT Learning';
  window.scrollTo(0, 0);
  $$('canvas.topo', main).forEach(drawTopoCard);
  v.mount && v.mount(main);
  bindHeader();
}

/* ---------- header / footer ---------- */
function header(area, h) {
  const u = auth.user();
  const on = k => (h === k || h.startsWith(k + '-')) ? ' aria-current="page"' : '';
  const logo = `<a class="logo" href="${area === 'member' ? '#members' : '#home'}" aria-label="MGT home">${logoMark()}<span class="logo-word">MGT</span>${area === 'member' ? '<span class="logo-tag">Premium</span>' : ''}</a>`;
  if (area === 'member') {
    const menu = CATS.map(cat => `<div class="mm-col"><p class="mm-h">${cat.short}</p>${COURSES.filter(c => c.cat === cat.id).map(c => `<a href="#${base(c)}">${c.title}</a>`).join('')}</div>`).join('');
    return `<div class="bar">${logo}
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav"><span></span><span></span><span class="sr">Menu</span></button>
      <nav id="nav" class="nav">
        <a href="#members"${on('members')}>Learning home</a>
        <details class="mega"><summary>All courses</summary><div class="mega-panel">${menu}</div></details>
        <a href="#languages"${on('languages')}>Languages</a>
        <a href="#account"${on('account')}>My progress</a>
        <span class="nav-sep"></span>
        <a href="#home" class="quiet">Public site</a>
        <button class="btn ghost sm" data-logout>Log out</button>
      </nav></div>`;
  }
  return `<div class="bar">${logo}
    <button class="nav-toggle" aria-expanded="false" aria-controls="nav"><span></span><span></span><span class="sr">Menu</span></button>
    <nav id="nav" class="nav">
      <a href="#home"${on('home')}>Home</a>
      <a href="#about"${on('about')}>About</a>
      <a href="#services"${on('services')}>Services</a>
      <a href="#driving"${on('driving')}>Driving Test Review</a>
      <a href="#volunteer"${on('volunteer')}>Volunteer</a>
      <a href="#contact"${on('contact')}>Contact</a>
      <a href="../index.html" class="quiet">Dean's Blue Hole</a>
      <span class="nav-sep"></span>
      ${u ? `<a class="btn sm" href="#members">Member area</a>` : `<a href="#login"${on('login')}>Log in</a><a class="btn sm" href="#signup">Join free</a>`}
    </nav></div>`;
}
function bindHeader() {
  const t = $('.nav-toggle'), nav = $('#nav');
  t && (t.onclick = () => { const o = t.getAttribute('aria-expanded') === 'true'; t.setAttribute('aria-expanded', !o); nav.classList.toggle('open', !o); });
  $$('[data-logout]').forEach(b => b.onclick = () => { auth.logout(); location.hash = '#home'; });
  $$('.mega a').forEach(a => a.addEventListener('click', () => a.closest('details').open = false));
}
function logoMark() {
  return `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M3 30c6-9 10-13 15-13s8 6 12 6 5-3 7-5" /><path d="M3 23c5-8 9-12 14-12s9 6 13 6 5-3 7-5" opacity=".55"/><path d="M3 36c7-6 11-9 16-9s7 4 11 4 5-2 7-3" opacity=".3"/></svg>`;
}
function footer() {
  return `<footer class="foot"><div class="wrap foot-grid">
    <div><a class="logo" href="#home">${logoMark()}<span class="logo-word">MGT</span></a>
    <p class="foot-note">Grow your mental landscape. Free courses for all ages, built by the Deal's Aid non-profit organization.</p></div>
    <div><p class="foot-h">Explore</p><a href="#about">About</a><a href="#services">Services</a><a href="#driving">Driving Test Review</a><a href="#members">Premium Learning</a></div>
    <div><p class="foot-h">Get involved</p><a href="#volunteer">Volunteer</a><a href="#contact">Contact</a><a href="#signup">Create a free account</a><a href="../index.html">Dean's Blue Hole site</a></div>
    <div><p class="foot-h">Reach us</p><a href="mailto:${EMAIL}">${EMAIL}</a><a href="tel:${TEL}">${PHONE}</a><span class="foot-small">Text or call</span></div>
  </div><div class="wrap foot-base"><span>© ${new Date().getFullYear()} Deal's Aid · MGT</span><span>Preview build: accounts and progress are saved in this browser only.</span></div></footer>`;
}

/* ---------- shared bits ---------- */
function ring(p, size = 40) {
  const r = size / 2 - 4, C = 2 * Math.PI * r;
  return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${Math.round(p * 100)}% complete"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-bg"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-fg" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p)}" style="--c:${C}"/><text x="50%" y="50%" dy=".35em">${Math.round(p * 100)}</text></svg>`;
}
function courseCard(c, opts = {}) {
  const p = prog.pct(c), cat = catOf(c.cat);
  return `<a class="ccard" href="#${base(c)}" style="--cc:var(--c-${c.cat})">
    <canvas class="topo" data-seed="${c.id}" aria-hidden="true"></canvas>
    <div class="ccard-body">
      <span class="chip">${c.public ? 'Open to everyone' : cat.short}</span>
      <h3>${c.title}</h3>
      <p>${c.tag}</p>
      <div class="ccard-meta"><span>${plural(c.flat.length, 'lesson')} · ${plural(c.games.length, 'game')}</span>${opts.noRing ? '' : ring(p, 38)}</div>
    </div></a>`;
}
function crumbs(list) { return `<nav class="crumbs" aria-label="Breadcrumb">${list.map(([t, h]) => h ? `<a href="${h}">${t}</a>` : `<span aria-current="page">${t}</span>`).join('<span class="sep">/</span>')}</nav>`; }
const FORMSPREE = 'https://formspree.io/f/mwllojgb';
function msgForm(kind) {
  const vol = kind === 'volunteer';
  return `<form class="card form" id="msg-form" action="${FORMSPREE}" method="POST" novalidate>
    <h3>${vol ? 'Tell us you want to help' : 'Send us a message'}</h3>
    <div class="field"><label for="mf-name">Your name</label><input id="mf-name" name="name" autocomplete="name" required></div>
    <div class="field"><label for="mf-email">Your email</label><input id="mf-email" name="email" type="email" autocomplete="email" required></div>
    ${vol ? `<div class="field"><label for="mf-phone">Phone (optional)</label><input id="mf-phone" name="phone" type="tel" autocomplete="tel"></div>
    <fieldset class="field"><legend>I'm interested in</legend><div class="checks">
      <label><input type="checkbox" name="role" value="Library work" checked> Library work</label>
      <label><input type="checkbox" name="role" value="Tutoring"> Tutoring</label>
      <label><input type="checkbox" name="role" value="Teaching a course"> Teaching a course</label></div></fieldset>` : ''}
    <div class="field"><label for="mf-msg">${vol ? 'When are you free, and what do you enjoy?' : 'Message'}</label><textarea id="mf-msg" name="message" rows="5" required></textarea></div>
    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">
    <p class="form-err" role="alert" hidden></p>
    <button class="btn" type="submit">${vol ? 'Send my application' : 'Send message'}</button>
    <div class="ready" role="status" hidden></div>
  </form>`;
}
function mountMsgForm(el, kind) {
  const f = $('#msg-form', el); if (!f) return;
  const vol = kind === 'volunteer';
  f.onsubmit = async e => {
    e.preventDefault();
    const d = new FormData(f), err = $('.form-err', f), btn = $('button[type="submit"]', f);
    const name = (d.get('name') || '').trim(), email = (d.get('email') || '').trim(), msg = (d.get('message') || '').trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) { err.hidden = false; err.textContent = 'Fill in your name, a valid email and a message, then try again.'; return; }
    err.hidden = true;
    const roles = d.getAll('role'); d.delete('role');
    if (vol) d.set('interested in', roles.join(', ') || 'Not specified');
    d.set('form', vol ? 'Volunteer (dealsaid.org/learn)' : 'Contact (dealsaid.org/learn)');
    d.set('_subject', vol ? 'New Volunteer Application' : 'New Contact Message');
    btn.disabled = true; const label = btn.textContent; btn.textContent = 'Sending…';
    try {
      const r = await fetch(FORMSPREE, { method: 'POST', body: d, headers: { Accept: 'application/json' } });
      if (!r.ok) { const j = await r.json().catch(() => ({})); throw new Error((j.errors || []).map(x => x.message).join(' ') || 'The form service returned an error.'); }
      $$('.field, button[type="submit"]', f).forEach(x => x.hidden = true);
      const ready = $('.ready', f); ready.hidden = false;
      ready.innerHTML = `<p><strong>Thanks, ${esc(name.split(' ')[0])}. Your ${vol ? 'application' : 'message'} was sent.</strong> We'll reply to ${esc(email)}.</p>`;
    } catch (x) {
      btn.disabled = false; btn.textContent = label;
      err.hidden = false; err.textContent = `Your ${vol ? 'application' : 'message'} didn't send. ${x.message || ''} Check your connection and try again, or email ${EMAIL}.`;
    }
  };
}

/* ================= PUBLIC VIEWS ================= */
function viewHome() {
  const tick = COURSES.map(c => `<span><b>${c.title}</b> ${c.tag}</span>`).join('');
  const drive = byId.driving;
  return {
    area: 'public', title: 'Grow your mental landscape',
    html: `
    <section class="hero band">
      <canvas id="hero-topo" aria-hidden="true"></canvas>
      <div class="wrap hero-in">
        <p class="eyebrow rise" style="--d:0">Free learning from the Deal's Aid non-profit</p>
        <h1 class="hero-h"><span class="rise" style="--d:1">Grow your</span> <span class="rise" style="--d:2">mental</span> <span class="rise hl" style="--d:3">landscape.</span></h1>
        <p class="hero-p rise" style="--d:4">Welcome, fellow learners. Reading, writing and math, cooking and money, film, first aid, languages and more. Courses for kids, teens and adults, and every one of them is free.</p>
        <div class="row rise" style="--d:5"><a class="btn big" href="#signup">Create a free account</a><a class="btn ghost big on-dark" href="#driving">Try Driving Test Review, no sign-up</a></div>
        <dl class="hero-stats rise" style="--d:6"><div><dt>Courses</dt><dd>${COURSES.length}</dd></div><div><dt>Lessons</dt><dd>${TOTAL_LESSONS}</dd></div><div><dt>Games &amp; quizzes</dt><dd>${TOTAL_GAMES + TOTAL_LESSONS}</dd></div><div><dt>Cost</dt><dd>$0</dd></div></dl>
      </div>
      <p class="hero-hint" aria-hidden="true">Move across the map. The landscape rises to meet you.</p>
    </section>
    <div class="ticker" aria-label="Course list"><div class="ticker-track">${tick}${tick}</div></div>

    <section class="wrap sec split">
      <div><p class="eyebrow">Start your educational journey today</p>
      <h2>Learning that fits every age, and costs nothing.</h2></div>
      <div class="prose"><p>Investing your time in MGT builds real skills. Join and you can master reading, writing and mathematics. Our interactive, AI-assisted programs are written for children, teenagers and adults, so success is within reach for everyone.</p>
      <p>Beyond the core subjects there are courses on cooking, money, health, technology and more. Every lesson ends with a quick check, and every course has games to practise with.</p>
      <a class="link-arrow" href="#services">See every course on the Services page</a></div>
    </section>

    <section class="wrap sec">
      <div class="aud">
        <article class="aud-card"><span class="aud-n">5–11</span><h3>Kids</h3><p>Elementary and primary math, nouns and verbs, sentences and paragraphs. Short lessons and games that make practice feel like play.</p></article>
        <article class="aud-card"><span class="aud-n">12–18</span><h3>Teens</h3><p>Essays, storytelling, driving test review, first aid, IT and a first look at investing and small business.</p></article>
        <article class="aud-card"><span class="aud-n">18+</span><h3>Adults</h3><p>Diet and fitness, cooking, investing, languages, gardening, beekeeping and chickens. Learn for your family, your work or yourself.</p></article>
      </div>
    </section>

    <section class="band-soft"><div class="wrap sec">
      <div class="sec-head"><p class="eyebrow">Premium Learning, free with an account</p><h2>Five areas, ${COURSES.length} courses</h2></div>
      <div class="cat-grid">${CATS.map(cat => { const cs = COURSES.filter(c => c.cat === cat.id); return `<a class="cat-tile" href="#services" style="--cc:var(--c-${cat.id})"><span class="cat-count">${cs.length}</span><h3>${cat.name}</h3><p>${cs.map(c => c.title).join(' · ')}</p></a>`; }).join('')}</div>
    </div></section>

    <section class="wrap sec drive-feature">
      <div class="drive-art" aria-hidden="true">${signSVG('stop')}${signSVG('giveway')}${signSVG('roundabout')}</div>
      <div><p class="eyebrow">Open to everyone</p><h2>Driver's Test Review</h2>
      <p class="lead">Learn the basics of driving, road conduct and procedures in The Bahamas. Keep left, master the roundabout, know your signs. ${drive ? plural(drive.flat.length, 'lesson') : ''}, quizzes after every lesson and a road-sign game. No account needed.</p>
      <a class="btn" href="#driving">Start the review</a></div>
    </section>

    <section class="wrap sec">
      <div class="sec-head"><p class="eyebrow">How it works</p><h2>From sign-up to mentor in four steps</h2></div>
      <ol class="steps">
        <li><h3>Create a free account</h3><p>Just a name, an email and a password. No payment details, ever.</p></li>
        <li><h3>Pick a course</h3><p>Start anywhere. Your progress is saved lesson by lesson.</p></li>
        <li><h3>Learn, check, play</h3><p>Read the lesson, answer the quick check, then lock it in with a game.</p></li>
        <li><h3>Teach someone</h3><p>Study alone or as a group, then use what you learned to mentor the youth around you.</p></li>
      </ol>
    </section>

    <section class="band"><div class="wrap sec split cta-band">
      <div><h2>Let's connect.</h2><p class="on-dark-p">Need help with the website or a course? We're here every step of the way.</p></div>
      <div class="contact-mini"><a href="mailto:${EMAIL}"><span>Email</span>${EMAIL}</a><a href="tel:${TEL}"><span>Text or call</span>${PHONE}</a><a href="#volunteer"><span>Students</span>Volunteer with Deal's Aid</a></div>
    </div></section>
    ${footer()}`,
    mount: el => heroTopo($('#hero-topo', el), $('.hero', el))
  };
}

function viewAbout() {
  return {
    area: 'public', title: 'About',
    html: `
    <section class="page-head band"><canvas class="topo topo-head" data-seed="about-mgt" aria-hidden="true"></canvas><div class="wrap">
      <p class="eyebrow">About MGT</p><h1>Education for as many people as possible.</h1>
      <p class="lead on-dark-p">MGT was created by the Deal's Aid non-profit organization. Our mission is simple: bring free, engaging education to anyone who wants it.</p>
    </div></section>
    <section class="wrap sec split">
      <div><h2>Welcome to MGT</h2></div>
      <div class="prose">
        <p>Embark on a journey of learning and discovery with our AI-assisted courses. Whether you're a child, a teen or an adult, MGT is designed to help you master reading, writing, mathematics and much more.</p>
        <p>Unlock your potential and watch your skills grow. Every course is broken into short lessons, each with a quick check at the end and games to practise with, so learning stays engaging and personal.</p>
        <p>Join us and enjoy education like never before.</p>
      </div>
    </section>
    <section class="band-soft"><div class="wrap sec">
      <div class="sec-head"><p class="eyebrow">What we believe</p><h2>Three ideas behind every course</h2></div>
      <div class="values">
        <article><span class="v-n">01</span><h3>Free means free</h3><p>Premium Learning has no cost and no catch. You need an account so your progress is saved, nothing more.</p></article>
        <article><span class="v-n">02</span><h3>Useful first</h3><p>Courses teach things you can use this week: a budget, a sauce, a resume-ready essay, CPR, a garden bed.</p></article>
        <article><span class="v-n">03</span><h3>Learn it, then pass it on</h3><p>We encourage learners to study in groups, teach their peers and mentor younger students.</p></article>
      </div>
    </div></section>
    <section class="wrap sec">
      <dl class="big-stats"><div><dt>Courses</dt><dd>${COURSES.length}</dd></div><div><dt>Lessons</dt><dd>${TOTAL_LESSONS}</dd></div><div><dt>Games</dt><dd>${TOTAL_GAMES}</dd></div><div><dt>Ages</dt><dd>5 to adult</dd></div></dl>
    </section>
    <section class="wrap sec split">
      <div><p class="eyebrow">Deal's Aid</p><h2>A non-profit that shows up.</h2></div>
      <div class="prose"><p>Beyond this website, Deal's Aid runs volunteer programs where students help in libraries and tutor their peers. If you'd like to get involved, we'd love to hear from you.</p>
      <div class="row"><a class="btn" href="#volunteer">Volunteer</a><a class="btn ghost" href="#contact">Contact us</a></div></div>
    </section>
    ${footer()}`
  };
}

function viewServices() {
  return {
    area: 'public', title: 'Services',
    html: `
    <section class="page-head band"><canvas class="topo topo-head" data-seed="services-universe" aria-hidden="true"></canvas><div class="wrap">
      <p class="eyebrow">Services</p><h1>Work with MGT and discover a new universe of information.</h1>
      <p class="lead on-dark-p">Learn to read, write and work with numbers. Then keep going with cooking, money, health, technology and more. Programs for kids, teens and adults.</p>
    </div></section>
    <section class="wrap sec plan-sec">
      <div class="plan card">
        <p class="eyebrow">Membership</p>
        <h2>Premium Learning <span class="price">Free</span></h2>
        <p>As a member you get every premium course to improve your education, lifestyle and future. Study on your own or as a group. Teach courses to your peers and use them to mentor the youth around you.</p>
        <ul class="ticks"><li>Access to all ${COURSES.length} premium courses</li><li>Quizzes after every lesson, games in every course</li><li>Progress saved as you go</li><li>Cancel anytime</li><li>No costs, ever</li></ul>
        <a class="btn big" href="${auth.user() ? '#members' : '#signup'}">${auth.user() ? 'Go to Premium Learning' : 'Sign up free'}</a>
      </div>
      <div class="plan-side">
        <div class="card soft"><p class="eyebrow">No account needed</p><h3>Driver's Test Review</h3><p>Open to everyone. Road rules for The Bahamas, quizzes and a sign game.</p><a class="link-arrow" href="#driving">Start now</a></div>
        <div class="card soft"><p class="eyebrow">For groups</p><h3>Teach a course</h3><p>Use any course to run a study group or mentor younger students. Every lesson is short enough to cover in one sitting.</p></div>
      </div>
    </section>
    <section class="wrap sec">
      <div class="sec-head"><p class="eyebrow">Courses included in Premium</p><h2>The full catalogue</h2></div>
      ${CATS.map(cat => `<div class="cat-block" style="--cc:var(--c-${cat.id})"><div class="cat-block-h"><h3>${cat.name}</h3><p>${cat.blurb}</p></div>
        <ul class="catalog">${COURSES.filter(c => c.cat === cat.id).map(c => `<li><a href="#${base(c)}"><b>${c.title}</b><span>${c.tag}</span><em>${plural(c.flat.length, 'lesson')}</em></a></li>`).join('')}</ul></div>`).join('')}
    </section>
    <section class="band-soft"><div class="wrap sec">
      <div class="sec-head"><h2>Questions</h2></div>
      <div class="faq">
        <details><summary>Is Premium Learning really free?</summary><p>Yes. There is no charge, no trial period and no card required.</p></details>
        <details><summary>Why do I need an account?</summary><p>Your account saves which lessons you've finished and your best game scores, so you can pick up where you left off.</p></details>
        <details><summary>Who are the courses for?</summary><p>Math Basics and English Basics are written for elementary and primary students. Most other courses suit teens and adults.</p></details>
        <details><summary>Can I use the courses to teach others?</summary><p>Please do. Run a study group, tutor a sibling or mentor students at your school.</p></details>
        <details><summary>Do the health and driving courses certify me?</summary><p>No. They're study aids. Take a certified first aid course and the official driving test to qualify.</p></details>
      </div>
    </div></section>
    ${footer()}`
  };
}

function viewContact() {
  return {
    area: 'public', title: 'Contact',
    html: `
    <section class="wrap sec split contact">
      <div><p class="eyebrow">Contact</p><h1>Get in touch.</h1>
      <p class="lead">If you need help with the website or a course, reach out. We're here to help you every step of the way.</p>
      <div class="contact-cards">
        <a class="card contact-card" href="mailto:${EMAIL}"><span class="eyebrow">Email</span><strong>${EMAIL}</strong></a>
        <a class="card contact-card" href="tel:${TEL}"><span class="eyebrow">Text or call</span><strong>${PHONE}</strong></a>
      </div></div>
      ${msgForm('contact')}
    </section>
    ${footer()}`,
    mount: el => mountMsgForm(el, 'contact')
  };
}

function viewVolunteer() {
  return {
    area: 'public', title: 'Volunteer',
    html: `
    <section class="page-head band"><canvas class="topo topo-head" data-seed="volunteer-hands" aria-hidden="true"></canvas><div class="wrap">
      <p class="eyebrow">Volunteer</p><h1>Your time can change lives.</h1>
      <p class="lead on-dark-p">Volunteering with the Deal's Aid charity lets students make a real impact in their community while building skills that last.</p>
    </div></section>
    <section class="wrap sec split">
      <div class="roles">
        <article class="card"><p class="eyebrow">Role</p><h3>Library work</h3><p>Help create a welcoming space that grows a love of reading and learning in children and teens.</p></article>
        <article class="card"><p class="eyebrow">Role</p><h3>Tutoring</h3><p>Share what you know and support your peers. Watch their confidence and understanding grow.</p></article>
        <article class="card"><p class="eyebrow">What you gain</p><ul class="ticks"><li>Experience that stands out on college applications</li><li>Connections and friendships that last</li><li>Real skills in communication and teaching</li></ul></article>
      </div>
      ${msgForm('volunteer')}
    </section>
    ${footer()}`,
    mount: el => mountMsgForm(el, 'volunteer')
  };
}

function viewAuth(mode, notice) {
  const up = mode === 'signup';
  if (auth.user() && !notice) return viewMembers();
  return {
    area: 'public', title: up ? 'Join free' : 'Log in',
    html: `
    <section class="auth">
      <div class="auth-art band"><canvas class="topo topo-head" data-seed="auth-${mode}" aria-hidden="true"></canvas>
        <div class="auth-copy"><p class="eyebrow">Premium Learning</p><h2>${up ? 'Free. Every course. No card.' : 'Welcome back.'}</h2>
        <ul class="ticks on-dark-p"><li>${COURSES.length} courses and ${TOTAL_LESSONS} lessons</li><li>A quiz after every lesson</li><li>Games in every course</li><li>Progress saved as you go</li></ul></div></div>
      <div class="auth-form">
        <form class="form" id="auth-form" novalidate>
          ${notice ? `<p class="notice">${notice}</p>` : ''}
          <h1>${up ? 'Create your free account' : 'Log in'}</h1>
          ${up ? `<div class="field"><label for="af-name">Your name</label><input id="af-name" name="name" autocomplete="name" required></div>` : ''}
          <div class="field"><label for="af-email">Email</label><input id="af-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="af-pw">Password</label><input id="af-pw" name="pw" type="password" autocomplete="${up ? 'new-password' : 'current-password'}" required minlength="6"><small>${up ? 'At least 6 characters.' : ''}</small></div>
          <p class="form-err" role="alert" hidden></p>
          <button class="btn big" type="submit">${up ? 'Create account' : 'Log in'}</button>
          <p class="switch">${up ? 'Already a member? <a href="#login">Log in</a>' : 'New here? <a href="#signup">Create a free account</a>'}</p>
          <p class="demo-note">Preview build: accounts are saved in this browser only, not on a server.</p>
        </form>
      </div>
    </section>`,
    mount: el => {
      const f = $('#auth-form', el), err = $('.form-err', f);
      f.onsubmit = async e => {
        e.preventDefault();
        const d = new FormData(f);
        const name = (d.get('name') || '').trim(), email = (d.get('email') || '').trim(), pw = d.get('pw') || '';
        const fail = m => { err.hidden = false; err.textContent = m; };
        if (up && !name) return fail('Enter your name.');
        if (!/^\S+@\S+\.\S+$/.test(email)) return fail('Enter a valid email address, like name@example.com.');
        if (pw.length < 6) return fail('Your password needs at least 6 characters.');
        try { up ? await auth.signup(name, email, pw) : await auth.login(email, pw); }
        catch (x) { return fail(x.message); }
        const to = pending || 'members'; pending = null;
        if (location.hash.slice(1) === to) route(); else location.hash = '#' + to;
      };
    }
  };
}

/* ================= MEMBER VIEWS ================= */
function viewMembers() {
  const u = auth.user();
  const started = COURSES.filter(c => prog.count(c) > 0);
  const lessonsDone = COURSES.reduce((n, c) => n + prog.count(c), 0);
  const last = prog.last(); const lr = last && parse(last);
  let cont = '';
  if (lr && lr.n && !lr.game) {
    const l = lr.c.flat[lr.n - 1];
    const next = prog.done(lr.c.id, lr.n) && lr.c.flat[lr.n] ? lr.n + 1 : lr.n;
    const nl = lr.c.flat[next - 1];
    cont = `<a class="continue" href="${lessonHref(lr.c, next)}" style="--cc:var(--c-${lr.c.cat})"><span class="eyebrow">Pick up where you left off</span><strong>${nl.t}</strong><span>${lr.c.title} · Lesson ${next} of ${lr.c.flat.length}</span>${ring(prog.pct(lr.c), 52)}</a>`;
    void l;
  } else {
    cont = `<a class="continue" href="#c-math" style="--cc:var(--c-youth)"><span class="eyebrow">Not sure where to start?</span><strong>Try Math Basics</strong><span>Or pick any course below. Start anywhere.</span></a>`;
  }
  return {
    area: 'member', title: 'Premium Learning',
    html: `
    <section class="m-hero band"><canvas class="topo topo-head" data-seed="premium-${u.email}" aria-hidden="true"></canvas>
      <div class="wrap m-hero-in">
        <div><p class="eyebrow">Welcome to Premium Learning</p><h1>Hi ${esc(u.name.split(' ')[0])}. What will you grow today?</h1>
        <dl class="hero-stats"><div><dt>Courses started</dt><dd>${started.length}<small>/${COURSES.length}</small></dd></div><div><dt>Lessons done</dt><dd>${lessonsDone}<small>/${TOTAL_LESSONS}</small></dd></div></dl></div>
        ${cont}
      </div>
    </section>
    <div class="wrap filters" role="toolbar" aria-label="Filter courses">
      <button class="fchip" aria-pressed="true" data-f="all">All courses</button>
      ${CATS.map(c => `<button class="fchip" aria-pressed="false" data-f="${c.id}" style="--cc:var(--c-${c.id})">${c.short}</button>`).join('')}
    </div>
    <div class="wrap">
    ${CATS.map(cat => `<section class="m-cat sec-tight" data-cat="${cat.id}" style="--cc:var(--c-${cat.id})">
      <div class="m-cat-h"><h2>${cat.name}</h2><p>${cat.blurb}</p>${cat.id === 'lang' ? '<a class="link-arrow" href="#languages">Explore languages</a>' : ''}</div>
      <div class="cgrid">${COURSES.filter(c => c.cat === cat.id).map(c => courseCard(c)).join('')}</div>
    </section>`).join('')}
    </div>
    ${footer()}`,
    mount: el => {
      $$('.fchip', el).forEach(b => b.onclick = () => {
        $$('.fchip', el).forEach(x => x.setAttribute('aria-pressed', x === b));
        $$('.m-cat', el).forEach(s => s.hidden = b.dataset.f !== 'all' && s.dataset.cat !== b.dataset.f);
      });
    }
  };
}

function viewLanguages() {
  const langs = COURSES.filter(c => c.cat === 'lang');
  return {
    area: 'member', title: 'Explore languages',
    html: `
    <section class="page-head band" style="--cc:var(--c-lang)"><canvas class="topo topo-head" data-seed="languages" aria-hidden="true"></canvas><div class="wrap">
      ${crumbs([['Learning home', '#members'], ['Languages']])}
      <p class="eyebrow">Explore foreign languages</p><h1>Hola. Bonjour. <span class="asl-wave">HELLO.</span></h1>
      <p class="lead on-dark-p">Spanish, French and American Sign Language. Build speaking, reading and understanding skills, with cultural context and practical phrases you'll use on day one.</p>
    </div></section>
    <section class="wrap sec">
      <div class="lang-grid">${langs.map(c => `<a class="lang-card" href="#${base(c)}" style="--cc:var(--c-lang)">
        <span class="lang-hello">${c.hello || ''}</span><h2>${c.title}</h2><p>${c.blurb}</p>
        <div class="ccard-meta"><span>${plural(c.flat.length, 'lesson')} · ${plural(c.games.length, 'game')}</span>${ring(prog.pct(c), 44)}</div></a>`).join('')}</div>
    </section>
    <section class="wrap sec split">
      <div><h2>How to learn a language here</h2></div>
      <ol class="steps compact"><li><h3>Read a lesson aloud</h3><p>Say every example out loud, or sign it in a mirror for ASL.</p></li><li><h3>Pass the quick check</h3><p>Each lesson ends with questions on what you just saw.</p></li><li><h3>Drill with flashcards</h3><p>Flip cards until you can mark them all as known.</p></li><li><h3>Find a partner</h3><p>Practise with a friend. Teaching a phrase is the fastest way to keep it.</p></li></ol>
    </section>
    ${footer()}`
  };
}

function viewAccount() {
  const u = auth.user();
  const rows = COURSES.map(c => { const n = prog.count(c); return `<li style="--cc:var(--c-${c.cat})"><a href="#${base(c)}">${c.title}</a><div class="bar-track"><span style="width:${prog.pct(c) * 100}%"></span></div><span class="mono">${n}/${c.flat.length}</span></li>`; }).join('');
  return {
    area: 'member', title: 'My progress',
    html: `
    <section class="wrap sec">
      ${crumbs([['Learning home', '#members'], ['My progress']])}
      <div class="acct-head"><div class="avatar" aria-hidden="true">${esc(u.name.trim()[0] || '?').toUpperCase()}</div><div><h1>${esc(u.name)}</h1><p class="muted">${esc(u.email)} · Member since ${new Date(u.joined).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</p></div></div>
      <div class="card"><h2>Course progress</h2><ul class="prog-list">${rows}</ul></div>
      <div class="card danger-zone"><h2>Start over</h2><p>Clear every finished lesson and game score on this account.</p>
        <button class="btn ghost" data-reset>Reset my progress</button>
        <div class="confirm" hidden><p><strong>Reset all progress?</strong> This can't be undone.</p><div class="row"><button class="btn danger" data-yes>Yes, reset</button><button class="btn ghost" data-no>Keep my progress</button></div></div>
      </div>
    </section>
    ${footer()}`,
    mount: el => {
      const c = $('.confirm', el);
      $('[data-reset]', el).onclick = () => c.hidden = false;
      $('[data-no]', el).onclick = () => c.hidden = true;
      $('[data-yes]', el).onclick = () => { prog.reset(); route(); };
    }
  };
}

/* ---------- course homepage ---------- */
function viewCourse(c) {
  const n = prog.count(c), total = c.flat.length, p = n / total;
  const firstOpen = c.flat.findIndex((_, i) => !prog.done(c.id, i + 1)) + 1;
  const ctaN = firstOpen || 1;
  const area = c.public && !auth.user() ? 'public' : 'member';
  let idx = 0;
  const units = c.units.map((u, ui) => `<section class="unit"><h3><span class="unit-n">Unit ${ui + 1}</span>${u.t}</h3><ol class="lessons">${u.lessons.map(l => { idx++; const d = prog.done(c.id, idx); return `<li class="${d ? 'is-done' : ''}"><a href="${lessonHref(c, idx)}"><span class="ln">${d ? '<svg viewBox="0 0 20 20" aria-label="Done"><path d="M5 10.5l3 3 7-7"/></svg>' : idx}</span><span class="lt"><b>${l.t}</b><span>${l.s}</span></span><span class="lq">${l.q && l.q.length ? plural(l.q.length, 'question') : 'Reading'}</span></a></li>`; }).join('')}</ol></section>`).join('');
  const games = c.games.map((g, i) => { const best = prog.game(c.id, i + 1); return `<a class="game-card" href="${gameHref(c, i + 1)}"><span class="g-type">${GAME_NAMES[g.type]}</span><b>${g.t}</b><span>${g.d || ''}</span>${best ? `<span class="g-best">Played · ${esc(best)}</span>` : ''}</a>`; }).join('');
  return {
    area, title: c.title,
    html: `
    <section class="course-head band" style="--cc:var(--c-${c.cat})"><canvas class="topo topo-head" data-seed="${c.id}" aria-hidden="true"></canvas>
      <div class="wrap course-head-in">
        <div>${crumbs(c.public && !auth.user() ? [['Home', '#home'], [c.title]] : [['Learning home', '#members'], [catOf(c.cat).name, '#members'], [c.title]])}
        <span class="chip">${c.public ? 'Open to everyone' : catOf(c.cat).name}</span>
        <h1>${c.title}</h1><p class="course-tag">${c.tag}</p><p class="lead on-dark-p">${c.blurb}</p>
        <div class="row"><a class="btn big" href="${lessonHref(c, ctaN)}">${n === 0 ? 'Start course' : n === total ? 'Review from lesson 1' : 'Continue: lesson ' + ctaN}</a>${c.games.length ? `<a class="btn ghost big on-dark" href="${gameHref(c, 1)}">Play ${c.games[0].t}</a>` : ''}</div></div>
        <div class="course-stats">${ring(p, 120)}<dl><div><dt>Lessons</dt><dd>${total}</dd></div><div><dt>Games</dt><dd>${c.games.length}</dd></div><div><dt>For</dt><dd>${c.ages}</dd></div></dl></div>
      </div>
    </section>
    ${n === total ? `<div class="wrap"><div class="finished" style="--cc:var(--c-${c.cat})"><strong>Course complete.</strong> You finished every lesson in ${c.title}. Teach one lesson to a friend this week to lock it in.</div></div>` : ''}
    ${c.public && !auth.user() ? `<div class="wrap"><p class="notice">You're studying as a guest. Progress is kept on this device. <a href="#signup">Create a free account</a> to unlock all ${COURSES.length} courses.</p></div>` : ''}
    <div class="wrap sec course-body">
      <div class="units">${units}</div>
      <aside class="course-side">
        ${games ? `<h2 class="side-h">Games</h2><div class="games">${games}</div>` : ''}
        <div class="card soft"><h3>How this course works</h3><p>Read each lesson, then answer its quick check. Score 60% or more and the lesson is marked done. Games are for extra practice, so play them as often as you like.</p></div>
        ${c.note ? `<div class="card soft caution"><h3>Please note</h3><p>${c.note}</p></div>` : ''}
      </aside>
    </div>
    ${footer()}`,
    mount: () => { if (n === total && !store.get('mgt.cele.' + prog.key() + c.id, false)) { store.set('mgt.cele.' + prog.key() + c.id, true); confetti(); } }
  };
}

/* ---------- lesson ---------- */
function viewLesson(c, n) {
  const l = c.flat[n - 1], total = c.flat.length;
  const area = c.public && !auth.user() ? 'public' : 'member';
  prog.last('#'.slice(1) + base(c) + '-' + n);
  let idx = 0;
  const side = c.units.map((u, ui) => `<p class="ln-unit">Unit ${ui + 1} · ${u.t}</p><ol>${u.lessons.map(x => { idx++; return `<li><a href="${lessonHref(c, idx)}" class="${idx === n ? 'cur' : ''} ${prog.done(c.id, idx) ? 'done' : ''}"${idx === n ? ' aria-current="page"' : ''}><span class="dot"></span>${x.t}</a></li>`; }).join('')}</ol>`).join('');
  const done = prog.done(c.id, n);
  return {
    area, title: l.t + ' · ' + c.title,
    html: `
    <div class="lesson-top" style="--cc:var(--c-${c.cat})"><div class="wrap">${crumbs([[c.title, '#' + base(c)], [l.unit, '#' + base(c)], ['Lesson ' + n]])}
      <div class="lesson-progress"><div class="bar-track"><span style="width:${prog.pct(c) * 100}%"></span></div><span class="mono">${prog.count(c)}/${total} done</span></div></div></div>
    <div class="wrap lesson-wrap" style="--cc:var(--c-${c.cat})">
      <aside class="lesson-nav" aria-label="Lessons in this course"><a class="back" href="#${base(c)}">${c.title}</a>${side}
        ${c.games.length ? `<p class="ln-unit">Games</p><ol>${c.games.map((g, i) => `<li><a href="${gameHref(c, i + 1)}"><span class="dot g"></span>${g.t}</a></li>`).join('')}</ol>` : ''}</aside>
      <article class="lesson">
        <p class="eyebrow">Lesson ${n} of ${total}</p>
        <h1>${l.t}</h1>
        <p class="lead">${l.s}</p>
        <div class="prose lesson-body">${l.b}</div>
        ${l.q && l.q.length ? `<section class="check"><h2>Check your understanding</h2><p class="muted">Pick an answer for each question. Score 60% or more to complete the lesson.</p>${quizHTML(l.q)}</section>` : ''}
        <div class="lesson-foot">
          ${n > 1 ? `<a class="btn ghost" href="${lessonHref(c, n - 1)}">Previous</a>` : `<a class="btn ghost" href="#${base(c)}">Course home</a>`}
          <button class="btn ${done ? 'ghost' : ''}" data-complete ${done ? 'disabled' : ''}>${done ? 'Completed' : 'Mark as complete'}</button>
          ${n < total ? `<a class="btn" href="${lessonHref(c, n + 1)}">Next lesson</a>` : `<a class="btn" href="#${base(c)}">Finish course</a>`}
        </div>
      </article>
    </div>
    ${footer()}`,
    mount: el => {
      const btn = $('[data-complete]', el);
      const mark = () => { if (prog.done(c.id, n)) return; prog.complete(c.id, n); btn.textContent = 'Completed'; btn.disabled = true; btn.classList.add('ghost'); pop(btn); updateTop(); if (prog.count(c) === total) confetti(); };
      const updateTop = () => { $('.lesson-progress span', el).style.width = prog.pct(c) * 100 + '%'; $('.lesson-progress .mono', el).textContent = prog.count(c) + '/' + total + ' done'; const a = $('.lesson-nav a.cur', el); a && a.classList.add('done'); };
      btn.onclick = mark;
      const q = $('.quiz', el);
      q && mountQuiz(q, l.q, (s, t) => { if (s / t >= 0.6) mark(); });
    }
  };
}

/* ---------- quiz ---------- */
function quizHTML(qs) {
  return `<div class="quiz">${qs.map((q, i) => `<fieldset class="qq"><legend><span class="qn">${i + 1}</span><span>${q[0]}</span></legend><div class="opts">${q[1].map((o, j) => `<button type="button" class="opt" data-j="${j}">${o}</button>`).join('')}</div><p class="why" hidden></p></fieldset>`).join('')}<div class="quiz-result" role="status" hidden></div></div>`;
}
function mountQuiz(el, qs, onDone) {
  let answered = 0, score = 0;
  $$('.qq', el).forEach((fs, i) => {
    fs.addEventListener('click', e => {
      const b = e.target.closest('.opt'); if (!b || fs.dataset.done) return;
      fs.dataset.done = 1; answered++;
      const j = +b.dataset.j, q = qs[i], right = j === q[2];
      if (right) score++;
      $$('.opt', fs).forEach((o, k) => { o.disabled = true; if (k === q[2]) o.classList.add('right'); });
      if (!right) b.classList.add('wrong');
      const why = $('.why', fs); why.hidden = false;
      why.innerHTML = (right ? '<strong>Correct.</strong> ' : `<strong>Not quite.</strong> The answer is “${q[1][q[2]]}”. `) + (q[3] || '');
      why.classList.toggle('ok', right);
      if (answered === qs.length) {
        const r = $('.quiz-result', el); r.hidden = false;
        const pass = score / qs.length >= 0.6;
        r.className = 'quiz-result ' + (pass ? 'pass' : 'fail');
        r.innerHTML = `<span class="score">${score}/${qs.length}</span><span>${pass ? (score === qs.length ? 'Perfect score. Lesson complete.' : 'Nice work. Lesson complete.') : 'Read the lesson again, then retry.'}</span><button type="button" class="btn ghost sm" data-retry>Try again</button>`;
        $('[data-retry]', r).onclick = () => { el.outerHTML = quizHTML(qs); const nq = $('.check .quiz'); mountQuiz(nq, qs, onDone); };
        if (score === qs.length) confetti(0.5);
        onDone && onDone(score, qs.length);
      }
    });
  });
}

/* ================= GAMES ================= */
const GAME_NAMES = { match: 'Matching', flash: 'Flashcards', sort: 'Sorting', order: 'Put in order', math: 'Math sprint', quiz: 'Challenge', calc: 'Calculator' };
const GAME_HELP = {
  match: 'Tap a card, then tap the card it belongs with. Clear the board in as few moves as you can.',
  flash: 'Read the front, tap the card to flip it, then choose whether you know it. Keep going until every card is known.',
  sort: 'Each item belongs in one group. Tap the right group for the item in the middle.',
  order: 'Move each step up or down until they are in the right order, then check.',
  math: 'Pick a level and answer 10 questions as quickly as you can. Press Enter to submit.',
  quiz: 'Answer each question. You get feedback straight away.',
  calc: 'Change the numbers and watch your money grow.'
};
function viewGame(c, n) {
  const g = c.games[n - 1];
  const area = c.public && !auth.user() ? 'public' : 'member';
  return {
    area, title: g.t + ' · ' + c.title,
    html: `
    <div class="lesson-top" style="--cc:var(--c-${c.cat})"><div class="wrap">${crumbs([[c.title, '#' + base(c)], ['Games'], [g.t]])}</div></div>
    <section class="wrap sec game-page" style="--cc:var(--c-${c.cat})">
      <div class="game-head"><span class="g-type">${GAME_NAMES[g.type]}</span><h1>${g.t}</h1><p class="lead">${g.d || ''}</p><p class="muted">${GAME_HELP[g.type]}</p></div>
      <div class="game" id="game"></div>
      <div class="row game-nav"><a class="btn ghost" href="#${base(c)}">Back to ${c.title}</a>${c.games[n] ? `<a class="btn ghost" href="${gameHref(c, n + 1)}">Next game: ${c.games[n].t}</a>` : ''}</div>
    </section>
    ${footer()}`,
    mount: el => GAMES[g.type]($('#game', el), g, r => { prog.game(c.id, n, r); })
  };
}
function finishPanel(el, msg, again) {
  const d = document.createElement('div'); d.className = 'g-done'; d.setAttribute('role', 'status');
  d.innerHTML = `<strong>${msg}</strong><button class="btn sm" type="button">Play again</button>`;
  $('button', d).onclick = again; el.appendChild(d); confetti(0.7);
}

const GAMES = {
  match(el, g, save) {
    const pairs = shuffle(g.pairs).slice(0, 6);
    const tiles = shuffle(pairs.flatMap((p, i) => [{ t: p[0], k: i, s: 'a' }, { t: p[1], k: i, s: 'b' }]));
    el.innerHTML = `<div class="g-bar"><span>Moves <b data-m>0</b></span><span>Pairs <b data-p>0</b> / ${pairs.length}</span></div>
      <div class="match-grid">${tiles.map((x, i) => `<button type="button" class="tile ${x.s}" data-i="${i}" style="--i:${i}">${x.t}</button>`).join('')}</div>`;
    let sel = null, moves = 0, got = 0;
    $('.match-grid', el).onclick = e => {
      const b = e.target.closest('.tile'); if (!b || b.classList.contains('ok')) return;
      const i = +b.dataset.i;
      if (sel === null) { sel = i; b.classList.add('sel'); return; }
      if (sel === i) { b.classList.remove('sel'); sel = null; return; }
      const a = $(`.tile[data-i="${sel}"]`, el); a.classList.remove('sel'); moves++;
      if (tiles[sel].k === tiles[i].k) { a.classList.add('ok'); b.classList.add('ok'); a.disabled = b.disabled = true; got++; }
      else { a.classList.add('no'); b.classList.add('no'); setTimeout(() => { a.classList.remove('no'); b.classList.remove('no'); }, 500); }
      sel = null;
      $('[data-m]', el).textContent = moves; $('[data-p]', el).textContent = got;
      if (got === pairs.length) { save(moves + ' moves'); finishPanel(el, `All ${pairs.length} pairs matched in ${moves} moves.`, () => GAMES.match(el, g, save)); }
    };
  },
  flash(el, g, save) {
    const cards = shuffle(g.cards); let i = 0; const known = new Set();
    el.innerHTML = `<div class="flash"><div class="g-bar"><span>Card <b data-n>1</b> / ${cards.length}</span><span>Known <b data-k>0</b> / ${cards.length}</span></div>
      <button type="button" class="card3d" aria-live="polite"><span class="face front"></span><span class="face back"></span></button>
      <p class="muted flip-hint">Tap the card to flip it</p>
      <div class="row center"><button type="button" class="btn ghost" data-prev>Previous</button><button type="button" class="btn ghost" data-again>Still learning</button><button type="button" class="btn" data-know>I know this</button></div></div>`;
    const card = $('.card3d', el);
    const show = () => { card.classList.remove('flipped'); const c = cards[i]; $('.front', card).innerHTML = `<small>${g.fl || 'Front'}</small>${c[0]}`; $('.back', card).innerHTML = `<small>${g.bl || 'Back'}</small>${c[1]}`; $('[data-n]', el).textContent = i + 1; $('[data-k]', el).textContent = known.size; card.classList.toggle('is-known', known.has(i)); };
    const next = () => { if (known.size === cards.length) return; do { i = (i + 1) % cards.length; } while (known.has(i)); show(); };
    card.onclick = () => card.classList.toggle('flipped');
    $('[data-prev]', el).onclick = () => { i = (i - 1 + cards.length) % cards.length; show(); };
    $('[data-again]', el).onclick = () => { known.delete(i); next(); };
    $('[data-know]', el).onclick = () => { known.add(i); $('[data-k]', el).textContent = known.size; if (known.size === cards.length) { save('All ' + cards.length + ' known'); finishPanel(el, `You know all ${cards.length} cards.`, () => GAMES.flash(el, g, save)); } else next(); };
    show();
  },
  sort(el, g, save) {
    const items = shuffle(g.items); let i = 0, score = 0;
    el.innerHTML = `<div class="sorter"><div class="g-bar"><span>Item <b data-n>1</b> / ${items.length}</span><span>Score <b data-s>0</b></span></div>
      <div class="sort-stage"><div class="sort-item" aria-live="polite"></div><p class="sort-msg" role="status"></p></div>
      <div class="bins" style="--n:${g.bins.length}">${g.bins.map((b, k) => `<button type="button" class="bin" data-k="${k}"><b>${b}</b><span data-c>0</span></button>`).join('')}</div></div>`;
    const item = $('.sort-item', el), msg = $('.sort-msg', el); let lock = false;
    const show = () => { item.classList.remove('fly', 'shake'); void item.offsetWidth; item.textContent = items[i][0]; item.classList.add('in'); $('[data-n]', el).textContent = i + 1; };
    $('.bins', el).onclick = e => {
      const b = e.target.closest('.bin'); if (!b || lock) return; lock = true;
      const k = +b.dataset.k, right = k === items[i][1];
      const target = $(`.bin[data-k="${items[i][1]}"]`, el); const cnt = $('[data-c]', target); cnt.textContent = +cnt.textContent + 1;
      if (right) { score++; msg.textContent = 'Correct.'; msg.className = 'sort-msg ok'; item.classList.add('fly'); pop(b); }
      else { msg.textContent = `That one belongs in “${g.bins[items[i][1]]}”.`; msg.className = 'sort-msg no'; item.classList.add('shake'); }
      $('[data-s]', el).textContent = score;
      setTimeout(() => { lock = false; i++; if (i < items.length) { msg.textContent = ''; show(); } else { item.textContent = ''; save(score + '/' + items.length); finishPanel(el, `You sorted ${score} of ${items.length} correctly.`, () => GAMES.sort(el, g, save)); } }, right ? 550 : 1300);
    };
    show();
  },
  order(el, g, save) {
    let list; do { list = shuffle(g.steps.map((s, k) => ({ s, k }))); } while (list.every((x, k) => x.k === k) && g.steps.length > 1);
    let tries = 0;
    const draw = () => {
      $('.order-list', el).innerHTML = list.map((x, k) => `<li data-k="${x.k}"><span class="on">${k + 1}</span><span class="ot">${x.s}</span><span class="oc"><button type="button" aria-label="Move up" data-up="${k}" ${k === 0 ? 'disabled' : ''}>↑</button><button type="button" aria-label="Move down" data-dn="${k}" ${k === list.length - 1 ? 'disabled' : ''}>↓</button></span></li>`).join('');
    };
    el.innerHTML = `<div class="orderer"><ol class="order-list"></ol><div class="row"><button type="button" class="btn" data-check>Check order</button><span class="muted" data-msg role="status"></span></div></div>`;
    draw();
    $('.order-list', el).onclick = e => {
      const u = e.target.closest('[data-up]'), d = e.target.closest('[data-dn]');
      if (u) { const k = +u.dataset.up; [list[k - 1], list[k]] = [list[k], list[k - 1]]; draw(); $$('.order-list li', el)[k - 1].classList.add('moved'); $(`[data-up="${k - 1}"]`, el)?.focus() || $(`[data-dn="${k - 1}"]`, el)?.focus(); }
      if (d) { const k = +d.dataset.dn; [list[k + 1], list[k]] = [list[k], list[k + 1]]; draw(); $$('.order-list li', el)[k + 1].classList.add('moved'); $(`[data-dn="${k + 1}"]`, el)?.focus() || $(`[data-up="${k + 1}"]`, el)?.focus(); }
    };
    $('[data-check]', el).onclick = () => {
      tries++; let right = 0;
      $$('.order-list li', el).forEach((li, k) => { const ok = +li.dataset.k === k; li.classList.toggle('ok', ok); li.classList.toggle('no', !ok); if (ok) right++; });
      const m = $('[data-msg]', el);
      if (right === list.length) { m.textContent = ''; save(tries === 1 ? 'First try' : tries + ' tries'); finishPanel(el, tries === 1 ? 'Perfect order on the first try.' : `All in order after ${tries} checks.`, () => GAMES.order(el, g, save)); }
      else m.textContent = `${right} of ${list.length} in the right spot. Keep going.`;
    };
  },
  math(el, g, save) {
    const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    const levels = [
      ['Grades 1–3: add & subtract', () => { const a = R(1, 20), b = R(1, 20); return Math.random() < .5 ? [`${a} + ${b}`, a + b] : [`${Math.max(a, b)} − ${Math.min(a, b)}`, Math.abs(a - b)]; }],
      ['Grades 1–3: multiply & divide', () => { const a = R(1, 10), b = R(1, 10); return Math.random() < .5 ? [`${a} × ${b}`, a * b] : [`${a * b} ÷ ${b}`, a]; }],
      ['Primary: bigger numbers', () => { const t = R(0, 3); if (t === 0) { const a = R(100, 999), b = R(10, 499); return [`${a} + ${b}`, a + b]; } if (t === 1) { const a = R(200, 999), b = R(10, 199); return [`${a} − ${b}`, a - b]; } if (t === 2) { const a = R(11, 49), b = R(2, 9); return [`${a} × ${b}`, a * b]; } const b = R(2, 12), q = R(2, 25); return [`${b * q} ÷ ${b}`, q]; }]
    ];
    el.innerHTML = `<div class="mathg"><div class="levels">${levels.map((l, k) => `<button type="button" class="btn ghost" data-l="${k}">${l[0]}</button>`).join('')}</div><div class="math-stage"></div></div>`;
    $('.levels', el).onclick = e => { const b = e.target.closest('[data-l]'); if (b) play(+b.dataset.l); };
    function play(L) {
      let q = 0, score = 0, cur, t0 = performance.now(), timer;
      const st = $('.math-stage', el);
      st.innerHTML = `<div class="g-bar"><span>Question <b data-n>1</b> / 10</span><span>Score <b data-s>0</b></span><span>Time <b data-t>0.0</b>s</span></div>
        <form class="math-q"><output class="eq"></output><label class="sr" for="math-in">Your answer</label><input id="math-in" inputmode="numeric" autocomplete="off" pattern="[0-9]*"><button class="btn" type="submit">Check</button></form><p class="sort-msg" role="status"></p>`;
      const inp = $('#math-in', st), eq = $('.eq', st), msg = $('.sort-msg', st);
      timer = setInterval(() => { $('[data-t]', st).textContent = ((performance.now() - t0) / 1000).toFixed(1); }, 100);
      cleanup.push(() => clearInterval(timer));
      const next = () => { cur = levels[L][1](); eq.textContent = cur[0] + ' = ?'; eq.classList.remove('in'); void eq.offsetWidth; eq.classList.add('in'); inp.value = ''; inp.focus(); $('[data-n]', st).textContent = q + 1; };
      $('.math-q', st).onsubmit = e => {
        e.preventDefault(); if (inp.value.trim() === '') return;
        const ok = +inp.value === cur[1]; if (ok) score++;
        msg.textContent = ok ? 'Correct.' : `${cur[0]} = ${cur[1]}`; msg.className = 'sort-msg ' + (ok ? 'ok' : 'no');
        if (!ok) { eq.classList.add('shake'); setTimeout(() => eq.classList.remove('shake'), 400); }
        $('[data-s]', st).textContent = score; q++;
        if (q < 10) next(); else { clearInterval(timer); const secs = ((performance.now() - t0) / 1000).toFixed(1); $('.math-q', st).remove(); save(`${score}/10 in ${secs}s`); finishPanel(st, `${score} out of 10 in ${secs} seconds.`, () => play(L)); }
      };
      next();
    }
  },
  quiz(el, g, save) {
    el.innerHTML = quizHTML(g.q);
    mountQuiz($('.quiz', el), g.q, (s, t) => { save(s + '/' + t); const r = $('.quiz-result', el); $('[data-retry]', r).onclick = () => GAMES.quiz(el, g, save); });
  },
  calc(el, g, save) {
    el.innerHTML = `<div class="calc"><form class="calc-in" onsubmit="return false">
      <div class="field"><label for="ci-start">Starting amount ($)</label><input id="ci-start" type="number" min="0" step="10" value="100"></div>
      <div class="field"><label for="ci-month">Added each month ($)</label><input id="ci-month" type="number" min="0" step="5" value="25"></div>
      <div class="field"><label for="ci-rate">Yearly return (%)</label><input id="ci-rate" type="range" min="0" max="12" step="0.5" value="7"><output id="ci-rate-o">7%</output></div>
      <div class="field"><label for="ci-years">Years</label><input id="ci-years" type="range" min="1" max="50" step="1" value="30"><output id="ci-years-o">30 years</output></div>
    </form><div class="calc-out"><dl class="calc-nums"><div><dt>You put in</dt><dd data-in></dd></div><div><dt>Growth</dt><dd data-gr></dd></div><div class="big"><dt>Total</dt><dd data-tot></dd></div></dl><svg class="calc-chart" viewBox="0 0 400 200" preserveAspectRatio="none" role="img" aria-label="Growth chart"></svg><p class="muted" data-72></p></div></div>`;
    const money = v => '$' + Math.round(v).toLocaleString();
    const calc = () => {
      const P = +$('#ci-start', el).value || 0, M = +$('#ci-month', el).value || 0, r = +$('#ci-rate', el).value / 100, Y = +$('#ci-years', el).value;
      $('#ci-rate-o', el).textContent = (r * 100) + '%'; $('#ci-years-o', el).textContent = Y + ' years';
      let bal = P, put = P; const pts = [[0, P, P]];
      for (let m = 1; m <= Y * 12; m++) { bal = bal * (1 + r / 12) + M; put += M; if (m % 12 === 0) pts.push([m / 12, bal, put]); }
      $('[data-in]', el).textContent = money(put); $('[data-gr]', el).textContent = money(bal - put); $('[data-tot]', el).textContent = money(bal);
      $('[data-72]', el).textContent = r > 0 ? `Rule of 72: at ${r * 100}% a year, money doubles about every ${(72 / (r * 100)).toFixed(1)} years.` : 'With 0% return, your money only grows by what you add.';
      const max = Math.max(...pts.map(p => p[1]), 1), X = y => (y / Y) * 400, Yv = v => 196 - (v / max) * 186;
      const area = (k) => `M0,196 ` + pts.map(p => `L${X(p[0]).toFixed(1)},${Yv(p[k]).toFixed(1)}`).join(' ') + ` L400,196 Z`;
      $('.calc-chart', el).innerHTML = `<path d="${area(1)}" class="a-tot"/><path d="${area(2)}" class="a-in"/><path d="${pts.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ',' + Yv(p[1]).toFixed(1)).join(' ')}" class="l-tot"/>`;
      save('Explored');
    };
    $$('input', el).forEach(i => i.oninput = calc); calc();
  }
};

/* ================= VISUALS ================= */
function makeNoise(seed) {
  let s = 2166136261; for (const ch of String(seed)) { s ^= ch.charCodeAt(0); s = Math.imul(s, 16777619) >>> 0; } s = s || 1;
  const rnd = () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  const g = new Float32Array(4096); for (let i = 0; i < 4096; i++) g[i] = rnd();
  const sm = t => t * t * (3 - 2 * t), at = (x, y) => g[((y & 63) << 6) + (x & 63)];
  const v = (x, y) => { const xi = Math.floor(x), yi = Math.floor(y), xf = sm(x - xi), yf = sm(y - yi); const a = at(xi, yi), b = at(xi + 1, yi), c = at(xi, yi + 1), d = at(xi + 1, yi + 1); return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf; };
  return (x, y) => v(x, y) * .58 + v(x * 2.03 + 5.2, y * 2.03 + 1.3) * .28 + v(x * 4.1 + 9.1, y * 4.1 + 3.7) * .14;
}
const SEG = [[], [[3, 2]], [[2, 1]], [[3, 1]], [[0, 1]], [[3, 0], [2, 1]], [[0, 2]], [[3, 0]], [[3, 0]], [[0, 2]], [[0, 1], [3, 2]], [[0, 1]], [[3, 1]], [[2, 1]], [[3, 2]], []];
function contours(ctx, w, h, field, cols, rows, cell, levels, style) {
  for (let li = 0; li < levels.length; li++) {
    const L = levels[li]; ctx.beginPath();
    for (let y = 0; y < rows - 1; y++) for (let x = 0; x < cols - 1; x++) {
      const a = field[y * cols + x], b = field[y * cols + x + 1], c = field[(y + 1) * cols + x + 1], d = field[(y + 1) * cols + x];
      const k = (a > L) << 3 | (b > L) << 2 | (c > L) << 1 | (d > L); if (k === 0 || k === 15) continue;
      const x0 = x * cell, y0 = y * cell;
      const P = e => e === 0 ? [x0 + cell * (L - a) / (b - a), y0] : e === 1 ? [x0 + cell, y0 + cell * (L - b) / (c - b)] : e === 2 ? [x0 + cell * (L - d) / (c - d), y0 + cell] : [x0, y0 + cell * (L - a) / (d - a)];
      for (const [e1, e2] of SEG[k]) { const p = P(e1), q = P(e2); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); }
    }
    style(ctx, li, levels.length); ctx.stroke();
  }
}
function cssVar(el, name) { return getComputedStyle(el).getPropertyValue(name).trim(); }
function drawTopoCard(cv) {
  const r = cv.getBoundingClientRect(); if (!r.width) return;
  const dpr = Math.min(devicePixelRatio || 1, 2); cv.width = r.width * dpr; cv.height = r.height * dpr;
  const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  const noise = makeNoise(cv.dataset.seed), cell = 7, cols = Math.ceil(r.width / cell) + 2, rows = Math.ceil(r.height / cell) + 2;
  const f = new Float32Array(cols * rows), sc = cv.classList.contains('topo-head') ? 0.012 : 0.022;
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) f[y * cols + x] = noise(x * cell * sc, y * cell * sc);
  const col = cssVar(cv, '--cc') || cssVar(document.body, '--accent') || '#00a6a6';
  const levels = []; for (let L = 0.22; L < 0.8; L += 0.045) levels.push(L);
  contours(ctx, r.width, r.height, f, cols, rows, cell, levels, (c, i, n) => { c.strokeStyle = col; c.globalAlpha = 0.25 + 0.6 * (i / n); c.lineWidth = i % 4 === 0 ? 1.4 : 0.8; });
}
function heroTopo(cv, host) {
  if (!cv) return;
  const ctx = cv.getContext('2d'); const noise = makeNoise('mgt-landscape');
  let w, h, dpr, cols, rows, field, cell = 12, raf, t = Math.random() * 50, px = -999, py = -999, bump = 0, last = 0;
  const size = () => { const r = host.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2); w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); cell = w < 600 ? 10 : 12; cols = Math.ceil(w / cell) + 2; rows = Math.ceil(h / cell) + 2; field = new Float32Array(cols * rows); };
  const aqua = cssVar(document.body, '--aqua') || '#19c3c0', gold = cssVar(document.body, '--gold') || '#f2b705';
  const levels = []; for (let L = 0.2; L < 0.86; L += 0.04) levels.push(L);
  const frame = now => {
    if (now - last > 33 || reduced) {
      last = now; if (!reduced) t += 0.0035;
      bump += ((px > -999 ? 1 : 0) - bump) * 0.08;
      const r2 = (Math.min(w, 700) * 0.22) ** 2;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const X = x * cell, Y = y * cell; let v = noise(X * 0.0045 + t, Y * 0.0045 + t * 0.6);
        if (bump > 0.01) { const dx = X - px, dy = Y - py; v += 0.32 * bump * Math.exp(-(dx * dx + dy * dy) / r2); }
        field[y * cols + x] = v;
      }
      ctx.clearRect(0, 0, w, h);
      contours(ctx, w, h, field, cols, rows, cell, levels, (c, i, n) => { const hi = i === n - 4 || i === n - 2; c.strokeStyle = hi ? gold : aqua; c.globalAlpha = hi ? 0.75 : 0.12 + 0.45 * (i / n); c.lineWidth = hi ? 1.6 : 1; });
    }
    if (!reduced) raf = requestAnimationFrame(frame);
  };
  size(); raf = requestAnimationFrame(frame);
  const ro = new ResizeObserver(() => { size(); if (reduced) frame(performance.now()); }); ro.observe(host);
  const mv = e => { const r = cv.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; if (reduced) frame(performance.now()); };
  const lv = () => { px = py = -999; };
  host.addEventListener('pointermove', mv); host.addEventListener('pointerleave', lv);
  cleanup.push(() => { cancelAnimationFrame(raf); ro.disconnect(); });
}
function confetti(scale = 1) {
  if (reduced) return;
  const cv = document.createElement('canvas'); cv.className = 'confetti'; document.body.appendChild(cv);
  const dpr = Math.min(devicePixelRatio || 1, 2), W = innerWidth, H = innerHeight; cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  const cols = ['--aqua', '--gold', '--c-wellness', '--c-lang', '--c-money'].map(v => cssVar(document.body, v) || '#19c3c0');
  const N = Math.round(120 * scale);
  const ps = Array.from({ length: N }, () => ({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 4, a: Math.random() * 6, va: (Math.random() - .5) * .3, c: cols[Math.floor(Math.random() * cols.length)] }));
  let f = 0;
  const step = () => {
    ctx.clearRect(0, 0, W, H); f++;
    ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.globalAlpha = Math.max(0, 1 - f / 110); ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore(); });
    if (f < 110) requestAnimationFrame(step); else cv.remove();
  };
  requestAnimationFrame(step);
}
function pop(el) { if (reduced || !el) return; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }

/* road signs, used on the home page and in the driving course */
function signSVG(kind) {
  const S = {
    stop: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Stop sign"><polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="#C8102E" stroke="#fff" stroke-width="4"/><text x="50" y="59" text-anchor="middle" font-size="25" font-weight="800" fill="#fff" font-family="Arial,sans-serif">STOP</text></svg>`,
    giveway: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Give way sign"><polygon points="4,10 96,10 50,92" fill="#fff" stroke="#C8102E" stroke-width="9" stroke-linejoin="round"/><text x="50" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#111" font-family="Arial,sans-serif">GIVE WAY</text></svg>`,
    roundabout: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Mini roundabout sign, traffic goes clockwise"><circle cx="50" cy="50" r="46" fill="#1F5AA6"/><g fill="none" stroke="#fff" stroke-width="7"><path d="M50 24a26 26 0 0 1 24 16"/><path d="M76 60a26 26 0 0 1-22 16"/><path d="M42 75a26 26 0 0 1-17-24"/></g><g fill="#fff"><polygon points="80,46 66,40 78,32"/><polygon points="50,84 52,68 62,78"/><polygon points="22,40 34,50 20,56"/></g></svg>`,
    noentry: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="No entry sign"><circle cx="50" cy="50" r="46" fill="#C8102E"/><rect x="18" y="42" width="64" height="16" fill="#fff"/></svg>`,
    nooverteke: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="No overtaking sign"><circle cx="50" cy="50" r="42" fill="#fff" stroke="#C8102E" stroke-width="9"/><rect x="26" y="40" width="18" height="26" rx="4" fill="#C8102E"/><rect x="56" y="40" width="18" height="26" rx="4" fill="#111"/></svg>`,
    speed: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Speed limit 25 sign"><circle cx="50" cy="50" r="42" fill="#fff" stroke="#C8102E" stroke-width="9"/><text x="50" y="62" text-anchor="middle" font-size="34" font-weight="800" fill="#111" font-family="Arial,sans-serif">25</text></svg>`,
    children: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Warning triangle for children crossing"><polygon points="50,6 96,90 4,90" fill="#fff" stroke="#C8102E" stroke-width="8" stroke-linejoin="round"/><g fill="#111"><circle cx="40" cy="44" r="5"/><rect x="35" y="51" width="10" height="20" rx="3"/><circle cx="60" cy="50" r="4"/><rect x="56" y="56" width="8" height="15" rx="3"/></g></svg>`,
    bend: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Warning triangle for a bend to the right"><polygon points="50,6 96,90 4,90" fill="#fff" stroke="#C8102E" stroke-width="8" stroke-linejoin="round"/><path d="M42 80 V60 Q42 48 56 44 V38" fill="none" stroke="#111" stroke-width="6"/><polygon points="56,30 64,42 48,42" fill="#111"/></svg>`,
    keepleft: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Keep left sign"><circle cx="50" cy="50" r="46" fill="#1F5AA6"/><path d="M66 30 L38 62" stroke="#fff" stroke-width="9"/><polygon points="28,74 30,50 50,66" fill="#fff"/></svg>`,
    info: `<svg viewBox="0 0 100 100" class="sign" role="img" aria-label="Rectangular direction sign"><rect x="4" y="22" width="92" height="56" rx="6" fill="#00704A" stroke="#fff" stroke-width="3"/><text x="50" y="47" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="Arial,sans-serif">NASSAU</text><path d="M30 60h36" stroke="#fff" stroke-width="4"/><polygon points="74,60 64,54 64,66" fill="#fff"/></svg>`
  };
  return S[kind] || '';
}
window.MGT_SIGN = signSVG;

/* ---------- boot ---------- */
const fillSigns = t => typeof t === 'string' ? t.replace(/\{\{sign:(\w+)\}\}/g, (_, k) => signSVG(k)) : t;
COURSES.forEach(c => {
  c.flat.forEach(l => { l.b = fillSigns(l.b); (l.q || []).forEach(q => q[0] = fillSigns(q[0])); });
  c.games.forEach(g => (g.q || []).forEach(q => q[0] = fillSigns(q[0])));
});
addEventListener('hashchange', route);
let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => $$('canvas.topo').forEach(drawTopoCard), 200); });
route();
})();
