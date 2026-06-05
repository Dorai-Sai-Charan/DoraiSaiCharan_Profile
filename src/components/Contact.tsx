"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";

const contacts = [
  {
    icon: FiMail,
    label: "Email",
    value: "doraisaicharan09@gmail.com",
    href: "mailto:doraisaicharan09@gmail.com",
    color: "text-blue-400",
    border: "border-blue-500/25",
    bg: "hover:bg-blue-500/10",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/doraisaicharan",
    href: "https://linkedin.com/in/doraisaicharan",
    color: "text-sky-400",
    border: "border-sky-500/25",
    bg: "hover:bg-sky-500/10",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Dorai-Sai-Charan",
    href: "https://github.com/Dorai-Sai-Charan",
    color: "text-slate-300",
    border: "border-slate-500/25",
    bg: "hover:bg-slate-500/10",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 8333991456",
    href: "tel:+918333991456",
    color: "text-emerald-400",
    border: "border-emerald-500/25",
    bg: "hover:bg-emerald-500/10",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3 block">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          I&apos;m actively looking for internship and full-time opportunities in AI, Backend Engineering, and ML Research.
          If you have an exciting role, let&apos;s connect!
        </p>
      </motion.div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/20 border border-blue-500/20 rounded-3xl p-10 md:p-14 text-center mb-12 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <div className="text-5xl mb-4">👋</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Say Hello
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Whether it&apos;s a job opportunity, collaboration, or just a chat about AI and backend systems — my inbox is always open.
          </p>
          <motion.a
            href="mailto:doraisaicharan09@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/25"
          >
            <FiMail size={18} />
            Send a Message
            <FiArrowUpRight size={16} />
          </motion.a>
        </div>
      </motion.div>

      {/* Contact links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className={`flex items-center gap-4 p-5 rounded-2xl bg-[#0d1929] border ${c.border} ${c.bg} transition-all group`}
          >
            <div className={`w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center ${c.color} flex-shrink-0`}>
              <c.icon size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 font-medium">{c.label}</p>
              <p className={`text-sm font-semibold ${c.color} truncate`}>{c.value}</p>
            </div>
            <FiArrowUpRight size={16} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
