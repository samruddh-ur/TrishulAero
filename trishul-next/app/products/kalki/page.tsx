import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalki UCAV',
  description: 'Kalki UCAV — next-generation FPV combat system with on-board AI for ISR and precision strike in contested, GNSS-denied environments.'
};

export default function KalkiPage() {
  return (
    <>
{/* ==================== PRODUCT HERO ==================== */}
<header className="product-hero">
  <canvas className="canvas-bg" data-density="60" data-mode="orange"></canvas>
  <div className="grid-bg"></div>
  {/* big drone schematic in background */}
  <svg className="product-hero__svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: '.55'}}>
    <defs>
      <radialGradient id="haze2" cx="60%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#ff7a18" stopOpacity=".22"/>
        <stop offset="60%" stopColor="#ff7a18" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#haze2)"/>
    <g transform="translate(800 400)">
      <ellipse cx="0" cy="0" rx="60" ry="16" fill="#1c2026" stroke="#3a3f47" strokeWidth="1"/>
      <line x1="-50" y1="-7" x2="-260" y2="-150" stroke="#3a3f47" strokeWidth="4"/>
      <line x1="-50" y1="7" x2="-260" y2="150" stroke="#3a3f47" strokeWidth="4"/>
      <line x1="50" y1="-7" x2="260" y2="-150" stroke="#3a3f47" strokeWidth="4"/>
      <line x1="50" y1="7" x2="260" y2="150" stroke="#3a3f47" strokeWidth="4"/>
      <g stroke="#ff7a18" strokeWidth="1.2" fill="none">
        <circle cx="-260" cy="-150" r="60"/>
        <circle cx="260" cy="-150" r="60"/>
        <circle cx="-260" cy="150" r="60"/>
        <circle cx="260" cy="150" r="60"/>
      </g>
      <g fill="#1c2026" stroke="#2c3138">
        <circle cx="-260" cy="-150" r="8"/><circle cx="260" cy="-150" r="8"/>
        <circle cx="-260" cy="150" r="8"/><circle cx="260" cy="150" r="8"/>
      </g>
      {/* gimbal camera */}
      <circle cx="0" cy="22" r="14" fill="#0a0c0f" stroke="#ff7a18" strokeWidth="1.2"/>
      <circle cx="0" cy="22" r="5" fill="#ff7a18"/>
      {/* callouts */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#9aa0a8" letterSpacing="2.5" stroke="none">
        <line x1="-260" y1="-150" x2="-360" y2="-250" stroke="#3a3f47"/>
        <text x="-460" y="-254">M1 // T-MOTOR U13 II</text>
        <line x1="260" y1="-150" x2="360" y2="-250" stroke="#3a3f47"/>
        <text x="368" y="-254">M2 // T-MOTOR U13 II</text>
        <line x1="0" y1="22" x2="120" y2="100" stroke="#3a3f47"/>
        <text x="128" y="104">EO/IR GIMBAL · 30× ZOOM</text>
        <line x1="-60" y1="0" x2="-200" y2="-30" stroke="#3a3f47"/>
        <text x="-420" y="-26">CARBON MONOCOQUE</text>
        <line x1="60" y1="0" x2="200" y2="40" stroke="#3a3f47"/>
        <text x="208" y="44">AVIONICS · INDIGENOUS SoC</text>
      </g>
    </g>
  </svg>
  <div className="vignette"></div>

  <div className="container" style={{position: 'relative', zIndex: 2}}>
    <div className="classification-bar reveal">
      <span className="live">LIVE</span>
      <span>UAV-T17 // KALKI · R3 BUILD · Tri-service evaluation</span>
    </div>
    <div className="eyebrow reveal mt-md"><span className="dot"></span>SYSTEM 01 // FPV COMBAT — ISR + PRECISION STRIKE</div>
    <h1 className="reveal" style={{marginTop: '18px'}}>Kalki UCAV.</h1>
    <p className="lead reveal">Next-generation FPV combat system for ISR and precision strike in contested, GNSS-denied environments. On-board AI. Operator-in-the-loop. Sovereign.</p>
    <div className="hero__ctas reveal" style={{marginTop: '36px'}}>
      <Link className="btn btn--primary" href="/contact">Request Demo <span className="arrow">→</span></Link>
      <a className="btn" href="#specs">View Specifications <span className="arrow">→</span></a>
      <a className="btn btn--ghost" href="#">Download Brochure <span className="arrow">→</span></a>
    </div>
  </div>
</header>

{/* ==================== SPECS GRID ==================== */}
<section id="specs">
  <div className="specs-grid reveal-stagger">
    <div><div className="v">AI</div><div className="k">On-board autonomy</div></div>
    <div><div className="v">500 g</div><div className="k">Maximum payload</div></div>
    <div><div className="v">5,000 m</div><div className="k">Service ceiling</div></div>
    <div><div className="v">42 ms</div><div className="k">Decision latency</div></div>
    <div><div className="v">5.0 km</div><div className="k">Operational range</div></div>
    <div><div className="v">38 min</div><div className="k">Endurance</div></div>
    <div><div className="v">28 m/s</div><div className="k">Top speed</div></div>
    <div><div className="v">AES-256</div><div className="k">Encrypted datalink</div></div>
  </div>
</section>

{/* ==================== MISSION CAPABILITIES ==================== */}
<section className="section">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>02 // Mission Capabilities</div>
        <h2 className="mt-md">Designed for the contested kilometre.</h2>
      </div>
      <p className="subhead lead">Kalki is built to operate where datalinks degrade, GNSS jams, and operator decision time collapses to seconds. The platform is its own fallback.</p>
    </div>
  </div>

  <div className="feature reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        {/* Topographic background */}
        <g stroke="#3a3f47" strokeWidth=".5" fill="none" opacity=".4">
          <path d="M0 200 Q100 180 200 200 T400 200 T600 200"/>
          <path d="M0 240 Q100 220 200 240 T400 240 T600 240"/>
          <path d="M0 280 Q100 260 200 280 T400 280 T600 280"/>
          <path d="M0 320 Q100 300 200 320 T400 320 T600 320"/>
          <path d="M0 360 Q100 340 200 360 T400 360 T600 360"/>
        </g>
        {/* FOV cone */}
        <path d="M400 80 L520 360 L280 360 Z" fill="#ff7a18" opacity=".08" stroke="#ff7a18" strokeWidth=".5"/>
        {/* target lock */}
        <g transform="translate(400 260)">
          <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="#ff7a18" strokeWidth="1"/>
          <line x1="-30" y1="0" x2="-22" y2="0" stroke="#ff7a18"/>
          <line x1="30" y1="0" x2="22" y2="0" stroke="#ff7a18"/>
          <line x1="0" y1="-30" x2="0" y2="-22" stroke="#ff7a18"/>
          <line x1="0" y1="30" x2="0" y2="22" stroke="#ff7a18"/>
          <text x="36" y="-22" fontFamily="JetBrains Mono" fontSize="9" fill="#ff7a18" letterSpacing="2">VEH · 94%</text>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">ON-BOARD TARGET CLASSIFICATION</text>
          <text x="40" y="60">YOLOv8-DEFENSE · 8 CLASSES · 27 ms</text>
          <text x="40" y="500">CONFIDENCE THRESHOLD 0.82</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>ON-BOARD AI</div>
      <h3>Classify on the airframe, not the cloud.</h3>
      <p>A purpose-built target-classification model runs on indigenous SoCs aboard every Kalki. Eight-class inference under 30 ms, with operator-in-the-loop confirmation enforced by ROE.</p>
      <ul className="feature__caps">
        <li>YOLOv8-Defence · 8-class fine-tuned</li>
        <li>27 ms inference · 42 ms full loop</li>
        <li>0.82 confidence floor, no autonomous engagement</li>
      </ul>
    </div>
  </div>

  <div className="feature is-rev reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        {/* Lost-link recovery: waypoints */}
        <g stroke="#3a3f47" strokeDasharray="2 6"><line x1="0" y1="260" x2="600" y2="260"/><line x1="300" y1="0" x2="300" y2="520"/></g>
        <path d="M120 400 Q200 200 320 220 Q420 240 480 120" fill="none" stroke="#ff7a18" strokeWidth="1" strokeDasharray="4 6"/>
        <g fill="#ff7a18">
          <circle cx="120" cy="400" r="5"/><circle cx="320" cy="220" r="5"/>
          <circle cx="480" cy="120" r="5"/>
        </g>
        <text x="130" y="394" fontFamily="JetBrains Mono" fontSize="9" fill="#ff7a18" letterSpacing="2">LAUNCH</text>
        <text x="328" y="216" fontFamily="JetBrains Mono" fontSize="9" fill="#ff7a18" letterSpacing="2">LINK LOSS · t=00:04:12</text>
        <text x="490" y="116" fontFamily="JetBrains Mono" fontSize="9" fill="#ff7a18" letterSpacing="2">RTB · NOMINAL</text>

        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">RECOVERY BEHAVIOUR // GNSS-DENIED</text>
          <text x="40" y="60">VIO + INS + TERRAIN MATCH</text>
          <text x="40" y="500">RTB SUCCESS RATE: 98.7% @ 3 km from launch</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>NO-COMMS RECOVERY</div>
      <h3>The platform is its own fallback.</h3>
      <p>When GNSS jams and the datalink degrades, Kalki falls back to visual-inertial odometry, terrain matching, and stored mission state. RTB success exceeds 98.7% at 3 km from launch.</p>
      <ul className="feature__caps">
        <li>VIO + INS + terrain match fusion</li>
        <li>Stored mission state · 2.4 hr cold autonomy</li>
        <li>Operator override at re-acquisition</li>
      </ul>
    </div>
  </div>

  <div className="feature reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        {/* altitude bars */}
        <g stroke="#ff7a18" strokeWidth="1" opacity=".7" fill="none">
          <path d="M40 460 L40 100"/><path d="M120 460 L120 80"/><path d="M200 460 L200 120"/>
          <path d="M280 460 L280 60"/><path d="M360 460 L360 100"/><path d="M440 460 L440 80"/>
          <path d="M520 460 L520 140"/>
        </g>
        <g fill="#ff7a18">
          <circle cx="40" cy="100" r="3"/><circle cx="120" cy="80" r="3"/><circle cx="200" cy="120" r="3"/>
          <circle cx="280" cy="60" r="3"/><circle cx="360" cy="100" r="3"/><circle cx="440" cy="80" r="3"/>
          <circle cx="520" cy="140" r="3"/>
        </g>
        <g stroke="#3a3f47" strokeWidth=".5">
          <line x1="40" y1="200" x2="520" y2="200" strokeDasharray="2 4"/>
          <line x1="40" y1="300" x2="520" y2="300" strokeDasharray="2 4"/>
          <line x1="40" y1="400" x2="520" y2="400" strokeDasharray="2 4"/>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">HIGH-ALTITUDE VALIDATION // LADAKH</text>
          <text x="40" y="60">5,200 m AGL · −18°C · 38% RH</text>
          <text x="40" y="500">FIRST-PASS YIELD ACROSS 240 SORTIES: 96.4%</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>HIGH-ALTITUDE VALIDATED</div>
      <h3>Tested where it matters.</h3>
      <p>Two weeks of cold-weather operations in Ladakh validate the R3 airframe at 5,200 m AGL, −18°C ambient. Two-hundred-and-forty sorties; 96.4% first-pass mission yield.</p>
      <ul className="feature__caps">
        <li>5,200 m AGL service ceiling validated</li>
        <li>−18°C cold-soak qualification</li>
        <li>240 sortie endurance trial complete</li>
      </ul>
    </div>
  </div>
</section>

{/* ==================== USE CASES ==================== */}
<section className="section bg-elev">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>03 // Use Cases</div>
        <h2 className="mt-md">Where Kalki goes.</h2>
      </div>
      <p className="subhead lead">Four mission profiles, one airframe. Kalki is configured at launch — not re-engineered.</p>
    </div>

    <div className="tech reveal-stagger">
      <div className="tech__cell">
        <div className="num">USE 01</div>
        <h4>Border ISR</h4>
        <p>Persistent surveillance along designated patrol arcs with on-board classification surfacing anomalies to operators in real time.</p>
      </div>
      <div className="tech__cell">
        <div className="num">USE 02</div>
        <h4>Precision Strike</h4>
        <p>Operator-in-the-loop precision strike with terminal-phase target re-acquisition and abort logic enforced by ROE.</p>
      </div>
      <div className="tech__cell">
        <div className="num">USE 03</div>
        <h4>Convoy Escort</h4>
        <p>Forward picket and overwatch for mobile convoys, with on-board threat classification and operator cueing.</p>
      </div>
      <div className="tech__cell">
        <div className="num">USE 04</div>
        <h4>Forward Recon</h4>
        <p>Rapid-deploy reconnaissance ahead of dismounted forces, with full mission state replay through Trishuleye.</p>
      </div>
    </div>
  </div>
</section>

{/* ==================== FULL SPECS TABLE ==================== */}
<section className="section">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>04 // Detailed Specifications</div>
        <h2 className="mt-md">By the numbers.</h2>
      </div>
    </div>

    <div className="reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--line)'}}>
      {/* left col */}
      <div style={{borderRight: '1px solid var(--line)'}}>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Wingspan</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>820 mm</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Empty mass</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>1.8 kg</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>MTOW</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>2.3 kg</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Top speed</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>28 m/s</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Cruise</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>18 m/s</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Endurance</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>38 min</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Service ceiling</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>5,000 m</span>
        </div>
      </div>
      {/* right col */}
      <div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Operating range</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>5.0 km</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Payload</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>500 g</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Sensors</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>EO + IR + SWIR</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Datalink</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>2.4 / 5.8 GHz</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Encryption</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>AES-256 GCM</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Autonomy SoC</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>Indigenous</span>
        </div>
        <div style={{padding: '24px 32px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between'}}>
          <span className="mono" style={{fontSize: '12px', letterSpacing: '.18em', color: 'var(--text-soft)', textTransform: 'uppercase'}}>Decision latency</span>
          <span style={{fontFamily: 'var(--font-display)', color: '#fff'}}>42 ms</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==================== CTA ==================== */}
<section className="section section-tight">
  <div className="container">
    <div className="reveal" style={{border: '1px solid var(--line-strong)', padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden'}}>
      <div className="grid-bg"></div>
      <div className="hud-brackets"><i></i></div>
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '40px', alignItems: 'center'}}>
        <div>
          <div className="eyebrow"><span className="dot"></span>EVALUATE KALKI</div>
          <h2 className="mt-md" style={{fontSize: 'clamp(34px, 4.4vw, 56px)'}}>See it fly at our Manipal range.</h2>
          <p className="subhead mt-md">Flight evaluations include live mission rehearsal, integration walkthroughs, and an engineer-to-operator briefing. Every enquiry routes to a real engineer.</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start'}}>
          <Link className="btn btn--primary" href="/contact">Request Demo <span className="arrow">→</span></Link>
          <a className="btn" href="#">Download Brochure <span className="arrow">→</span></a>
          <Link className="btn btn--ghost" href="/products">All systems <span className="arrow">→</span></Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
