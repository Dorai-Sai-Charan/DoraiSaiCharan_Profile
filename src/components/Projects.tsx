"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "FINARC",
    sub: "Financial Intelligence Platform",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "JWT"],
    description:
      "Most finance apps fragment your data. FINARC unifies it — 30+ REST endpoints for transactions, multi-account ledger management, and real-time net-worth analytics. JWT auth, SQLAlchemy ORM, and a Next.js dashboard.",
    highlights: ["30+ REST endpoints", "Real-time net worth tracking", "JWT role-based auth"],
    github: "https://github.com/Dorai-Sai-Charan",
    hue: "#6D32FF",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[40, 70, 50, 90, 65, 80, 55].map((h, i) => (
          <rect key={i} x={28 + i * 34} y={130 - h} width={18} height={h}
            fill="rgba(91,42,230,0.20)" rx={3} />
        ))}
        {[40, 70, 50, 90, 65, 80, 55].map((h, i) => (
          <rect key={`t${i}`} x={28 + i * 34} y={130 - h} width={18} height={3}
            fill="rgba(109,50,255,0.65)" rx={1} />
        ))}
        <polyline points="37,90 71,60 105,80 139,40 173,55 207,45 241,70"
          stroke="rgba(91,42,230,0.42)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <circle cx="139" cy="40" r="4" fill="rgba(109,50,255,0.90)" />
        {[40, 80, 120].map(y => (
          <line key={y} x1="20" y1={y} x2="260" y2={y}
            stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
      </svg>
    ),
  },
  {
    num: "02",
    title: "AI Load Balancer",
    sub: "Reinforcement Learning for Cloud Workloads",
    stack: ["Python", "TensorFlow", "AWS EC2", "DDPG", "Docker"],
    description:
      "Round-robin is dumb. This DDPG reinforcement learning agent routes tasks across a 5-node AWS EC2 cluster using real-time server metrics. −14% memory, −15% energy over traditional heuristics. Published at ICT4SD 2025.",
    highlights: ["−14% memory usage", "−15% energy consumption", "Published — ICT4SD 2025"],
    github: "https://github.com/Dorai-Sai-Charan",
    hue: "#5B2AE6",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        <circle cx="140" cy="80" r="18" fill="rgba(91,42,230,0.20)" stroke="rgba(109,50,255,0.55)" strokeWidth="1.5" />
        <circle cx="140" cy="80" r="6" fill="rgba(109,50,255,0.85)" />
        {[
          { cx: 60, cy: 40 }, { cx: 220, cy: 40 },
          { cx: 40, cy: 120 }, { cx: 140, cy: 145 }, { cx: 240, cy: 120 },
        ].map((n, i) => (
          <g key={i}>
            <line x1={140} y1={80} x2={n.cx} y2={n.cy}
              stroke={i === 1 ? "rgba(109,50,255,0.65)" : "rgba(91,42,230,0.22)"}
              strokeWidth={i === 1 ? "1.5" : "1"} strokeDasharray={i === 1 ? "none" : "4 3"} />
            <circle cx={n.cx} cy={n.cy} r="12"
              fill={i === 1 ? "rgba(91,42,230,0.28)" : "rgba(91,42,230,0.10)"}
              stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
            <circle cx={n.cx} cy={n.cy} r="4"
              fill={i === 1 ? "rgba(109,50,255,0.95)" : "rgba(91,42,230,0.50)"} />
          </g>
        ))}
        <circle cx="220" cy="40" r="20" stroke="rgba(91,42,230,0.22)" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Solar Fault Detector",
    sub: "Deep Learning Computer Vision",
    stack: ["Python", "PyTorch", "ResNet50", "VGG16", "OpenCV"],
    description:
      "Solar faults caught late mean wasted energy and costly repairs. Hybrid ResNet50 + VGG16 classifies panel faults with 97.12% binary accuracy. Benchmarked against 4 other architectures. Published at IEEE ICITEICS 2025.",
    highlights: ["97.12% binary accuracy", "78% multi-class accuracy", "Published — IEEE 2025"],
    github: "https://github.com/Dorai-Sai-Charan",
    hue: "#6D32FF",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[0, 1, 2].map(col =>
          [0, 1].map(row => {
            const isFaulty = col === 1 && row === 1;
            const x = 55 + col * 65, y = 35 + row * 60;
            return (
              <g key={`${col}-${row}`}>
                <rect x={x} y={y} width={50} height={44} rx={3}
                  fill={isFaulty ? "rgba(109,50,255,0.24)" : "rgba(42,23,107,0.35)"}
                  stroke={isFaulty ? "rgba(109,50,255,0.80)" : "rgba(91,42,230,0.35)"}
                  strokeWidth={isFaulty ? 1.5 : 1} />
                <line x1={x + 25} y1={y} x2={x + 25} y2={y + 44}
                  stroke={isFaulty ? "rgba(109,50,255,0.35)" : "rgba(91,42,230,0.20)"} strokeWidth="1" />
                <line x1={x} y1={y + 22} x2={x + 50} y2={y + 22}
                  stroke={isFaulty ? "rgba(109,50,255,0.35)" : "rgba(91,42,230,0.20)"} strokeWidth="1" />
                {isFaulty && (
                  <>
                    <line x1={x + 10} y1={y + 10} x2={x + 40} y2={y + 34}
                      stroke="rgba(109,50,255,0.80)" strokeWidth="1.5" />
                    <line x1={x + 40} y1={y + 10} x2={x + 10} y2={y + 34}
                      stroke="rgba(109,50,255,0.80)" strokeWidth="1.5" />
                  </>
                )}
              </g>
            );
          })
        )}
        <rect x="185" y="115" width="80" height="26" rx="13"
          fill="rgba(91,42,230,0.15)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <text x="225" y="132" textAnchor="middle" fill="rgba(220,225,255,0.90)"
          fontSize="10" fontFamily="monospace">97.12% acc.</text>
      </svg>
    ),
  },
];

