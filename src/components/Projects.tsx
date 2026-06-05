"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "FINARC",
    sub: "Financial Intelligence & Transaction Management System",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "JWT"],
    description:
      "Scalable financial platform with 30+ REST endpoints for transaction processing, multi-account ledger management, and real-time analytics. Optimised PostgreSQL schema with SQLAlchemy ORM. Secure JWT authentication.",
    highlights: ["30+ REST API endpoints", "Real-time net worth tracking", "JWT auth & authorisation"],
    github: "https://github.com/Dorai-Sai-Charan",
  },
  {
    num: "02",
    title: "AI Load Balancer",
    sub: "Cloud Computing Load Balancer via Reinforcement Learning",
    stack: ["Python", "TensorFlow", "AWS EC2", "DDPG", "Distributed Systems"],
    description:
      "DDPG-based reinforcement learning system for dynamic task distribution across 5-node AWS EC2 cluster. Achieved 14% memory and 15% energy reduction over traditional heuristic approaches. Published at ICT4SD 2025.",
    highlights: ["−14% memory usage", "−15% energy consumption", "Published — ICT4SD 2025"],
    github: "https://github.com/Dorai-Sai-Charan",
  },
  {
    num: "03",
    title: "Solar Fault Detector",
    sub: "Deep Learning Fault Classification for Solar Panels",
    stack: ["Python", "PyTorch", "ResNet50", "VGG16", "Computer Vision"],
    description:
      "Hybrid ResNet50 + VGG16 model for binary and multi-class solar panel fault detection. Benchmarked against CNN, CBAM-CNN, InceptionV3, AlexNet. 97.12% binary accuracy. Published at IEEE ICITEICS 2025.",
    highlights: ["97.12% binary accuracy", "78% multi-class accuracy", "Published — IEEE 2025"],
    github: "https://github.com/Dorai-Sai-Charan",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="section-label">02 — Projects</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        <a
          href="https://github.com/Dorai-Sai-Charan"
          target="_blank"
          rel="noopener noreferrer"
          className="section-label link-hover flex items-center gap-1"
        >
          View all <FiArrowUpRight size={12} />
        </a>
      </motion.div>

      {/* Project list */}
      <div>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.33, 1, 0.68, 1] }}
            className="project-row"
          >
            {/* Row header */}
            <button
              className="w-full text-left py-7 flex items-start md:items-center justify-between gap-4 group"
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex items-start md:items-center gap-5 md:gap-8 flex-1 min-w-0">
                {/* Number */}
                <span
                  className="font-display font-bold text-xs shrink-0 mt-1 md:mt-0"
                  style={{ color: "var(--muted)" }}
                >
                  {p.num}
                </span>

                {/* Title */}
                <div className="min-w-0">
                  <span
                    className="font-display font-bold text-xl md:text-2xl transition-colors duration-200 group-hover:text-accent block"
                    style={{ color: "var(--text)" }}
                  >
                    {p.title}
                  </span>
                  <span className="text-xs mt-0.5 block" style={{ color: "var(--muted)" }}>
                    {p.sub}
                  </span>
                </div>
              </div>

              {/* Tech + arrow */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="hidden lg:flex gap-2">
                  {p.stack.slice(0, 3).map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
                <motion.div
                  animate={{ rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  <FiArrowUpRight size={14} />
                </motion.div>
              </div>
            </button>

            {/* Expanded detail */}
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
                  <div className="pb-8 pl-0 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span key={t} className="pill-accent">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "var(--accent)" }}
                          />
                          <span className="text-sm" style={{ color: "var(--text)" }}>{h}</span>
                        </div>
                      ))}
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-display font-semibold transition-colors"
                        style={{ color: "var(--accent)" }}
                      >
                        View on GitHub <FiArrowUpRight size={14} />
                      </a>
                    </div>
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
