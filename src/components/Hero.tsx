"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

const FIRST = "DORAI SAI";
const SECOND = "CHARAN.";

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: delay + i * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Subtle background accent — faint lime glow far left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)" }}
      />

      {/* ── Main giant name ─────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="overflow-hidden">
          <h1
            className="font-display font-extrabold leading-none tracking-tight select-none"
            style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)", color: "var(--text)" }}
          >
            {show && <SplitText text={FIRST} delay={0.1} />}
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="font-display font-extrabold leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(3.5rem, 13vw, 11rem)",
              color: "var(--text)",
              marginLeft: "clamp(1rem, 4vw, 5rem)",
            }}
          >
            {show && (
              <>
                <SplitText text="CHARAN" delay={0.28} />
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.28 + "CHARAN".length * 0.04 + 0.1, duration: 0.4, ease: "easeOut" }}
                  style={{ color: "var(--accent)" }}
                >
                  .
                </motion.span>
              </>
            )}
          </h1>
        </div>

        {/* Role + location row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-4 md:gap-8"
        >
          <p className="font-display text-base md:text-lg font-medium" style={{ color: "var(--muted)" }}>
            AI &amp; Backend Engineer
          </p>
          <span className="w-px h-4 bg-white/15 hidden md:block" />
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Bengaluru, India
          </p>
          <span className="w-px h-4 bg-white/15 hidden md:block" />
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            B.Tech CSE (AI) · Amrita Vishwa Vidyapeetham
          </p>
        </motion.div>
      </div>

      {/* ── Bottom row ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="flex items-end justify-between pt-10 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Left: quick tags */}
        <div className="flex flex-wrap gap-2">
          {["3× Published Researcher", "FastAPI Specialist", "Open to Internships"].map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        {/* Right: scroll cue */}
        <a
          href="#about"
          className="hidden md:flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase"
          style={{ color: "var(--muted)" }}
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDownRight size={16} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
