"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// VALUE NOISE + FBM
// Integer hash → deterministic pseudo-random value noise → fractional Brownian motion
// ─────────────────────────────────────────────────────────────────────────────

function nhash(xi: number, yi: number, seed: number): number {
  let h = (xi * 374761393 + yi * 668265263 + seed) | 0;
  h = (Math.imul(h ^ (h >>> 13), 1274126177)) | 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function vnoise(x: number, y: number, seed: number): number {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix,        fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  return (
    nhash(ix,   iy,   seed) * (1-ux) * (1-uy) +
    nhash(ix+1, iy,   seed) *    ux  * (1-uy) +
    nhash(ix,   iy+1, seed) * (1-ux) *    uy  +
    nhash(ix+1, iy+1, seed) *    ux  *    uy
  );
}

function fbm(x: number, y: number, seed: number, octs: number): number {
  let v = 0, a = 0.5, f = 1, t = 0;
  for (let i = 0; i < octs; i++) {
    v += vnoise(x * f, y * f, seed + i * 97) * a;
    t += a;
    a *= 0.5;
    f *= 2.1;
  }
  return v / t;
}

// ─────────────────────────────────────────────────────────────────────────────
// NEBULA PRE-RENDER
// Builds a small (0.18× screen) canvas with noise-generated volumetric cloud
// data.  Uses domain warping for organic, non-circular smoke shapes.
// Drawn once at startup; reused every frame via drawImage (GPU-accelerated).
// ─────────────────────────────────────────────────────────────────────────────

function buildNebula(screenW: number, screenH: number, seed: number): HTMLCanvasElement {
  const SCALE = 0.18;
  const nw = Math.max(2, Math.ceil(screenW * SCALE));
  const nh = Math.max(2, Math.ceil(screenH * SCALE));

  const el = document.createElement("canvas");
  el.width = nw; el.height = nh;
  const c = el.getContext("2d")!;
  const img = c.createImageData(nw, nh);
  const d   = img.data;

  for (let py = 0; py < nh; py++) {
    for (let px = 0; px < nw; px++) {
      // Map pixel to noise space
      const nx = (px / nw) * 5.5;
      const ny = (py / nh) * 3.5;

      // Domain warp: distort sampling coordinates with a secondary FBM.
      // This breaks circular symmetry and creates wispy tendrils.
      const wx = nx + 1.4 * fbm(nx + 0.8, ny + 2.0, seed + 3000, 3);
      const wy = ny + 1.4 * fbm(nx + 5.2, ny + 1.3, seed + 4000, 3);

      // Main density: blend direct + domain-warped FBM
      const n1  = fbm(nx, ny, seed, 4);
      const n2  = fbm(wx, wy, seed + 5000, 4);
      let   den = n1 * 0.35 + n2 * 0.65;

      // Contrast: carve out void regions, make clouds denser
      den = Math.pow(Math.max(0, den - 0.22) / 0.78, 1.5);

      // Spatial focus: reference image has nebula concentrated in left-center /
      // top-center (TC avg #470fa1, MC avg #46109e, right side near-black void)
      const vx    = (px / nw - 0.38) * 1.5;
      const vy    = (py / nh - 0.48) * 1.3;
      const focus = Math.max(0, 1 - (vx * vx + vy * vy) * 0.85);
      den *= 0.15 + focus * 0.85;
      den  = Math.min(1, den);

      // ── Color mapping — STRICT palette only ────────────────────────────────
      // #101633 → #161D45 → #2A176B → #3C1D8C → #5B2AE6 → #6D32FF
      let r=0, g=0, b=0, a=0;
      const t = den;
      if (t > 0.01) {
        if (t < 0.30) {
          // Shadow: #101633 → #161D45
          const f = t / 0.30;
          r = Math.round(16 + f*6);
          g = Math.round(22 + f*7);
          b = Math.round(51 + f*18);
          a = Math.round(f * 68);
        } else if (t < 0.55) {
          // Mid-low: #161D45 → #2A176B
          const f = (t - 0.30) / 0.25;
          r = Math.round(22 + f*20);
          g = Math.round(29 - f*6);    // green dips slightly (matches palette)
          b = Math.round(69 + f*38);
          a = Math.round(68 + f*47);
        } else if (t < 0.75) {
          // Mid-high: #2A176B → #3C1D8C
          const f = (t - 0.55) / 0.20;
          r = Math.round(42 + f*18);
          g = Math.round(23 + f*6);
          b = Math.round(107 + f*33);
          a = Math.round(115 + f*30);
        } else if (t < 0.88) {
          // Bright: #3C1D8C → #5B2AE6
          const f = (t - 0.75) / 0.13;
          r = Math.round(60 + f*31);
          g = Math.round(29 + f*13);
          b = Math.round(140 + f*90);
          a = Math.round(145 + f*25);
        } else {
          // Peak: #5B2AE6 → #6D32FF
          const f = (t - 0.88) / 0.12;
          r = Math.round(91 + f*18);
          g = Math.round(42 + f*8);
          b = Math.round(230 + f*25);
          a = Math.round(170 + f*15);
        }
      }

      const idx = (py * nw + px) * 4;
      d[idx]=r; d[idx+1]=g; d[idx+2]=b; d[idx+3]=a;
    }
  }

  c.putImageData(img, 0, 0);
  return el;
}

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface Star {
  x: number; y: number;
  size: number;
  baseOp: number;
  phaseOff: number;   // desync offset 0–2π
  cycleSecs: number;  // twinkle period in seconds
  layer: 0 | 1 | 2;  // 0=far, 1=mid, 2=near
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasOrNull = canvasRef.current;
    if (!canvasOrNull) return;
    // Bind to an explicitly-typed const so TypeScript trusts it inside closures
    const canvas: HTMLCanvasElement = canvasOrNull;
    // alpha:false → browser can skip alpha compositing on the main canvas
    const ctxOrNull = canvas.getContext("2d", { alpha: false });
    if (!ctxOrNull) return;
    const ctx: CanvasRenderingContext2D = ctxOrNull;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Mutable state (kept in closure — zero React re-renders during animation)
    let W = 0, H = 0;
    let neb1: HTMLCanvasElement | null = null;
    let neb2: HTMLCanvasElement | null = null;
    let stars: Star[] = [];

    const DUST_N = 1800;
    const dustX  = new Array<number>(DUST_N);
    const dustY  = new Array<number>(DUST_N);
    const dustSz = new Array<number>(DUST_N);
    const dustOp = new Array<number>(DUST_N);

    let raf      = 0;
    let prevT    = 0;
    let time     = 0;
    let mouseX   = 0, mouseY   = 0;
    let targetMX = 0, targetMY = 0;

    // ── Dust init ────────────────────────────────────────────────────────────
    function initDust() {
      for (let i = 0; i < DUST_N; i++) {
        dustX[i]  = Math.random() * W;
        dustY[i]  = Math.random() * H;
        dustSz[i] = 0.15 + Math.random() * 0.35;
        dustOp[i] = 0.022 + Math.random() * 0.058;
      }
    }

    // ── Scene init ───────────────────────────────────────────────────────────
    function initScene(w: number, h: number) {
      W = canvas.width  = w;
      H = canvas.height = h;
      targetMX = mouseX = w * 0.5;
      targetMY = mouseY = h * 0.5;

      // Build noise-based nebula textures (one-time CPU cost ~40-80ms)
      neb1 = buildNebula(w, h, 42);
      neb2 = buildNebula(w, h, 137);

      // Star layers: far / mid / near
      stars = [];
      const layers = [
        { n: 385, sMin:0.25, sMax:0.80,  opMin:0.20, opMax:0.56, cMin:8,  cMax:14 },
        { n: 115, sMin:0.70, sMax:1.35,  opMin:0.40, opMax:0.80, cMin:5,  cMax:10 },
        { n:  20, sMin:1.20, sMax:2.20,  opMin:0.58, opMax:0.95, cMin:4,  cMax: 8 },
      ];
      for (let l = 0; l < 3; l++) {
        const cfg = layers[l];
        for (let i = 0; i < cfg.n; i++) {
          stars.push({
            x:         Math.random() * w,
            y:         Math.random() * h,
            size:      cfg.sMin + Math.random() * (cfg.sMax - cfg.sMin),
            baseOp:    cfg.opMin + Math.random() * (cfg.opMax - cfg.opMin),
            phaseOff:  Math.random() * Math.PI * 2,
            cycleSecs: cfg.cMin  + Math.random() * (cfg.cMax  - cfg.cMin),
            layer:     l as 0|1|2,
          });
        }
      }

      initDust();
    }

    // ── Draw loop ────────────────────────────────────────────────────────────
    function draw(ts: number) {
      if (prevT === 0) prevT = ts;
      const dt = Math.min((ts - prevT) / 1000, 0.1); // seconds, capped
      prevT = ts;
      if (!reduced) time += dt;

      // Smooth mouse follow
      mouseX += (targetMX - mouseX) * 0.05;
      mouseY += (targetMY - mouseY) * 0.05;

      // ── Layer 1: base background ──────────────────────────────────────────
      ctx.fillStyle = "#040611";
      ctx.fillRect(0, 0, W, H);

      // Subtle vertical gradient (#040611 top → #070A1A bottom)
      const vg = ctx.createLinearGradient(0, 0, 0, H);
      vg.addColorStop(0, "rgba(4,6,17,0)");
      vg.addColorStop(1, "rgba(7,10,26,0.32)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      // ── Layer 2: volumetric nebula formations ─────────────────────────────
      // Drawn with "screen" blend: adds light to the dark base.
      // Extremely slow sinusoidal drift — 60–90s apparent cycle.
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      if (neb1) {
        // Primary nebula: slow drift, full weight
        const ox1 = Math.sin(time * 0.011) * W * 0.024;
        const oy1 = Math.cos(time * 0.008) * H * 0.016;
        ctx.globalAlpha = 0.88;
        // Draw 1.08× to provide buffer for drift without edge artifacts
        ctx.drawImage(neb1, ox1 - W * 0.04, oy1 - H * 0.04, W * 1.08, H * 1.08);
      }

      if (neb2) {
        // Secondary nebula: different phase, slightly lower weight
        const ox2 = Math.cos(time * 0.009 + 1.2) * W * 0.019;
        const oy2 = Math.sin(time * 0.007 + 0.9) * H * 0.014;
        ctx.globalAlpha = 0.60;
        ctx.drawImage(neb2, ox2 - W * 0.04, oy2 - H * 0.04, W * 1.08, H * 1.08);
      }

      ctx.restore();

      // ── Layer 4: micro dust field ─────────────────────────────────────────
      // Thousands of ultra-faint sub-pixel specks — adds grain/texture.
      // No animation (static positions, just painted each frame).
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      for (let i = 0; i < DUST_N; i++) {
        ctx.globalAlpha = dustOp[i];
        ctx.fillStyle   = "rgb(210,218,255)";
        ctx.fillRect(dustX[i], dustY[i], dustSz[i], dustSz[i]);
      }
      ctx.restore();

      // ── Layer 3: stardust — three depth planes ────────────────────────────
      // Parallax offset from cursor: max ~6–8px for near layer.
      const pmx = (mouseX - W * 0.5) * 0.055;
      const pmy = (mouseY - H * 0.5) * 0.055;
      // Per-layer parallax multipliers: far=0.15, mid=0.45, near=1.0
      const PM: [number, number, number] = [0.15, 0.45, 1.0];

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (const s of stars) {
        // Twinkle: sinusoidal opacity with per-star random phase + speed
        const op = Math.max(0.04, Math.min(1,
          s.baseOp + Math.sin((Math.PI * 2 / s.cycleSecs) * time + s.phaseOff) * 0.28
        ));

        // Parallax position
        const sx = s.x + pmx * PM[s.layer];
        const sy = s.y + pmy * PM[s.layer];

        // Star color: far=pale blue-white, mid=lavender-white, near=pure white
        const cr = s.layer === 2 ? 255 : s.layer === 1 ? 235 : 220;
        const cg = s.layer === 2 ? 255 : s.layer === 1 ? 238 : 225;
        const cb = 255;

        // Soft diffraction glow for larger/brighter stars only (performance guard)
        if (s.size > 0.85 && op > 0.40) {
          const gr  = s.size * 5.5;
          const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, gr);
          grd.addColorStop(0,   `rgba(${cr},${cg},${cb},${op * 0.46})`);
          grd.addColorStop(0.4, `rgba(${cr},${cg},${cb},${op * 0.08})`);
          grd.addColorStop(1,   `rgba(${cr},${cg},${cb},0)`);
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(sx, sy, gr, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // Star point
        ctx.globalAlpha = op;
        ctx.fillStyle   = `rgb(${cr},${cg},${cb})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      raf = requestAnimationFrame(draw);
    }

    // ── Event handlers ───────────────────────────────────────────────────────
    let resizeTm: ReturnType<typeof setTimeout>;

    const onResize = () => {
      clearTimeout(resizeTm);
      resizeTm = setTimeout(() => {
        initScene(window.innerWidth, window.innerHeight);
        prevT = 0;
      }, 200);
    };

    const onMouse = (e: MouseEvent) => {
      targetMX = e.clientX;
      targetMY = e.clientY;
    };

    const onVisible = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        prevT = 0;
        raf   = requestAnimationFrame(draw);
      }
    };

    // ── Start ────────────────────────────────────────────────────────────────
    initScene(window.innerWidth, window.innerHeight);
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize",              onResize);
    window.addEventListener("mousemove",           onMouse);
    document.addEventListener("visibilitychange",  onVisible);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTm);
      window.removeEventListener("resize",             onResize);
      window.removeEventListener("mousemove",          onMouse);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
