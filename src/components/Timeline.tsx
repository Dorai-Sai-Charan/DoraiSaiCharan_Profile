"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { FiBookOpen, FiAward, FiBriefcase } from "react-icons/fi";

const items = [
  {
    year: "2025 — Present",
    title: "Software Engineering Intern",
    subtitle: "Your Company · Bengaluru",
    detail: "Replace with your actual internship company and role",
    note: "Working on: [describe what you're building] — update this with your actual internship details",
    Icon: FiBriefcase,
    accent: true,
    tag: "Current",
  },
  {
    year: "2022 — 2025",
    title: "Amrita Vishwa Vidyapeetham",
    subtitle: "B.Tech Computer Science with Artificial Intelligence",
    detail: "8.69 CGPA · Bengaluru, Karnataka",
    note: "Coursework: ML, Computer Vision, Cloud Computing, DBMS, OS, Computer Networks",
    Icon: HiAcademicCap,
    accent: false,
    tag: "Degree",
  },
  {
    year: "2025",
    title: "3 Research Papers Published",
    subtitle: "IEEE ICITEICS · ICT4SD · IEEE ICUIS",
    detail: "International peer-reviewed conferences",
    note: "Topics: Load Balancing (RL), Solar Fault Detection (CNN), Gesture Recognition (ML)",
    Icon: FiBookOpen,
    accent: false,
    tag: "Research",
  },
  {
    year: "Jul 2025",
    title: "DevOps Bootcamp",
    subtitle: "Amrita School of Computing, Bengaluru",
    detail: "CI/CD Pipelines · DevOps Lifecycle · Monitoring Dashboards",
    note: "Hands-on: Jenkins, GitHub Actions, BI dashboards, automation scripts",
    Icon: FiAward,
    accent: false,
    tag: "Training",
  },
  {
    year: "2020 — 2022",
    title: "Race Jr. College",
    subtitle: "Senior Secondary Education",
    detail: "94% · Kurnool, Andhra Pradesh",
    note: "Stream: Mathematics, Physics, Chemistry",
    Icon: HiAcademicCap,
    accent: false,
    tag: "Education",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-28 md:py-36 px-6 md:px-14" ref={ref}>
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="section-label">03 — Journey</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      <div className="relative max-w-2xl">
        {/* Track line (static) */}
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />

        {/* Tracing beam (scroll-synced) */}
        <motion.div
          className="absolute left-0 top-0 w-px origin-top"
          style={{
            height: lineHeight,
            background: "linear-gradient(180deg, var(--accent) 0%, rgba(109,50,255,0.3) 100%)",
            boxShadow: "0 0 8px rgba(91,42,230,0.45)",
          }}
        />

        <div className="space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline-item relative pl-10 pb-12 group"
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  top: "4px",
                  borderColor: item.accent ? "var(--accent)" : "var(--border-strong)",
                  background: item.accent ? "var(--accent)" : "var(--bg)",
                  boxShadow: item.accent ? "0 0 10px rgba(109,50,255,0.55)" : "none",
                }}
              />

              <div className="pt-0">
                {/* Year + tag row */}
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-display font-bold text-xs tracking-wider uppercase"
                    style={{ color: item.accent ? "var(--accent)" : "var(--muted)" }}
                  >
                    {item.year}
                  </span>
                  <span
                    className="text-[10px] font-display font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: item.accent ? "var(--accent-border)" : "var(--border)",
                      color: item.accent ? "var(--accent)" : "var(--muted)",
                      background: item.accent ? "var(--accent-dim)" : "transparent",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Title + icon */}
                <div className="flex items-center gap-3 mb-1.5">
                  <div
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: item.accent ? "rgba(91,42,230,0.14)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${item.accent ? "rgba(109,50,255,0.28)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <item.Icon
                      size={17}
                      style={{ color: item.accent ? "var(--accent)" : "var(--muted)" }}
                    />
                  </div>
                  <h3
                    className="font-display font-bold text-base md:text-lg leading-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm font-medium mb-1.5 ml-12" style={{ color: "var(--text-2)" }}>
                  {item.subtitle}
                </p>

                <p
                  className="text-xs font-display font-semibold mb-2 ml-12"
                  style={{ color: item.accent ? "var(--accent)" : "var(--muted)" }}
                >
                  {item.detail}
                </p>

                {item.note && (
                  <p className="text-xs leading-relaxed ml-12" style={{ color: "var(--muted)" }}>
                    {item.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
