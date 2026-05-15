import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Systems',
  description: 'The Trishul Aero fleet: autonomous combat, ISR, counter-UAS, and commercial platforms. Designed and built in India.'
};

export default function ProductsPage() {
  return (
    <>
{/* ==================== NAV ==================== */}


{/* ==================== PAGE HEADER ==================== */}
<header className="page-header">
  <canvas className="canvas-bg" data-density="70"></canvas>
  <div className="grid-bg"></div>
  <div className="vignette"></div>
  <div className="container" style={{position: 'relative', zIndex: 2}}>
    <div className="classification-bar">
      <span className="live">LIVE</span>
      <span>Fleet roster · 7 systems · classification // open</span>
    </div>
    <h1 className="reveal">The fleet.</h1>
    <p className="lead reveal">Seven systems, four operating domains, one autonomy stack. Every Trishul platform shares the same perception, planning and control architecture — and surfaces to the same operator interface.</p>
  </div>
</header>

{/* ==================== FLEET TABLE ==================== */}
<section className="section-tight">
  <div className="container">
    <div className="eyebrow reveal"><span className="dot"></span>DEFENCE / TRI-SERVICE</div>
    <h2 className="mt-md reveal">Mission-grade.</h2>
  </div>

  <div className="systems reveal" style={{marginTop: '48px'}}>
    {/* Kalki */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">UAV-T17 // FPV</span>
        <span className="meta">CLASS — IIIA</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g stroke="#2a2e35" strokeDasharray="1 4"><line x1="0" y1="100" x2="400" y2="100"/></g>
          <g transform="translate(200 100)">
            <line x1="-80" y1="-50" x2="80" y2="50" stroke="#3a3f47" strokeWidth="3"/>
            <line x1="-80" y1="50" x2="80" y2="-50" stroke="#3a3f47" strokeWidth="3"/>
            <ellipse cx="0" cy="0" rx="22" ry="7" fill="#1c2026" stroke="#ff7a18"/>
            <g fill="none" stroke="#ff7a18" strokeWidth="1">
              <circle cx="-80" cy="-50" r="22"/><circle cx="80" cy="-50" r="22"/>
              <circle cx="-80" cy="50" r="22"/><circle cx="80" cy="50" r="22"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="system__role">FPV combat · ISR + Strike</div>
      <div className="system__name">Kalki UCAV</div>
      <p className="system__desc">Next-generation FPV combat system with on-board AI for ISR and precision strike in contested, GNSS-denied environments.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">AI</div><div className="k">On-board</div></div>
        <div className="spec"><div className="v">500g</div><div className="k">Payload</div></div>
        <div className="spec"><div className="v">5,000m</div><div className="k">Ceiling</div></div>
      </div>
      <Link className="system__link" href="/products/kalki">View System →</Link>
    </article>

    {/* Garuda */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">UAV-S24 // SWARM</span>
        <span className="meta">MESH NETWORK</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g stroke="#ff7a18" strokeWidth=".5" opacity=".6">
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
        </svg>
      </div>
      <div className="system__role">Loitering munitions · Mesh swarm</div>
      <div className="system__name">Garuda Swarm</div>
      <p className="system__desc">Mesh-networked autonomous loitering munitions with on-board target classification and no-comms recovery behaviour.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">24×</div><div className="k">Swarm</div></div>
        <div className="spec"><div className="v">10km</div><div className="k">Range</div></div>
        <div className="spec"><div className="v">30min</div><div className="k">Loiter</div></div>
      </div>
      <a className="system__link" href="#">View System →</a>
    </article>

    {/* Dhruv */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">CUAS-D7 // LAYERED</span>
        <span className="meta">RF + RADAR</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g fill="none" stroke="#ff7a18">
            <circle cx="200" cy="100" r="30"/>
            <circle cx="200" cy="100" r="60" opacity=".6"/>
            <circle cx="200" cy="100" r="90" opacity=".35"/>
          </g>
          <line x1="200" y1="100" x2="320" y2="40" stroke="#ff7a18"/>
          <circle cx="320" cy="40" r="4" fill="#ff7a18"/>
        </svg>
      </div>
      <div className="system__role">Counter-UAS · Detect &amp; Defeat</div>
      <div className="system__name">Dhruv C-UAS</div>
      <p className="system__desc">Layered counter-drone system with RF and radar. Soft-kill jamming and hard-kill interceptor unified in one rack.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">15km</div><div className="k">Detect</div></div>
        <div className="spec"><div className="v">6km</div><div className="k">Defeat</div></div>
        <div className="spec"><div className="v">360°</div><div className="k">Coverage</div></div>
      </div>
      <a className="system__link" href="#">View System →</a>
    </article>

    {/* Drishti */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">ISR-P9 // GIMBAL</span>
        <span className="meta">EO/IR/SWIR</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g transform="translate(200 100)">
            <rect x="-50" y="-30" width="100" height="60" fill="none" stroke="#3a3f47" strokeWidth="1.5"/>
            <circle cx="0" cy="0" r="22" fill="#1c2026" stroke="#ff7a18" strokeWidth="1.2"/>
            <circle cx="0" cy="0" r="14" fill="none" stroke="#ff7a18" strokeWidth=".5"/>
            <circle cx="0" cy="0" r="6" fill="#ff7a18"/>
            <line x1="-80" y1="0" x2="-60" y2="0" stroke="#3a3f47" strokeWidth="1"/>
            <line x1="80" y1="0" x2="60" y2="0" stroke="#3a3f47" strokeWidth="1"/>
          </g>
          <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
            <text x="14" y="184">EO/IR/SWIR · LASER</text>
          </g>
        </svg>
      </div>
      <div className="system__role">Multi-spectral ISR pod</div>
      <div className="system__name">Drishti ISR Pod</div>
      <p className="system__desc">Multi-spectral surveillance pod for fixed-wing and rotary platforms — EO/IR/SWIR/laser designator in a 9 kg gimbal.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">9kg</div><div className="k">Mass</div></div>
        <div className="spec"><div className="v">30×</div><div className="k">Zoom</div></div>
        <div className="spec"><div className="v">SWIR</div><div className="k">Sensors</div></div>
      </div>
      <a className="system__link" href="#">View System →</a>
    </article>

    {/* Trishuleye */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">TRISHULEYE // C2</span>
        <span className="meta">FLEET PANEL</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g stroke="#2a2e35" strokeWidth="1" fill="none">
            <rect x="40" y="40" width="100" height="120"/>
            <rect x="160" y="40" width="200" height="60"/>
            <rect x="160" y="110" width="90" height="50"/>
            <rect x="270" y="110" width="90" height="50"/>
          </g>
          <g stroke="#ff7a18" strokeWidth=".5">
            <path d="M50 100 L130 80"/><path d="M180 70 Q220 50 260 70 T340 70"/>
          </g>
          <g fill="#ff7a18">
            <circle cx="50" cy="100" r="2"/><circle cx="80" cy="120" r="2"/><circle cx="110" cy="90" r="2"/><circle cx="130" cy="80" r="2"/>
          </g>
        </svg>
      </div>
      <div className="system__role">Operator interface · C2</div>
      <div className="system__name">Trishuleye Panel</div>
      <p className="system__desc">One pane of glass. Live telemetry, threat tracks, and full-motion video from every Trishul Aero platform on the network.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">16+</div><div className="k">Streams</div></div>
        <div className="spec"><div className="v">AES</div><div className="k">256</div></div>
        <div className="spec"><div className="v">99.4%</div><div className="k">Uplink</div></div>
      </div>
      <a className="system__link" href="#">View System →</a>
    </article>
  </div>
</section>

{/* ==================== COMMERCIAL ==================== */}
<section className="section">
  <div className="container">
    <div className="eyebrow reveal"><span className="dot"></span>COMMERCIAL / INDUSTRIAL</div>
    <h2 className="mt-md reveal">Civil-certified.</h2>
    <p className="subhead lead reveal mt-md">Civil platforms engineered for the realities of Indian terrain — from monsoon farmland to high-altitude transmission corridors.</p>
  </div>

  <div className="systems reveal" style={{marginTop: '48px'}}>
    {/* Krishi */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">AGRI-X1 // SPRAY</span>
        <span className="meta">CIVIL CERT</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g stroke="#3a3f47" strokeDasharray="3 6"><line x1="40" y1="160" x2="360" y2="160"/></g>
          <g transform="translate(200 90)">
            <rect x="-30" y="-12" width="60" height="24" rx="2" fill="#1c2026" stroke="#ff7a18"/>
            <line x1="-30" y1="0" x2="-110" y2="-40" stroke="#3a3f47" strokeWidth="3"/>
            <line x1="30" y1="0" x2="110" y2="-40" stroke="#3a3f47" strokeWidth="3"/>
            <line x1="-30" y1="0" x2="-110" y2="40" stroke="#3a3f47" strokeWidth="3"/>
            <line x1="30" y1="0" x2="110" y2="40" stroke="#3a3f47" strokeWidth="3"/>
            <g fill="none" stroke="#ff7a18" strokeWidth="1">
              <circle cx="-110" cy="-40" r="20"/><circle cx="110" cy="-40" r="20"/>
              <circle cx="-110" cy="40" r="20"/><circle cx="110" cy="40" r="20"/>
            </g>
            {/* spray cone */}
            <path d="M-20 12 L-40 50 L40 50 L20 12 Z" fill="#ff7a18" opacity=".15" stroke="#ff7a18" strokeWidth=".5"/>
          </g>
        </svg>
      </div>
      <div className="system__role">Precision agri spray UAV</div>
      <div className="system__name">Krishi Drone</div>
      <p className="system__desc">Precision spraying, mapping and yield monitoring for 20-acre missions — designed for monsoon-belt operation.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">16L</div><div className="k">Tank</div></div>
        <div className="spec"><div className="v">12m</div><div className="k">Swath</div></div>
        <div className="spec"><div className="v">25min</div><div className="k">Endurance</div></div>
      </div>
      <a className="system__link" href="#">View System →</a>
    </article>

    {/* Bhumi */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">MAP-V2 // SURVEY</span>
        <span className="meta">DGCA TYPE</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          {/* survey grid */}
          <g stroke="#3a3f47" strokeWidth=".5">
            <line x1="60" y1="40" x2="60" y2="160"/><line x1="120" y1="40" x2="120" y2="160"/>
            <line x1="180" y1="40" x2="180" y2="160"/><line x1="240" y1="40" x2="240" y2="160"/>
            <line x1="300" y1="40" x2="300" y2="160"/><line x1="340" y1="40" x2="340" y2="160"/>
            <line x1="60" y1="40" x2="340" y2="40"/><line x1="60" y1="160" x2="340" y2="160"/>
          </g>
          {/* flight path */}
          <path d="M60 50 L340 50 L340 70 L60 70 L60 90 L340 90 L340 110 L60 110 L60 130 L340 130 L340 150" fill="none" stroke="#ff7a18" strokeWidth="1"/>
          <circle cx="60" cy="50" r="3" fill="#ff7a18"/>
          <circle cx="340" cy="150" r="3" fill="#ff7a18"/>
        </svg>
      </div>
      <div className="system__role">Survey UAV · Orthomosaic + 3D</div>
      <div className="system__name">Bhumi Mapper</div>
      <p className="system__desc">Survey-grade orthomosaics and 3D models for cadastral, mining and infrastructure projects across Indian terrain.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">2cm</div><div className="k">GSD</div></div>
        <div className="spec"><div className="v">90min</div><div className="k">Endurance</div></div>
        <div className="spec"><div className="v">42MP</div><div className="k">Sensor</div></div>
      </div>
      <a className="system__link" href="#">View System →</a>
    </article>

    {/* Vahak */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">LOGI-H1 // CARGO</span>
        <span className="meta">HYBRID VTOL</span>
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#0a0c0f"/>
          <g transform="translate(200 100)">
            {/* fuselage with wings */}
            <ellipse cx="0" cy="0" rx="80" ry="14" fill="#1c2026" stroke="#3a3f47"/>
            <line x1="0" y1="-14" x2="-50" y2="-50" stroke="#3a3f47" strokeWidth="3"/>
            <line x1="0" y1="-14" x2="50" y2="-50" stroke="#3a3f47" strokeWidth="3"/>
            <line x1="-80" y1="0" x2="-110" y2="-10" stroke="#3a3f47" strokeWidth="2"/>
            <line x1="80" y1="0" x2="110" y2="-10" stroke="#3a3f47" strokeWidth="2"/>
            <line x1="-110" y1="-10" x2="-150" y2="0" stroke="#3a3f47" strokeWidth="2"/>
            <line x1="110" y1="-10" x2="150" y2="0" stroke="#3a3f47" strokeWidth="2"/>
            <g fill="none" stroke="#ff7a18">
              <circle cx="-50" cy="-50" r="18"/><circle cx="50" cy="-50" r="18"/>
              <circle cx="-150" cy="0" r="14"/><circle cx="150" cy="0" r="14"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="system__role">Hybrid VTOL cargo</div>
      <div className="system__name">Vahak Cargo</div>
      <p className="system__desc">Hybrid VTOL for medical and last-mile logistics across remote and tier-3 corridors. India's terrain, India's payloads.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">5kg</div><div className="k">Payload</div></div>
        <div className="spec"><div className="v">120km</div><div className="k">Range</div></div>
        <div className="spec"><div className="v">VTOL</div><div className="k">Mode</div></div>
      </div>
      <a className="system__link" href="#">View System →</a>
    </article>
  </div>
</section>

{/* ==================== CTA ==================== */}
<section className="section section-tight">
  <div className="container">
    <div className="reveal" style={{border: '1px solid var(--line-strong)', padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--bg-elev) 0%, var(--bg) 100%)'}}>
      <div className="grid-bg"></div>
      <div className="hud-brackets"><i></i></div>
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '40px', alignItems: 'center'}}>
        <div>
          <div className="eyebrow"><span className="dot"></span>EVALUATE A SYSTEM</div>
          <h2 className="mt-md" style={{fontSize: 'clamp(34px, 4.6vw, 56px)'}}>Schedule a flight evaluation at our Manipal range.</h2>
          <p className="subhead mt-md">Programme enquiries are answered by an engineer, not a sales rep. Briefings include flight demos, integration walkthroughs, and live mission rehearsal in our digital twin.</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start'}}>
          <Link className="btn btn--primary" href="/contact">Request Demo <span className="arrow">→</span></Link>
          <a className="btn" href="#">Download brochure <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==================== FOOTER ==================== */}
    </>
  );
}
