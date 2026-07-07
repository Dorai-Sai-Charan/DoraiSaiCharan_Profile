"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/doraisaicharan09@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-transparent border rounded-lg px-4 py-3 text-sm font-display outline-none transition-all duration-200 placeholder:text-[var(--muted)]";
  const inputStyle = {
    borderColor: "rgba(255,255,255,0.08)",
    color: "var(--text)",
    background: "rgba(255,255,255,0.03)",
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-14 relative overflow-hidden" ref={ref}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%, -50%)", width: 700, height: 500,
          background: "radial-gradient(ellipse at center, rgba(91,42,230,0.09) 0%, rgba(60,29,140,0.05) 40%, transparent 70%)",
          filter: "blur(50px)",
        }} />
      </div>

      {/* Divider */}
      <div className="h-px w-full mb-10 relative z-10" style={{ background: "var(--border)" }} />

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16 relative z-10"
      >
        <span className="section-label">06 — Contact</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.div>

      {/* Big CTA text */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        className="font-display font-bold leading-none mb-4 relative z-10"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "var(--muted)" }}
      >
        Like what you see?
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="font-display font-bold leading-none mb-14 text-gradient-hero relative z-10"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
      >
        Let&apos;s work together.
      </motion.p>

      {/* Contact form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="relative z-10 max-w-xl space-y-4 mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputBase}
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = "rgba(109,50,255,0.55)")}
            onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className={inputBase}
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = "rgba(109,50,255,0.55)")}
            onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          />
        </div>

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} resize-none`}
          style={inputStyle}
          onFocus={e => (e.currentTarget.style.borderColor = "rgba(109,50,255,0.55)")}
          onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="flex items-center gap-2 px-7 py-3 rounded-lg font-display font-bold text-sm transition-all duration-200 disabled:opacity-60"
            style={{
              background: "rgba(91,42,230,0.18)",
              border: "1px solid rgba(109,50,255,0.40)",
              color: "var(--accent)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(91,42,230,0.28)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(109,50,255,0.70)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(91,42,230,0.18)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(109,50,255,0.40)";
            }}
          >
            {status === "sending" ? (
              <>Sending…</>
            ) : status === "success" ? (
              <><FiCheck size={14} /> Sent!</>
            ) : (
              <><FiSend size={14} /> Send Message</>
            )}
          </button>

          {status === "error" && (
            <span className="flex items-center gap-1.5 text-xs font-display" style={{ color: "#f87171" }}>
              <FiAlertCircle size={13} /> Something went wrong. Try again.
            </span>
          )}
        </div>
      </motion.form>

      {/* Social row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap gap-6 relative z-10"
      >
        {[
          { href: "https://github.com/Dorai-Sai-Charan", icon: FiGithub, label: "GitHub" },
          { href: "https://linkedin.com/in/doraisaicharan", icon: FiLinkedin, label: "LinkedIn" },
          { href: "mailto:doraisaicharan09@gmail.com", icon: null, label: "doraisaicharan09@gmail.com" },
          { href: "tel:+918333991456", icon: null, label: "+91 8333991456" },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 text-sm font-display link-hover transition-colors"
            style={{ color: "var(--muted)" }}
          >
            {Icon && <Icon size={14} />}
            {label}
            <FiArrowUpRight size={12} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
