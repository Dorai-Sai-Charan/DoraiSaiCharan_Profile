"use client";

import { useRef } from "react";
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
    /* Visual SVG accent color */
    hue: "#22d3ee",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {/* Bar chart */}
        {[40, 70, 50, 90, 65, 80, 55].map((h, i) => (
          <rect key={i} x={28 + i * 34} y={130 - h} width={18} height={h}
            fill="rgba(34,211,238,0.18)" rx={3} />
        ))}
        {[40, 70, 50, 90, 65, 80, 55].map((h, i) => (
          <rect key={`t${i}`} x={28 + i * 34} y={130 - h} width={18} height={3}
            fill="rgba(34,211,238,0.6)" rx={1} />
        ))}
        {/* Trend line */}
        <polyline points="37,90 71,60 105,80 139,40 173,55 207,45 241,70"
          stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <circle cx="139" cy="40" r="4" fill="rgba(34,211,238,0.8)" />
        {/* Grid lines */}
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
    hue: "#818cf8",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {/* Central node */}
        <circle cx="140" cy="80" r="18" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
        <circle cx="140" cy="80" r="6" fill="rgba(99,102,241,0.8)" />
        {/* 5 EC2 nodes */}
        {[
          { cx: 60, cy: 40 }, { cx: 220, cy: 40 },
          { cx: 40, cy: 120 }, { cx: 140, cy: 140 }, { cx: 240, cy: 120 },
        ].map((n, i) => (
          <g key={i}>
            <line x1={140} y1={80} x2={n.cx} y2={n.cy}
              stroke={i === 1 ? "rgba(99,102,241,0.6)" : "rgba(99,102,241,0.2)"}
              strokeWidth={i === 1 ? "1.5" : "1"} strokeDasharray={i === 1 ? "none" : "4 3"} />
            <circle cx={n.cx} cy={n.cy} r="12"
              fill={i === 1 ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.1)"}
              stroke="rgba(99,102,241,0.4)" strokeWidth="1" />
            <circle cx={n.cx} cy={n.cy} r="4"
              fill={i === 1 ? "rgba(99,102,241,0.9)" : "rgba(99,102,241,0.5)"} />
          </g>
        ))}
        {/* Pulsing ring on active node */}
        <circle cx="220" cy="40" r="20" stroke="rgba(99,102,241,0.25)" strokeWidth="1" fill="none" />
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
    hue: "#f59e0b",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {/* Solar panel grid — 3×2 */}
        {[0, 1, 2].map(col =>
          [0, 1].map(row => {
            const isFaulty = col === 1 && row === 1;
            const x = 55 + col * 65, y = 35 + row * 60;
            return (
              <g key={`${col}-${row}`}>
                <rect x={x} y={y} width={50} height={44} rx={3}
                  fill={isFaulty ? "rgba(239,68,68,0.2)" : "rgba(245,158,11,0.1)"}
                  stroke={isFaulty ? "rgba(239,68,68,0.7)" : "rgba(245,158,11,0.3)"}
                  strokeWidth={isFaulty ? 1.5 : 1} />
                {/* Panel lines */}
                <line x1={x + 25} y1={y} x2={x + 25} y2={y + 44}
                  stroke={isFaulty ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.15)"} strokeWidth="1" />
                <line x1={x} y1={y + 22} x2={x + 50} y2={y + 22}
                  stroke={isFaulty ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.15)"} strokeWidth="1" />
                {isFaulty && (
                  <>
                    <line x1={x + 10} y1={y + 10} x2={x + 40} y2={y + 34}
                      stroke="rgba(239,68,68,0.7)" strokeWidth="1.5" />
                    <line x1={x + 40} y1={y + 10} x2={x + 10} y2={y + 34}
                      stroke="rgba(239,68,68,0.7)" strokeWidth="1.5" />
                  </>
                )}
              </g>
            );
          })
        )}
        {/* Accuracy badge */}
        <rect x="185" y="115" width="80" height="26" rx="13"
          fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
        <text x="225" y="132" textAnchor="middle" fill="rgba(245,158,11,0.9)"
          fontSize="10" fontFamily="monospace">97.12% acc.</text>
      </svg>
    ),
  },
];

function SpotlightCard({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  return (
    <div className={`spotlight-card ${className ?? ""}`} style={style} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-14" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.14, ease: [0.33, 1, 0.68, 1] }}
          >
            <SpotlightCard
              className="h-full rounded-2xl border flex flex-col group transition-all duration-300"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Visual area */}
              <div
                className="relative overflow-hidden rounded-t-2xl transition-all duration-500 group-hover:opacity-90"
                style={{ height: 168, background: "#0d0d0f" }}
              >
                <p.Visual />
                {/* Subtle top gradient fade */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, rgba(9,9,11,0.3) 0%, transparent 50%)" }} />
                {/* Number badge */}
                <span
                  className="absolute top-3 left-4 font-display font-bold text-xs"
                  style={{ color: "var(--muted)" }}
                >{p.num}</span>
                {/* Hover glow on visual */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 50%, ${p.hue}14, transparent 70%)` }} />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg mb-1 transition-colors duration-200 group-hover:text-accent"
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

                {/* Highlights */}
                <div className="space-y-1.5">
                  {p.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: p.hue, opacity: 0.8 }} />
                      <span className="text-xs" style={{ color: "var(--text-2)" }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
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
                    <FiExternalLink size={12} />
                    Code
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
