"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let phi = 0.5;
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 320,
      height: 320,
      phi,
      theta: 0.25,
      dark: 1,
      diffuse: 1.0,
      mapSamples: 18000,
      mapBrightness: 4,
      baseColor: [0.06, 0.06, 0.06],
      markerColor: [0.78, 1.0, 0.0],   // lime accent
      glowColor: [0.06, 0.06, 0.04],
      markers: [
        { location: [12.9716, 77.5946], size: 0.09 },  // Bengaluru
        { location: [15.8281, 78.0373], size: 0.06 },  // Kurnool
      ],
      onRender(state) {
        state.phi = phi;
        phi += 0.003;
      },
    });
    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 160, height: 160, opacity: 0.85 }}
    />
  );
}
