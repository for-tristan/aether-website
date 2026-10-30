"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const DOWNLOAD_URL = "https://github.com/for-tristan/Aether-Browser-Win/releases/download/v1.2.0/Aether-Setup-1.2.0.exe";
const SOURCE_URL = "https://github.com/for-tristan/aether-browser";
const features = [
  { icon: "\u2727", title: "Clarity by design", desc: "A liquid-glass interface with floating pill tabs, page-tint color sampling, and a frameless window that adapts to every page you visit." },
  { icon: "\u2301", title: "Fluid by nature", desc: "Tab animations, drag-to-reorder, pin/mute, close-to-left/right, duplicate, and reopen closed tabs. Every interaction feels effortless." },
  { icon: "\u25C8", title: "Your space, your way", desc: "5-step onboarding wizard: pick your name, background (gradient waves or custom wallpaper), and set Aether as your default browser." },
  { icon: "\u26E8", title: "Privacy in mind", desc: "Blocks 150+ ad/tracker domains, strips tracking cookies, prevents referrer leakage, sends DNT + GPC headers, and blocks WebAuthn passkey prompts." },
  { icon: "\u2318", title: "Tools within reach", desc: "Encrypted password manager, task manager (Shift+Esc), download manager with pause/resume, find-in-page with regex, per-site zoom persistence." },
  { icon: "\u2726", title: "Ready for what\u2019s next", desc: "Auto-updates download in the background. Anti-fingerprinting (canvas, WebGL, navigator, audio, timezone, WebRTC). Local favicon cache." },
];

const stats = [
  { strong: "150+", label: "Tracker domains blocked" },
  { strong: "0", label: "Telemetry sent" },
  { strong: "100%", label: "Your browsing, your control" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -60]);
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.95]);

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  return (
    <>
      <div className="page-glow" />
      <div className="noise" />

      {/* Header — logo + name left, nav links center, download + github right */}
      <header>
        <div className="wrap navbar">
          <a className="brand" href="#home" aria-label="Aether home">
            <Image src="/aether-logo.png" alt="Aether" width={42} height={42} className="logo" priority />
            Aether
          </a>
          <nav className={`navlinks ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
            <a href="#performance" onClick={() => setMenuOpen(false)}>Performance</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
          </nav>
          <div className="nav-right">
            <a className="github-link" href={SOURCE_URL} target="_blank" rel="noopener" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a className="nav-cta" href={DOWNLOAD_URL} target="_blank" rel="noopener">
              Download <span>&#8595;</span>
            </a>
            <button className="menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
          </div>
        </div>
      </header>

      <main id="home">
        {/* Hero */}
        <motion.section
          className="wrap hero"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <div className="hero-copy">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aether
            </motion.h1>
            <motion.p
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Browse beyond limits.
            </motion.p>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A faster, cleaner and more private browsing experience.<br />
              Built on Chromium with anti-fingerprinting, tracker blocking, and a liquid-glass interface.
            </motion.p>
          </div>

          {/* 3D Browser mockup */}
          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
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
                  <Image src="/aether-logo.png" alt="Aether" width={115} height={115} className="screen-logo" />
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

        {/* Features — staggered scroll-in with alternating layout */}
        <section className="section" id="features" ref={featuresRef}>
          <div className="wrap">
            <motion.div
              className="section-head"
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="kicker">Made for the way you browse</div>
              <h2>Everything you need.<br />Nothing in your way.</h2>
              <p>Aether brings your everyday browsing into focus with a thoughtful experience that feels fast, calm and effortless.</p>
            </motion.div>

            {/* Alternating feature rows instead of boring grid */}
            <div className="feature-rows">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className={`feature-row ${i % 2 === 1 ? "reverse" : ""}`}
                  initial={{ opacity: 0, x: i % 2 === 1 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <div className="feature-visual">
                    <div className="feature-icon-large">{f.icon}</div>
                    <div className="feature-glow-orb" />
                  </div>
                  <div className="feature-content">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy — full-width immersive section */}
        <section className="section privacy-section" id="privacy">
          <motion.div
            className="privacy-bg"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="wrap">
            <motion.div
              className="privacy-content"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="kicker">Your web, your rules</div>
              <h2>A quieter kind of privacy.</h2>
              <div className="privacy-grid">
                <motion.div
                  className="privacy-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="privacy-icon">&#128737;</div>
                  <h4>Tracker Blocking</h4>
                  <p>150+ ad and tracker domains blocked at the network level. Tracking parameters stripped from URLs.</p>
                </motion.div>
                <motion.div
                  className="privacy-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="privacy-icon">&#128274;</div>
                  <h4>Encrypted Passwords</h4>
                  <p>Local XOR encryption with autofill. No cloud sync. Your credentials never leave your device.</p>
                </motion.div>
                <motion.div
                  className="privacy-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="privacy-icon">&#128064;</div>
                  <h4>Anti-Fingerprinting</h4>
                  <p>Canvas noise, WebGL spoofing, navigator overrides, audio distortion, timezone masking, WebRTC IP leak prevention.</p>
                </motion.div>
                <motion.div
                  className="privacy-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="privacy-icon">&#127760;</div>
                  <h4>DNT + GPC Signals</h4>
                  <p>Do Not Track and Global Privacy Control headers sent on every request. Third-party cookies stripped.</p>
                </motion.div>
              </div>
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
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
              <a className="button" href={DOWNLOAD_URL} target="_blank" rel="noopener">
                Get Aether <span className="arrow">&#8250;</span>
              </a>
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
