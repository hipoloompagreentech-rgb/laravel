import React, { useEffect, useRef } from 'react';

type SnowfallProps = {
  count?: number;
  color?: string; // "r,g,b"
  speed?: number;
  pileHeight?: number;
};

type Flake = {
  x: number;
  y: number;
  r: number;
  d: number;
  vx: number;
  vy: number;
};

export default function Snowfall({
  count = 60,
  color = '255,255,255',
  speed = 1,
  pileHeight = 80,
}: SnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pileRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const flakesRef = useRef<Flake[]>([]);
  const pileRef2 = useRef<number[]>([]);
  const angleRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    const pileEl = pileRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = window.innerWidth;
    let height = window.innerHeight;
    let pileBins = Math.max(40, Math.floor(width / 8));
    let binWidth = width / pileBins;

    function setCanvasSize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (pileEl) {
        pileEl.style.width = `${width}px`;
        pileEl.style.height = `${pileHeight}px`;
        pileEl.width = Math.floor(width * dpr);
        pileEl.height = Math.floor(pileHeight * dpr);
        const pctx = pileEl.getContext('2d');
        if (pctx) pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }

    setCanvasSize();

    // Inicializar copos solo si está vacío
    if (flakesRef.current.length === 0) {
      for (let i = 0; i < count; i++) {
        flakesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 1 + Math.random() * 3,
          d: Math.random() * count,
          vx: (Math.random() - 0.5) * 0.5,
          vy: 0.5 + Math.random() * 1.5,
        });
      }
    }

    // Inicializar pile
    if (pileRef2.current.length === 0) {
      pileRef2.current = new Array(pileBins).fill(0);
    }

    const maxPile = 18;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgba(${color}, 0.95)`;
      ctx.beginPath();
      for (let i = 0; i < flakesRef.current.length; i++) {
        const f = flakesRef.current[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      }
      ctx.fill();
      update();
      drawPile();
      rafRef.current = requestAnimationFrame(draw);
    }

    function update() {
      angleRef.current += 0.001 * speed;
      const pileCanvasHeight = pileEl ? pileEl.height / dpr : 0;
      for (let i = 0; i < flakesRef.current.length; i++) {
        const f = flakesRef.current[i];
        f.x += Math.sin(angleRef.current + f.d) * 0.5 + f.vx;
        f.y += f.vy * speed;

        const pileTriggerY = height - (pileCanvasHeight + 4);
        if (f.y > pileTriggerY) {
          const idx = Math.min(pileBins - 1, Math.max(0, Math.floor(f.x / binWidth)));
          if (pileRef2.current[idx] < maxPile) {
            pileRef2.current[idx] += Math.ceil(f.r);
          }
          flakesRef.current[i] = {
            x: Math.random() * width,
            y: -10 - Math.random() * 50,
            r: 1 + Math.random() * 3,
            d: f.d,
            vx: (Math.random() - 0.5) * 0.5,
            vy: 0.5 + Math.random() * 1.5,
          };
        } else if (f.x > width + 5 || f.x < -5 || f.y > height + 5) {
          flakesRef.current[i] = {
            x: Math.random() * width,
            y: -10 - Math.random() * 50,
            r: 1 + Math.random() * 3,
            d: f.d,
            vx: (Math.random() - 0.5) * 0.5,
            vy: 0.5 + Math.random() * 1.5,
          };
        }
      }
    }

    function drawPile() {
      if (!pileEl) return;
      const pctx = pileEl.getContext('2d');
      if (!pctx) return;
      const pileCanvasHeight = pileEl.height / dpr;
      pctx.clearRect(0, 0, width, pileCanvasHeight);
      pctx.fillStyle = `rgba(${color}, 1)`;
      for (let i = 0; i < pileBins; i++) {
        const h = pileRef2.current[i];
        if (h <= 0) continue;
        const x = i * binWidth;
        pctx.beginPath();
        pctx.moveTo(x, pileCanvasHeight);
        pctx.quadraticCurveTo(x + binWidth / 2, pileCanvasHeight - h * 0.8, x + binWidth, pileCanvasHeight);
        pctx.closePath();
        pctx.fill();
      }
    }

    function handleResize() {
      setCanvasSize();
      pileBins = Math.max(40, Math.floor(window.innerWidth / 8));
      binWidth = window.innerWidth / pileBins;
      // Ajustar el array de pile al nuevo tamaño
      const oldPile = [...pileRef2.current];
      pileRef2.current = new Array(pileBins).fill(0);
      // Redistribuir la nieve acumulada proporcionalmente
      for (let i = 0; i < oldPile.length; i++) {
        const newIdx = Math.floor((i / oldPile.length) * pileBins);
        if (newIdx < pileBins) {
          pileRef2.current[newIdx] = Math.max(pileRef2.current[newIdx], oldPile[i]);
        }
      }
    }

    window.addEventListener('resize', handleResize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [count, color, speed, pileHeight]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-40" aria-hidden />
      <canvas ref={pileRef} className="pointer-events-none fixed left-0 right-0 bottom-0 z-50" aria-hidden style={{ height: pileHeight }} />
    </>
  );
}