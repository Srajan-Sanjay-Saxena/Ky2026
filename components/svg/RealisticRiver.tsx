"use client";

import { useEffect, useRef } from "react";

export default function RealisticRiver({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Particles (leaves, petals)
    const particles: { x: number; y: number; size: number; speed: number; opacity: number; type: number }[] = [];
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 2 + Math.random() * 4,
        speed: 0.3 + Math.random() * 0.5,
        opacity: 0.3 + Math.random() * 0.4,
        type: Math.floor(Math.random() * 3),
      });
    }

    // Sparkles
    const sparkles: { x: number; y: number; life: number; maxLife: number }[] = [];
    for (let i = 0; i < 25; i++) {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4,
        life: Math.random() * 100,
        maxLife: 80 + Math.random() * 60,
      });
    }

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      time += 0.008;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Deep water gradient with depth
      const waterGrad = ctx.createLinearGradient(0, 0, 0, h);
      waterGrad.addColorStop(0, "#1a4a6e");
      waterGrad.addColorStop(0.15, "#15405c");
      waterGrad.addColorStop(0.35, "#12354d");
      waterGrad.addColorStop(0.55, "#0f2a3e");
      waterGrad.addColorStop(0.75, "#0c2030");
      waterGrad.addColorStop(1, "#081520");
      ctx.fillStyle = waterGrad;
      ctx.fillRect(0, 0, w, h);

      // Moonlight reflection (central glow)
      const moonGrad = ctx.createRadialGradient(w * 0.5, 0, 0, w * 0.5, h * 0.3, w * 0.5);
      moonGrad.addColorStop(0, "rgba(200, 220, 255, 0.18)");
      moonGrad.addColorStop(0.3, "rgba(180, 200, 240, 0.1)");
      moonGrad.addColorStop(0.6, "rgba(150, 180, 220, 0.04)");
      moonGrad.addColorStop(1, "rgba(100, 150, 200, 0)");
      ctx.fillStyle = moonGrad;
      ctx.fillRect(0, 0, w, h);

      // Flowing wave layers (multiple for depth)
      const waveLayers = [
        { y: h * 0.05, amp: 3, freq: 0.008, speed: 1.2, alpha: 0.12, color: "200, 230, 255" },
        { y: h * 0.12, amp: 4, freq: 0.006, speed: 0.9, alpha: 0.1, color: "180, 210, 245" },
        { y: h * 0.22, amp: 5, freq: 0.005, speed: 0.7, alpha: 0.08, color: "160, 190, 230" },
        { y: h * 0.35, amp: 6, freq: 0.004, speed: 0.5, alpha: 0.06, color: "140, 170, 215" },
        { y: h * 0.5, amp: 4, freq: 0.003, speed: 0.4, alpha: 0.04, color: "120, 150, 200" },
        { y: h * 0.68, amp: 8, freq: 0.007, speed: 0.6, alpha: 0.07, color: "100, 140, 190" },
        { y: h * 0.82, amp: 10, freq: 0.009, speed: 0.8, alpha: 0.09, color: "80, 130, 180" },
      ];

      waveLayers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(0, layer.y);
        for (let x = 0; x <= w; x += 3) {
          const y =
            layer.y +
            Math.sin(x * layer.freq + time * layer.speed) * layer.amp +
            Math.sin(x * layer.freq * 1.5 + time * layer.speed * 1.3) * (layer.amp * 0.5) +
            Math.sin(x * layer.freq * 0.5 + time * layer.speed * 0.7) * (layer.amp * 0.3);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, layer.y + 20);
        ctx.lineTo(0, layer.y + 20);
        ctx.closePath();
        ctx.fillStyle = `rgba(${layer.color}, ${layer.alpha})`;
        ctx.fill();
      });

      // Horizontal flow lines (water current)
      ctx.strokeStyle = "rgba(180, 210, 240, 0.04)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 12; i++) {
        const baseY = h * 0.1 + i * (h * 0.075);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 5) {
          const offset = Math.sin(x * 0.01 + time + i * 0.5) * 3;
          if (x === 0) ctx.moveTo(x, baseY + offset);
          else ctx.lineTo(x, baseY + offset);
        }
        ctx.stroke();
      }

      // Ripple circles (random positions)
      const rippleCount = 6;
      for (let i = 0; i < rippleCount; i++) {
        const rippleTime = (time * 0.5 + i * 1.5) % 4;
        const rippleX = (w * (0.15 + (i * 0.14))) + Math.sin(time + i) * 20;
        const rippleY = h * (0.15 + (i % 3) * 0.25) + Math.cos(time * 0.5 + i) * 10;
        const rippleRadius = rippleTime * 25;
        const rippleAlpha = Math.max(0, 0.15 - rippleTime * 0.04);

        ctx.beginPath();
        ctx.arc(rippleX, rippleY, rippleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 230, 255, ${rippleAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner ripple
        if (rippleRadius > 10) {
          ctx.beginPath();
          ctx.arc(rippleX, rippleY, rippleRadius * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(200, 230, 255, ${rippleAlpha * 0.6})`;
          ctx.stroke();
        }
      }

      // Diya reflections (warm glows)
      const diyaPositions = [
        { x: w * 0.15, y: h * 0.25 },
        { x: w * 0.32, y: h * 0.35 },
        { x: w * 0.48, y: h * 0.22 },
        { x: w * 0.65, y: h * 0.3 },
        { x: w * 0.82, y: h * 0.28 },
      ];

      diyaPositions.forEach((pos, i) => {
        const flicker = 0.7 + Math.sin(time * 3 + i * 2) * 0.3;
        const glowGrad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 50 * flicker);
        glowGrad.addColorStop(0, `rgba(255, 180, 80, ${0.4 * flicker})`);
        glowGrad.addColorStop(0.4, `rgba(255, 150, 50, ${0.2 * flicker})`);
        glowGrad.addColorStop(1, "rgba(255, 120, 30, 0)");
        ctx.fillStyle = glowGrad;
        ctx.fillRect(pos.x - 60, pos.y - 60, 120, 120);

        // Reflection streak
        ctx.beginPath();
        ctx.ellipse(pos.x, pos.y + 15, 25 * flicker, 8, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 160, 60, ${0.25 * flicker})`;
        ctx.fill();
      });

      // Sunlight sparkles on water
      sparkles.forEach((sparkle) => {
        sparkle.life += 1;
        if (sparkle.life > sparkle.maxLife) {
          sparkle.life = 0;
          sparkle.x = Math.random() * w;
          sparkle.y = Math.random() * h * 0.5;
          sparkle.maxLife = 80 + Math.random() * 60;
        }

        const lifeRatio = sparkle.life / sparkle.maxLife;
        const alpha = lifeRatio < 0.5 ? lifeRatio * 2 : (1 - lifeRatio) * 2;
        const size = 1 + alpha * 2;

        ctx.beginPath();
        ctx.arc(sparkle.x + Math.sin(time * 2 + sparkle.x) * 2, sparkle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.fill();
      });

      // Floating particles (leaves/petals)
      particles.forEach((p) => {
        p.x += p.speed;
        p.y += Math.sin(time * 2 + p.x * 0.01) * 0.3;

        if (p.x > w + 20) {
          p.x = -20;
          p.y = Math.random() * h;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(time + p.x * 0.01);

        if (p.type === 0) {
          // Leaf
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.4, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(80, 120, 60, ${p.opacity})`;
          ctx.fill();
        } else if (p.type === 1) {
          // Petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 180, 150, ${p.opacity})`;
          ctx.fill();
        } else {
          // Small debris
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 119, 101, ${p.opacity})`;
          ctx.fill();
        }
        ctx.restore();
      });

      // Atmospheric mist at distance (top)
      const mistGrad = ctx.createLinearGradient(0, 0, 0, h * 0.25);
      mistGrad.addColorStop(0, "rgba(180, 200, 220, 0.08)");
      mistGrad.addColorStop(0.5, "rgba(160, 180, 200, 0.04)");
      mistGrad.addColorStop(1, "rgba(140, 160, 180, 0)");
      ctx.fillStyle = mistGrad;
      ctx.fillRect(0, 0, w, h * 0.25);

      // Foreground wave detail (more prominent)
      ctx.beginPath();
      ctx.moveTo(0, h * 0.9);
      for (let x = 0; x <= w; x += 2) {
        const y =
          h * 0.9 +
          Math.sin(x * 0.012 + time * 1.5) * 6 +
          Math.sin(x * 0.02 + time * 2) * 3 +
          Math.sin(x * 0.005 + time * 0.8) * 8;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = "rgba(60, 100, 140, 0.15)";
      ctx.fill();

      // Subtle caustics pattern
      for (let i = 0; i < 8; i++) {
        const cx = (w * 0.1 + i * w * 0.12 + time * 30) % (w + 100) - 50;
        const cy = h * 0.6 + Math.sin(time + i) * 30;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.bezierCurveTo(
          cx + 20, cy - 10 + Math.sin(time * 2) * 5,
          cx + 40, cy + 10 + Math.cos(time * 2) * 5,
          cx + 60, cy
        );
        ctx.strokeStyle = "rgba(200, 230, 255, 0.03)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`} style={{ minHeight: '100px' }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block", minHeight: '100px' }}
      />
      {/* SVG overlay for diya lights */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1400 300"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="diyaGlowNew" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,180,80,0.6)" />
            <stop offset="50%" stopColor="rgba(255,150,50,0.2)" />
            <stop offset="100%" stopColor="rgba(255,120,30,0)" />
          </radialGradient>
        </defs>
        
        {/* Floating diya lights */}
        <g>
          <circle cx="200" cy="120" r="5" fill="#FFB040">
            <animate attributeName="cy" values="120;112;120" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="140" r="4" fill="#FFA030">
            <animate attributeName="cy" values="140;132;140" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.95;0.6" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="130" r="5" fill="#FFB040">
            <animate attributeName="cy" values="130;122;130" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="0.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="150" r="4" fill="#FFA030">
            <animate attributeName="cy" values="150;142;150" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.1s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}
