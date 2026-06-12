"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDownRight, FiDownload } from "react-icons/fi";
import Image from "next/image";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className="inline-flex" style={{ gap: "0.26em" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.88, delay: delay + i * 0.14, ease: [0.33, 1, 0.68, 1] }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const ROLES = ["AI Engineer", "ML Researcher", "Backend Engineer", "3× IEEE Author"];

function FlipWords({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span style={{ display: "inline-block", minWidth: "16ch", perspective: "600px" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[idx]}
          initial={{ opacity: 0, rotateX: -90, y: 8 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: -8 }}
          transition={{ duration: 0.46, ease: [0.33, 1, 0.68, 1] }}
          className="inline-block font-display font-semibold"
          style={{ color: "var(--accent)", transformStyle: "preserve-3d" }}
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const [go, setGo] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => { const t = setTimeout(() => setGo(true), 80); return () => clearTimeout(t); }, []);

  /* Close lightbox on Escape */
  useEffect(() => {
    if (!photoOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setPhotoOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [photoOpen]);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col pt-20 pb-16 px-6 md:px-14 overflow-hidden">

      {/* Decorative background number */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute right-[-2vw] top-1/2 -translate-y-1/2 font-display font-black leading-none"
        style={{
          fontSize: "clamp(12rem, 30vw, 26rem)",
          letterSpacing: "-0.06em",
          color: "rgba(91,42,230,0.038)",
          zIndex: 0,
        }}
      >
        01
      </div>

      {/* ── Content with parallax ── */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="flex-1 flex flex-col justify-center relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-6">

          {/* Left — name + tagline */}
          <div className="flex-1">
            {go && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full border"
                style={{ borderColor: "var(--accent-border)", background: "var(--accent-dim)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                <span className="text-xs font-display font-semibold" style={{ color: "var(--accent)" }}>
                  Available for opportunities
                </span>
              </motion.div>
            )}

            {/* Name Line 1 — gradient white → violet */}
            <div
              className="font-display font-extrabold leading-[0.92] tracking-tight mb-1 select-none"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                background: "linear-gradient(120deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.82) 50%, #6D32FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {go && <WordReveal text="DORAI SAI" delay={0.1} />}
            </div>

            {/* Name Line 2 */}
            <div
              className="font-display font-extrabold leading-[0.92] tracking-tight mb-8 select-none"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                marginLeft: "clamp(0.5rem, 2.5vw, 3rem)",
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <span style={{
                background: "linear-gradient(120deg, rgba(255,255,255,0.88) 0%, #6D32FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-flex",
              }}>
                {go && <WordReveal text="CHARAN" delay={0.25} />}
              </span>
              {go && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55, duration: 0.4, ease: "backOut" }}
                  style={{ color: "var(--accent)", WebkitTextFillColor: "var(--accent)" }}
                >.</motion.span>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mb-3 flex items-baseline"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.65rem)", color: "var(--text-2)" }}
            >
              <FlipWords words={ROLES} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="text-base leading-relaxed max-w-xl mb-8"
              style={{ color: "var(--text-2)" }}
            >
              I turn IEEE research into production systems — FastAPI backends, PyTorch models, AWS infrastructure.
              Currently interning while wrapping up my BTech in CS+AI.{" "}
              <span style={{ color: "var(--text)" }}>3× published researcher</span> · Amrita VV, Bengaluru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#projects"
                className="animated-border px-7 py-3 rounded-lg font-display font-bold text-sm transition-opacity duration-200"
                style={{ color: "var(--accent)" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-lg font-display font-semibold text-sm border transition-all duration-200"
                style={{ borderColor: "var(--border-strong)", color: "var(--text-2)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent-border)"; e.currentTarget.style.color = "var(--text)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text-2)"; }}
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Dorai_Sai_Charan_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-display font-semibold text-sm border transition-all duration-200"
                style={{ borderColor: "var(--accent-border)", color: "var(--accent)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-dim)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = ""; }}
              >
                <FiDownload size={14} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={go ? { opacity: 1 } : {}}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="flex items-center gap-6"
            >
              {[
                { href: "https://github.com/Dorai-Sai-Charan", Icon: FiGithub },
                { href: "https://linkedin.com/in/doraisaicharan", Icon: FiLinkedin },
                { href: "mailto:doraisaicharan09@gmail.com", Icon: FiMail },
              ].map(({ href, Icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{ color: "var(--muted)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={go ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="hidden lg:flex flex-col items-center gap-4 shrink-0"
          >
            {/* Clickable avatar */}
            <motion.button
              onClick={() => setPhotoOpen(true)}
              className="relative rounded-full overflow-hidden focus:outline-none group"
              style={{
                width: 230, height: 230,
                border: "1.5px solid rgba(109,50,255,0.35)",
                boxShadow: "0 0 48px rgba(91,42,230,0.18), 0 0 90px rgba(60,29,140,0.12)",
                flexShrink: 0,
                cursor: "zoom-in",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 64px rgba(91,42,230,0.30), 0 0 120px rgba(60,29,140,0.18)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              aria-label="Enlarge profile photo"
            >
              <Image
                src="/profile.jpg"
                alt="Dorai Sai Charan"
                width={230}
                height={230}
                priority
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              {/* Hover hint */}
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(4,6,17,0.45)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1.5px rgba(109,50,255,0.28)" }} />
            </motion.button>

            <div className="text-center">
              <p className="font-display font-semibold text-sm" style={{ color: "var(--text)" }}>Dorai Sai Charan</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-2)" }}>Bengaluru, India</p>
            </div>
          </motion.div>

          {/* ── Lightbox ── */}
          <AnimatePresence>
            {photoOpen && (
              <motion.div
                key="lightbox-root"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center"
                style={{ background: "rgba(4,6,17,0.88)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
                onClick={() => setPhotoOpen(false)}
              >
                {/* Photo card — stop click propagation so it doesn't close when clicking the photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.78 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.82 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    width: "min(500px, 88vw)",
                    height: "min(500px, 88vw)",
                    border: "1.5px solid rgba(109,50,255,0.42)",
                    boxShadow: "0 0 80px rgba(91,42,230,0.32), 0 0 160px rgba(60,29,140,0.20), 0 32px 80px rgba(0,0,0,0.65)",
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Dorai Sai Charan"
                    width={500}
                    height={500}
                    style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
                  />

                  {/* Inner glow ring */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{ boxShadow: "inset 0 0 0 1.5px rgba(109,50,255,0.22)" }} />

                  {/* Close ✕ */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.12 }}
                    onClick={() => setPhotoOpen(false)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(4,6,17,0.80)",
                      border: "1px solid rgba(109,50,255,0.30)",
                      color: "rgba(255,255,255,0.85)",
                    }}
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="2" y1="2" x2="12" y2="12" /><line x1="12" y1="2" x2="2" y2="12" />
                    </svg>
                  </motion.button>
                </motion.div>

                {/* ESC hint */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-8 font-display text-xs tracking-widest uppercase"
                  style={{ color: "rgba(220,225,255,0.35)" }}
                >
                  Click outside or press ESC to close
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={go ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="relative z-10 flex items-center justify-between pt-8 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex flex-wrap gap-2">
          {["3× Published Researcher", "FastAPI Specialist", "Open to Internships"].map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
        <a
          href="#about"
          className="hidden md:flex items-center gap-1.5 text-xs font-display font-semibold tracking-widest uppercase"
          style={{ color: "var(--text-2)", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
        >
          Scroll
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <FiArrowDownRight size={14} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
