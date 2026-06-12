"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"loading" | "crt" | "exit">("loading");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const ctrl = animate(0, 100, {
      duration: 1.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
      onComplete: () => {
        setCount(100);
        /* brief pause at 100 before CRT fires */
        setTimeout(() => setPhase("crt"), 340);
      },
    });
    return () => ctrl.stop();
  }, []);

  /*
   * CRT phase: seam flash + scanlines play for 260ms,
   * then panels begin splitting (exit phase).
   */
  useEffect(() => {
    if (phase !== "crt") return;
    const t = setTimeout(() => setPhase("exit"), 260);
    return () => clearTimeout(t);
  }, [phase]);

  /*
   * Exit phase: panels slide for 750ms, then unmount.
   * Give an extra 80ms buffer so the portfolio reveals
   * cleanly after panels are fully off screen.
   */
  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(onComplete, 830);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  const isCrt  = phase === "crt" || phase === "exit";
  const isExit = phase === "exit";

  return (
    <div
      className="fixed inset-0 z-[99999] overflow-hidden"
      style={{ pointerEvents: isExit ? "none" : "all" }}
    >
      {/* ── TOP CURTAIN PANEL ─────────────────────────────────────────────
          z-index 0 so content renders on top during loading.
          On exit: slides up by 100% of its own height (= 50vh),
          which moves its bottom edge to the top of the screen. ────────── */}
      <motion.div
        className="absolute inset-x-0 top-0"
        style={{ height: "50%", background: "#040611", zIndex: 0 }}
        animate={{ y: isExit ? "-100%" : 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ── BOTTOM CURTAIN PANEL ──────────────────────────────────────────
          On exit: slides down by 100% of its own height (= 50vh),
          which moves its top edge to the bottom of the screen. ────────── */}
      <motion.div
        className="absolute inset-x-0 bottom-0"
        style={{ height: "50%", background: "#040611", zIndex: 0 }}
        animate={{ y: isExit ? "100%" : 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ── AMBIENT GLOW ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={isCrt ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ zIndex: 1 }}
      >
        <div className="absolute" style={{
          top: "40%", left: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 500,
          background: "radial-gradient(ellipse at center, rgba(91,42,230,0.14) 0%, rgba(60,29,140,0.06) 55%, transparent 75%)",
          filter: "blur(60px)",
        }} />
        <div className="absolute" style={{
          top: "55%", left: "60%", transform: "translate(-50%,-50%)",
          width: 400, height: 300,
          background: "radial-gradient(ellipse at center, rgba(109,50,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
      </motion.div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center select-none"
        animate={isCrt ? { opacity: 0, scale: 0.97 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        style={{ zIndex: 2 }}
      >
        <motion.div
          className="font-display font-black tabular-nums leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          style={{
            fontSize: "clamp(6rem, 20vw, 13rem)",
            color: "var(--accent)",
            letterSpacing: "-0.05em",
            textShadow: "0 0 60px rgba(109,50,255,0.65), 0 0 120px rgba(91,42,230,0.28), 0 0 200px rgba(60,29,140,0.12)",
          }}
        >
          {String(count).padStart(2, "0")}
        </motion.div>

        <motion.div
          className="font-display font-bold uppercase mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontSize: "clamp(0.65rem, 1.4vw, 0.9rem)", color: "rgba(244,244,245,0.55)", letterSpacing: "0.42em" }}
        >
          DORAI SAI CHARAN
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-end gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ width: "clamp(180px, 26vw, 280px)" }}
        >
          <div className="w-full relative overflow-hidden"
            style={{ height: 1, background: "rgba(91,42,230,0.12)", borderRadius: 1 }}>
            <div className="absolute left-0 top-0 h-full" style={{
              width: `${count}%`,
              background: "linear-gradient(90deg, var(--accent), rgba(109,50,255,0.55))",
              boxShadow: "0 0 14px rgba(109,50,255,0.90)",
              borderRadius: 1,
              transition: "width 0.05s linear",
            }} />
          </div>
          <span className="font-display tabular-nums"
            style={{ fontSize: "0.65rem", letterSpacing: "0.06em", color: "rgba(91,42,230,0.55)" }}>
            {count}%
          </span>
        </motion.div>
      </motion.div>

      {/* ── CORNER LABELS ────────────────────────────────────────────── */}
      <motion.span
        className="absolute top-8 left-8 font-display uppercase tracking-widest"
        style={{ fontSize: "0.65rem", color: "rgba(91,42,230,0.45)", zIndex: 3 }}
        initial={{ opacity: 0 }}
        animate={isCrt ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Portfolio
      </motion.span>

      <motion.span
        className="absolute bottom-8 right-8 font-display"
        style={{ fontSize: "0.65rem", color: "rgba(244,244,245,0.18)", zIndex: 3 }}
        initial={{ opacity: 0 }}
        animate={isCrt ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        2025
      </motion.span>

      <motion.div
        className="absolute inset-x-8 bottom-16"
        style={{ transformOrigin: "left", height: 1, background: "rgba(255,255,255,0.04)", zIndex: 3 }}
        initial={{ scaleX: 0 }}
        animate={isCrt ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
      />

      {/* ── GRAIN ────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex: 4,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.028,
      }} />

      {/* ── CRT EFFECTS — only fire during crt + exit phases ─────────────
          These sit above everything (zIndex 8/9).
          Scanlines: full-screen horizontal stripe flicker.
          Seam:      glowing line that expands from the midpoint. ───────── */}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 8,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.28) 2px, rgba(0,0,0,0.28) 4px)",
        }}
        initial={{ opacity: 0 }}
        animate={isCrt ? { opacity: [0, 0.9, 0] } : { opacity: 0 }}
        transition={{ duration: 0.55, times: [0, 0.3, 1] }}
      />

      <motion.div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "50%", height: 3, transform: "translateY(-50%)",
          background: "linear-gradient(90deg, transparent, rgba(109,50,255,0.95) 20%, rgba(210,170,255,1) 50%, rgba(109,50,255,0.95) 80%, transparent)",
          boxShadow: "0 0 22px 6px rgba(109,50,255,0.55), 0 0 55px 12px rgba(91,42,230,0.22)",
          zIndex: 9,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isCrt ? { scaleX: [0, 1, 1, 0.2], opacity: [0, 1, 0.9, 0] } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.1, times: [0, 0.07, 0.6, 1] }}
      />
    </div>
  );
}
