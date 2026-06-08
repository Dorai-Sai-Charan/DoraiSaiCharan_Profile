"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDownRight, FiDownload } from "react-icons/fi";

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex" style={{ overflow: "hidden" }}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + i * 0.038, ease: [0.33, 1, 0.68, 1] }}
          className="inline-block"
          style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

const ROLES = ["AI Engineer", "ML Researcher", "Backend Engineer", "3× IEEE Author"];

function FlipWords({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span style={{ display: "inline-block", minWidth: "14ch", position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[idx]}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
          transition={{ duration: 0.42, ease: [0.33, 1, 0.68, 1] }}
          className="inline-block font-display font-semibold"
          style={{ color: "var(--accent)" }}
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-20 pb-16 px-6 md:px-14 overflow-hidden">

      {/* ── Background beams ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 2 }}
          style={{
            position: "absolute", top: "-15%", left: "18%",
            width: "2px", height: "75vh",
            background: "linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.4) 50%, transparent 100%)",
            transform: "rotate(-38deg)", filter: "blur(1px)",
          }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 2 }}
          style={{
            position: "absolute", top: "-5%", left: "52%",
            width: "1px", height: "60vh",
            background: "linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.22) 50%, transparent 100%)",
            transform: "rotate(-22deg)", filter: "blur(1px)",
          }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 2 }}
          style={{
            position: "absolute", top: "8%", right: "22%",
            width: "1px", height: "50vh",
            background: "linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.16) 50%, transparent 100%)",
            transform: "rotate(18deg)", filter: "blur(1px)",
          }} />
        {/* Radial ambient glow */}
        <div style={{
          position: "absolute", top: "5%", left: "0%",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 65%)",
        }} />
      </div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
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

            <div className="font-display font-extrabold leading-[0.9] tracking-tight mb-2 select-none"
              style={{ fontSize: "clamp(3rem, 10vw, 9rem)", color: "var(--text)" }}>
              {go && <SplitText text="DORAI SAI" delay={0.1} />}
            </div>
            <div className="font-display font-extrabold leading-[0.9] tracking-tight mb-8 select-none"
              style={{
                fontSize: "clamp(3rem, 10vw, 9rem)",
                color: "var(--text)",
                marginLeft: "clamp(0.5rem, 2.5vw, 3rem)",
              }}>
              {go && (
                <>
                  <SplitText text="CHARAN" delay={0.25} />
                  <motion.span
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55, duration: 0.4, ease: "backOut" }}
                    style={{ color: "var(--accent)" }}
                  >.</motion.span>
                </>
              )}
            </div>

            {/* Flip words role */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mb-3 flex items-baseline gap-0"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", color: "var(--text-2)" }}
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
              Building AI systems from IEEE research to production — FastAPI backends, PyTorch models, AWS infrastructure.{" "}
              3× Published Researcher · Amrita Vishwa Vidyapeetham, Bengaluru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a href="#projects"
                className="px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all duration-200"
                style={{ background: "var(--accent)", color: "#09090b", fontWeight: 700 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                View Projects
              </a>
              <a href="#contact"
                className="px-6 py-3 rounded-lg font-display font-semibold text-sm border transition-all duration-200"
                style={{ borderColor: "var(--border-strong)", color: "var(--text-2)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent-border)"; e.currentTarget.style.color = "var(--text)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text-2)"; }}
              >
                Contact Me
              </a>
              {/* Place resume at public/resume.pdf */}
              <a href="/resume.pdf" download="Dorai_Sai_Charan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm border transition-all duration-200"
                style={{ borderColor: "var(--accent-border)", color: "var(--accent)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-dim)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.borderColor = "var(--accent-border)"; }}
              >
                <FiDownload size={14} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={go ? { opacity: 1 } : {}}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="flex items-center gap-5"
            >
              {[
                { href: "https://github.com/Dorai-Sai-Charan", Icon: FiGithub },
                { href: "https://linkedin.com/in/doraisaicharan", Icon: FiLinkedin },
                { href: "mailto:doraisaicharan09@gmail.com", Icon: FiMail },
              ].map(({ href, Icon }) => (
                <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  style={{ color: "var(--text-2)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={go ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col items-center gap-4 shrink-0"
          >
            <div className="relative avatar-ring rounded-full overflow-hidden"
              style={{ width: 220, height: 220 }}>
              {/*
                TO REPLACE: drop your photo at public/avatar.jpg then use:
                <Image src="/avatar.jpg" alt="Dorai Sai Charan" fill className="object-cover" />
              */}
              <div className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0d1f22 0%, #061214 100%)" }}>
                <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                  <circle cx="60" cy="42" r="24" fill="rgba(34,211,238,0.15)" />
                  <ellipse cx="60" cy="95" rx="38" ry="26" fill="rgba(34,211,238,0.1)" />
                  <circle cx="60" cy="42" r="22" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.28)" strokeWidth="1" />
                </svg>
                <span className="absolute font-display font-bold text-xl"
                  style={{ color: "rgba(34,211,238,0.65)", bottom: "28px" }}>DSC</span>
              </div>
              <div className="absolute inset-0 rounded-full"
                style={{ boxShadow: "inset 0 0 0 1.5px rgba(34,211,238,0.22)" }} />
            </div>

            <div className="text-center">
              <p className="font-display font-semibold text-sm" style={{ color: "var(--text)" }}>
                Dorai Sai Charan
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-2)" }}>
                Bengaluru, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>

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
        <a href="#about"
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
