"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

const titles = [
  "AI & Backend Engineer",
  "ML Researcher",
  "FastAPI Specialist",
  "Problem Solver",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse spotlight effect
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      el.style.setProperty("--mouse-x", `${e.clientX}px`);
      el.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center spotlight-container grid-bg overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/5 rounded-full blur-3xl" />
        {/* Top left accent */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700/8 rounded-full blur-3xl" />
        {/* Bottom right accent */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-700/8 rounded-full blur-3xl" />

        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5 border border-blue-500/10"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-slate-100">Dorai Sai</span>
          <br />
          <span className="gradient-text text-glow">Charan</span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          variants={itemVariants}
          className="h-12 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400">
            {displayText}
            <span className="inline-block w-0.5 h-7 bg-blue-400 ml-1 align-middle animate-pulse" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          B.Tech CSE with AI @ Amrita Vishwa Vidyapeetham · 3× Published Researcher ·
          Building intelligent, scalable systems that bridge{" "}
          <span className="text-blue-400 font-medium">AI</span> and{" "}
          <span className="text-blue-400 font-medium">Backend Engineering</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-xl border border-blue-500/30 hover:border-blue-500/60 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-blue-500/10"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 font-medium text-sm transition-all duration-200"
          >
            <HiDownload size={16} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-5"
        >
          {[
            { href: "https://github.com/Dorai-Sai-Charan", icon: FiGithub, label: "GitHub" },
            { href: "https://linkedin.com/in/doraisaicharan", icon: FiLinkedin, label: "LinkedIn" },
            { href: "mailto:doraisaicharan09@gmail.com", icon: FiMail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, color: "#60a5fa" }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-lg border border-slate-800 hover:border-blue-500/40 text-slate-500 hover:text-blue-400 transition-all duration-200 hover:bg-blue-500/10"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Tech stack row */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-10">
          {["Python", "FastAPI", "Next.js", "PostgreSQL", "TensorFlow", "PyTorch", "LangChain", "AWS"].map(
            (tech) => (
              <span key={tech} className="tag-pill">{tech}</span>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
