"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { HiBookOpen } from "react-icons/hi";

const papers = [
  {
    title: "AI-Driven Load Balancer for Cloud Computing Environments",
    conference: "ICT4SD 2025",
    fullConference: "International Conference on ICT for Sustainable Development (ICT4SD)",
    published: "ICT Analysis and Applications — Lecture Notes in Networks and Systems",
    year: "2025",
    abstract:
      "Developed a DDPG-based reinforcement learning system for dynamic load balancing across AWS EC2 clusters, achieving 14% memory and 15% energy reduction over traditional heuristic methods.",
    tags: ["Reinforcement Learning", "Cloud Computing", "DDPG", "AWS", "Distributed Systems"],
    color: "border-purple-500/25",
    accent: "text-purple-400",
    bg: "bg-purple-500/5",
    iconColor: "text-purple-400",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  },
  {
    title: "Solar Panel Fault Detection Using Deep Learning",
    conference: "IEEE ICITEICS 2025",
    fullConference: "IEEE 2nd International Conference on Information Technology, Electronics and Intelligent Communication Systems",
    published: "IEEE ICITEICS, Bengaluru",
    year: "2025",
    abstract:
      "Proposed a hybrid ResNet50 + VGG16 deep learning model for solar panel fault classification, achieving 97.12% binary and 78% multi-class accuracy. Benchmarked against CNN, CBAM-CNN, InceptionV3, and AlexNet.",
    tags: ["Deep Learning", "Computer Vision", "ResNet50", "VGG16", "Fault Detection", "IEEE"],
    color: "border-blue-500/25",
    accent: "text-blue-400",
    bg: "bg-blue-500/5",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  },
  {
    title: "Gesture Recognition Technology in Smart Gloves Enhanced by Machine Learning",
    conference: "IEEE ICUIS 2024",
    fullConference: "4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS)",
    published: "IEEE ICUIS 2024",
    year: "2024",
    abstract:
      "Explored machine learning-enhanced gesture recognition in smart gloves for ubiquitous computing, presenting a novel approach to interpreting hand gestures through wearable sensor technology.",
    tags: ["Machine Learning", "Gesture Recognition", "IoT", "Wearables", "IEEE", "NLP"],
    color: "border-cyan-500/25",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/5",
    iconColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="research"
      className="py-24 px-6 max-w-6xl mx-auto"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3 block">
          Research
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Published Papers
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          3 peer-reviewed publications at IEEE and international conferences — from cloud intelligence to deep learning.
        </p>
      </motion.div>

      {/* Publication count banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center gap-8 mb-12 p-5 rounded-2xl bg-[#0d1929] border border-blue-500/15"
      >
        {[
          { value: "3", label: "Publications" },
          { value: "2025", label: "Latest Year" },
          { value: "IEEE", label: "Publisher" },
          { value: "2", label: "Conferences 2025" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
          </div>
        ))}
      </motion.div>

      <div className="space-y-5">
        {papers.map((paper, i) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className={`group relative bg-[#0d1929] rounded-2xl border ${paper.color} p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className={`absolute inset-0 rounded-2xl ${paper.bg} opacity-50 pointer-events-none`} />

            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <HiBookOpen className={paper.iconColor} size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-1 group-hover:text-blue-100 transition-colors">
                      {paper.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${paper.badgeColor}`}>
                        <FiAward size={11} />
                        {paper.conference}
                      </span>
                      <span className="text-xs text-slate-600">{paper.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-3 ml-12">
                {paper.abstract}
              </p>

              <div className="ml-12 text-xs text-slate-600 mb-4 italic">
                {paper.fullConference}
              </div>

              <div className="ml-12 flex flex-wrap gap-1.5">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
