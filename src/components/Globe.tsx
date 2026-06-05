"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    globeRef.current = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 400,
      height: 400,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.05, 0.1, 0.3],
      markerColor: [0.3, 0.6, 1],
      glowColor: [0.1, 0.3, 0.8],
      markers: [
        { location: [12.9716, 77.5946], size: 0.08 }, // Bengaluru
        { location: [15.8281, 78.0373], size: 0.05 }, // Kurnool
      ],
      onRender(state) {
        state.phi = phi;
        phi += 0.004;
      },
    });

    return () => {
      globeRef.current?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 200, height: 200 }}
      className="opacity-90"
    />
  );
}
