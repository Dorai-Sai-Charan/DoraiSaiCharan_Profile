"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/* CSS display size in px */
const SIZE = 280;

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let phi = 0.5;
    /* width/height MUST equal SIZE * devicePixelRatio for correct rendering */
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: SIZE * 2,
      height: SIZE * 2,
      phi,
      theta: 0.3,
      dark: 1,
      diffuse: 1.8,
      mapSamples: 20000,
      mapBrightness: 2,
      /*
       * baseColor * mapBrightness = final land RGB
       * [0.40, 0.18, 0.90] * 2 = [0.80, 0.36, 1.80] → clamped [0.80, 0.36, 1.0]
       * = vivid purple land masses, clearly visible on dark bg
       */
      baseColor:   [0.40, 0.18, 0.90],
      markerColor: [1.00, 0.95, 1.00],   /* near-white for max visibility */
      glowColor:   [0.43, 0.20, 1.00],   /* #6D32FF accent outer bloom    */
      markers: [
        { location: [12.9716, 77.5946], size: 0.18 }, /* Bengaluru — primary */
        { location: [15.8281, 78.0373], size: 0.08 }, /* Kurnool             */
      ],
      onRender(state) { state.phi = phi; phi += 0.003; },
    });
    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: SIZE, height: SIZE, display: "block" }}
    />
  );
}
