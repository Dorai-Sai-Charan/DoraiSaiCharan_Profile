"use client";

export default function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>

      {/* Rotating conic aurora band */}
      <div style={{
        position: "absolute",
        top: "-60%", left: "-20%",
        width: "140%", height: "140%",
        background: "conic-gradient(from 180deg at 50% 85%, transparent 0deg, rgba(34,211,238,0.55) 40deg, rgba(99,102,241,0.5) 90deg, rgba(139,92,246,0.45) 130deg, rgba(20,184,166,0.4) 170deg, rgba(34,211,238,0.3) 210deg, transparent 260deg, transparent 360deg)",
        filter: "blur(70px)",
        animation: "aurora-rotate 30s linear infinite",
        transformOrigin: "50% 85%",
      }} />

      {/* Cyan glow — top-left */}
      <div style={{
        position: "absolute", top: "-5%", left: "-15%",
        width: "70%", height: "70%",
        background: "radial-gradient(ellipse 80% 70% at 30% 30%, rgba(34,211,238,0.5) 0%, transparent 65%)",
        filter: "blur(50px)",
        animation: "aurora-1 18s ease-in-out infinite",
      }} />

      {/* Indigo glow — top-right */}
      <div style={{
        position: "absolute", top: "-10%", right: "-15%",
        width: "60%", height: "65%",
        background: "radial-gradient(ellipse 70% 70% at 70% 30%, rgba(99,102,241,0.48) 0%, transparent 65%)",
        filter: "blur(55px)",
        animation: "aurora-2 22s ease-in-out infinite",
      }} />

      {/* Teal accent — bottom */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "25%",
        width: "55%", height: "55%",
        background: "radial-gradient(ellipse 70% 70% at 50% 70%, rgba(20,184,166,0.38) 0%, transparent 65%)",
        filter: "blur(60px)",
        animation: "aurora-3 26s ease-in-out infinite",
      }} />

      {/* Dark vignette overlay — keeps content readable */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 90% 90% at 40% 40%, transparent 15%, rgba(9,9,11,0.65) 70%, rgba(9,9,11,0.9) 100%)",
      }} />
    </div>
  );
}
