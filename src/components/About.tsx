"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

const stats = [
  { value: "8.69", label: "CGPA" },
  { value: "3+", label: "Publications" },
  { value: "30+", label: "API Endpoints" },
  { value: "97%", label: "Model Accuracy" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.33, 1, 0.68, 1] } },
});

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-14" ref={ref}>
      {/* Label */}
      <motion.div variants={fadeUp(0)} initial="hidden" animate={isInView ? "visible" : "hidden"}
        className="flex items-center gap-4 mb-20">
        <span className="section-label">01 — About</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

        {/* ── Left 3 cols — text ── */}
        <div className="lg:col-span-3 space-y-8">
          <motion.h2
            variants={fadeUp(0.1)} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "var(--text)" }}
          >
            Building at the edge of{" "}
            <span style={{ color: "var(--accent)" }}>Artificial Intelligence</span>{" "}
            and backend engineering.
          </motion.h2>

          <motion.div
            variants={fadeUp(0.2)} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--text-2)" }}
          >
            <p>
              I&apos;m a final-year{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>Computer Science with AI</span>{" "}
              student at{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>Amrita Vishwa Vidyapeetham, Bengaluru</span>{" "}
              with a 8.69 CGPA, focused on building scalable backend systems and applying machine learning to real problems.
            </p>
            <p>
              My work spans production-grade FastAPI platforms with 30+ REST endpoints, reinforcement learning
              deployed across 5-node AWS EC2 clusters, and hybrid CNN architectures hitting 97.12% accuracy — all
              backed by peer-reviewed research at IEEE and ICT4SD conferences.
            </p>
            <p>
              Currently exploring{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>Generative AI</span> — RAG pipelines,
              LangChain agents, and transformer architectures. I believe research and engineering go hand in hand.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={fadeUp(0.3)} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-2 pt-2"
          >
            {["FastAPI", "Deep Learning", "LLM Research", "Cloud (AWS)", "Open Source"].map(t => (
              <span key={t} className="pill">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* ── Right 2 cols — stats + globe ── */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Stats */}
          <motion.div
            variants={fadeUp(0.15)} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
                className="border-t pt-5"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="stat-number" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>{value}</div>
                <p className="mt-2 text-xs font-display font-semibold tracking-widest uppercase"
                  style={{ color: "var(--text-2)" }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col items-center gap-3 py-6 border rounded-2xl"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <Globe />
            <p className="text-xs font-display" style={{ color: "var(--text-2)" }}>
              Based in Bengaluru, India · Open to Remote
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
