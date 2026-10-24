import { useEffect, useRef } from "react";

// One particle system that travels down the page. Every section declares a scene
// (data-globe), the orb blends between neighbouring scenes as you scroll, and each
// particle eases toward its slot in the target shape, so changes read as morphs.
const ACCENT = [244, 206, 21];
const FG = [240, 242, 240];
const CAMERA = 4;

const SCENES = {
  hero: { shape: "sphere", x: 0.5, y: 0.52, scale: 1.2, alpha: 1 },
  work: { shape: "field", x: 0.5, y: 0.5, scale: 1, alpha: 0.4 },
  about: { shape: "sphere", x: 0.74, y: 0.5, scale: 0.85, alpha: 0.85, portrait: { shape: "field", alpha: 0.3 } },
  skills: { shape: "sphere", x: 0.5, y: 0.5, scale: 1, alpha: 1 },
  quiet: { shape: "field", x: 0.5, y: 0.5, scale: 1, alpha: 0.28 },
  contact: { shape: "halo", x: 0.5, y: 0.47, scale: 2.3, alpha: 0.75 },
};

// Planar shapes sway instead of spinning so they never turn edge-on for long.
const SWAY = new Set(["eye"]);

function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function tilt(arr, ax, az = 0) {
  const cx = Math.cos(ax), sx = Math.sin(ax), cz = Math.cos(az), sz = Math.sin(az);
  for (let i = 0; i < arr.length; i += 3) {
    let x = arr[i], y = arr[i + 1], z = arr[i + 2];
    const y1 = y * cx - z * sx;
    z = y * sx + z * cx;
    y = y1;
    arr[i] = x * cz - y * sz;
    arr[i + 1] = x * sz + y * cz;
    arr[i + 2] = z;
  }
  return arr;
}

const SHAPES = {
  sphere(n) {
    const a = new Float32Array(n * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      a[i * 3] = Math.cos(golden * i) * r;
      a[i * 3 + 1] = y;
      a[i * 3 + 2] = Math.sin(golden * i) * r;
    }
    return a;
  },
  field(n) {
    const a = new Float32Array(n * 3);
    const rand = rng(3);
    for (let i = 0; i < n; i++) {
      const u = rand() * 2 - 1;
      const t = rand() * Math.PI * 2;
      const r = 1.7 + rand() * 1.9;
      const s = Math.sqrt(1 - u * u);
      a[i * 3] = Math.cos(t) * s * r * 1.3;
      a[i * 3 + 1] = u * r * 0.75;
      a[i * 3 + 2] = Math.sin(t) * s * r;
    }
    return a;
  },
  eye(n) {
    const a = new Float32Array(n * 3);
    const rand = rng(5);
    for (let i = 0; i < n; i++) {
      const k = i / n;
      let x, y;
      if (k < 0.38) {
        // Upper and lower lids.
        const t = rand() * 2 - 1;
        x = t * 1.25;
        y = (i % 2 ? 1 : -1) * 0.55 * (1 - t * t);
      } else if (k < 0.7) {
        const t = rand() * Math.PI * 2;
        const r = 0.42 + (rand() - 0.5) * 0.06;
        x = Math.cos(t) * r;
        y = Math.sin(t) * r;
      } else if (k < 0.85) {
        const t = rand() * Math.PI * 2;
        const r = Math.sqrt(rand()) * 0.17;
        x = Math.cos(t) * r;
        y = Math.sin(t) * r;
      } else {
        // Faint scan lines across the eye.
        x = (rand() * 2 - 1) * 1.5;
        y = (Math.floor(rand() * 7) - 3) * 0.16;
      }
      a[i * 3] = x;
      a[i * 3 + 1] = y;
      a[i * 3 + 2] = (rand() - 0.5) * 0.08;
    }
    return a;
  },
  loop(n) {
    const a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const u = (i / n) * Math.PI * 2;
      const v = ((i * 0.618034) % 1) * Math.PI * 2;
      const R = 0.95, r = 0.24;
      a[i * 3] = (R + r * Math.cos(v)) * Math.cos(u);
      a[i * 3 + 1] = r * Math.sin(v);
      a[i * 3 + 2] = (R + r * Math.cos(v)) * Math.sin(u);
    }
    return tilt(a, 0.95);
  },
  cube(n) {
    const a = new Float32Array(n * 3);
    const per = Math.ceil(n / 6);
    const g = Math.ceil(Math.sqrt(per));
    const s = 0.78;
    for (let i = 0; i < n; i++) {
      const face = i % 6;
      const j = Math.floor(i / 6);
      const u = ((j % g) / (g - 1)) * 2 - 1;
      const v = (Math.floor(j / g) / (g - 1)) * 2 - 1;
      const p = [u * s, v * s, face % 2 ? s : -s];
      const axis = Math.floor(face / 2);
      const o = axis === 0 ? [p[2], p[0], p[1]] : axis === 1 ? [p[0], p[2], p[1]] : p;
      a[i * 3] = o[0];
      a[i * 3 + 1] = o[1];
      a[i * 3 + 2] = o[2];
    }
    return tilt(a, 0.5, 0.3);
  },
  stack(n) {
    const a = new Float32Array(n * 3);
    const rand = rng(9);
    for (let i = 0; i < n; i++) {
      const layer = i % 3;
      const t = rand() * Math.PI * 2;
      const rim = rand() < 0.6;
      const r = rim ? 0.92 : Math.sqrt(rand()) * 0.92;
      a[i * 3] = Math.cos(t) * r;
      a[i * 3 + 1] = (layer - 1) * 0.62 + (rim ? (rand() - 0.5) * 0.18 : -0.09);
      a[i * 3 + 2] = Math.sin(t) * r;
    }
    return tilt(a, 0.42);
  },
  helix(n) {
    const a = new Float32Array(n * 3);
    const strands = Math.floor(n * 0.78);
    const rungs = 22;
    for (let i = 0; i < n; i++) {
      let x, y, z;
      if (i < strands) {
        const t = i / strands;
        const angle = t * Math.PI * 5 + (i % 2) * Math.PI;
        x = Math.cos(angle) * 0.55;
        z = Math.sin(angle) * 0.55;
        y = t * 2.4 - 1.2;
      } else {
        const j = i - strands;
        const t = (j % rungs) / (rungs - 1);
        const angle = t * Math.PI * 5;
        const m = ((j * 0.618034) % 1) * 2 - 1;
        x = Math.cos(angle) * 0.55 * m;
        z = Math.sin(angle) * 0.55 * m;
        y = t * 2.4 - 1.2;
      }
      a[i * 3] = x;
      a[i * 3 + 1] = y;
      a[i * 3 + 2] = z;
    }
    return tilt(a, 0, 0.35);
  },
  halo(n) {
    const a = new Float32Array(n * 3);
    const rand = rng(13);
    for (let i = 0; i < n; i++) {
      const t = rand() * Math.PI * 2;
      const dust = rand() < 0.18;
      const r = dust ? 1.1 + rand() * 0.45 : 1 + (rand() - 0.5) * 0.06;
      a[i * 3] = Math.cos(t) * r;
      a[i * 3 + 1] = (rand() - 0.5) * (dust ? 0.2 : 0.03);
      a[i * 3 + 2] = Math.sin(t) * r;
    }
    return tilt(a, 0.32, -0.06);
  },
};

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;

