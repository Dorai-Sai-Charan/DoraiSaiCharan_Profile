"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const links = [
  { label: "About",    href: "#about",    id: "about"    },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Research", href: "#research", id: "research" },
  { label: "Tech",     href: "#skills",   id: "skills"   },
  { label: "Contact",  href: "#contact",  id: "contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen]                   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 px-6 md:px-14 h-[72px] flex items-center justify-between transition-all duration-300"
        style={{
          borderBottom: scrolled ? "1px solid rgba(109,50,255,0.12)" : "1px solid transparent",
          background: scrolled ? "rgba(4,6,17,0.72)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-base flex items-center gap-1"
          style={{ color: "var(--white-1)", letterSpacing: "-0.01em" }}
        >
          DSC
          <span className="pulse-dot" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l, i) => {
            const isActive = activeSection === l.id;
            return (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 + i * 0.06 }}
                className="relative px-4 py-2 font-display rounded-full"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--white-1)" : "var(--white-3)",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = "var(--white-1)";
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = "var(--white-3)";
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(91,42,230,0.12)",
                      border: "1px solid rgba(109,50,255,0.18)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <span style={{ position: "relative", zIndex: 1 }}>{l.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute"
                    style={{
                      bottom: "3px",
                      left: "20%",
                      right: "20%",
                      height: "2px",
                      background: "linear-gradient(90deg, #5B2AE6, #6D32FF)",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/resume.pdf"
            download="Dorai_Sai_Charan_Resume.pdf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 36px rgba(91,42,230,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ delay: 0.38, type: "spring", stiffness: 300, damping: 30 }}
            className="relative flex items-center gap-1.5 font-display font-semibold px-4 py-2 rounded-lg overflow-hidden"
            style={{
              fontSize: "14px",
              color: "var(--white-1)",
              background: "linear-gradient(135deg, #5B2AE6 0%, #6D32FF 100%)",
              boxShadow: "0 8px 32px rgba(91,42,230,0.35), inset 0 1px 0 rgba(255,255,255,0.10)",
            }}
          >
            <FiDownload size={13} />
            Resume
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span className="block h-px w-5 transition-all duration-300" style={{ background: "var(--white-1)", transform: open ? "rotate(45deg) translateY(8px)" : "" }} />
          <span className="block h-px w-5 transition-all duration-300" style={{ background: "var(--white-1)", opacity: open ? 0 : 1 }} />
          <span className="block h-px w-5 transition-all duration-300" style={{ background: "var(--white-1)", transform: open ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden py-6 px-6"
            style={{
              background: "rgba(4,6,17,0.97)",
              borderBottom: "1px solid rgba(109,50,255,0.12)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 font-display border-b"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: activeSection === l.id ? "var(--white-1)" : "var(--white-3)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                {l.label}
                {activeSection === l.id && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                )}
              </motion.a>
            ))}
            <div className="mt-5 flex gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg font-display font-semibold text-sm"
                style={{
                  background: "linear-gradient(135deg, #5B2AE6 0%, #6D32FF 100%)",
                  color: "var(--white-1)",
                  boxShadow: "0 8px 32px rgba(91,42,230,0.35)",
                }}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
