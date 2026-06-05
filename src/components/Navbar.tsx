"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 px-6 md:px-12 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "border-b border-white/5 bg-[#0d0d0d]/80 backdrop-blur-md" : ""
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg text-cream tracking-tight">
          DSC<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="link-hover text-sm text-muted hover:text-cream transition-colors duration-200 font-display"
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        {/* Right: resume link */}
        <div className="hidden md:block">
          <motion.a
            href="mailto:doraisaicharan09@gmail.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm font-display font-semibold text-accent border border-accent/30 hover:border-accent hover:bg-accent hover:text-black px-4 py-1.5 rounded transition-all duration-200"
          >
            Hire me
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen((p) => !p)}
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-cream transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-cream transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-cream transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#0d0d0d] border-b border-white/5 py-6 px-6"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-display text-muted hover:text-cream border-b border-white/5 transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
