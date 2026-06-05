"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-3"
      style={{ borderColor: "var(--border)" }}
    >
      <p className="text-xs font-display" style={{ color: "var(--muted)" }}>
        © 2025 Dorai Sai Charan Madisetty
      </p>
      <p className="text-xs" style={{ color: "var(--muted)" }}>
        Designed &amp; built with{" "}
        <span style={{ color: "var(--accent)" }}>Next.js</span>{" "}
        ·{" "}
        <span style={{ color: "var(--accent)" }}>Framer Motion</span>
      </p>
    </footer>
  );
}
