import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    id:    "email",
    label: "Email",
    value: "Dayronvc98@gmail.com",
    href:  "mailto:Dayronvc98@gmail.com",
    icon:  Mail,
    color: "#00d4ff",
    colorBg: "rgba(0,212,255,0.07)",
    colorBorder: "rgba(0,212,255,0.25)",
    hint:  "Send me an email",
  },
  {
    id:    "phone",
    label: "Phone",
    value: "+57 311 613 4972",
    href:  "tel:+573116134972",
    icon:  Phone,
    color: "#00ff88",
    colorBg: "rgba(0,255,136,0.07)",
    colorBorder: "rgba(0,255,136,0.25)",
    hint:  "Call or WhatsApp",
  },
  {
    id:    "linkedin",
    label: "LinkedIn",
    value: "dayron-vera-7a7b14211",
    href:  "https://www.linkedin.com/in/dayron-vera-7a7b14211/",
    icon:  ExternalLink,
    color: "#00d4ff",
    colorBg: "rgba(0,212,255,0.07)",
    colorBorder: "rgba(0,212,255,0.25)",
    hint:  "Connect on LinkedIn",
  },
  {
    id:    "github",
    label: "GitHub",
    value: "github.com/Dayron321",
    href:  "https://github.com/Dayron321",
    icon:  ExternalLink,
    color: "#c400ff",
    colorBg: "rgba(196,0,255,0.07)",
    colorBorder: "rgba(196,0,255,0.25)",
    hint:  "View repositories",
  },
  {
    id:    "location",
    label: "Location",
    value: "Bogotá, Colombia",
    href:  null,
    icon:  MapPin,
    color: "#f97316",
    colorBg: "rgba(249,115,22,0.07)",
    colorBorder: "rgba(249,115,22,0.25)",
    hint:  "UTC−5 (COT)",
  },
];

export default function Contact() {
  return (
    <main
      className="relative min-h-screen pt-24 pb-20 overflow-hidden cyber-grid"
      style={{ background: "#050508", color: "#eef2ff" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,0,255,0.04) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "rgba(0,212,255,0.6)" }}
          >
            // contact
          </p>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#c400ff]"
            >
              Get in Touch
            </span>
          </h1>
          <p className="text-[#6b7a99] text-base">
            Available for backend, QA automation, and DevOps opportunities.
          </p>
        </div>

        {/* ── Contact Cards ── */}
        <div className="space-y-4">
          {contactLinks.map(({ id, label, value, href, icon: Icon, color, colorBg, colorBorder, hint }) => {
            const inner = (
              <div
                className="flex items-center gap-5 p-5 rounded-sm transition-all duration-300 group"
                style={{
                  background: colorBg,
                  border: `1px solid ${colorBorder}`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center"
                  style={{
                    background: "rgba(5,5,14,0.8)",
                    border: `1px solid ${colorBorder}`,
                    boxShadow: `0 0 16px ${color}22`,
                  }}
                >
                  <Icon size={20} style={{ color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.3)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-semibold truncate"
                    style={{ color, fontFamily: "var(--font-space)", fontSize: "0.95rem" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-mono)" }}
                  >
                    {hint}
                  </p>
                </div>

                {/* Arrow (only for links) */}
                {href && (
                  <div
                    className="flex-shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    style={{ color }}
                  >
                    →
                  </div>
                )}
              </div>
            );

            if (href) {
              const isExternal = href.startsWith("http");
              return (
                <a
                  key={id}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block hover:-translate-y-0.5 transition-transform duration-300"
                >
                  {inner}
                </a>
              );
            }

            return <div key={id}>{inner}</div>;
          })}
        </div>

        {/* ── Footer status ── */}
        <div
          className="mt-10 text-center py-4 rounded-sm"
          style={{
            background: "rgba(0,212,255,0.03)",
            border: "1px solid rgba(0,212,255,0.08)",
          }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.25)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff88] mr-2 animate-pulse"
              style={{ boxShadow: "0 0 6px #00ff88" }}
            />
            Response time: usually within 24h
          </p>
        </div>
      </div>
    </main>
  );
}
