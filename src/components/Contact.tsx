"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const r = btnRef.current!.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left - r.width / 2) * 0.35,
      y: (e.clientY - r.top - r.height / 2) * 0.35,
    });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={btnRef}
      href={href}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="magnetic-btn animated-border px-10 py-4 font-display font-bold text-base tracking-tight rounded-lg"
      style={{ color: "var(--accent)" }}
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-14 relative overflow-hidden" ref={ref}>
      {/* Radial glow behind CTA */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{
          position: "absolute",
          top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700, height: 500,
          background: "radial-gradient(ellipse at center, rgba(91,42,230,0.09) 0%, rgba(60,29,140,0.05) 40%, transparent 70%)",
          filter: "blur(50px)",
        }} />
        <div style={{
          position: "absolute",
          top: "55%", left: "35%",
          width: 400, height: 300,
          background: "radial-gradient(ellipse at center, rgba(109,50,255,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }} />
      </div>

      {/* Divider */}
      <div className="h-px w-full mb-20 relative z-10" style={{ background: "var(--border)" }} />

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-20 relative z-10"
      >
        <span className="section-label">06 — Contact</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      {/* Big CTA text */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        className="font-display font-bold leading-none mb-4 relative z-10"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "var(--muted)" }}
      >
        Like what you see?
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="font-display font-bold leading-none mb-12 text-gradient-hero relative z-10"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
      >
        Let&apos;s work together.
      </motion.p>

      {/* Email large */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-14 relative z-10"
      >
        <a
          href="mailto:doraisaicharan09@gmail.com"
          className="link-hover font-display font-bold"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)", color: "var(--text-2)" }}
        >
          doraisaicharan09@gmail.com
        </a>
      </motion.div>

      {/* Magnetic CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-20 relative z-10"
      >
        <MagneticButton href="mailto:doraisaicharan09@gmail.com">
          Say Hello →
        </MagneticButton>
      </motion.div>

      {/* Social row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap gap-6 relative z-10"
      >
        {[
          { href: "https://github.com/Dorai-Sai-Charan", icon: FiGithub, label: "GitHub" },
          { href: "https://linkedin.com/in/doraisaicharan", icon: FiLinkedin, label: "LinkedIn" },
          { href: "tel:+918333991456", icon: null, label: "+91 8333991456" },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 text-sm font-display link-hover transition-colors"
            style={{ color: "var(--muted)" }}
          >
            {Icon && <Icon size={14} />}
            {label}
            <FiArrowUpRight size={12} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
