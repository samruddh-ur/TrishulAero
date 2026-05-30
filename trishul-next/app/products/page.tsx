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
      <span>Fleet roster · 2 systems · classification // open</span>
    </div>
    <h1 className="reveal">The fleet.</h1>
    <p className="lead reveal">Two systems, one autonomy stack. The Kalki interceptor and TrishulC2 share the same perception, planning and control architecture — and surface to the same operator interface.</p>
  </div>
</header>

{/* ==================== FLEET TABLE ==================== */}
<section className="section-tight">
  <div className="container">
    <div className="eyebrow reveal"><span className="dot"></span>DEFENCE / TRI-SERVICE</div>
    <h2 className="mt-md reveal">Mission-grade.</h2>
  </div>

  <div className="systems reveal" style={{marginTop: '48px', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'}}>
    {/* Kalki Interceptor */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">INT-K1 // INTERCEPTOR</span>
        <span className="meta">HARD-KILL</span>
        <img className="cover" src="/img/systems/kalki.jpg" alt="Kalki Interceptor" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
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
      <div className="system__role">Autonomous interceptor · Counter-UAS</div>
      <div className="system__name">Kalki Interceptor</div>
      <p className="system__desc">High-speed autonomous interceptor for hard-kill engagement of hostile UAS. Vision-guided terminal homing, on-board target classification, and no dependency on GNSS or external command links.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">180km/h</div><div className="k">Top speed</div></div>
        <div className="spec"><div className="v">AI</div><div className="k">Terminal guidance</div></div>
        <div className="spec"><div className="v">GNSS-free</div><div className="k">Navigation</div></div>
      </div>
      <Link className="system__link" href="/products/kalki">View System →</Link>
    </article>

    {/* TrishulC2 */}
    <article className="system">
      <div className="system__visual">
        <span className="badge">TRISHULC2 // C2</span>
        <span className="meta">MISSION CONTROL</span>
        <img className="cover" src="/img/systems/trishuleye-panel.jpg" alt="TrishulC2" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
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
      <div className="system__role">Mission command &amp; control</div>
      <div className="system__name">TrishulC2</div>
      <p className="system__desc">Multi-domain command and control platform. Live telemetry, threat tracks, and full-motion video from every Trishul Aero asset on the network — one pane of glass for the operator.</p>
      <div className="system__specs">
        <div className="spec"><div className="v">16+</div><div className="k">Streams</div></div>
        <div className="spec"><div className="v">AES</div><div className="k">256</div></div>
        <div className="spec"><div className="v">99.4%</div><div className="k">Uplink</div></div>
      </div>
      <Link className="system__link" href="/trishuleye">Experience the Console →</Link>
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
