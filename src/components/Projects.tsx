"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "FINARC",
    subtitle: "Financial Intelligence & Transaction Management System",
    description:
      "Scalable full-stack financial platform with 30+ RESTful API endpoints for transaction processing, account management, and real-time financial analytics. Features JWT authentication, multi-account ledgers, and automated reporting.",
    highlights: [
      "30+ REST API endpoints with FastAPI",
      "Optimized PostgreSQL schema with SQLAlchemy ORM",
      "JWT-based auth & authorization system",
      "Real-time net worth tracking & spending insights",
    ],
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "SQLAlchemy", "JWT"],
    github: "https://github.com/Dorai-Sai-Charan",
    live: null,
    color: "from-blue-600/20 to-cyan-600/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    badge: "Full-Stack",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  },
  {
    title: "AI Load Balancer",
    subtitle: "Cloud Computing Load Balancer using Reinforcement Learning",
    description:
      "Reinforcement learning-based load balancing system using Deep Deterministic Policy Gradient (DDPG) to optimize CPU utilization and minimize task latency across a 5-node AWS EC2 cluster. Published at ICT4SD 2025.",
    highlights: [
      "DDPG RL algorithm for dynamic load balancing",
      "14% reduction in memory usage",
      "15% reduction in energy consumption",
      "Published at ICT4SD 2025 International Conference",
    ],
    tech: ["Python", "TensorFlow", "AWS EC2", "DDPG", "Distributed Systems", "Cloud Computing"],
    github: "https://github.com/Dorai-Sai-Charan",
    live: null,
    color: "from-purple-600/20 to-indigo-600/10",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    badge: "AI / Research",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/25",
  },
  {
    title: "Solar Fault Detector",
    subtitle: "Solar Panel Fault Detection Using Deep Learning",
    description:
      "Hybrid deep learning pipeline combining ResNet50 and VGG16 for binary and multi-class fault classification on solar panel images. Achieved 97.12% binary accuracy. Published at IEEE ICITEICS 2025.",
    highlights: [
      "Hybrid ResNet50 + VGG16 architecture",
      "97.12% accuracy for binary classification",
      "78% multi-class classification accuracy",
      "Published at IEEE ICITEICS 2025, Bengaluru",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "ResNet50", "VGG16", "Deep Learning", "Computer Vision"],
    github: "https://github.com/Dorai-Sai-Charan",
    live: null,
    color: "from-emerald-600/20 to-teal-600/10",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    badge: "Deep Learning",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3 block">
          Projects
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          What I&apos;ve Built
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          From financial systems to AI research — each project is production-quality, paper-backed, and built to solve real problems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className={`group relative bg-[#0d1929] rounded-2xl border ${project.border} overflow-hidden transition-all duration-300 hover:border-opacity-60 hover:-translate-y-1`}
            style={{
              boxShadow: "0 0 0 0 rgba(59,130,246,0)",
            }}
            whileHover={{
              boxShadow: "0 8px 40px rgba(59,130,246,0.1)",
            }}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 pointer-events-none`} />

            <div className="relative p-7 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left — content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-600">0{i + 1}</span>
                  </div>

                  <h3 className={`text-2xl font-bold text-white mb-1 group-hover:${project.accent} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm font-medium ${project.accent} mb-4`}>{project.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.accent.replace("text-", "bg-")}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-xs text-slate-400 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — links */}
                <div className="flex md:flex-col items-center gap-3 md:pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white transition-all"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>

            {/* Hover arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <FiArrowUpRight className={`${project.accent}`} size={20} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <a
          href="https://github.com/Dorai-Sai-Charan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 text-sm font-medium transition-all hover:bg-blue-500/10"
        >
          <FiGithub size={16} />
          View All on GitHub
          <FiArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}
