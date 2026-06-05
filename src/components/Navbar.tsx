"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Tech Stack", href: "#skills" },
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
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 px-6 md:px-14 h-[72px] flex items-center justify-between transition-all duration-300"
        style={{
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          background: scrolled ? "rgba(8,8,8,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <a href="#" className="font-display font-bold text-base" style={{ color: "var(--text)" }}>
          DSC<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l, i) => (
            <motion.a key={l.href} href={l.href}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.08 + i * 0.06 }}
              className="link-hover text-sm font-display transition-colors duration-200"
              style={{ color: "var(--text-2)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.a href="/resume.pdf" download="Dorai_Sai_Charan_Resume.pdf"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
            className="flex items-center gap-1.5 text-sm font-display font-semibold px-4 py-2 rounded-lg border transition-all duration-200"
            style={{ borderColor: "var(--border-strong)", color: "var(--text-2)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent-border)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text-2)"; }}
            title="Download Resume"
          >
            <FiDownload size={13} />
            Resume
          </motion.a>
          <motion.a href="mailto:doraisaicharan09@gmail.com"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="text-sm font-display font-semibold px-5 py-2 rounded-lg border transition-all duration-200"
            style={{ borderColor: "var(--accent-border)", color: "var(--accent)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent-border)"; }}
          >
            Hire me
          </motion.a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(p => !p)}>
          <span className="block h-px w-5 transition-all" style={{ background: "var(--text)", transform: open ? "rotate(45deg) translateY(8px)" : "" }} />
          <span className="block h-px w-5 transition-all" style={{ background: "var(--text)", opacity: open ? 0 : 1 }} />
          <span className="block h-px w-5 transition-all" style={{ background: "var(--text)", transform: open ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden py-6 px-6"
            style={{ background: "rgba(8,8,8,0.97)", borderBottom: "1px solid var(--border)" }}
          >
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-sm font-display border-b"
                style={{ color: "var(--text-2)", borderColor: "var(--border)" }}
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
