"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certs = [
  { year: "2024", issuer: "Amazon Web Services", title: "AWS Academy Graduate — Introduction to Cloud Computing" },
  { year: "2024", issuer: "MathWorks", title: "Image Processing Onramp (MATLAB)" },
  { year: "2024", issuer: "MathWorks", title: "Computer Vision Onramp (MATLAB)" },
];

const achievements = [
  {
    year: "Jul 2025",
    org: "Amrita School of Computing",
    title: "DevOps Bootcamp",
    desc: "CI/CD pipelines, DevOps lifecycle, automation, monitoring & BI dashboards.",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 md:py-32 px-6 md:px-14" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="section-label">05 — Credentials</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Certifications */}
        <div>
          <p
            className="font-display font-semibold text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--accent)" }}
          >
            Certifications
          </p>
          <div className="space-y-0">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="border-t py-5 flex gap-6 group"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="font-display text-xs shrink-0 mt-0.5 w-10" style={{ color: "var(--muted)" }}>
                  {c.year}
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug" style={{ color: "var(--text)" }}>{c.title}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{c.issuer}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "var(--border)" }} />
          </div>
        </div>

        {/* Achievements */}
        <div>
          <p
            className="font-display font-semibold text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--accent)" }}
          >
            Achievements
          </p>
          <div className="space-y-0">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="border-t py-5"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-display font-bold text-base" style={{ color: "var(--text)" }}>{a.title}</p>
                  <span className="text-xs shrink-0" style={{ color: "var(--accent)" }}>{a.year}</span>
                </div>
                <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{a.org}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{a.desc}</p>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "var(--border)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
