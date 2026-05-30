/* =========================================================
   TRISHUL AERO — Cinematic Motion Engine
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 1. CURSOR GLOW ---------------------------- */
  const root = document.documentElement;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rafCursor = null;
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (rafCursor) return;
    rafCursor = requestAnimationFrame(() => {
      root.style.setProperty('--mx', mx + 'px');
      root.style.setProperty('--my', my + 'px');
      rafCursor = null;
    });
  }, { passive: true });

  // Per-card hover glow
  document.querySelectorAll('.system, .tech__cell, .contact-card').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
      el.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  });

  /* ---------- 2. NAV SCROLL ----------------------------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 3. REVEAL ON SCROLL ----------------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));

  /* ---------- 4. STAT COUNTER --------------------------- */
  const counters = document.querySelectorAll('[data-counter]');
  const statIo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      const startVal = 0;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = startVal + (target - startVal) * eased;
        el.textContent = v.toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      };
      requestAnimationFrame(tick);
      statIo.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => statIo.observe(c));

  /* ---------- 5. HUD LIVE TICKER ------------------------ */
  const hudTime = document.querySelector('[data-hud-time]');
  const hudVel  = document.querySelector('[data-hud-vel]');
  const hudAlt  = document.querySelector('[data-hud-alt]');
  let velBase = 22, altBase = 1420;
  if (hudTime || hudVel || hudAlt) {
    const startedAt = Date.now();
    setInterval(() => {
      if (hudTime) {
        const t = Math.floor((Date.now() - startedAt) / 1000) + 582;
        const hh = String(Math.floor(t / 3600)).padStart(2, '0');
        const mm = String(Math.floor((t / 60) % 60)).padStart(2, '0');
        const ss = String(t % 60).padStart(2, '0');
        hudTime.textContent = `${hh}:${mm}:${ss}`;
      }
      if (hudVel) {
        velBase += (Math.random() - 0.5) * 0.6;
        velBase = Math.max(18, Math.min(28, velBase));
        hudVel.textContent = velBase.toFixed(1) + ' m/s';
      }
      if (hudAlt) {
        altBase += (Math.random() - 0.5) * 3;
        altBase = Math.max(1380, Math.min(1460, altBase));
        hudAlt.textContent = Math.round(altBase) + ' m';
      }
    }, 800);
  }

  /* ---------- 6. PARTICLE / GRID CANVAS ----------------- */
  const canvases = document.querySelectorAll('canvas.canvas-bg');
  canvases.forEach((canvas) => {
    const ctx = canvas.getContext('2d');
    const mode = canvas.dataset.mode || 'nodes';
    let w, h, nodes, raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      init();
    }
    function init() {
      const density = parseInt(canvas.dataset.density || '70', 10);
      nodes = [];
      for (let i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.4 + 0.4
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      // background gradient
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7);
      grad.addColorStop(0, 'rgba(255, 122, 24, 0.04)');
      grad.addColorStop(1, 'rgba(255, 122, 24, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // node motion
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      // connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.28;
            ctx.strokeStyle = `rgba(160, 170, 185, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = mode === 'orange' ? 'rgba(255, 122, 24, .9)' : 'rgba(220, 226, 235, .85)';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();
  });

  /* ---------- 7. PARALLAX HERO TILT --------------------- */
  const heroMedia = document.querySelector('.hero__media');
  if (heroMedia) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      heroMedia.style.transform = `translate(${-x}px, ${-y}px) scale(1.04)`;
    }, { passive: true });
  }

  /* ---------- 8. SMOOTH ANCHOR -------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- 9. NAV ACTIVE LINK ------------------------ */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });

  /* ---------- 10. FORM SUBMIT (DEMO) -------------------- */
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'TRANSMITTING…';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = 'MESSAGE RECEIVED ✓';
          setTimeout(() => { btn.textContent = orig; btn.disabled = false; form.reset(); }, 2400);
        }, 1200);
      }
    });
  });

  /* ---------- 11. FORM SUBMIT (FORMSPREE — REAL) -------- */
  document.querySelectorAll('form[data-formspree]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const status = form.querySelector('.form-status');
      const orig = btn ? btn.textContent : '';
      const setStatus = (text, kind) => {
        if (!status) return;
        status.textContent = text;
        status.style.color =
          kind === 'ok'  ? 'var(--ok)' :
          kind === 'err' ? 'var(--danger)' :
                           'var(--text-mute)';
      };
      if (btn) { btn.textContent = 'TRANSMITTING…'; btn.disabled = true; }
      setStatus('Routing your message to an engineer…', 'info');
      try {
        const res = await fetch(form.action, {
          method: form.method || 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form)
        });
        if (res.ok) {
          if (btn) btn.textContent = 'MESSAGE RECEIVED ✓';
          setStatus('Received. You will hear back within one business day.', 'ok');
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          const msg = (data && data.errors && data.errors.map((er) => er.message).join(', ')) ||
            'Something went wrong — please email contact@trishulaero.com directly.';
          if (btn) btn.textContent = 'TRY AGAIN';
          setStatus(msg, 'err');
        }
      } catch (_) {
        if (btn) btn.textContent = 'TRY AGAIN';
        setStatus('Network error — please email contact@trishulaero.com directly.', 'err');
      } finally {
        if (btn) setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
      }
    });
  });

})();
