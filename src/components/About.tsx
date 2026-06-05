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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="section-label">01 — About</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* ── Left: text ─────────────────── */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="font-display font-bold text-3xl md:text-4xl mb-8 leading-tight"
            style={{ color: "var(--text)" }}
          >
            Building things at the edge of{" "}
            <em className="not-italic" style={{ color: "var(--accent)" }}>AI</em>{" "}
            and backend.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            <p>
              I&apos;m a final-year{" "}
              <span style={{ color: "var(--text)" }}>Computer Science with AI</span>{" "}
              student at{" "}
              <span style={{ color: "var(--text)" }}>Amrita Vishwa Vidyapeetham, Bengaluru</span>{" "}
              (8.69 CGPA), specialising in scalable backend systems and applied machine learning.
            </p>
            <p>
              My work spans production-grade FastAPI services with 30+ REST endpoints, reinforcement
              learning deployed on AWS EC2 clusters, and hybrid CNN architectures achieving 97%+ accuracy
              — all backed by peer-reviewed research at IEEE and ICT conferences.
            </p>
            <p>
              Currently deep into{" "}
              <span style={{ color: "var(--accent)" }}>Generative AI</span>{" "}
              — RAG pipelines, LangChain agents, and transformer architectures. I believe in shipping
              things that are both theoretically sound and practically useful.
            </p>
          </motion.div>

          {/* Education pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 pt-8 border-t space-y-3"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { school: "Amrita Vishwa Vidyapeetham", degree: "B.Tech CSE with AI", period: "2022 – Present" },
              { school: "Race Jr. College, Kurnool", degree: "Senior Secondary (94%)", period: "2020 – 2022" },
            ].map(({ school, degree, period }) => (
              <div key={school} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{school}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{degree}</p>
                </div>
                <span className="text-xs font-display shrink-0 mt-0.5" style={{ color: "var(--muted)" }}>
                  {period}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: stats + globe ─────────── */}
        <div className="flex flex-col justify-between gap-12">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="border-t pt-4"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="stat-number">{value}</div>
                <p className="mt-2 text-xs font-display font-semibold tracking-widest uppercase"
                  style={{ color: "var(--muted)" }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <Globe />
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              Based in Bengaluru, India · Open to Remote
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
