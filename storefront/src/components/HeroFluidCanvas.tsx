"use client";

import { useEffect, useRef } from "react";

export default function HeroFluidCanvas({ opacity = 1 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let W = 0;
    let H = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      W = rect?.width ?? window.innerWidth;
      H = rect?.height ?? window.innerHeight;
      canvas.width = Math.round(W * window.devicePixelRatio);
      canvas.height = Math.round(H * window.devicePixelRatio);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const ro = new ResizeObserver(() => {
      resize();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    // Define the "blobs" that create the fluid/cloud effect
    // Each blob is a soft radial gradient that drifts around the canvas
    const blobs = [
      { cx: 0.5,  cy: 0.45, r: 0.50, color: [100, 180, 220], a: 0.58, sx: 0.09, sy: 0.06, px: 0.0,  py: 0.0  },
      { cx: 0.42, cy: 0.55, r: 0.42, color: [80,  200, 200], a: 0.46, sx: 0.07, sy: 0.11, px: 1.0,  py: 2.0  },
      { cx: 0.58, cy: 0.40, r: 0.38, color: [130, 190, 215], a: 0.50, sx: 0.11, sy: 0.08, px: 3.0,  py: 1.5  },
      { cx: 0.50, cy: 0.60, r: 0.45, color: [90,  210, 195], a: 0.38, sx: 0.06, sy: 0.09, px: 2.0,  py: 4.0  },
      { cx: 0.45, cy: 0.50, r: 0.35, color: [150, 195, 230], a: 0.42, sx: 0.12, sy: 0.07, px: 5.0,  py: 0.5  },
    ];

    let startTime: number | null = null;

    const draw = (ts: number) => {
      if (!startTime) startTime = ts;
      const t = (ts - startTime) / 1000;

      ctx.clearRect(0, 0, W, H);

      for (const b of blobs) {
        // Each blob drifts in a slow Lissajous-like path
        const x = (b.cx + Math.sin(t * b.sx + b.px) * 0.14) * W;
        const y = (b.cy + Math.cos(t * b.sy + b.py) * 0.12) * H;
        const r = b.r * Math.min(W, H);

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        const [red, green, blue] = b.color;
        grad.addColorStop(0,   `rgba(${red},${green},${blue},${b.a})`);
        grad.addColorStop(0.5, `rgba(${red},${green},${blue},${b.a * 0.4})`);
        grad.addColorStop(1,   `rgba(${red},${green},${blue},0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-1"
      style={opacity < 1 ? { opacity } : undefined}
      aria-hidden
    />
  );
}
