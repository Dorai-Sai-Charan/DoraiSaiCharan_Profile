"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython, SiFastapi, SiPostgresql, SiNextdotjs, SiTypescript, SiCplusplus,
  SiTensorflow, SiPytorch, SiDocker, SiGit, SiLinux, SiJupyter,
  SiNumpy, SiScikitlearn, SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiDatabase, FiLink, FiCpu, FiLayers, FiMessageSquare, FiBarChart2, FiCode } from "react-icons/fi";

const groups = [
  {
    label: "Languages",
    items: [
      { name: "Python",     Icon: SiPython,     color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "C++",        Icon: SiCplusplus,  color: "#00599C" },
      { name: "SQL",        Icon: FiDatabase,   color: "#888" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI",    Icon: SiFastapi,    color: "#009688" },
      { name: "Next.js",    Icon: SiNextdotjs,  color: "#f0f0f0" },
      { name: "REST APIs",  Icon: FiCode,       color: "#888" },
      { name: "JWT Auth",   Icon: FiLayers,     color: "#888" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL",  Icon: SiPostgresql, color: "#4169E1" },
      { name: "SQLAlchemy",  Icon: FiDatabase,   color: "#888" },
      { name: "Git",         Icon: SiGit,        color: "#F05032" },
      { name: "GitHub",      Icon: SiGithub,     color: "#f0f0f0" },
    ],
  },
  {
    label: "ML & AI",
    items: [
      { name: "TensorFlow",   Icon: SiTensorflow,  color: "#FF6F00" },
      { name: "PyTorch",      Icon: SiPytorch,     color: "#EE4C2C" },
      { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "NumPy",        Icon: SiNumpy,       color: "#4DABCF" },
      { name: "Pandas",       Icon: FiBarChart2,   color: "#130754" },
      { name: "Jupyter",      Icon: SiJupyter,     color: "#F37626" },
    ],
  },
  {
    label: "Gen AI & NLP",
    items: [
      { name: "LangChain",    Icon: FiLink,         color: "#888" },
      { name: "Transformers", Icon: FiCpu,          color: "#888" },
      { name: "RAG",          Icon: FiLayers,       color: "#888" },
      { name: "Prompt Eng.",  Icon: FiMessageSquare, color: "#888" },
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      { name: "AWS EC2",  Icon: FaAws,               color: "#FF9900" },
      { name: "Docker",   Icon: SiDocker,            color: "#2496ED" },
      { name: "Linux",    Icon: SiLinux,             color: "#FCC624" },
      { name: "CI/CD",    Icon: FiLayers,            color: "#888" },
    ],
  },
];

function TechCard({ name, Icon, color, delay }: { name: string; Icon: React.ElementType; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.33, 1, 0.68, 1] }}
      className="tech-card group"
      title={name}
    >
      <Icon
        size={26}
        className="tech-icon"
        style={{ color: "var(--text-2)" }}
        onMouseEnter={(e: React.MouseEvent) => ((e.target as SVGElement).style.color = color)}
        onMouseLeave={(e: React.MouseEvent) => ((e.target as SVGElement).style.color = "var(--text-2)")}
      />
      <span className="text-xs font-display font-semibold text-center leading-tight"
        style={{ color: "var(--text-2)" }}>
        {name}
      </span>
    </motion.div>
  );
}

/* Marquee rows */
const ALL_TECH = [
  "Python", "FastAPI", "PostgreSQL", "TensorFlow", "PyTorch", "Next.js",
  "TypeScript", "LangChain", "AWS", "Docker", "Git", "Scikit-learn",
  "Python", "FastAPI", "PostgreSQL", "TensorFlow", "PyTorch", "Next.js",
  "TypeScript", "LangChain", "AWS", "Docker", "Git", "Scikit-learn",
];
const ALL_TECH2 = [
  "NumPy", "Pandas", "Transformers", "RAG", "SQLAlchemy", "Linux",
  "Jupyter", "C++", "REST APIs", "JWT Auth", "CI/CD", "Prompt Eng.",
  "NumPy", "Pandas", "Transformers", "RAG", "SQLAlchemy", "Linux",
  "Jupyter", "C++", "REST APIs", "JWT Auth", "CI/CD", "Prompt Eng.",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 md:py-36" ref={ref}>
      {/* Label */}
      <div className="px-6 md:px-14">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-label">06 — Tech Stack</span>
          <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border-y py-3 mb-20"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="marquee-outer py-2">
          <div className="marquee-track">
            {ALL_TECH.map((t, i) => (
              <span key={i} className="inline-flex items-center mx-4 text-sm font-display"
                style={{ color: i % 4 === 0 ? "var(--accent)" : "var(--text-2)" }}>
                {t}<span className="ml-4 opacity-20">·</span>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-outer py-2">
          <div className="marquee-track-rev">
            {ALL_TECH2.map((t, i) => (
              <span key={i} className="inline-flex items-center mx-4 text-sm font-display"
                style={{ color: i % 5 === 0 ? "var(--accent)" : "var(--text-2)" }}>
                {t}<span className="ml-4 opacity-20">·</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Icon grid by category */}
      <div className="px-6 md:px-14 space-y-14">
        {groups.map((group, gi) => (
          <motion.div key={group.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + gi * 0.07 }}
          >
            <p className="font-display font-bold text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--accent)" }}>
              {group.label}
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {group.items.map((item, ii) => (
                <TechCard
                  key={item.name}
                  name={item.name}
                  Icon={item.Icon}
                  color={item.color}
                  delay={0.25 + gi * 0.05 + ii * 0.04}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
