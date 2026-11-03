/* Adaptive graphics for dealsaid.org.
   Picks a quality tier for this device, then keeps watching the real frame rate and steps down if
   the page can't keep up (Chromebooks, older laptops, busy phones). Sets <html data-fx="full|lite|off">
   so CSS can drop heavy layers, and exposes window.FX for the animation scripts.
     full  every effect
     lite  half-rate canvases, fewer particles, no full-screen overlays, no backdrop blur
     off   no ambient animation at all (also used for prefers-reduced-motion)
   A device that had to step down starts in that tier next time, so it's smooth from the first frame. */
(function () {
  var root = document.documentElement, order = ['full', 'lite', 'off'];
  var store = { get: function () { try { return localStorage.getItem('fx-tier'); } catch (e) { return null; } },
                set: function (v) { try { localStorage.setItem('fx-tier', v); } catch (e) { /* storage blocked */ } } };
  var nav = navigator, conn = nav.connection || {};
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tier = 'full';
  if ((nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) || (nav.deviceMemory && nav.deviceMemory <= 4) || conn.saveData) tier = 'lite';
  var remembered = store.get();
  if (remembered && order.indexOf(remembered) > order.indexOf(tier)) tier = remembered;
  if (reduce) tier = 'off';

  var listeners = [];
  function set(t) {
    if (t === tier && root.getAttribute('data-fx') === t) return;
    tier = t; root.setAttribute('data-fx', t);
    listeners.forEach(function (fn) { try { fn(t); } catch (e) { /* keep going */ } });
  }
  window.FX = {
    get tier() { return tier; },
    onChange: function (fn) { listeners.push(fn); },
    // canvases render at this fraction of screen pixels: software-rendered Chromebooks pay per pixel
    get scale() { return tier === 'full' ? Math.min(window.devicePixelRatio || 1, 1.5) : 0.6; },
    // animation loops call FX.skip(frame) and skip the frame when it returns true (lite = 30 fps)
    skip: function (frame) { return tier === 'off' || (tier === 'lite' && frame % 2 === 1); }
  };
  root.setAttribute('data-fx', tier);
  if (tier === 'off') return;

  // Governor: watch frame times in 2-second windows; if the median frame takes longer than ~25 ms
  // (under 40 fps) twice in a row while the page is visible, step down one tier and remember it.
  var times = [], last = 0, slow = 0, settleUntil = performance.now() + 1500;
  function tick(now) {
    if (document.hidden) { last = 0; requestAnimationFrame(tick); return; }
    if (last && now > settleUntil) times.push(now - last);
    last = now;
    if (times.length >= 60) {
      times.sort(function (a, b) { return a - b; });
      var median = times[times.length >> 1];
      times = [];
      slow = median > 25 ? slow + 1 : 0;
      if (slow >= 2) {
        var next = order[order.indexOf(tier) + 1];
        if (next && next !== 'off') { set(next); store.set(next); settleUntil = now + 1500; slow = 0; }
        else return;                       // already at the lightest animated tier: stop measuring
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
