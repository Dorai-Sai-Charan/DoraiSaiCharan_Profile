"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { FiBookOpen, FiAward } from "react-icons/fi";

const items = [
  {
    year: "2022 — Present",
    title: "Amrita Vishwa Vidyapeetham",
    subtitle: "B.Tech Computer Science with Artificial Intelligence",
    detail: "8.69 CGPA · Bengaluru, Karnataka",
    note: "Coursework: ML, Computer Vision, Cloud Computing, DBMS, OS, Computer Networks",
    Icon: HiAcademicCap,
    accent: true,
  },
  {
    year: "Jul 2025",
    title: "DevOps Bootcamp",
    subtitle: "Amrita School of Computing, Bengaluru",
    detail: "CI/CD Pipelines · DevOps Lifecycle · Monitoring Dashboards",
    note: "Hands-on: Jenkins, GitHub Actions, BI dashboards, automation scripts",
    Icon: FiAward,
    accent: false,
  },
  {
    year: "2025",
    title: "3 Research Papers Published",
    subtitle: "IEEE ICITEICS · ICT4SD · IEEE ICUIS",
    detail: "International peer-reviewed conferences",
    note: "Topics: Load Balancing (RL), Solar Fault Detection (CNN), Gesture Recognition (ML)",
    Icon: FiBookOpen,
    accent: false,
  },
  {
    year: "2020 — 2022",
    title: "Race Jr. College",
    subtitle: "Senior Secondary Education",
    detail: "94% · Kurnool, Andhra Pradesh",
    note: "Stream: Mathematics, Physics, Chemistry",
    Icon: HiAcademicCap,
    accent: false,
  },
  {
    year: "2020",
    title: "Montessori Indus School",
    subtitle: "Secondary Education",
    detail: "90% · Kurnool, Andhra Pradesh",
    note: "",
    Icon: HiAcademicCap,
    accent: false,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="timeline" className="py-28 md:py-36 px-6 md:px-14" ref={ref}>
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="section-label">02 — Education &amp; Journey</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      {/* Timeline container */}
      <div className="relative max-w-2xl">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: "var(--border)", transformOrigin: "top" }}
        />

        <div className="space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline-item relative pl-10 pb-12 group"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  top: "4px",
                  borderColor: item.accent ? "var(--accent)" : "var(--border-strong)",
                  background: item.accent ? "var(--accent)" : "var(--bg)",
                }}
              />

              {/* Content */}
              <div className="pt-0">
                {/* Year */}
                <span
                  className="font-display font-bold text-xs tracking-wider uppercase mb-2 block"
                  style={{ color: item.accent ? "var(--accent)" : "var(--text-2)" }}
                >
                  {item.year}
                </span>

                {/* Title + icon */}
                <div className="flex items-start gap-3 mb-1.5">
                  <item.Icon
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: item.accent ? "var(--accent)" : "var(--text-2)" }}
                  />
                  <h3
                    className="font-display font-bold text-base md:text-lg leading-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm font-medium mb-1.5 ml-7" style={{ color: "var(--text-2)" }}>
                  {item.subtitle}
                </p>

                <p
                  className="text-xs font-display font-semibold mb-2 ml-7"
                  style={{ color: item.accent ? "var(--accent)" : "var(--text-2)" }}
                >
                  {item.detail}
                </p>

                {item.note && (
                  <p className="text-xs leading-relaxed ml-7" style={{ color: "rgba(136,136,136,0.7)" }}>
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
