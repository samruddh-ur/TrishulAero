'use client';

/**
 * SiteEffects bundles the page-level motion engine that powers
 *   - cursor radial glow
 *   - scroll-reveal IntersectionObserver
 *   - stat counters
 *   - HUD live ticker (mission clock + ground speed + altitude)
 *   - canvas particle network on every `<canvas class="canvas-bg" />`
 *   - parallax hero tilt
 *   - smooth scroll for anchor links
 *   - demo form submit-state animation
 * Mounted once at the root layout; queries the DOM directly each render.
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];

    // ---------- Cursor glow ---------------------------------
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rafCursor: number | null = null;
    const onMouse = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (rafCursor) return;
      rafCursor = requestAnimationFrame(() => {
        root.style.setProperty('--mx', mx + 'px');
        root.style.setProperty('--my', my + 'px');
        rafCursor = null;
      });
    };
    window.addEventListener('mousemove', onMouse, { passive: true });
    cleanups.push(() => window.removeEventListener('mousemove', onMouse));

    // Per-card hover glow
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>('.system, .tech__cell, .contact-card')
    );
    const cardListeners: { el: HTMLElement; fn: (e: MouseEvent) => void }[] = [];
    cards.forEach((el) => {
      const fn = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
        el.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%');
      };
      el.addEventListener('mousemove', fn);
      cardListeners.push({ el, fn });
    });
    cleanups.push(() => cardListeners.forEach(({ el, fn }) => el.removeEventListener('mousemove', fn)));

    // ---------- Scroll reveal -------------------------------
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // ---------- Stat counters -------------------------------
    const statIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.counter || '0');
          const decimals = parseInt(el.dataset.decimals || '0', 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const v = target * eased;
            el.textContent = v.toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target.toFixed(decimals) + suffix;
          };
          requestAnimationFrame(tick);
          statIo.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>('[data-counter]').forEach((c) => statIo.observe(c));
    cleanups.push(() => statIo.disconnect());

    // ---------- HUD live ticker -----------------------------
    const hudTime = document.querySelector<HTMLElement>('[data-hud-time]');
    const hudVel = document.querySelector<HTMLElement>('[data-hud-vel]');
    const hudAlt = document.querySelector<HTMLElement>('[data-hud-alt]');
    let velBase = 22;
    let altBase = 1420;
    let hudIv: ReturnType<typeof setInterval> | null = null;
    if (hudTime || hudVel || hudAlt) {
      const startedAt = Date.now();
      hudIv = setInterval(() => {
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
    cleanups.push(() => { if (hudIv) clearInterval(hudIv); });

    // ---------- Canvas particle networks -------------------
    const canvases = Array.from(document.querySelectorAll<HTMLCanvasElement>('canvas.canvas-bg'));
    const canvasState: { canvas: HTMLCanvasElement; raf: number; ro: ResizeObserver }[] = [];
    canvases.forEach((canvas) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const mode = canvas.dataset.mode || 'nodes';
      const density = parseInt(canvas.dataset.density || '70', 10);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let w = 0;
      let h = 0;
      let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
      let raf = 0;

      const init = () => {
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
      };
      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        init();
      };
      const draw = () => {
        ctx.clearRect(0, 0, w, h);
        const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7);
        grad.addColorStop(0, 'rgba(255, 122, 24, 0.04)');
        grad.addColorStop(1, 'rgba(255, 122, 24, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 130) {
              const alpha = (1 - d / 130) * 0.28;
              ctx.strokeStyle = `rgba(160, 170, 185, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
        for (const n of nodes) {
          ctx.beginPath();
          ctx.fillStyle = mode === 'orange' ? 'rgba(255, 122, 24, .9)' : 'rgba(220, 226, 235, .85)';
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        }
        raf = requestAnimationFrame(draw);
      };
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);
      resize();
      draw();
      canvasState.push({ canvas, raf, ro });
    });
    cleanups.push(() => {
      canvasState.forEach(({ raf, ro }) => {
        cancelAnimationFrame(raf);
        ro.disconnect();
      });
    });

    // ---------- Hero parallax tilt --------------------------
    const heroMedia = document.querySelector<HTMLElement>('.hero__media');
    if (heroMedia) {
      const onMoveHero = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        heroMedia.style.transform = `translate(${-x}px, ${-y}px) scale(1.04)`;
      };
      window.addEventListener('mousemove', onMoveHero, { passive: true });
      cleanups.push(() => window.removeEventListener('mousemove', onMoveHero));
    }

    // ---------- Smooth anchor scroll ------------------------
    const anchorHandlers: { a: HTMLAnchorElement; fn: (e: MouseEvent) => void }[] = [];
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const fn = (e: MouseEvent) => {
        const id = a.getAttribute('href') || '';
        if (id.length < 2) return;
        const t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      a.addEventListener('click', fn);
      anchorHandlers.push({ a, fn });
    });
    cleanups.push(() => anchorHandlers.forEach(({ a, fn }) => a.removeEventListener('click', fn)));

    // ---------- Demo form submit ----------------------------
    const formHandlers: { form: HTMLFormElement; fn: (e: SubmitEvent) => void }[] = [];
    document.querySelectorAll<HTMLFormElement>('form[data-demo]').forEach((form) => {
      const fn = (e: SubmitEvent) => {
        e.preventDefault();
        const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        if (!btn) return;
        const orig = btn.textContent || 'Submit';
        btn.textContent = 'TRANSMITTING…';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = 'MESSAGE RECEIVED ✓';
          setTimeout(() => {
            btn.textContent = orig;
            btn.disabled = false;
            form.reset();
          }, 2400);
        }, 1200);
      };
      form.addEventListener('submit', fn as EventListener);
      formHandlers.push({ form, fn });
    });
    cleanups.push(() =>
      formHandlers.forEach(({ form, fn }) => form.removeEventListener('submit', fn as EventListener))
    );

    // ---------- Formspree form submit (real) ----------------
    const fsHandlers: { form: HTMLFormElement; fn: (e: SubmitEvent) => void }[] = [];
    document.querySelectorAll<HTMLFormElement>('form[data-formspree]').forEach((form) => {
      const fn = async (e: SubmitEvent) => {
        e.preventDefault();
        const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        const status = form.querySelector<HTMLElement>('.form-status');
        const orig = btn ? btn.textContent || 'Send Message' : '';
        const setStatus = (text: string, kind: 'ok' | 'err' | 'info') => {
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
            const data: any = await res.json().catch(() => ({}));
            const msg =
              (data && data.errors && data.errors.map((er: any) => er.message).join(', ')) ||
              'Something went wrong — please email contact@trishulaero.com directly.';
            if (btn) btn.textContent = 'TRY AGAIN';
            setStatus(msg, 'err');
          }
        } catch {
          if (btn) btn.textContent = 'TRY AGAIN';
          setStatus('Network error — please email contact@trishulaero.com directly.', 'err');
        } finally {
          if (btn) setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
        }
      };
      form.addEventListener('submit', fn as EventListener);
      fsHandlers.push({ form, fn });
    });
    cleanups.push(() =>
      fsHandlers.forEach(({ form, fn }) => form.removeEventListener('submit', fn as EventListener))
    );

    return () => cleanups.forEach((c) => c());
    // Re-run on route change so newly mounted DOM gets wired.
  }, [pathname]);

  return null;
}
