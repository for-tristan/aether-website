"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DOWNLOAD_URL = "https://github.com/for-tristan/Aether-Browser-Win/releases/latest";
const SOURCE_URL = "https://github.com/for-tristan/aether-browser";

const features = [
  { icon: "\u2727", title: "Clarity by design", desc: "A clean, liquid-glass interface keeps the web at the center. Floating pill tabs, page-tint color sampling, and zero clutter." },
  { icon: "\u2301", title: "Fluid by nature", desc: "Move between pages and tabs with smooth animations. Tab closing, opening, and switching all feel seamless." },
  { icon: "\u25C8", title: "Your space, your way", desc: "Onboarding wizard lets you pick your name, background, and default browser. Personalized from the first launch." },
  { icon: "\u26E8", title: "Privacy in mind", desc: "Blocks 150+ ad/tracker domains. Strips tracking cookies. Prevents referrer leakage. DNT + GPC headers on every request." },
  { icon: "\u2318", title: "Tools within reach", desc: "Built-in password manager, task manager, download manager with pause/resume, and find-in-page with regex support." },
  { icon: "\u2726", title: "Ready for what\u2019s next", desc: "Auto-updates download in the background. Anti-fingerprinting protection. Per-site zoom persistence. Tab groups." },
];

const stats = [
  { strong: "150+", label: "Tracker domains blocked" },
  { strong: "0", label: "Telemetry sent" },
  { strong: "100%", label: "Your browsing, your control" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -60]);

  const handleDownload = () => window.open(DOWNLOAD_URL, "_blank");

  return (
    <>
      <div className="page-glow" />
      <div className="noise" />

      {/* Header */}
      <header>
        <div className="wrap navbar">
          <a className="brand" href="#home" aria-label="Aether home">
            <svg className="logo" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="lg" x2="1" y2="1">
                  <stop stopColor="#fff" />
                  <stop offset=".58" stopColor="#dce5ff" />
                  <stop offset="1" stopColor="#899ccf" />
                </linearGradient>
              </defs>
              <path d="M12 70 39 20Q48 4 59 20L88 70Q93 82 81 82 75 82 71 74L50 36Q48 32 45 38L25 74Q19 85 10 79 5 76 12 70Z" fill="url(#lg)" />
              <path d="M13 70Q35 58 59 49 77 42 89 51 97 58 83 66 62 77 30 84" fill="none" stroke="#f7f9ff" strokeWidth="7" strokeLinecap="round" opacity=".85" />
            </svg>
            Aether
          </a>
          <nav className={`navlinks ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
            <a href="#performance" onClick={() => setMenuOpen(false)}>Performance</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
          </nav>
          <a className="nav-cta" href="#download">Download <span>&#8595;</span></a>
          <button className="menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
        </div>
      </header>

      <main id="home">
        {/* Hero */}
        <motion.section
          className="wrap hero"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pill"
            >
              <span className="dot" />
              A next-generation browser
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Aether
            </motion.h1>
            <motion.p
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Browse beyond limits.
            </motion.p>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              A faster, cleaner and more private browsing experience.<br />
              Built on Chromium with anti-fingerprinting, tracker blocking, and a liquid-glass interface.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <a className="button" href="#download">
                <span>&#8595;</span> Download Aether <span className="arrow">&#8250;</span>
              </a>
              <p className="platforms">Available for Windows &middot; v1.2.0 &middot; Auto-updates included</p>
            </motion.div>
          </div>

          {/* 3D Browser mockup */}
          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="orb one" />
            <div className="orb two" />
            <div className="device-stage">
              <div className="device-shadow" />
              <div className="browser">
                <div className="browser-top">
                  <div className="traffic"><i /><i /><i /></div>
                  <div className="tab">New Tab <span>&times;</span></div>
                  <span className="tabplus">+</span>
                </div>
                <div className="toolbar">
                  <span className="ico">&#8249;</span>
                  <span className="ico">&#8250;</span>
                  <span className="ico">&#8635;</span>
                  <div className="address">&#8981; &nbsp; Search with Aether...</div>
                  <div className="toolbar-right"><span>&#9734;</span><span>&#9635;</span><span>&#9776;</span></div>
                </div>
                <div className="browser-screen">
                  <div className="screen-glow" />
                  <div className="screen-wave" />
                  <svg className="screen-logo" viewBox="0 0 100 100" aria-hidden="true">
                    <defs>
                      <linearGradient id="cl" x2="1" y2="1">
                        <stop stopColor="#fff" />
                        <stop offset=".6" stopColor="#dbe5ff" />
                        <stop offset="1" stopColor="#8298d2" />
                      </linearGradient>
                    </defs>
                    <path d="M12 70 39 20Q48 4 59 20L88 70Q93 82 81 82 75 82 71 74L50 36Q48 32 45 38L25 74Q19 85 10 79 5 76 12 70Z" fill="url(#cl)" />
                    <path d="M13 70Q35 58 59 49 77 42 89 51 97 58 83 66 62 77 30 84" fill="none" stroke="#f7f9ff" strokeWidth="7" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="device-side" />
              <div className="device-bottom" />
            </div>
            <div className="ribbon" />
          </motion.div>
        </motion.section>

        <div className="scroll-hint">
          <span className="mouse" />
          <span>Scroll to explore</span>
        </div>

        {/* Features */}
        <section className="section" id="features">
          <div className="wrap">
            <motion.div
              className="section-head"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="kicker">Made for the way you browse</div>
              <h2>Everything you need.<br />Nothing in your way.</h2>
              <p>Aether brings your everyday browsing into focus with a thoughtful experience that feels fast, calm and effortless.</p>
            </motion.div>
            <div className="feature-grid">
              {features.map((f, i) => (
                <motion.article
                  key={i}
                  className="feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Split */}
        <section className="section" id="privacy">
          <div className="wrap split">
            <motion.div
              className="visual-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="privacy-orb"><span>&#9671;</span></div>
            </motion.div>
            <motion.div
              className="split-copy"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="kicker">Your web, your rules</div>
              <h2>A quieter kind of privacy.</h2>
              <p>Your browser should work for you. Aether blocks 150+ tracker domains, strips tracking cookies, prevents referrer leakage, and sends DNT + GPC headers on every request.</p>
              <p>Anti-fingerprinting protection overrides canvas, WebGL, navigator, audio, fonts, timezone, and WebRTC APIs \u2014 so you blend in with the crowd. No unique fingerprint. No tracking.</p>
              <a className="text-link" href="#download">Discover Aether <span>&#8599;</span></a>
            </motion.div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="section performance" id="performance">
          <div className="wrap">
            <motion.div
              className="section-head"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="kicker">Stay in your flow</div>
              <h2>Less friction.<br />More momentum.</h2>
              <p>From the first tab to the last, Aether is designed around a smoother, more focused browsing rhythm.</p>
            </motion.div>
            <div className="stats">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="stat"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <strong>{s.strong}</strong>
                  <span>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="section" id="download">
          <div className="wrap">
            <motion.div
              className="download-panel"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="kicker">Your next browser is here</div>
              <h2>Make room for Aether.</h2>
              <p>Step into a cleaner, more considered browsing experience. Free, with automatic updates.</p>
              <button className="button" onClick={handleDownload}>
                Get Aether <span className="arrow">&#8250;</span>
              </button>
              <div className="os-list">
                <span>Windows 10/11</span>
                <span>v1.2.0</span>
                <span>~85 MB</span>
                <span>Auto-updates</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap footer-inner">
          <span>&copy; 2026 Aether. Browse beyond limits.</span>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#download">Download</a>
            <a href={SOURCE_URL} target="_blank" rel="noopener">Source</a>
          </div>
        </div>
      </footer>
    </>
  );
}
