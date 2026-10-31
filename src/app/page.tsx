"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";

const DOWNLOAD_URL = "https://github.com/for-tristan/Aether-Browser-Win/releases/download/v1.2.0/Aether-Setup-1.2.0.exe";
const SOURCE_URL = "https://github.com/for-tristan/Aether-Browser-Win";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const LOGO = `${BASE}/aether-logo.png`;

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
  const featuresInView = useInView(featuresRef, { margin: "-100px", once: true });

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className="page-glow" />
      <div className="noise" />

      {/* Header */}
      <header>
        <div className="wrap navbar">
          <a className="brand" href="#home" aria-label="Aether home">
            <Image src={LOGO} alt="Aether" width={42} height={53} className="logo" priority />
            
          </a>
          <nav className={`navlinks ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
            <a href="#performance" onClick={() => setMenuOpen(false)}>Performance</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
          </nav>
          <div className="nav-right">
            <a className="github-link" href={SOURCE_URL} target="_blank" rel="noopener" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
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
              Built on Chromium.
            </motion.p>
          </div>

          {/* 3D Browser mockup */}
          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="device-stage">
              <div className="device-shadow" />
              <div className="browser">
                <div className="browser-top">
                  <div className="tab">New Tab <span>&times;</span></div>
                </div>
                <div className="toolbar">
                 
                  <div className="address">&#8981; &nbsp; Search with Aether...</div>
                  <div className="toolbar-right"><span>&#9734;</span><span>&#9776;</span></div>
                </div>
                <div className="browser-screen">
                  <Image src={LOGO} alt="Aether" width={115} height={146} className="screen-logo" />
                </div>
              </div>
              <div className="device-side" />
              <div className="device-bottom" />
            </div>
            <div className="ribbon" />
          </motion.div>
        </motion.section>

        {/* Features */}
        <section className="section" id="features" ref={featuresRef}>
          <div className="wrap">
            <motion.div
              className="section-head"
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Built for the way<br />you actually browse.</h2>
              <p>Four pillars, one seamless experience. Every part of Aether works together to keep things fast, private and effortless.</p>
            </motion.div>

            <div className="bento">
              {/* 01 Clarity — large cell with mini browser scene */}
              <motion.div
                className="bento-cell bento-large"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-60px", once: true }}
                transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="bento-num"></div>
                <div className="bento-scene scene-clarity">
                  <div className="mini-browser">
                    <div className="mini-bar"><i /><i /><i /></div>
                    <div className="mini-url">aether.app</div>
                    <div className="mini-body">
                      <div className="mini-line w1" />
                      <div className="mini-line w2" />
                      <div className="mini-line w3" />
                      <div className="mini-grid"><div /><div /><div /></div>
                    </div>
                  </div>
                </div>
                <div className="bento-text">
                  <span className="bento-tag"></span>
                  <h3>Clarity by design</h3>
                  <p>A clean, considered interface that keeps the web at the center and distractions out of your way.</p>
                </div>
              </motion.div>

              {/* 02 Fluid — medium with flow dots */}
              <motion.div
                className="bento-cell bento-medium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-60px", once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="bento-num"></div>
                <div className="bento-scene scene-fluid">
                  <div className="flow-path" />
                  <div className="flow-dot d1" />
                  <div className="flow-dot d2" />
                  <div className="flow-dot d3" />
                </div>
                <div className="bento-text">
                  <span className="bento-tag"></span>
                  <h3>Fluid by nature</h3>
                  <p>Move between pages and tabs with a browsing experience designed to feel seamless.</p>
                </div>
              </motion.div>

              {/* 03 Privacy — medium with shield pulse */}
              <motion.div
                className="bento-cell bento-medium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-60px", once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="bento-num"></div>
                <div className="bento-scene scene-privacy">
                  <div className="pulse-ring r1" />
                  <div className="pulse-ring r2" />
                  <div className="mini-shield">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                </div>
                <div className="bento-text">
                  <span className="bento-tag"></span>
                  <h3>Privacy in mind</h3>
                  <p>Blocks 150+ ad and tracker domains. Strips tracking cookies. Prevents referrer leakage.</p>
                </div>
              </motion.div>

              {/* 04 Tools — wide with tool chips */}
              <motion.div
                className="bento-cell bento-wide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-60px", once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="bento-num"></div>
                <div className="bento-scene scene-tools">
                  <div className="tool-chip"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="14" r="4"/><path d="M10.5 12 21 2m-4 2 3 3"/></svg></div>
                  <div className="tool-chip"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
                  <div className="tool-chip"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>
                  <div className="tool-chip"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
                </div>
                <div className="bento-text">
                  <span className="bento-tag"></span>
                  <h3>Tools within reach</h3>
                  <p>Password manager, task manager, download manager and find-in-page with regex support.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Privacy */}
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
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="privacy-head">
                <div className="kicker"></div>
                <h2>Privacy, actively<br />defended.</h2>
                <p>While you browse, Aether is quietly working blocking, encrypting, and obscuring in real time, so you don't have to think about it.</p>
              </div>

              <div className="privacy-console">
                <div className="radar-panel">
                  <div className="radar" aria-hidden>
                    <div className="radar-ring r1" />
                    <div className="radar-ring r2" />
                    <div className="radar-ring r3" />
                    <div className="radar-cross h" />
                    <div className="radar-cross v" />
                    <div className="radar-sweep" />
                    <div className="radar-blip b1" />
                    <div className="radar-blip b2" />
                    <div className="radar-blip b3" />
                    <div className="radar-blip b4" />
                    <div className="radar-core">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                    </div>
                  </div>
                  <div className="radar-stats">
                    <div className="radar-stat"><strong>150+</strong><span>trackers blocked</span></div>
                    <div className="radar-divider" />
                    <div className="radar-stat"><strong>0</strong><span>signals sent</span></div>
                  </div>
                </div>

                <div className="privacy-modules">
                  <motion.div
                    className="module"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="module-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                    <div className="module-text">
                      <h4>Tracker Blocking</h4>
                      <p>150+ ad and tracker domains blocked at the network level. Tracking parameters stripped from URLs.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="module"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="module-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                    <div className="module-text">
                      <h4>Encrypted Passwords</h4>
                      <p>Local encryption with autofill. No cloud sync. Your credentials never leave your device.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="module"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="module-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
                    <div className="module-text">
                      <h4>Anti-Fingerprinting</h4>
                      <p>Protects against canvas, WebGL, audio, and timezone fingerprinting. You blend in with the crowd.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="module"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="module-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                    <div className="module-text">
                      <h4>Do Not Track</h4>
                      <p>Tracking protection signals sent on every request. Third-party cookies stripped automatically.</p>
                    </div>
                  </motion.div>
                </div>
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
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.6 }}
            >
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
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2>Make room for Aether.</h2>
              <p>Step into a cleaner, more considered browsing experience. Free, with automatic updates.</p>
              <a className="button" href={DOWNLOAD_URL} target="_blank" rel="noopener">
                Get Aether <span className="arrow">&#8250;</span>
              </a>
              <div className="os-list">
                <span>Windows 10/11</span>
                <span>v1.3.0</span>
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
