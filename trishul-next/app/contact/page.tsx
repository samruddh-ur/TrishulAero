import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Programme enquiries, partnerships, and capability briefings at our Manipal facility. Every enquiry routes to a real engineer.'
};

export default function ContactPage() {
  return (
    <>
{/* ==================== PAGE HEADER ==================== */}
<header className="page-header">
  <canvas className="canvas-bg" data-density="60"></canvas>
  <div className="grid-bg"></div>
  <div className="vignette"></div>
  <div className="container" style={{position: 'relative', zIndex: 2}}>
    <div className="classification-bar">
      <span className="live">LIVE</span>
      <span>Reply window — under one business day · routed to an engineer</span>
    </div>
    <div className="eyebrow reveal mt-md"><span className="dot"></span>CONTACT</div>
    <h1 className="reveal">Build with us.</h1>
    <p className="lead reveal">For programme enquiries, partnerships, or to schedule a capability briefing at our Manipal facility — we respond within one business day. Every enquiry routes to a real engineer.</p>
  </div>
</header>

{/* ==================== CONTACT CARDS ==================== */}
<section>
  <div className="contact-cards reveal-stagger">
    <div className="contact-card">
      <div className="label">HEADQUARTERS</div>
      <div className="val">Manipal</div>
      <div className="sub">Trishul Advanced Solutions Pvt. Ltd.<br />Karnataka 576104, India</div>
    </div>
    <div className="contact-card">
      <div className="label">R&amp;D CENTRE</div>
      <div className="val">Bengaluru</div>
      <div className="sub">Autonomy · perception · mission software</div>
    </div>
    <div className="contact-card">
      <div className="label">PROGRAMME ENQUIRIES</div>
      <div className="val"><a href="mailto:contact@trishulaero.com">contact@trishulaero.com</a></div>
      <div className="sub">Press · partnerships · capability briefings</div>
    </div>
    <div className="contact-card">
      <div className="label">PHONE</div>
      <div className="val">+91 81974 00875</div>
      <div className="sub">Mon — Sat · 09:30 — 18:30 IST</div>
    </div>
    <div className="contact-card">
      <div className="label">WHATSAPP</div>
      <div className="val"><a href="https://wa.me/918197400875">Direct line →</a></div>
      <div className="sub">Fastest channel for time-critical enquiries</div>
    </div>
    <div className="contact-card">
      <div className="label">CAREERS</div>
      <div className="val"><Link href="/careers">careers@trishulaero.com</Link></div>
      <div className="sub">Engineers, operators, flight-test</div>
    </div>
  </div>
</section>

{/* ==================== FORM + MAP ==================== */}
<section className="section" id="form">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>SEND A MESSAGE</div>
        <h2 className="mt-md">Tell us about your mission.</h2>
      </div>
      <p className="subhead lead">Every enquiry routes to a real engineer. We do not have a sales funnel. Typical reply time is under one business day.</p>
    </div>

    <div className="reveal" style={{display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '80px', alignItems: 'start'}}>
      {/* form */}
      <form className="form" data-demo>
        <div className="row">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="org">Organisation</label>
            <input id="org" name="org" type="text" />
          </div>
          <div className="field">
            <label htmlFor="type">Enquiry type</label>
            <select id="type" name="type">
              <option>Defence programme</option>
              <option>Commercial / Industrial</option>
              <option>R&amp;D partnership</option>
              <option>Press / Media</option>
              <option>Careers</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="msg">Message</label>
          <textarea id="msg" name="msg" rows="6" placeholder="Brief description of the mission profile, programme, or partnership area." required></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', gap: '24px', flexWrap: 'wrap'}}>
          <button type="submit" className="btn btn--primary">Send Message <span className="arrow">→</span></button>
          <span className="mono text-mute" style={{fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase'}}>By submitting you agree to our privacy notice.</span>
        </div>
      </form>

      {/* locator panel */}
      <div style={{border: '1px solid var(--line-strong)', background: 'var(--bg-elev)', position: 'relative', overflow: 'hidden'}}>
        <div className="hud-brackets"><i></i></div>
        <svg viewBox="0 0 500 480" preserveAspectRatio="xMidYMid slice" style={{width: '100%', height: '380px'}}>
          <rect width="500" height="480" fill="#0a0c0f"/>
          {/* coast/sea texture */}
          <g stroke="#3a3f47" strokeWidth=".5" fill="none" opacity=".5">
            <path d="M0 320 Q120 300 240 320 T500 320"/>
            <path d="M0 360 Q120 340 240 360 T500 360"/>
            <path d="M0 400 Q120 380 240 400 T500 400"/>
          </g>
          {/* land mass */}
          <path d="M0 320 L0 0 L500 0 L500 320 Q400 310 320 320 Q220 332 120 320 Q60 312 0 320 Z" fill="#0d0f12" stroke="#2a2e35"/>
          {/* grid */}
          <g stroke="#2a2e35" strokeWidth=".5" strokeDasharray="1 4">
            <line x1="0" y1="80" x2="500" y2="80"/><line x1="0" y1="160" x2="500" y2="160"/>
            <line x1="0" y1="240" x2="500" y2="240"/>
            <line x1="100" y1="0" x2="100" y2="480"/><line x1="200" y1="0" x2="200" y2="480"/>
            <line x1="300" y1="0" x2="300" y2="480"/><line x1="400" y1="0" x2="400" y2="480"/>
          </g>
          {/* pin */}
          <g transform="translate(260 200)">
            <circle r="6" fill="#ff7a18"/>
            <circle r="16" fill="none" stroke="#ff7a18"/>
            <circle r="28" fill="none" stroke="#ff7a18" opacity=".6"/>
            <circle r="40" fill="none" stroke="#ff7a18" opacity=".3"/>
            <line x1="0" y1="0" x2="80" y2="-40" stroke="#3a3f47"/>
            <text x="86" y="-38" fontFamily="JetBrains Mono" fontSize="11" fill="#ff7a18" letterSpacing="2">TRISHUL AERO HQ</text>
            <text x="86" y="-24" fontFamily="JetBrains Mono" fontSize="9" fill="#9aa0a8" letterSpacing="2">13.3525°N · 74.7866°E</text>
          </g>
          <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
            <text x="20" y="30">MANIPAL // KARNATAKA</text>
            <text x="20" y="460">ARABIAN SEA · 60 km W</text>
          </g>
        </svg>
        <div style={{padding: '28px'}}>
          <div className="eyebrow mb-sm"><span className="dot"></span>VISIT</div>
          <h4 style={{marginTop: '12px', color: '#fff'}}>By appointment only.</h4>
          <p className="text-soft" style={{fontSize: '14px', marginTop: '12px'}}>Capability briefings include a flight demonstration, integration walkthrough, and engineer-to-operator session. Lead time: 7 working days.</p>
          <a className="btn btn--ghost" href="mailto:contact@trishulaero.com" style={{marginTop: '22px'}}>Schedule briefing <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
