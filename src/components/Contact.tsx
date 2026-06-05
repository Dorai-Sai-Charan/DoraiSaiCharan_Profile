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
      className="magnetic-btn px-10 py-4 font-display font-bold text-base tracking-tight rounded"
      style={{
        background: "var(--accent)",
        color: "#0d0d0d",
      }}
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-14" ref={ref}>
      {/* Divider */}
      <div className="h-px w-full mb-20" style={{ background: "var(--border)" }} />

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="section-label">06 — Contact</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      {/* Big CTA text */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        className="font-display font-bold leading-none mb-4"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "var(--muted)" }}
      >
        Like what you see?
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="font-display font-bold leading-none mb-12"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "var(--text)" }}
      >
        Let&apos;s work together.
      </motion.p>

      {/* Email large */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-14"
      >
        <a
          href="mailto:doraisaicharan09@gmail.com"
          className="link-hover font-display font-bold"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)", color: "var(--muted)" }}
        >
          doraisaicharan09@gmail.com
        </a>
      </motion.div>

      {/* Magnetic CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-20"
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
        className="flex flex-wrap gap-6"
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
