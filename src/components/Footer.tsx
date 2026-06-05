"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="text-slate-400 text-sm">
            Designed & built by{" "}
            <span className="gradient-text font-semibold">Dorai Sai Charan Madisetty</span>
          </p>
          <p className="text-slate-600 text-xs mt-1">
            B.Tech CSE with AI · Amrita Vishwa Vidyapeetham · Bengaluru
          </p>
        </motion.div>

        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/Dorai-Sai-Charan", icon: FiGithub },
            { href: "https://linkedin.com/in/doraisaicharan", icon: FiLinkedin },
            { href: "mailto:doraisaicharan09@gmail.com", icon: FiMail },
          ].map(({ href, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: "#60a5fa" }}
              className="text-slate-600 hover:text-blue-400 transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
