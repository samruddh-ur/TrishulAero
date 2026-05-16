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
      <form className="form" data-formspree action="https://formspree.io/f/xqenyrdd" method="POST" noValidate>
        <input type="hidden" name="_subject" value="Trishul Aero — new enquiry from contact form" />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position: 'absolute', left: -9999, opacity: 0, pointerEvents: 'none'}} />
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
          <textarea id="msg" name="message" rows={6} placeholder="Brief description of the mission profile, programme, or partnership area." required></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', gap: '24px', flexWrap: 'wrap'}}>
          <button type="submit" className="btn btn--primary">Send Message <span className="arrow">→</span></button>
          <span className="mono text-mute" style={{fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase'}}>By submitting you agree to our privacy notice.</span>
        </div>
        <p className="form-status mono" aria-live="polite" style={{fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', minHeight: '16px', marginTop: '6px'}}></p>
      </form>

      {/* locator panel */}
      <div style={{border: '1px solid var(--line-strong)', background: 'var(--bg-elev)', position: 'relative', overflow: 'hidden'}}>
        <div className="hud-brackets" style={{zIndex: 3, pointerEvents: 'none'}}><i></i></div>
        <div style={{position: 'relative', height: '380px', background: '#0a0c0f'}}>
          <iframe
            title="Trishul Aero HQ — Manipal, Udupi"
            src="https://maps.google.com/maps?q=Trishul%20Aero%20Manipal%20Udupi%20Karnataka%20India&t=k&z=15&hl=en&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{border: 0, width: '100%', height: '100%', filter: 'grayscale(.15) contrast(1.05)'}}
            allowFullScreen
          />
          <div style={{position: 'absolute', top: 14, left: 14, right: 14, zIndex: 2, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.22em', color: '#fff', textTransform: 'uppercase', pointerEvents: 'none'}}>
            <span style={{background: 'rgba(7,8,10,.78)', padding: '4px 10px', border: '1px solid var(--accent)', color: 'var(--accent)'}}>● TRISHUL AERO HQ</span>
            <span style={{background: 'rgba(7,8,10,.78)', padding: '4px 10px', border: '1px solid var(--line-strong)'}}>13.3525°N · 74.7866°E</span>
          </div>
          <div style={{position: 'absolute', bottom: 14, left: 14, zIndex: 2, fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.22em', color: 'var(--text-soft)', textTransform: 'uppercase', pointerEvents: 'none', background: 'rgba(7,8,10,.78)', padding: '4px 10px', border: '1px solid var(--line-strong)'}}>
            Manipal // Udupi // Karnataka
          </div>
        </div>
        <div style={{padding: '28px'}}>
          <div className="eyebrow mb-sm"><span className="dot"></span>VISIT</div>
          <h4 style={{marginTop: '12px', color: '#fff'}}>By appointment only.</h4>
          <p className="text-soft" style={{fontSize: '14px', marginTop: '12px'}}>Capability briefings include a flight demonstration, integration walkthrough, and engineer-to-operator session. Lead time: 7 working days.</p>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px'}}>
            <a className="btn btn--ghost" href="mailto:contact@trishulaero.com">Schedule briefing <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="https://www.google.com/maps/dir/?api=1&destination=Manipal,Udupi,Karnataka,India" target="_blank" rel="noreferrer">Directions <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
