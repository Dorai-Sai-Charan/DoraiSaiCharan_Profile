"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const papers = [
  {
    year: "2025",
    venue: "ICT4SD",
    title: "AI-Driven Load Balancer for Cloud Computing Environments",
    publisher: "Lecture Notes in Networks and Systems",
    tags: ["Reinforcement Learning", "Cloud", "DDPG", "AWS"],
  },
  {
    year: "2025",
    venue: "IEEE ICITEICS",
    title: "Solar Panel Fault Detection Using Deep Learning",
    publisher: "IEEE, Bengaluru",
    tags: ["Computer Vision", "ResNet50", "VGG16", "Deep Learning"],
  },
  {
    year: "2024",
    venue: "IEEE ICUIS",
    title: "Gesture Recognition Technology in Smart Gloves Enhanced by Machine Learning",
    publisher: "IEEE ICUIS",
    tags: ["Machine Learning", "IoT", "Gesture Recognition"],
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-24 md:py-32 px-6 md:px-14" ref={ref}>
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="section-label">03 — Research</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        <span className="section-label">3 papers published</span>
      </motion.div>

      {/* Papers */}
      <div>
        {papers.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.33, 1, 0.68, 1] }}
            className="group border-t py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:bg-white/[0.01] transition-colors"
            style={{ borderColor: "var(--border)" }}
          >
            {/* Year + venue */}
            <div className="flex md:flex-col gap-3 md:gap-1 shrink-0 md:w-28">
              <span className="font-display font-bold text-xs" style={{ color: "var(--accent)" }}>
                {p.year}
              </span>
              <span
                className="font-display font-semibold text-xs tracking-wide"
                style={{ color: "var(--muted)" }}
              >
                {p.venue}
              </span>
            </div>

            {/* Title + tags */}
            <div className="flex-1">
              <p
                className="font-display font-semibold text-base md:text-lg leading-snug mb-3 group-hover:text-cream transition-colors"
                style={{ color: "var(--text)" }}
              >
                {p.title}
              </p>
              <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>
                {p.publisher}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="shrink-0 self-start">
              <div
                className="w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                <FiArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t" style={{ borderColor: "var(--border)" }} />
      </div>
    </section>
  );
}
