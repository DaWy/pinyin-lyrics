(function () {
  var root = document.querySelector('.showcase');
  if (!root) return;
  var stage = root.querySelector('.stage');
  var slides = [].slice.call(root.querySelectorAll('.slide'));
  var n = slides.length;
  if (!stage || n < 2) return;
  var INTERVAL = 4000, cur = 0, timer = null, hover = false, focus = false;
  var reduce = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  function el(tag, cls, attrs) {
    var x = document.createElement(tag);
    if (cls) x.className = cls;
    for (var k in attrs || {}) x.setAttribute(k, attrs[k]);
    return x;
  }
  var chevron = function (d) {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
  };
  var ui = el('div', 'sc-ui');
  var cap = el('div', 'sc-cap', { 'aria-live': 'polite', 'aria-atomic': 'true' });
  var nav = el('div', 'sc-nav');
  var prev = el('button', 'sc-arrow', { type: 'button', 'aria-label': root.dataset.prev || 'Previous' });
  var next = el('button', 'sc-arrow', { type: 'button', 'aria-label': root.dataset.next || 'Next' });
  prev.innerHTML = chevron('M15 5l-7 7 7 7');
  next.innerHTML = chevron('M9 5l7 7-7 7');
  var dotsBox = el('div', 'sc-dots');
  var dots = slides.map(function (s, i) {
    var label = (root.dataset.go || '{n}: {name}').replace('{n}', i + 1).replace('{name}', s.dataset.t || '');
    var d = el('button', 'sc-dot', { type: 'button', 'aria-label': label });
    d.appendChild(el('i'));
    d.addEventListener('click', function () { go(i); });
    dotsBox.appendChild(d);
    return d;
  });
  nav.appendChild(prev); nav.appendChild(dotsBox); nav.appendChild(next);
  ui.appendChild(cap); ui.appendChild(nav);
  root.appendChild(ui);
  root.style.setProperty('--dur', INTERVAL + 'ms');

  function render(animate) {
    slides.forEach(function (s, i) {
      var p = ((i - cur + n + Math.floor(n / 2)) % n) - Math.floor(n / 2);
      if (Math.abs(p) <= 2) s.dataset.pos = p; else s.removeAttribute('data-pos');
      s.setAttribute('aria-hidden', p === 0 ? 'false' : 'true');
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('on', i === cur);
      if (i === cur) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
    cap.innerHTML = '';
    var b = el('b'), sp = el('span');
    b.textContent = slides[cur].dataset.t || '';
    sp.textContent = slides[cur].dataset.s || '';
    cap.appendChild(b); cap.appendChild(sp);
    if (animate) { cap.classList.remove('in'); void cap.offsetWidth; cap.classList.add('in'); }
  }
  function go(i, auto) {
    cur = (i + n) % n;
    render(true);
    arm();
  }
  // (re)arranca el temporizador y la barra de progreso del punto activo
  function arm() {
    clearTimeout(timer);
    dots.forEach(function (d) { d.classList.remove('run'); });
    if (reduce.matches) return;
    void root.offsetWidth;
    dots[cur].classList.add('run');
    if (!paused()) timer = setTimeout(function () { go(cur + 1); }, INTERVAL);
  }
  function paused() { return hover || focus || document.hidden || reduce.matches; }
  function sync() {
    root.classList.toggle('is-paused', paused());
    if (paused()) clearTimeout(timer); else arm();
  }

  prev.addEventListener('click', function () { go(cur - 1); });
  next.addEventListener('click', function () { go(cur + 1); });
  slides.forEach(function (s, i) {
    s.addEventListener('click', function () { if (!moved && i !== cur) go(i); });
  });
  root.addEventListener('keydown', function (ev) {
    if (ev.key === 'ArrowLeft') { go(cur - 1); ev.preventDefault(); }
    else if (ev.key === 'ArrowRight') { go(cur + 1); ev.preventDefault(); }
  });

  // swipe con pointer events
  var x0 = null, moved = false;
  stage.addEventListener('pointerdown', function (ev) { x0 = ev.clientX; moved = false; });
  stage.addEventListener('pointerup', function (ev) {
    if (x0 === null) return;
    var dx = ev.clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) { moved = true; go(dx < 0 ? cur + 1 : cur - 1); setTimeout(function () { moved = false; }, 0); }
  });
  stage.addEventListener('pointercancel', function () { x0 = null; });

  // pausa: ratón encima (no táctil), foco de teclado dentro, pestaña oculta
  root.addEventListener('pointerenter', function (ev) { if (ev.pointerType === 'mouse') { hover = true; sync(); } });
  root.addEventListener('pointerleave', function () { hover = false; sync(); });
  root.addEventListener('focusin', function (ev) {
    try { focus = ev.target.matches(':focus-visible'); } catch (_) { focus = false; }
    sync();
  });
  root.addEventListener('focusout', function () { focus = false; sync(); });
  document.addEventListener('visibilitychange', sync);
  if (reduce.addEventListener) reduce.addEventListener('change', sync);

  root.classList.add('is-js');
  render(false);
  sync();
  arm();
})();
