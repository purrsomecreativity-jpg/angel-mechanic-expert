'use client';
import { useRef, useEffect, useState, HTMLAttributes } from 'react';

interface SpotlightConfig {
  radius?: number;
  brightness?: number;
  color?: string;
  smoothing?: number;
}

const useSpotlightEffect = (config: SpotlightConfig, enabled: boolean) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let mouseX = -1000;
    let mouseY = -1000;
    let needsRedraw = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      needsRedraw = true;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      needsRedraw = true;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      needsRedraw = true;
    };

    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r},${g},${b}`;
    };

    const draw = () => {
      if (needsRedraw) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (mouseX !== -1000 && mouseY !== -1000) {
          const gradient = ctx.createRadialGradient(
            mouseX, mouseY, 0,
            mouseX, mouseY, config.radius || 200
          );
          const rgbColor = hexToRgb(config.color || '#ffffff');
          gradient.addColorStop(0, `rgba(${rgbColor}, ${config.brightness || 0.15})`);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        needsRedraw = false;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, [config.radius, config.brightness, config.color, enabled]);

  return canvasRef;
};

interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig;
}

export function SpotlightCursor({
  config = {},
  className,
  ...rest
}: SpotlightCursorProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const spotlightConfig = {
    radius: 200,
    brightness: 0.15,
    color: '#ffffff',
    smoothing: 0.1,
    ...config,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig, enabled);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className ?? ''}`}
      {...rest}
    />
  );
}
