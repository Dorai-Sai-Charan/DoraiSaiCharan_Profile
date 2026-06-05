"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiBook, FiCode, FiTrendingUp } from "react-icons/fi";
import { HiAcademicCap, HiLightBulb } from "react-icons/hi";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

const techStack = [
  { label: "Python", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25" },
  { label: "FastAPI", color: "bg-green-500/15 text-green-300 border-green-500/25" },
  { label: "Next.js", color: "bg-slate-500/20 text-slate-200 border-slate-500/30" },
  { label: "PostgreSQL", color: "bg-blue-500/15 text-blue-300 border-blue-500/25" },
  { label: "TensorFlow", color: "bg-orange-500/15 text-orange-300 border-orange-500/25" },
  { label: "PyTorch", color: "bg-red-500/15 text-red-300 border-red-500/25" },
  { label: "LangChain", color: "bg-purple-500/15 text-purple-300 border-purple-500/25" },
  { label: "AWS", color: "bg-amber-500/15 text-amber-300 border-amber-500/25" },
  { label: "SQLAlchemy", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25" },
  { label: "Git", color: "bg-rose-500/15 text-rose-300 border-rose-500/25" },
];

const stats = [
  { value: "3+", label: "IEEE / ICT Papers", icon: FiBook },
  { value: "8.69", label: "CGPA", icon: HiAcademicCap },
  { value: "30+", label: "API Endpoints Built", icon: FiCode },
  { value: "97%", label: "Model Accuracy", icon: FiTrendingUp },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3 block">
          About Me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Who I Am
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A passionate engineer at the intersection of Artificial Intelligence and Backend Systems,
          turning ideas into research-backed, production-grade solutions.
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
      >
        {stats.map(({ value, label, icon: Icon }) => (
          <motion.div
            key={label}
            variants={cardVariants}
            className="card-glow bg-[#0d1929] rounded-2xl p-5 text-center"
          >
            <Icon className="text-blue-400 mx-auto mb-2" size={22} />
            <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
            <div className="text-xs text-slate-500 font-medium">{label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
      >
        {/* Card 1 — About me text (large) */}
        <motion.div
          variants={cardVariants}
          className="card-glow bg-[#0d1929] rounded-2xl p-7 md:col-span-2 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                <HiLightBulb className="text-blue-400" size={18} />
              </span>
              <span className="text-sm font-semibold text-blue-400">My Story</span>
            </div>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              I&apos;m <span className="text-white font-semibold">Dorai Sai Charan Madisetty</span>,
              a final-year B.Tech student in <span className="text-blue-400">Computer Science with AI</span> at
              Amrita Vishwa Vidyapeetham, Bengaluru.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              I specialize in building scalable REST APIs with FastAPI, designing robust database schemas,
              and applying deep learning to solve real-world problems. My work spans from reinforcement
              learning-based cloud systems to hybrid CNN models — all backed by peer-reviewed publications.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tag-pill">Available for Internships</span>
            <span className="tag-pill">Open Source Contributor</span>
            <span className="tag-pill">Research-Driven</span>
          </div>
        </motion.div>

        {/* Card 2 — Location + Globe */}
        <motion.div
          variants={cardVariants}
          className="card-glow bg-[#0d1929] rounded-2xl p-6 flex flex-col items-center justify-center overflow-hidden relative"
        >
          <div className="absolute top-4 left-4 flex items-center gap-1.5 text-xs text-slate-400">
            <FiMapPin className="text-blue-400" size={14} />
            <span>Bengaluru, India</span>
          </div>
          <Globe />
          <div className="mt-1 text-center">
            <p className="text-xs text-slate-500">Based in India · Open to Remote</p>
          </div>
        </motion.div>

        {/* Card 3 — Education */}
        <motion.div
          variants={cardVariants}
          className="card-glow bg-[#0d1929] rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
              <HiAcademicCap className="text-blue-400" size={18} />
            </span>
            <span className="text-sm font-semibold text-blue-400">Education</span>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-600/40 pl-4">
              <p className="text-white font-semibold text-sm">B.Tech CSE with AI</p>
              <p className="text-slate-400 text-xs mt-0.5">Amrita Vishwa Vidyapeetham</p>
              <p className="text-slate-500 text-xs">2022 – Present</p>
              <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-xs border border-blue-500/25">
                8.69 CGPA
              </span>
            </div>
            <div className="border-l-2 border-slate-700 pl-4">
              <p className="text-slate-300 font-medium text-sm">Senior Secondary</p>
              <p className="text-slate-400 text-xs mt-0.5">Race Jr. College, Kurnool</p>
              <p className="text-slate-500 text-xs">2020 – 2022 · 94%</p>
            </div>
            <div className="border-l-2 border-slate-800 pl-4">
              <p className="text-slate-400 font-medium text-sm">Secondary Education</p>
              <p className="text-slate-500 text-xs mt-0.5">Montessori Indus School, Kurnool</p>
              <p className="text-slate-600 text-xs">2020 · 90%</p>
            </div>
          </div>
        </motion.div>

        {/* Card 4 — Tech Stack */}
        <motion.div
          variants={cardVariants}
          className="card-glow bg-[#0d1929] rounded-2xl p-6 md:col-span-2"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
              <FiCode className="text-blue-400" size={18} />
            </span>
            <span className="text-sm font-semibold text-blue-400">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map(({ label, color }) => (
              <motion.span
                key={label}
                whileHover={{ scale: 1.08 }}
                className={`inline-block px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-default ${color}`}
              >
                {label}
              </motion.span>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-500">
              Currently exploring: <span className="text-purple-400">RAG Pipelines · LLM Agents · Vector Databases</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