export default function ParticleGlobe() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let w = 0;
    let h = 0;
    let n = 0;
    let shapes = {};
    let pos = null;
    let meta = [];
    let sections = [];
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999, nx: 0, ny: 0 };
    const view = { x: 0, y: 0, R: 0, alpha: 0, sway: 0, tiltX: 0, tiltY: 0, ready: false };

    const build = (count) => {
      n = count;
      shapes = {};
      for (const k in SHAPES) shapes[k] = SHAPES[k](n);
      // Start scattered so the first frames assemble the orb.
      pos = Float32Array.from(shapes.field);
      const rand = rng(21);
      meta = Array.from({ length: n }, () => ({
        accent: rand() < 0.05,
        seed: rand() * Math.PI * 2,
        speed: reduced ? 1 : 0.035 + rand() * 0.06,
        ox: 0,
        oy: 0,
      }));
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Particle count is fixed at first paint so resizing never re-scatters the orb.
      if (!n) build(w < 700 ? 560 : 1000);
      sections = [...document.querySelectorAll("[data-globe]")];
    };

    // Resolve a section into concrete screen-space parameters.
    const resolve = (el) => {
      const base = SCENES[el.dataset.globe] || SCENES.quiet;
      const portrait = h > w;
      const s = portrait && base.portrait ? { ...base, ...base.portrait } : base;
      const shape = el.dataset.shape || s.shape;
      const anchor = el.querySelector("[data-globe-anchor]");
      if (anchor) {
        const r = anchor.getBoundingClientRect();
        return { shape, x: r.left + r.width / 2, y: r.top + r.height / 2, R: r.width / 2, alpha: s.alpha };
      }
      return {
        shape,
        x: (portrait ? 0.5 : s.x) * w,
        y: s.y * h,
        R: Math.min(w, h) * (portrait ? 0.4 : 0.32) * s.scale,
        alpha: s.alpha,
      };
    };

    // The section under the middle of the screen, blended into the next one
    // as its bottom edge approaches.
    const currentScene = () => {
      if (!sections.length) sections = [...document.querySelectorAll("[data-globe]")];
      if (!sections.length) {
        const s = { shape: "sphere", x: w / 2, y: h / 2, R: Math.min(w, h) * 0.32, alpha: 1 };
        return { a: s, b: s, t: 0 };
      }
      const mid = h / 2;
      let i = sections.findIndex((el) => el.getBoundingClientRect().bottom > mid);
      if (i === -1) i = sections.length - 1;
      const a = resolve(sections[i]);
      const next = sections[i + 1];
      if (!next) return { a, b: a, t: 0 };
      const d = sections[i].getBoundingClientRect().bottom - mid;
      const t = smooth(clamp(1 - d / (h * 0.6), 0, 1));
      return { a, b: resolve(next), t };
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.nx = e.clientX / w - 0.5;
      pointer.ny = e.clientY / h - 0.5;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };
    // Touch has no hover, so a lifted finger should not leave a dent in the orb.
    const onUp = (e) => {
      if (e.pointerType !== "mouse") onLeave();
    };
    const onVisibility = () => {
      running = !document.hidden;
      cancelAnimationFrame(raf);
      if (running && !reduced) raf = requestAnimationFrame(frame);
    };

    function frame(time) {
      const t = time * 0.001;
      const { a, b, t: mix } = currentScene();
      const ease = reduced || !view.ready ? 1 : 0.14;
      view.ready = true;
      view.x = lerp(view.x, lerp(a.x, b.x, mix), ease);
      view.y = lerp(view.y, lerp(a.y, b.y, mix), ease);
      view.R = lerp(view.R, lerp(a.R, b.R, mix), ease);
      view.alpha = lerp(view.alpha, lerp(a.alpha, b.alpha, mix), reduced ? 1 : 0.06);
      const swayTarget = lerp(SWAY.has(a.shape) ? 1 : 0, SWAY.has(b.shape) ? 1 : 0, mix);
      view.sway = lerp(view.sway, swayTarget, reduced ? 1 : 0.05);
      view.tiltX = lerp(view.tiltX, pointer.ny * 0.5, 0.05);
      view.tiltY = lerp(view.tiltY, pointer.nx * 0.7, 0.05);

      const spin = reduced ? 0.6 : t * 0.14;
      const ry = lerp(spin, Math.sin(t * 0.6) * 0.35, view.sway) + view.tiltY;
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      const cosX = Math.cos(view.tiltX), sinX = Math.sin(view.tiltX);
      const A = shapes[a.shape] || shapes.sphere;
      const B = shapes[b.shape] || shapes.sphere;
      const reach = 120;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < n; i++) {
        const m = meta[i];
        const j = i * 3;
        for (let k = 0; k < 3; k++) {
          const target = A[j + k] + (B[j + k] - A[j + k]) * mix;
          pos[j + k] += (target - pos[j + k]) * m.speed;
        }

        const breathe = reduced ? 1 : 1 + Math.sin(t * 1.3 + m.seed) * 0.025;
        let x = pos[j] * breathe, y = pos[j + 1] * breathe, z = pos[j + 2] * breathe;
        const x1 = x * cosY - z * sinY;
        z = x * sinY + z * cosY;
        x = x1;
        const y1 = y * cosX - z * sinX;
        z = y * sinX + z * cosX;
        y = y1;

        const gap = CAMERA - z;
        if (gap < 0.6) continue;
        const persp = (CAMERA - 1) / gap;
        let sx = view.x + x * view.R * persp;
        let sy = view.y + y * view.R * persp;

        const dx = sx - pointer.x, dy = sy - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < reach * reach && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = (1 - d / reach) * 4;
          m.ox += (dx / d) * f;
          m.oy += (dy / d) * f;
        }
        m.ox *= 0.9;
        m.oy *= 0.9;
        sx += m.ox;
        sy += m.oy;
        if (sx < -10 || sx > w + 10 || sy < -10 || sy > h + 10) continue;

        const depth = clamp((z + 1) / 2, 0, 1);
        const alpha = Math.min(1, (0.14 + depth * 0.8) * view.alpha);
        const size = Math.min(4, (m.accent ? 2.2 : 1.4) * (0.55 + persp * 0.55));
        const c = m.accent ? ACCENT : FG;
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
        ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
      }

      if (running && !reduced) raf = requestAnimationFrame(frame);
    }

    const redraw = () => frame(0);

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onLeave);
    window.addEventListener("blur", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    if (reduced) {
      window.addEventListener("scroll", redraw, { passive: true });
      window.addEventListener("resize", redraw);
      redraw();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onLeave);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", redraw);
      window.removeEventListener("resize", redraw);
    };
  }, []);

  return <canvas ref={ref} className="globe" aria-hidden="true" />;
}
