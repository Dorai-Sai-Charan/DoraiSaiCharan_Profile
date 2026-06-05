"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDownRight, FiDownload } from "react-icons/fi";
import Image from "next/image";

function SplitText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-flex ${className}`} style={{ overflow: "hidden" }}>
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

export default function Hero() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-20 pb-16 px-6 md:px-14 overflow-hidden">

      {/* Subtle glow */}
      <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,111,247,0.06) 0%, transparent 70%)" }} />

      <div className="flex-1 flex flex-col justify-center">
        {/* ── Two-column: name left, avatar right ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-6">

          {/* Left — name + tagline */}
          <div className="flex-1">
            {/* Availability badge */}
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

            {/* Name — character split */}
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

            {/* Role — large and visible */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="font-display font-semibold mb-3"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", color: "var(--text)" }}
            >
              AI &amp; Backend Engineer
            </motion.p>

            {/* Bio line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="text-base leading-relaxed max-w-xl mb-8"
              style={{ color: "var(--text-2)" }}
            >
              Building intelligent, scalable systems at the intersection of AI and backend.
              3× Published Researcher · Amrita Vishwa Vidyapeetham, Bengaluru.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={go ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a href="#projects"
                className="px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all duration-200"
                style={{ background: "var(--accent)", color: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
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
              {/* Place your resume at public/resume.pdf */}
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

            {/* Socials */}
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
                  whileHover={{ y: -2, color: "var(--accent)" }}
                  style={{ color: "var(--text-2)" }}
                  className="transition-colors"
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
            {/* Avatar circle */}
            <div className="relative avatar-ring rounded-full overflow-hidden"
              style={{ width: 220, height: 220 }}>
              {/*
                TO REPLACE WITH YOUR PHOTO:
                  <Image src="/avatar.jpg" alt="Dorai Sai Charan" fill className="object-cover" />
                Place your image at: public/avatar.jpg
              */}
              <div className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1a1430 0%, #0f0c1a 100%)" }}>
                {/* Silhouette */}
                <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                  <circle cx="60" cy="42" r="24" fill="rgba(124,111,247,0.2)" />
                  <ellipse cx="60" cy="95" rx="38" ry="26" fill="rgba(124,111,247,0.15)" />
                  <circle cx="60" cy="42" r="22" fill="rgba(124,111,247,0.1)" stroke="rgba(124,111,247,0.3)" strokeWidth="1" />
                </svg>
                <span className="absolute font-display font-bold text-xl"
                  style={{ color: "rgba(124,111,247,0.6)", bottom: "28px" }}>DSC</span>
              </div>
              {/* Accent ring overlay */}
              <div className="absolute inset-0 rounded-full"
                style={{ boxShadow: "inset 0 0 0 1.5px rgba(124,111,247,0.3)" }} />
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
        className="flex items-center justify-between pt-8 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex flex-wrap gap-2">
          {["3× Published Researcher", "FastAPI Specialist", "Open to Internships"].map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
        <a href="#about" className="hidden md:flex items-center gap-1.5 text-xs font-display font-semibold tracking-widest uppercase transition-colors"
          style={{ color: "var(--text-2)" }}
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
