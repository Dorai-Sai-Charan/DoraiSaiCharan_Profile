"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "FINARC",
    sub: "Financial Intelligence & Transaction Management Platform",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "JWT"],
    description:
      "Financial data is fragmented across accounts. FINARC is a unified platform with 30+ REST endpoints handling transaction processing, multi-account ledger management, and real-time net worth analytics — built on FastAPI + PostgreSQL with SQLAlchemy ORM and JWT auth.",
    highlights: ["30+ REST API endpoints", "Real-time net worth tracking", "JWT auth & role-based access"],
    github: "https://github.com/Dorai-Sai-Charan",
  },
  {
    num: "02",
    title: "AI Load Balancer",
    sub: "Cloud Workload Distribution via Reinforcement Learning",
    stack: ["Python", "TensorFlow", "AWS EC2", "DDPG", "Docker"],
    description:
      "Instead of static round-robin routing, this system uses a DDPG reinforcement learning agent to dynamically distribute tasks across a 5-node AWS EC2 cluster based on real-time server metrics. Achieved 14% memory reduction and 15% energy savings over traditional heuristics. Published at ICT4SD 2025.",
    highlights: ["−14% memory usage", "−15% energy consumption", "Published — ICT4SD 2025"],
    github: "https://github.com/Dorai-Sai-Charan",
  },
  {
    num: "03",
    title: "Solar Fault Detector",
    sub: "Deep Learning Fault Classification for Solar Panels",
    stack: ["Python", "PyTorch", "ResNet50", "VGG16", "Computer Vision"],
    description:
      "Solar panel faults are often detected too late, reducing efficiency and causing costly failures. This hybrid ResNet50 + VGG16 model classifies faults with 97.12% binary accuracy. Benchmarked against CNN, CBAM-CNN, InceptionV3, AlexNet. Published at IEEE ICITEICS 2025.",
    highlights: ["97.12% binary accuracy", "78% multi-class accuracy", "Published — IEEE ICITEICS 2025"],
    github: "https://github.com/Dorai-Sai-Charan",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateY: tilt.x, rotateX: tilt.y }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

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
          className="section-label link-hover flex items-center gap-1"
          style={{ transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "")}
        >
          View all <FiArrowUpRight size={12} />
        </a>
      </motion.div>

      <div>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 + i * 0.14, ease: [0.33, 1, 0.68, 1] }}
            className="project-row"
          >
            {/* Row header */}
            <button
              className="w-full text-left py-7 flex items-start md:items-center justify-between gap-4 group"
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex items-start md:items-center gap-5 md:gap-8 flex-1 min-w-0">
                <span className="font-display font-bold text-xs shrink-0 mt-1 md:mt-0" style={{ color: "var(--muted)" }}>
                  {p.num}
                </span>
                <div className="min-w-0">
                  <span
                    className="font-display font-bold text-xl md:text-2xl block transition-colors duration-200"
                    style={{ color: "var(--text)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                  >
                    {p.title}
                  </span>
                  <span className="text-xs mt-0.5 block" style={{ color: "var(--muted)" }}>
                    {p.sub}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="hidden lg:flex gap-2">
                  {p.stack.slice(0, 3).map(t => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
                <motion.div
                  animate={{ rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
                  className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors"
                  style={{ borderColor: active === i ? "var(--accent)" : "var(--border)", color: active === i ? "var(--accent)" : "var(--muted)" }}
                >
                  <FiArrowUpRight size={14} />
                </motion.div>
              </div>
            </button>

            {/* Expanded 3D tilt card */}
            <AnimatePresence>
              {active === i && (
                <motion.div
                  key="detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="pb-8 pl-0 md:pl-16">
                    <TiltCard>
                      <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-xl border"
                        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                      >
                        <div>
                          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>
                            {p.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {p.stack.map(t => (
                              <span key={t} className="pill-accent">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          {p.highlights.map((h, hi) => (
                            <motion.div
                              key={h}
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: hi * 0.08, duration: 0.4 }}
                              className="flex items-center gap-3"
                            >
                              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                              <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{h}</span>
                            </motion.div>
                          ))}
                          <a
                            href={p.github}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-5 text-sm font-display font-semibold transition-colors"
                            style={{ color: "var(--accent)" }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                          >
                            <FiExternalLink size={14} />
                            View on GitHub
                          </a>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
