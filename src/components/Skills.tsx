"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "⌨️",
    color: "blue",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 85 },
      { name: "TypeScript", level: 72 },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    color: "green",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 85 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    category: "Databases & ORM",
    icon: "🗄️",
    color: "amber",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "SQLAlchemy", level: 85 },
      { name: "Database Design", level: 80 },
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: "🤖",
    color: "purple",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 82 },
      { name: "Scikit-learn", level: 88 },
      { name: "Numpy / Pandas", level: 90 },
    ],
  },
  {
    category: "Generative AI & NLP",
    icon: "✨",
    color: "pink",
    skills: [
      { name: "LangChain", level: 75 },
      { name: "RAG Pipelines", level: 72 },
      { name: "Transformers", level: 78 },
      { name: "Prompt Engineering", level: 80 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    icon: "🛠️",
    color: "cyan",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "AWS EC2", level: 72 },
      { name: "Linux", level: 80 },
      { name: "CI/CD", level: 68 },
    ],
  },
];

const colorMap: Record<string, { bar: string; bg: string; border: string; text: string }> = {
  blue: { bar: "bg-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  green: { bar: "bg-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  amber: { bar: "bg-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  purple: { bar: "bg-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
  pink: { bar: "bg-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400" },
  cyan: { bar: "bg-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const c = colorMap[color];

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className={`text-xs font-semibold ${c.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${c.bar} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3 block">
          Skills
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Technical Expertise
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          From classical algorithms to transformer architectures — here&apos;s what I work with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const c = colorMap[cat.color];
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`card-glow bg-[#0d1929] rounded-2xl p-6 border ${c.border}`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </span>
                <span className={`text-sm font-semibold ${c.text}`}>{cat.category}</span>
              </div>

              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={i * 0.1 + j * 0.1}
                />
              ))}
            </motion.div>
          );
        })}
      </div>

      {/* CS Core competencies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 bg-[#0d1929] rounded-2xl border border-slate-800 p-6"
      >
        <p className="text-sm text-slate-500 font-medium mb-4">Core Computer Science Foundations</p>
        <div className="flex flex-wrap gap-2">
          {[
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Operating Systems",
            "Computer Networks",
            "Database Management Systems",
            "Cloud Computing",
            "Distributed Systems",
            "Computer Vision",
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-xs text-slate-300 font-medium cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
