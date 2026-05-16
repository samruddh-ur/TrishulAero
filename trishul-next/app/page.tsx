import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Built to Own the Sky',
  description: 'Sovereign autonomous aerial platforms, counter-UAS systems, and mission intelligence — engineered in India for the next era of aerospace and defense.'
};

export default function HomePage() {
  return (
    <>
{/* ==================== NAV ==================== */}


{/* ==================== HERO ==================== */}
<header className="hero" id="top">
  <div className="hero__media">
    <canvas className="canvas-bg" data-density="80" data-mode="orange"></canvas>
    <div className="grid-bg"></div>
    {/* Drone schematic overlay */}
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: '.55'}}>
      <defs>
        <radialGradient id="haze" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#ff7a18" stopOpacity=".25"/>
          <stop offset="60%" stopColor="#ff7a18" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="metal" x1="0" x2="1">
          <stop offset="0" stopColor="#1c2026"/>
          <stop offset="1" stopColor="#0a0c0f"/>
        </linearGradient>
        <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".7" fill="#2c3138"/>
        </pattern>
      </defs>
      <rect width="1600" height="900" fill="url(#haze)"/>
      {/* horizon */}
      <line x1="0" y1="640" x2="1600" y2="640" stroke="#2a2e35" strokeWidth="1"/>
      <line x1="0" y1="641" x2="1600" y2="641" stroke="#ff7a18" strokeWidth=".5" strokeDasharray="2 6"/>

      {/* Distant drone silhouette schematic, central */}
      <g transform="translate(800 380)">
        {/* center fuselage */}
        <ellipse cx="0" cy="0" rx="36" ry="10" fill="url(#metal)" stroke="#3a3f47" strokeWidth="1"/>
        {/* left arm */}
        <line x1="-30" y1="-4" x2="-180" y2="-110" stroke="#3a3f47" strokeWidth="3"/>
        <line x1="-30" y1="4" x2="-180" y2="110" stroke="#3a3f47" strokeWidth="3"/>
        {/* right arm */}
        <line x1="30" y1="-4" x2="180" y2="-110" stroke="#3a3f47" strokeWidth="3"/>
        <line x1="30" y1="4" x2="180" y2="110" stroke="#3a3f47" strokeWidth="3"/>
        {/* rotors */}
        <g stroke="#ff7a18" strokeWidth="1" fill="none">
          <circle cx="-180" cy="-110" r="44"/>
          <circle cx="180" cy="-110" r="44"/>
          <circle cx="-180" cy="110" r="44"/>
          <circle cx="180" cy="110" r="44"/>
        </g>
        <g fill="#1c2026" stroke="#2c3138">
          <circle cx="-180" cy="-110" r="6"/>
          <circle cx="180" cy="-110" r="6"/>
          <circle cx="-180" cy="110" r="6"/>
          <circle cx="180" cy="110" r="6"/>
        </g>
        {/* camera turret */}
        <circle cx="0" cy="14" r="9" fill="#0a0c0f" stroke="#ff7a18"/>
        <circle cx="0" cy="14" r="3" fill="#ff7a18"/>
        {/* callouts */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#9aa0a8" letterSpacing="2">
          <line x1="-180" y1="-110" x2="-260" y2="-180" stroke="#3a3f47"/>
          <text x="-360" y="-184">M1 // T-MOTOR U13</text>
          <line x1="180" y1="-110" x2="260" y2="-180" stroke="#3a3f47"/>
          <text x="266" y="-184">M2 // T-MOTOR U13</text>
          <line x1="0" y1="14" x2="100" y2="80" stroke="#3a3f47"/>
          <text x="106" y="84">EO/IR GIMBAL</text>
          <line x1="-30" y1="0" x2="-160" y2="-30" stroke="#3a3f47"/>
          <text x="-330" y="-26">UAV-T17 // KALKI</text>
        </g>
      </g>

      {/* bottom data ribbon */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5e646d" letterSpacing="3">
        <text x="60" y="820">28.6139°N · 77.2090°E · ALT 1420M · HDG 274° · ROE-A · WIND 12KT 270°</text>
        <text x="60" y="840">FRAME 04282 / 04500 · ENCRYPT AES-256 · LINK NOMINAL</text>
      </g>
    </svg>
    <div className="vignette"></div>
    <div className="scanline"></div>
  </div>

  <div className="hero__inner reveal-stagger">
    <div className="classification-bar">
      <span className="live">LIVE</span>
      <span>Classification // Open · Operating from Manipal &amp; Bengaluru</span>
    </div>

    <h1 className="h-display hero__title">Built to<br /><em>own the sky.</em></h1>

    <p className="hero__sub">
      Trishul Aero engineers autonomous aerial platforms, counter-UAS systems, and mission intelligence for India's armed forces, paramilitary, and commercial operators. Hardware. Autonomy. Intelligence. Vertically integrated.
    </p>

    <div className="hero__ctas">
      <Link className="btn btn--primary" href="/products">Explore Systems <span className="arrow">→</span></Link>
      <Link className="btn" href="/contact">Request Demo <span className="arrow">→</span></Link>
      <Link className="btn btn--ghost" href="/about">Why Trishul <span className="arrow">→</span></Link>
    </div>
  </div>

  <div className="hero__hud">
    <div className="panel is-live">
      <div className="label">FEED // SECTOR-9</div>
      <div className="value">UAV-T17 KALKI</div>
    </div>
    <div className="panel">
      <div className="label">MISSION CLOCK</div>
      <div className="value" data-hud-time>09:42:18</div>
    </div>
    <div className="panel">
      <div className="label">GROUND SPEED</div>
      <div className="value" data-hud-vel>22.0 m/s</div>
    </div>
    <div className="panel">
      <div className="label">ALTITUDE AGL</div>
      <div className="value" data-hud-alt>1420 m</div>
    </div>
    <div className="panel">
      <div className="label">DATALINK INTEGRITY</div>
      <div className="value" style={{color: 'var(--ok)'}}>NOMINAL ↑ 99.4%</div>
    </div>
  </div>

  <div className="hero__scroll">
    Scroll
    <span className="bar"></span>
  </div>
</header>

{/* ==================== STATS STRIP ==================== */}
<section className="stats reveal-stagger" aria-label="Capabilities at a glance">
  <div className="stats__item">
    <div className="num"><span data-counter="14" data-suffix="">0</span><small>+</small></div>
    <div className="label">Platforms in service</div>
  </div>
  <div className="stats__item">
    <div className="num"><span data-counter="2.4" data-decimals="1" data-suffix="">0</span><small>M</small></div>
    <div className="label">Cumulative operational hours</div>
  </div>
  <div className="stats__item">
    <div className="num"><span data-counter="100" data-suffix="">0</span><small>%</small></div>
    <div className="label">Indigenous design &amp; build</div>
  </div>
  <div className="stats__item">
    <div className="num"><span data-counter="42" data-suffix="">0</span><small>ms</small></div>
    <div className="label">On-board decision latency</div>
  </div>
</section>

{/* ==================== FEATURED SYSTEMS ==================== */}
<section className="section" id="platforms">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>01 // Autonomous Systems</div>
        <h2 className="mt-md">Mission-grade autonomy for the Indian battlespace.</h2>
      </div>
      <p className="subhead lead">
        Designed and built for tri-service deployment — from high-altitude ISR to swarm-resilient strike. Hardened, encrypted, sovereign. Every airframe runs the same autonomy stack and surfaces to one operator interface.
      </p>
    </div>
  </div>

  <div className="systems reveal">
    {/* Kalki UCAV */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">UAV-T17 // FPV</span>
        <span className="meta">CLASS — IIIA</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#1c2026"/><stop offset="1" stopColor="#0a0c0f"/></linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g1)"/>
          <g stroke="#2a2e35" strokeDasharray="1 4"><line x1="0" y1="100" x2="400" y2="100"/><line x1="200" y1="0" x2="200" y2="200"/></g>
          <g transform="translate(200 100)">
            <line x1="-80" y1="-50" x2="80" y2="50" stroke="#3a3f47" strokeWidth="3"/>
            <line x1="-80" y1="50" x2="80" y2="-50" stroke="#3a3f47" strokeWidth="3"/>
            <ellipse cx="0" cy="0" rx="22" ry="7" fill="#1c2026" stroke="#ff7a18"/>
            <g fill="none" stroke="#ff7a18" strokeWidth="1">
              <circle cx="-80" cy="-50" r="22"/><circle cx="80" cy="-50" r="22"/>
              <circle cx="-80" cy="50" r="22"/><circle cx="80" cy="50" r="22"/>
            </g>
          </g>
          <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5e646d" letterSpacing="2">
            <text x="14" y="184">SCH-KALKI-R3</text>
            <text x="316" y="184">ε 5.0 km</text>
          </g>
        </svg>
      </div>
      <div className="system__role">FPV Combat / ISR &amp; Precision Strike</div>
      <div className="system__name">Kalki UCAV</div>
      <p className="system__desc">Next-generation FPV combat system with on-board AI for ISR and precision strike in contested, GNSS-denied environments.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">AI</div><div className="k">On-board</div></div>
        <div className="spec"><div className="v">500g</div><div className="k">Payload</div></div>
        <div className="spec"><div className="v">5,000m</div><div className="k">Ceiling</div></div>
      </div>
      <Link className="system__link" href="/products/kalki">View System →</Link>
    </article>

    {/* Garuda Swarm */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">UAV-S24 // SWARM</span>
        <span className="meta">MESH NETWORK</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g stroke="#2a2e35" strokeDasharray="1 4"><line x1="0" y1="100" x2="400" y2="100"/></g>
          <g stroke="#ff7a18" strokeWidth=".5" opacity=".5">
            <line x1="80" y1="60" x2="160" y2="100"/><line x1="160" y1="100" x2="240" y2="60"/>
            <line x1="240" y1="60" x2="320" y2="100"/><line x1="80" y1="140" x2="160" y2="100"/>
            <line x1="160" y1="100" x2="240" y2="140"/><line x1="240" y1="140" x2="320" y2="100"/>
            <line x1="80" y1="60" x2="80" y2="140"/><line x1="320" y1="60" x2="320" y2="140"/>
          </g>
          <g fill="#ff7a18">
            <circle cx="80" cy="60" r="3"/><circle cx="160" cy="100" r="3"/><circle cx="240" cy="60" r="3"/>
            <circle cx="320" cy="100" r="3"/><circle cx="80" cy="140" r="3"/><circle cx="240" cy="140" r="3"/>
            <circle cx="320" cy="60" r="3"/><circle cx="160" cy="100" r="4"/>
          </g>
          <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5e646d" letterSpacing="2">
            <text x="14" y="184">SCH-GARUDA-S24</text>
            <text x="296" y="184">ε 10 km</text>
          </g>
        </svg>
      </div>
      <div className="system__role">Loitering Munitions / Mesh Swarm</div>
      <div className="system__name">Garuda Swarm</div>
      <p className="system__desc">Mesh-networked autonomous loitering munitions with on-board target classification and no-comms recovery behaviour.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">24×</div><div className="k">Swarm</div></div>
        <div className="spec"><div className="v">10km</div><div className="k">Range</div></div>
        <div className="spec"><div className="v">30min</div><div className="k">Loiter</div></div>
      </div>
      <Link className="system__link" href="/products">View System →</Link>
    </article>

    {/* Dhruv C-UAS */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">CUAS-D7 // LAYERED</span>
        <span className="meta">RF + RADAR</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g fill="none" stroke="#ff7a18" strokeWidth="1">
            <circle cx="200" cy="100" r="30"/>
            <circle cx="200" cy="100" r="60" opacity=".6"/>
            <circle cx="200" cy="100" r="90" opacity=".35"/>
            <circle cx="200" cy="100" r="120" opacity=".2"/>
          </g>
          <line x1="200" y1="100" x2="320" y2="40" stroke="#ff7a18" strokeWidth="1"/>
          <circle cx="320" cy="40" r="4" fill="#ff7a18"/>
          <g stroke="#2a2e35" strokeDasharray="1 4"><line x1="80" y1="100" x2="320" y2="100"/><line x1="200" y1="20" x2="200" y2="180"/></g>
          <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5e646d" letterSpacing="2">
            <text x="14" y="184">SCH-DHRUV-D7</text>
            <text x="306" y="184">360° SCAN</text>
          </g>
        </svg>
      </div>
      <div className="system__role">Counter-UAS / Detect &amp; Defeat</div>
      <div className="system__name">Dhruv C-UAS</div>
      <p className="system__desc">Layered counter-drone system with RF and radar. Soft-kill jamming and hard-kill interceptor unified in one rack.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">15km</div><div className="k">Detect</div></div>
        <div className="spec"><div className="v">6km</div><div className="k">Defeat</div></div>
        <div className="spec"><div className="v">360°</div><div className="k">Coverage</div></div>
      </div>
      <Link className="system__link" href="/products">View System →</Link>
    </article>
  </div>

  <div className="container" style={{marginTop: '36px', textAlign: 'center'}}>
    <Link className="btn btn--ghost" href="/products">View entire fleet — 7 systems <span className="arrow">→</span></Link>
  </div>
</section>

{/* ==================== DEFENSE & ENTERPRISE SOLUTIONS ==================== */}
<section className="section section-tight" id="solutions">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>02 // Operational Domains</div>
        <h2 className="mt-md">From the contested border to the production floor.</h2>
      </div>
      <p className="subhead lead">Eight operating domains. One autonomy stack. Trishul systems shift across mission profiles without re-tooling, re-training, or re-certifying — the difference between a fleet and a collection of drones.</p>
    </div>
  </div>

  {/* Feature 1: Border Surveillance */}
  <div className="feature reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="terrain" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#07080a"/>
            <stop offset="1" stopColor="#1c2026"/>
          </linearGradient>
          <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q10 0 20 20 T40 20" fill="none" stroke="#ff7a18" strokeWidth=".5" opacity=".25"/>
          </pattern>
        </defs>
        <rect width="600" height="520" fill="url(#terrain)"/>
        <rect width="600" height="520" fill="url(#topo)"/>
        {/* target box */}
        <g transform="translate(380 220)">
          <rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#ff7a18" strokeWidth="1"/>
          <line x1="-40" y1="0" x2="-30" y2="0" stroke="#ff7a18"/>
          <line x1="40" y1="0" x2="30" y2="0" stroke="#ff7a18"/>
          <line x1="0" y1="-40" x2="0" y2="-30" stroke="#ff7a18"/>
          <line x1="0" y1="40" x2="0" y2="30" stroke="#ff7a18"/>
          <text x="42" y="-30" fontFamily="JetBrains Mono" fontSize="9" fill="#ff7a18" letterSpacing="2">TGT 04 // 89%</text>
        </g>
        {/* patrol path */}
        <path d="M40 460 Q200 380 320 420 T560 360" fill="none" stroke="#ff7a18" strokeWidth="1" strokeDasharray="3 4"/>
        {/* coordinate frame */}
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">SECTOR 9 // NORTHERN COMMAND</text>
          <text x="40" y="60">LAT 34.0837°N · LON 74.7973°E</text>
          <text x="40" y="500">PATROL ARC ε 18.4 km · SWEEP 04:12:00</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>BORDER SURVEILLANCE</div>
      <h3>Persistence at the line of control.</h3>
      <p>Long-endurance ISR platforms operating in continuous patrol patterns across designated arcs. On-board target classification surfaces anomalies inside the operator loop — not after it.</p>
      <p>From the high-altitude transmission corridors of Ladakh to the riverine borders of the northeast, the same fleet, the same UI, the same chain of custody.</p>
      <ul className="feature__caps">
        <li>BVLOS-certified · 90-min endurance / station</li>
        <li>Sub-100 ms detect-classify-cue loop</li>
        <li>Multi-spectral EO / IR / SWIR fusion</li>
      </ul>
    </div>
  </div>

  {/* Feature 2: Industrial Inspection */}
  <div className="feature is-rev reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        {/* transmission tower silhouette */}
        <g stroke="#3a3f47" strokeWidth="1.5" fill="none">
          <line x1="300" y1="60" x2="300" y2="460"/>
          <line x1="260" y1="160" x2="340" y2="160"/>
          <line x1="240" y1="220" x2="360" y2="220"/>
          <line x1="220" y1="280" x2="380" y2="280"/>
          <line x1="200" y1="340" x2="400" y2="340"/>
          <line x1="300" y1="60" x2="240" y2="160"/>
          <line x1="300" y1="60" x2="360" y2="160"/>
          <line x1="240" y1="160" x2="220" y2="280"/>
          <line x1="360" y1="160" x2="380" y2="280"/>
          <line x1="220" y1="280" x2="200" y2="340"/>
          <line x1="380" y1="280" x2="400" y2="340"/>
        </g>
        {/* power lines */}
        <g stroke="#ff7a18" strokeWidth=".5" opacity=".5">
          <path d="M40 220 Q300 280 560 220"/>
          <path d="M40 280 Q300 340 560 280"/>
        </g>
        {/* drone scan path */}
        <path d="M120 100 L120 460 M180 100 L180 460 M240 100 L240 460" fill="none" stroke="#ff7a18" strokeWidth=".3" strokeDasharray="2 4"/>
        {/* scan markers */}
        <g fill="#ff7a18">
          <circle cx="120" cy="180" r="3"/><circle cx="180" cy="240" r="3"/><circle cx="240" cy="300" r="3"/>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">CORRIDOR INSPECTION // 400KV LINE</text>
          <text x="40" y="60">3,420 km surveyed YTD · 8.4 cm GSD</text>
          <text x="40" y="500">DEFECT FLAG: insulator string · class III</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>INDUSTRIAL INSPECTION</div>
      <h3>Critical infrastructure, mapped to millimetre.</h3>
      <p>Transmission lines, pipelines, refineries, ports, rail corridors. Trishul fleets fly autonomous routes at survey-grade accuracy and feed defect classification straight into asset management systems.</p>
      <p>Three of India's largest power-transmission operators run scheduled BVLOS inspection on Trishul platforms.</p>
      <ul className="feature__caps">
        <li>2 cm GSD ortho · 42 MP multi-spectral</li>
        <li>Native ESRI / OGC export</li>
        <li>AI defect classification on-edge</li>
      </ul>
    </div>
  </div>

  {/* Feature 3: Counter-UAS */}
  <div className="feature reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        <g fill="none" stroke="#ff7a18">
          <circle cx="300" cy="260" r="60" opacity=".9"/>
          <circle cx="300" cy="260" r="120" opacity=".55"/>
          <circle cx="300" cy="260" r="180" opacity=".3"/>
          <circle cx="300" cy="260" r="240" opacity=".15"/>
        </g>
        {/* radar sweep */}
        <path d="M300 260 L520 260 A220 220 0 0 0 470 110 Z" fill="#ff7a18" opacity=".08"/>
        <line x1="300" y1="260" x2="500" y2="120" stroke="#ff7a18" strokeWidth="1"/>
        {/* detected threats */}
        <g>
          <circle cx="180" cy="140" r="5" fill="#ff3b30"/>
          <text x="190" y="138" fontFamily="JetBrains Mono" fontSize="9" fill="#ff3b30" letterSpacing="2">UNK-01 // 2.4 km</text>
          <circle cx="430" cy="180" r="5" fill="#ff3b30"/>
          <text x="440" y="178" fontFamily="JetBrains Mono" fontSize="9" fill="#ff3b30" letterSpacing="2">UNK-02 // 3.8 km</text>
        </g>
        <g stroke="#2a2e35" strokeDasharray="1 4"><line x1="0" y1="260" x2="600" y2="260"/><line x1="300" y1="20" x2="300" y2="500"/></g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">DHRUV C-UAS // RF + RADAR FUSION</text>
          <text x="40" y="60">SCAN 4.2 GHz · 5.8 GHz · 24 GHz</text>
          <text x="40" y="500">ENGAGE WINDOW: 6.4 sec to defeat</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>COUNTER-UAS</div>
      <h3>The other side of the sky.</h3>
      <p>Detect, classify, and defeat hostile drones across the full RF and radar spectrum. Soft-kill jamming and hard-kill interceptor logic share the same target track — engagements escalate, never restart.</p>
      <p>Deployed at sensitive installations, airports, refineries, and forward operating bases across northern and western India.</p>
      <ul className="feature__caps">
        <li>15 km detect · 6 km defeat envelope</li>
        <li>RF + radar + EO fused tracking</li>
        <li>Operator-in-the-loop ROE enforcement</li>
      </ul>
    </div>
  </div>
</section>

{/* ==================== TICKER ==================== */}
<div className="ticker reveal">
  <div className="ticker__track">
    <span>AUTONOMOUS PLATFORMS</span><span>COUNTER-UAS</span><span>EDGE AI</span><span>HYBRID PROPULSION</span><span>SENSOR FUSION</span><span>MISSION INTELLIGENCE</span><span>SOVEREIGN MANUFACTURING</span><span>DEFENCE GRADE</span>
    <span>AUTONOMOUS PLATFORMS</span><span>COUNTER-UAS</span><span>EDGE AI</span><span>HYBRID PROPULSION</span><span>SENSOR FUSION</span><span>MISSION INTELLIGENCE</span><span>SOVEREIGN MANUFACTURING</span><span>DEFENCE GRADE</span>
  </div>
</div>

{/* ==================== TECHNOLOGY STACK ==================== */}
<section className="section" id="technology">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>03 // Technology Stack</div>
        <h2 className="mt-md">One sovereign stack. From silicon to sortie.</h2>
      </div>
      <p className="subhead lead">Trishul Aero is vertically integrated by design. Autonomy, perception, communications, and propulsion are built in-house and certified together — not bolted to imported software.</p>
    </div>
  </div>

  <div className="tech reveal">
    <div className="tech__cell">
      <div className="num">T-01</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="16" cy="16" r="3"/><circle cx="16" cy="16" r="8"/><circle cx="16" cy="16" r="13"/>
        <line x1="16" y1="3" x2="16" y2="29"/><line x1="3" y1="16" x2="29" y2="16"/>
      </svg>
      <h4>Edge Autonomy</h4>
      <p>On-vehicle perception, target classification and swarming behaviour running on indigenous SoCs. No cloud dependency.</p>
    </div>

    <div className="tech__cell">
      <div className="num">T-02</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="4" y="6" width="24" height="20" rx="1"/>
        <line x1="4" y1="12" x2="28" y2="12"/>
        <line x1="10" y1="18" x2="22" y2="18"/>
        <line x1="10" y1="22" x2="18" y2="22"/>
      </svg>
      <h4>Sensor Fusion</h4>
      <p>RF, radar, EO/IR, lidar — fused on a sub-100 ms decision loop. The output is a single trusted picture, not five competing ones.</p>
    </div>

    <div className="tech__cell">
      <div className="num">T-03</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 22 L12 14 L18 20 L28 8"/><circle cx="4" cy="22" r="1.5" fill="currentColor"/><circle cx="28" cy="8" r="1.5" fill="currentColor"/>
      </svg>
      <h4>Mission Intelligence</h4>
      <p>Trishuleye fuses live telemetry, threat tracks, and full-motion video from every Trishul platform on the network — one pane of glass for the entire airborne picture.</p>
    </div>

    <div className="tech__cell">
      <div className="num">T-04</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M6 26 L16 6 L26 26 Z"/><line x1="11" y1="20" x2="21" y2="20"/>
      </svg>
      <h4>Hybrid Propulsion</h4>
      <p>Custom hybrid-electric and turbine powertrains engineered in-house for endurance-class platforms operating at altitude.</p>
    </div>

    <div className="tech__cell">
      <div className="num">T-05</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M16 4 L4 10 L4 20 L16 28 L28 20 L28 10 Z"/><circle cx="16" cy="16" r="3"/>
      </svg>
      <h4>Secure Comms</h4>
      <p>AES-256 encrypted datalinks with frequency-hopping fallback and mesh recovery behaviour for GNSS-denied operation.</p>
    </div>

    <div className="tech__cell">
      <div className="num">T-06</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 16 L16 4 L28 16 L16 28 Z"/><path d="M10 16 L16 10 L22 16 L16 22 Z"/>
      </svg>
      <h4>Counter-UAS</h4>
      <p>Layered RF, radar and effector stack — soft-kill jamming and hard-kill interceptor logic operating on a unified target track.</p>
    </div>

    <div className="tech__cell">
      <div className="num">T-07</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="6" y="6" width="20" height="20"/>
        <line x1="12" y1="12" x2="20" y2="12"/><line x1="12" y1="16" x2="20" y2="16"/><line x1="12" y1="20" x2="16" y2="20"/>
      </svg>
      <h4>Mission Software</h4>
      <p>Concept-of-operations, payload integration, mission rehearsal and after-action review in our in-house digital-twin environment.</p>
    </div>

    <div className="tech__cell">
      <div className="num">T-08</div>
      <svg className="glyph" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="16" cy="16" r="12"/>
        <line x1="16" y1="4" x2="16" y2="28"/><line x1="4" y1="16" x2="28" y2="16"/>
        <path d="M8 8 Q16 16 24 8"/><path d="M8 24 Q16 16 24 24"/>
      </svg>
      <h4>Sovereign Manufacturing</h4>
      <p>Airframe, motors, ESCs, avionics, datalinks — designed and built across our Manipal and Bengaluru facilities. India in, sky out.</p>
    </div>
  </div>
</section>

{/* ==================== WHY TRISHUL ==================== */}
<section className="section bg-elev" id="why">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>04 // Why Trishul Aero</div>
        <h2 className="mt-md">A sovereign aerospace company, engineered from first principles.</h2>
      </div>
      <p className="subhead lead">Trishul Aero exists to make India self-reliant in autonomous aerial systems. Not adapted. Not licensed. Designed and built here for the realities of this geography — and exported on our own terms.</p>
    </div>

    <div className="grid reveal-stagger" style={{gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--line)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
      <div style={{background: 'var(--bg-elev)', padding: '36px 28px'}}>
        <div className="eyebrow" style={{marginBottom: '18px'}}><span className="dot"></span>FIRST PRINCIPLES</div>
        <h4 style={{marginBottom: '10px', color: '#fff'}}>No imported autonomy.</h4>
        <p className="text-soft" style={{fontSize: '14px'}}>Our perception, planning and control stacks are built in-house. The supply chain we depend on is the one we control.</p>
      </div>
      <div style={{background: 'var(--bg-elev)', padding: '36px 28px'}}>
        <div className="eyebrow" style={{marginBottom: '18px'}}><span className="dot"></span>VERTICAL INTEGRATION</div>
        <h4 style={{marginBottom: '10px', color: '#fff'}}>Silicon to sortie.</h4>
        <p className="text-soft" style={{fontSize: '14px'}}>Hardware, autonomy, intelligence — engineered together. Certified together. Sustained together.</p>
      </div>
      <div style={{background: 'var(--bg-elev)', padding: '36px 28px'}}>
        <div className="eyebrow" style={{marginBottom: '18px'}}><span className="dot"></span>OPERATOR FIRST</div>
        <h4 style={{marginBottom: '10px', color: '#fff'}}>Built with the user.</h4>
        <p className="text-soft" style={{fontSize: '14px'}}>Every platform is co-developed with the operators who fly it. Field feedback closes the loop in days, not quarters.</p>
      </div>
      <div style={{background: 'var(--bg-elev)', padding: '36px 28px'}}>
        <div className="eyebrow" style={{marginBottom: '18px'}}><span className="dot"></span>SOVEREIGN BY DEFAULT</div>
        <h4 style={{marginBottom: '10px', color: '#fff'}}>India in, sky out.</h4>
        <p className="text-soft" style={{fontSize: '14px'}}>Designed and manufactured under DGCA Type and MoD AON pathways — exportable to partner nations on our terms.</p>
      </div>
    </div>
  </div>
</section>

{/* ==================== MANUFACTURING ==================== */}
<section className="section section-tight" id="manufacturing">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>05 // Manufacturing &amp; Engineering</div>
        <h2 className="mt-md">Two cities. One fleet.</h2>
      </div>
      <p className="subhead lead">A research-led organisation — five-engineer R&amp;D groups, anti-fragile process. Bengaluru drives autonomy and software; Manipal drives airframe, propulsion, and integration. The hand-off is daily.</p>
    </div>
  </div>

  <div className="feature reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        {/* factory floor isometric */}
        <g stroke="#3a3f47" strokeWidth="1" fill="none">
          <rect x="80" y="180" width="180" height="120"/>
          <rect x="280" y="180" width="120" height="120"/>
          <rect x="420" y="180" width="100" height="120"/>
          <rect x="80" y="320" width="280" height="100"/>
          <rect x="380" y="320" width="140" height="100"/>
        </g>
        <g stroke="#ff7a18" strokeWidth=".5" opacity=".5" fill="none">
          <line x1="80" y1="240" x2="520" y2="240" strokeDasharray="2 4"/>
          <line x1="80" y1="380" x2="520" y2="380" strokeDasharray="2 4"/>
        </g>
        {/* station labels */}
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#9aa0a8" letterSpacing="2">
          <text x="90" y="210">CNC // AIRFRAME</text>
          <text x="290" y="210">AVIONICS</text>
          <text x="430" y="210">ESC LINE</text>
          <text x="90" y="350">INTEGRATION + FLIGHT TEST</text>
          <text x="390" y="350">PROPULSION</text>
        </g>
        <g fill="#ff7a18">
          <circle cx="170" cy="240" r="3"/><circle cx="340" cy="240" r="3"/><circle cx="470" cy="240" r="3"/>
          <circle cx="220" cy="380" r="3"/><circle cx="450" cy="380" r="3"/>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">MANIPAL // ASSEMBLY FLOOR</text>
          <text x="40" y="60">TAKT 38 MIN · 4 PLATFORMS / DAY</text>
          <text x="40" y="500">FIRST-PASS YIELD 96.4%</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>FROM CAD TO FLIGHT TEST</div>
      <h3>Where engineering meets operations.</h3>
      <p>Every Trishul airframe starts in a digital twin and ends on our flight-test range. CNC airframe, in-house avionics, propulsion and ESCs, integration and burn-in — all under one roof.</p>
      <p>It is the only way to ship hardware that survives the field. We learn faster than systems we sell against because nothing leaves the building untested.</p>
      <ul className="feature__caps">
        <li>4 platforms / day takt</li>
        <li>96.4% first-pass yield</li>
        <li>Flight-test envelope to 6,000 m AGL</li>
      </ul>
    </div>
  </div>
</section>

{/* ==================== VISION ==================== */}
<section className="vision reveal">
  <canvas className="canvas-bg" data-density="50"></canvas>
  <div className="container" style={{position: 'relative'}}>
    <div className="eyebrow tac"><span className="dot"></span>06 // VISION OF THE FUTURE</div>
    <h2 className="vision__quote mt-md">A fleet that <em>thinks together</em>, a sky that <em>belongs to us</em>.</h2>
    <p className="subhead tac" style={{margin: '32px auto 0', maxWidth: '56ch'}}>
      The next decade of aerospace will be defined not by airframes but by the autonomy that flies them. Trishul Aero is building both — together, in India, for the world.
    </p>
    <div className="vision__attr">— Founding team · Trishul Advanced Solutions</div>
  </div>
</section>

{/* ==================== TRUST ==================== */}
<section className="trust">
  <div className="container">
    <div className="sect-head reveal" style={{marginBottom: '36px'}}>
      <div>
        <div className="eyebrow"><span className="dot"></span>07 // Credibility</div>
        <h2 className="mt-md">Held to a standard built to fail safely.</h2>
      </div>
      <p className="subhead lead">Certifications, pathways, and partnerships across India's defence and civil aerospace ecosystems. We don't pursue badges — we pursue the engineering discipline they require.</p>
    </div>

    <div className="trust__row reveal-stagger">
      <div><strong>DGCA</strong>Type Cert</div>
      <div><strong>MoD AON</strong>Approval pathway</div>
      <div><strong>iDEX</strong>Cohort 7 awardee</div>
      <div><strong>Make in India</strong>Cat I</div>
      <div><strong>BIS</strong>QMS aligned</div>
      <div><strong>STQC</strong>Cyber audited</div>
    </div>

    <div className="press-row reveal mt-lg">
      <span>As covered by</span>
      <span>The Hindu</span>
      <span>Economic Times</span>
      <span>Force India</span>
      <span>Aerospace Magazine</span>
      <span>SP's Aviation</span>
    </div>
  </div>
</section>

{/* ==================== NEWS ==================== */}
<section className="section">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>08 // Field Notes</div>
        <h2 className="mt-md">From the workshop and the runway.</h2>
      </div>
      <p className="subhead lead">Engineering log entries, programme updates, and the occasional view from 5,000 metres. Written by the team that builds the systems.</p>
    </div>

    <div className="news reveal-stagger">
      <a className="news__item" href="#">
        <div className="news__visual">
          <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="380" fill="#0a0c0f"/>
            <g stroke="#2a2e35" strokeDasharray="2 6"><line x1="0" y1="190" x2="600" y2="190"/><line x1="300" y1="0" x2="300" y2="380"/></g>
            <g transform="translate(300 190)">
              <ellipse cx="0" cy="0" rx="50" ry="14" fill="#1c2026" stroke="#ff7a18"/>
              <line x1="-50" y1="0" x2="-180" y2="-80" stroke="#3a3f47" strokeWidth="3"/>
              <line x1="50" y1="0" x2="180" y2="-80" stroke="#3a3f47" strokeWidth="3"/>
              <line x1="-50" y1="0" x2="-180" y2="80" stroke="#3a3f47" strokeWidth="3"/>
              <line x1="50" y1="0" x2="180" y2="80" stroke="#3a3f47" strokeWidth="3"/>
              <g fill="none" stroke="#ff7a18" strokeWidth="1">
                <circle cx="-180" cy="-80" r="30"/><circle cx="180" cy="-80" r="30"/>
                <circle cx="-180" cy="80" r="30"/><circle cx="180" cy="80" r="30"/>
              </g>
            </g>
          </svg>
        </div>
        <div className="news__body">
          <div className="news__meta">FIELD · 12 MAY 2026</div>
          <h3 className="news__title">Kalki UCAV completes high-altitude validation at 5,200 m.</h3>
          <p className="news__excerpt">Two weeks of cold-weather operations in Ladakh validate the new R3 airframe and on-board target-classification model.</p>
        </div>
      </a>

      <a className="news__item" href="#">
        <div className="news__visual">
          <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="380" fill="#0a0c0f"/>
            <g fill="none" stroke="#ff7a18" strokeWidth=".7">
              <circle cx="300" cy="190" r="60"/><circle cx="300" cy="190" r="100" opacity=".7"/>
              <circle cx="300" cy="190" r="140" opacity=".4"/><circle cx="300" cy="190" r="180" opacity=".2"/>
            </g>
            <path d="M300 190 L460 110 A180 180 0 0 0 410 50 Z" fill="#ff7a18" opacity=".1"/>
            <line x1="300" y1="190" x2="450" y2="80" stroke="#ff7a18"/>
            <circle cx="450" cy="80" r="4" fill="#ff3b30"/>
          </svg>
        </div>
        <div className="news__body">
          <div className="news__meta">PROGRAMME · 03 APR 2026</div>
          <h3 className="news__title">Dhruv C-UAS selected for FOB-grade integration trials.</h3>
          <p className="news__excerpt">Integration with paramilitary command-and-control begins this quarter; live-fire defeat trials scheduled for monsoon window.</p>
        </div>
      </a>

      <a className="news__item" href="#">
        <div className="news__visual">
          <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="380" fill="#0a0c0f"/>
            <g stroke="#ff7a18" opacity=".7" strokeWidth=".7" fill="none">
              <line x1="120" y1="100" x2="240" y2="180"/><line x1="240" y1="180" x2="360" y2="100"/>
              <line x1="360" y1="100" x2="480" y2="180"/><line x1="120" y1="260" x2="240" y2="180"/>
              <line x1="240" y1="180" x2="360" y2="260"/><line x1="360" y1="260" x2="480" y2="180"/>
              <line x1="120" y1="100" x2="120" y2="260"/><line x1="480" y1="100" x2="480" y2="260"/>
            </g>
            <g fill="#ff7a18">
              <circle cx="120" cy="100" r="4"/><circle cx="240" cy="180" r="4"/><circle cx="360" cy="100" r="4"/>
              <circle cx="480" cy="180" r="4"/><circle cx="120" cy="260" r="4"/><circle cx="360" cy="260" r="4"/>
              <circle cx="480" cy="100" r="4"/><circle cx="240" cy="180" r="5"/>
            </g>
          </svg>
        </div>
        <div className="news__body">
          <div className="news__meta">R&amp;D · 18 FEB 2026</div>
          <h3 className="news__title">Garuda Swarm: 24-vehicle mesh recovery under degraded link.</h3>
          <p className="news__excerpt">Closed-track demonstration of no-comms recovery behaviour, with all 24 vehicles re-establishing formation within 6.2 seconds of link loss.</p>
        </div>
      </a>
    </div>
  </div>
</section>

{/* ==================== CTA BANNER ==================== */}
<section className="section section-tight">
  <div className="container">
    <div className="reveal" style={{border: '1px solid var(--line-strong)', padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--bg-elev) 0%, var(--bg) 100%)'}}>
      <div className="grid-bg"></div>
      <div className="hud-brackets"><i></i></div>
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '40px', alignItems: 'center'}}>
        <div>
          <div className="eyebrow"><span className="dot"></span>BUILD WITH US</div>
          <h2 className="mt-md" style={{fontSize: 'clamp(34px, 4.6vw, 64px)'}}>A capability briefing at our Manipal facility — every enquiry routes to a real engineer.</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start'}}>
          <Link className="btn btn--primary" href="/contact">Request Briefing <span className="arrow">→</span></Link>
          <a className="btn" href="https://wa.me/918197400875">WhatsApp <span className="arrow">→</span></a>
          <a className="btn btn--ghost" href="mailto:contact@trishulaero.com">contact@trishulaero.com <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==================== FOOTER ==================== */}
    </>
  );
}