function TiltCard({ children, hue, className = "" }: {
  children: ReactNode;
  hue: string;
  className?: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientY - rect.top) / rect.height - 0.5;
    const yRatio = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: xRatio * 10, y: -yRatio * 10 });
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      className={`spotlight-card rounded-2xl border group ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(16,22,51,0.92) 0%, rgba(10,12,28,0.92) 100%)",
        borderColor: "rgba(255,255,255,0.05)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        boxShadow: `0 24px 64px ${hue}18, 0 0 0 1px ${hue}28, inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const FeaturedVisual = projects[0].Visual;

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-14 relative" ref={ref}>

      {/* Decorative background number */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-0 top-1/4 font-display font-black leading-none"
        style={{
          fontSize: "clamp(10rem, 26vw, 22rem)",
          letterSpacing: "-0.06em",
          color: "rgba(91,42,230,0.028)",
          zIndex: 0,
        }}
      >
        04
      </div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16 relative z-10"
      >
        <span className="section-label">04 — Projects</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        <a
          href="https://github.com/Dorai-Sai-Charan"
          target="_blank" rel="noopener noreferrer"
          className="section-label link-hover flex items-center gap-1 transition-colors"
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "")}
        >
          GitHub <FiArrowUpRight size={12} />
        </a>
      </motion.div>

      <div className="space-y-5 relative z-10">
        {/* ── Featured card — full width, horizontal layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        >
          <TiltCard hue={projects[0].hue}>
            <div className="flex flex-col md:flex-row">
              {/* Content side */}
              <div className="flex flex-col justify-between p-7 md:p-9 flex-1 gap-7">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-display font-bold" style={{ color: "var(--muted)" }}>
                      {projects[0].num}
                    </span>
                    <span className="pill pill-accent text-xs">Featured</span>
                  </div>
                  <h3
                    className="font-display font-bold mb-2"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--text)" }}
                  >
                    {projects[0].title}
                  </h3>
                  <p className="text-sm font-display font-semibold mb-4" style={{ color: "var(--muted)" }}>
                    {projects[0].sub}
                  </p>
                  <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-2)" }}>
                    {projects[0].description}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 mb-5">
                    {projects[0].highlights.map(h => (
                      <div key={h} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                        <span className="text-sm" style={{ color: "var(--text-2)" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex flex-wrap gap-1.5">
                      {projects[0].stack.slice(0, 4).map(t => (
                        <span key={t} className="pill">{t}</span>
                      ))}
                    </div>
                    <a
                      href={projects[0].github}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-display font-semibold transition-colors"
                      style={{ color: "var(--muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      <FiExternalLink size={14} /> Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div
                className="md:w-80 h-56 md:h-auto flex-shrink-0 relative overflow-hidden"
                style={{
                  background: "rgba(7,10,26,0.95)",
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FeaturedVisual />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(91,42,230,0.10), transparent 70%)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, rgba(7,10,26,0.4) 0%, transparent 30%)" }}
                />
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Two standard cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(1).map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.26 + i * 0.14, ease: [0.33, 1, 0.68, 1] }}
              className="h-full"
            >
              <TiltCard hue={p.hue} className="h-full flex flex-col">
                {/* Visual area */}
                <div
                  className="relative overflow-hidden rounded-t-2xl"
                  style={{ height: 175, background: "rgba(7,10,26,0.95)" }}
                >
                  <p.Visual />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, rgba(7,10,26,0.28) 0%, transparent 50%)" }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(91,42,230,0.10), transparent 70%)" }}
                  />
                  <span
                    className="absolute top-3 left-4 font-display font-bold text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <h3
                      className="font-display font-bold text-xl mb-1 transition-colors duration-200"
                      style={{ color: "var(--text)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs font-display font-semibold" style={{ color: "var(--muted)" }}>{p.sub}</p>
                  </div>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-2)" }}>
                    {p.description}
                  </p>

                  <div className="space-y-2">
                    {p.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                        <span className="text-xs" style={{ color: "var(--text-2)" }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map(t => (
                        <span key={t} className="pill">{t}</span>
                      ))}
                    </div>
                    <a
                      href={p.github}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-display font-semibold transition-colors"
                      style={{ color: "var(--muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      <FiExternalLink size={12} /> Code
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
