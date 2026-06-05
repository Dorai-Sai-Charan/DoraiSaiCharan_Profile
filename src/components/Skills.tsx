"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ROW_A = [
  "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST APIs",
  "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas",
  "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST APIs",
  "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas",
];

const ROW_B = [
  "LangChain", "Transformers", "RAG", "Prompt Engineering", "NLP",
  "AWS EC2", "Git", "Linux", "JWT Auth", "Next.js", "C++", "SQL",
  "LangChain", "Transformers", "RAG", "Prompt Engineering", "NLP",
  "AWS EC2", "Git", "Linux", "JWT Auth", "Next.js", "C++", "SQL",
];

const categories = [
  {
    name: "Backend & APIs",
    items: ["Python", "FastAPI", "REST APIs", "JWT Authentication", "Next.js", "TypeScript"],
  },
  {
    name: "Databases & ORM",
    items: ["PostgreSQL", "SQLAlchemy", "Database Design", "SQL"],
  },
  {
    name: "ML & AI",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    name: "Generative AI",
    items: ["LangChain", "RAG Pipelines", "Transformers", "Prompt Engineering", "NLP"],
  },
  {
    name: "Infrastructure",
    items: ["AWS EC2", "Git / GitHub", "Linux", "CI/CD", "Docker"],
  },
  {
    name: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "Cloud Computing"],
  },
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee-outer py-3">
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {items.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center mx-3 text-sm font-display font-medium whitespace-nowrap ${
              i % 5 === 0 ? "text-accent" : "text-muted"
            }`}
          >
            {item}
            <span className="ml-3 opacity-30" style={{ color: "var(--muted)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      {/* Label */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">04 — Skills</span>
          <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-t border-b py-2"
        style={{ borderColor: "var(--border)" }}
      >
        <MarqueeRow items={ROW_A} />
        <MarqueeRow items={ROW_B} reverse />
      </motion.div>

      {/* Category grid */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <p
                className="font-display font-semibold text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ borderColor: "rgba(200,255,0,0.4)", color: "var(--text)" }}
                    className="pill transition-all duration-150"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
