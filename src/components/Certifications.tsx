"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";

const certifications = [
  {
    title: "AWS Academy Graduate",
    subtitle: "Introduction to Cloud Computing",
    issuer: "Amazon Web Services",
    icon: "☁️",
    color: "border-amber-500/25",
    bg: "bg-amber-500/5",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/25",
    accent: "text-amber-400",
  },
  {
    title: "Image Processing Onramp",
    subtitle: "MATLAB Certification",
    issuer: "MathWorks",
    icon: "🖼️",
    color: "border-blue-500/25",
    bg: "bg-blue-500/5",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/25",
    accent: "text-blue-400",
  },
  {
    title: "Computer Vision Onramp",
    subtitle: "MATLAB Certification",
    issuer: "MathWorks",
    icon: "👁️",
    color: "border-cyan-500/25",
    bg: "bg-cyan-500/5",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    accent: "text-cyan-400",
  },
];

const achievements = [
  {
    title: "DevOps Bootcamp",
    org: "Amrita School of Computing, Bengaluru",
    date: "July 2025",
    description:
      "Gained hands-on experience in CI/CD pipelines, DevOps lifecycle, automation, and built dashboards for monitoring and business intelligence insights.",
    tags: ["CI/CD", "DevOps", "Monitoring", "BI Dashboards", "Automation"],
    icon: "🚀",
    color: "border-emerald-500/25",
    bg: "bg-emerald-500/5",
    accent: "text-emerald-400",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3 block">
          Credentials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Certifications & Achievements
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          Continuous learning through certifications, bootcamps, and industry programs.
        </p>
      </motion.div>

      {/* Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className={`group card-glow bg-[#0d1929] rounded-2xl border ${cert.color} p-6 relative overflow-hidden`}
          >
            <div className={`absolute inset-0 ${cert.bg} pointer-events-none`} />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cert.icon}</span>
                <HiCheckBadge className={cert.accent} size={22} />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{cert.title}</h3>
              <p className={`text-xs font-medium ${cert.accent} mb-2`}>{cert.subtitle}</p>
              <p className="text-xs text-slate-500">{cert.issuer}</p>
              <div className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${cert.badge}`}>
                <FiAward size={10} />
                Certified
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        {achievements.map((ach, i) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            className={`card-glow bg-[#0d1929] rounded-2xl border ${ach.color} p-6 relative overflow-hidden`}
          >
            <div className={`absolute inset-0 ${ach.bg} pointer-events-none`} />
            <div className="relative flex items-start gap-4">
              <span className="text-3xl flex-shrink-0 mt-0.5">{ach.icon}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-white font-bold text-base">{ach.title}</h3>
                    <p className={`text-sm ${ach.accent}`}>{ach.org}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                    {ach.date}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{ach.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
