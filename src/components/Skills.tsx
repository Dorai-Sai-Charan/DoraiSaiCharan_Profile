"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython, SiFastapi, SiPostgresql, SiNextdotjs, SiTypescript, SiCplusplus,
  SiTensorflow, SiPytorch, SiDocker, SiGit, SiLinux, SiJupyter,
  SiNumpy, SiScikitlearn, SiGithub, SiRedis,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { FiDatabase, FiLink, FiCpu, FiLayers, FiMessageSquare, FiBarChart2, FiCode } from "react-icons/fi";

const groups = [
  {
    label: "Languages",
    items: [
      { name: "Python",     Icon: SiPython     },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "C++",        Icon: SiCplusplus  },
      { name: "Java",       Icon: FaJava       },
      { name: "SQL",        Icon: FiDatabase   },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI",    Icon: SiFastapi    },
      { name: "Next.js",    Icon: SiNextdotjs  },
      { name: "REST APIs",  Icon: FiCode       },
      { name: "JWT Auth",   Icon: FiLayers     },
      { name: "Redis",      Icon: SiRedis      },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL",  Icon: SiPostgresql },
      { name: "SQLAlchemy",  Icon: FiDatabase   },
      { name: "Git",         Icon: SiGit        },
      { name: "GitHub",      Icon: SiGithub     },
    ],
  },
  {
    label: "ML & AI",
    items: [
      { name: "TensorFlow",   Icon: SiTensorflow  },
      { name: "PyTorch",      Icon: SiPytorch     },
      { name: "Scikit-learn", Icon: SiScikitlearn },
      { name: "NumPy",        Icon: SiNumpy       },
      { name: "Pandas",       Icon: FiBarChart2   },
      { name: "Jupyter",      Icon: SiJupyter     },
    ],
  },
  {
    label: "Gen AI & NLP",
    items: [
      { name: "LangChain",    Icon: FiLink          },
      { name: "Transformers", Icon: FiCpu           },
      { name: "RAG",          Icon: FiLayers        },
      { name: "Prompt Eng.",  Icon: FiMessageSquare },
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      { name: "AWS EC2",  Icon: FaAws    },
      { name: "Docker",   Icon: SiDocker },
      { name: "Linux",    Icon: SiLinux  },
      { name: "CI/CD",    Icon: FiLayers },
    ],
  },
];

function TechCard({ name, Icon, delay }: { name: string; Icon: React.ElementType; delay: number }) {
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
        size={34}
        className="tech-icon"
        style={{ color: "var(--text-2)" }}
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
            <div className="flex items-center gap-3 mb-5">
              <p className="font-display font-bold text-xs tracking-widest uppercase text-gradient-accent">
                {group.label}
              </p>
              <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(109,50,255,0.22), transparent)" }} />
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {group.items.map((item, ii) => (
                <TechCard
                  key={item.name}
                  name={item.name}
                  Icon={item.Icon}
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
