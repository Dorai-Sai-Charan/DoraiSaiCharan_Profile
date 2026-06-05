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
      width: 280,
      height: 280,
      phi,
      theta: 0.25,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 9,
      baseColor: [0.14, 0.11, 0.28],
      markerColor: [0.55, 0.5, 1.0],
      glowColor: [0.25, 0.2, 0.6],
      markers: [
        { location: [12.9716, 77.5946], size: 0.1 },
        { location: [15.8281, 78.0373], size: 0.07 },
      ],
      onRender(state) { state.phi = phi; phi += 0.003; },
    });
    return () => globe.destroy();
  }, []);

  return <canvas ref={canvasRef} style={{ width: 180, height: 180, opacity: 1 }} />;
}
