import Link from 'next/link';

export default function TrishuleyePage() {
  return (
    <>
      <header className="page-header">
        <canvas className="canvas-bg" data-density="70" />
        <div className="grid-bg" />
        <div className="vignette" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="classification-bar">
            <span className="live">LIVE</span>
            <span>Trishuleye · One pane of glass · Choose your view</span>
          </div>
          <div className="eyebrow reveal mt-md">
            <span className="dot" />EXPERIENCE — TRISHULEYE
          </div>
          <h1 className="reveal">Two views. One panel.</h1>
          <p className="lead reveal">
            Trishuleye fuses live telemetry, threat tracks, and full-motion video from every Trishul Aero
            platform on the network. Pick the view that fits the moment — fleet overview or live operator video.
          </p>
        </div>
      </header>

      <section className="chooser reveal-stagger">
        <a className="choice" href="/trishuleye/dashboard.html">
          <div className="choice__num">VIEW 01 // FLEET</div>
          <h2 className="choice__title">Fleet Dashboard</h2>
          <p className="choice__desc">
            Live airspace, fleet strength, flight-hour totals, open incidents, and the compliance score
            across every platform on the network.
          </p>
          <div className="choice__preview">
            <svg viewBox="0 0 600 220" preserveAspectRatio="xMidYMid meet">
              <rect width="600" height="220" fill="#07080a" />
              <g stroke="#2a2e35" strokeWidth=".5" strokeDasharray="1 4">
                <line x1="0" y1="50" x2="600" y2="50" />
                <line x1="0" y1="110" x2="600" y2="110" />
                <line x1="0" y1="170" x2="600" y2="170" />
              </g>
              <g>
                <rect x="20" y="20" width="120" height="56" fill="none" stroke="#2a2e35" />
                <text x="32" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">FLEET</text>
                <text x="32" y="62" fontFamily="Space Grotesk" fontSize="22" fill="#fff">24</text>
                <rect x="160" y="20" width="120" height="56" fill="none" stroke="#2a2e35" />
                <text x="172" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">UPTIME</text>
                <text x="172" y="62" fontFamily="Space Grotesk" fontSize="22" fill="#fff">99.4%</text>
                <rect x="300" y="20" width="120" height="56" fill="none" stroke="#2a2e35" />
                <text x="312" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">INCIDENTS</text>
                <text x="312" y="62" fontFamily="Space Grotesk" fontSize="22" fill="#ff7a18">00</text>
                <rect x="440" y="20" width="140" height="56" fill="none" stroke="#2a2e35" />
                <text x="452" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">COMPLIANCE</text>
                <text x="452" y="62" fontFamily="Space Grotesk" fontSize="22" fill="#fff">100%</text>
              </g>
              <path d="M20 180 L80 160 L130 165 L190 140 L260 150 L320 130 L380 135 L450 110 L520 115 L580 95" fill="none" stroke="#ff7a18" strokeWidth="1.5" />
              <text x="20" y="208" fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">7-DAY · FLIGHT HOURS — TREND</text>
            </svg>
          </div>
          <div className="choice__caps">
            <div><div className="v">24</div><div className="k">Platforms</div></div>
            <div><div className="v">7m 11s</div><div className="k">Flight time</div></div>
            <div><div className="v">100%</div><div className="k">Compliance</div></div>
          </div>
          <div className="choice__cta">
            Open Fleet Dashboard
            <span className="arrow">→</span>
          </div>
        </a>

        <a className="choice" href="/trishuleye/livestream.html">
          <div className="choice__num">VIEW 02 // LIVE OPS</div>
          <h2 className="choice__title">Live Operations</h2>
          <p className="choice__desc">
            Real-time mission video, AI-driven detections, telemetry overlay, and operator-in-the-loop ROE
            controls from every active sortie.
          </p>
          <div className="choice__preview">
            <svg viewBox="0 0 600 220" preserveAspectRatio="xMidYMid meet">
              <rect width="600" height="220" fill="#07080a" />
              <rect x="20" y="20" width="280" height="180" fill="#0a0c0f" stroke="#2a2e35" />
              <g stroke="#3a3f47" strokeWidth=".5">
                <line x1="20" y1="110" x2="300" y2="110" />
                <line x1="160" y1="20" x2="160" y2="200" />
              </g>
              <g transform="translate(160 110)">
                <rect x="-32" y="-22" width="64" height="44" fill="none" stroke="#ff7a18" strokeWidth="1" />
              </g>
              <g fontFamily="JetBrains Mono" fontSize="9" fill="#ff7a18" letterSpacing="2">
                <text x="34" y="40">● LIVE · UAV-T17 KALKI</text>
                <text x="34" y="186">TGT-04 · CONF 94%</text>
              </g>
              <g>
                <rect x="320" y="20" width="120" height="56" fill="#0a0c0f" stroke="#2a2e35" />
                <text x="332" y="40" fontFamily="JetBrains Mono" fontSize="8" fill="#9aa0a8" letterSpacing="2">FEED 2 · ISR</text>
                <rect x="320" y="84" width="120" height="56" fill="#0a0c0f" stroke="#2a2e35" />
                <text x="332" y="104" fontFamily="JetBrains Mono" fontSize="8" fill="#9aa0a8" letterSpacing="2">FEED 3 · OVRWATCH</text>
                <rect x="320" y="148" width="120" height="52" fill="#0a0c0f" stroke="#2a2e35" />
                <text x="332" y="168" fontFamily="JetBrains Mono" fontSize="8" fill="#9aa0a8" letterSpacing="2">FEED 4 · RECON</text>
              </g>
              <g>
                <rect x="460" y="20" width="120" height="180" fill="#0a0c0f" stroke="#2a2e35" />
                <text x="472" y="38" fontFamily="JetBrains Mono" fontSize="9" fill="#ff7a18" letterSpacing="2">DETECTIONS</text>
                <g fontFamily="JetBrains Mono" fontSize="8" fill="#9aa0a8" letterSpacing="1">
                  <text x="472" y="60">+ VEH 94%</text>
                  <text x="472" y="78">+ VEH 88%</text>
                  <text x="472" y="96">+ HUM 76%</text>
                  <text x="472" y="114">+ VEH 91%</text>
                  <text x="472" y="132">+ HUM 82%</text>
                  <text x="472" y="150">+ UAV 65%</text>
                </g>
                <text x="472" y="190" fontFamily="JetBrains Mono" fontSize="8" fill="#5e646d" letterSpacing="2">TOTAL · 06</text>
              </g>
            </svg>
          </div>
          <div className="choice__caps">
            <div><div className="v">16+</div><div className="k">Streams</div></div>
            <div><div className="v">AES-256</div><div className="k">Encryption</div></div>
            <div><div className="v">27 ms</div><div className="k">Detect loop</div></div>
          </div>
          <div className="choice__cta">
            Open Live Operations
            <span className="arrow">→</span>
          </div>
        </a>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="reveal" style={{ border: '1px solid var(--line-strong)', padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--bg-elev) 0%, var(--bg) 100%)' }}>
            <div className="grid-bg" />
            <div className="hud-brackets"><i /></div>
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <div className="eyebrow"><span className="dot" />DEPLOY TRISHULEYE</div>
                <h2 className="mt-md" style={{ fontSize: 'clamp(32px, 4.4vw, 56px)' }}>
                  Bring the panel to your operations centre.
                </h2>
                <p className="subhead mt-md">
                  Trishuleye deploys on-premises or in private cloud. Operator-in-the-loop ROE, AES-256
                  datalinks, full mission replay.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
                <Link className="btn btn--primary" href="/contact">
                  Request Demo <span className="arrow">→</span>
                </Link>
                <Link className="btn" href="/products">
                  Back to systems <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
