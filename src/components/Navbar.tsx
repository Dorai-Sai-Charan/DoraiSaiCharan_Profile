"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-xl border-b border-blue-500/10 shadow-lg shadow-blue-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-lg font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">DSC</span>
            <span className="text-slate-500 ml-1 text-sm font-normal">portfolio</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:doraisaicharan09@gmail.com"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-blue-500/10 py-4"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="px-6 pt-3">
              <a
                href="mailto:doraisaicharan09@gmail.com"
                className="block text-center py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
