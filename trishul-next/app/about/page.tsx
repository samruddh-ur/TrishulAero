import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Company',
  description: 'Trishul Aero is a sovereign Indian aerospace company designing and manufacturing autonomous aerial systems. Built in India, built to own the sky.'
};

export default function AboutPage() {
  return (
    <>
{/* ==================== PAGE HEADER ==================== */}
<header className="page-header">
  <canvas className="canvas-bg" data-density="70"></canvas>
  <div className="grid-bg"></div>
  <div className="vignette"></div>
  <div className="container" style={{position: 'relative', zIndex: 2}}>
    <div className="classification-bar">
      <span className="live">LIVE</span>
      <span>A Trishul Advanced Solutions company · Founded in India</span>
    </div>
    <div className="eyebrow reveal mt-md"><span className="dot"></span>COMPANY</div>
    <h1 className="reveal">A sovereign aerospace company, engineered from first principles.</h1>
    <p className="lead reveal">Trishul Aero exists to make India self-reliant in autonomous aerial systems. We don't license autonomy. We don't adapt foreign airframes. We design and build here for the realities of this geography — and export on our own terms.</p>
  </div>
</header>

{/* ==================== ORIGIN STORY ==================== */}
<section className="section">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>01 // Origin</div>
        <h2 className="mt-md">Why we exist.</h2>
      </div>
      <div className="lead">
        <p className="text-soft" style={{fontSize: '18px', lineHeight: '1.6'}}>By 2025, the lesson had been written in every modern theatre — Ukraine, Gaza, India's western frontier: the side that owns its autonomy stack owns the air. Cheap, attritable, autonomous systems are ending engagements faster than legacy procurement can respond.</p>
        <p className="text-soft" style={{fontSize: '18px', lineHeight: '1.6', marginTop: '18px'}}>Capability was never the bottleneck — engineers here have built the world's hardest software for two decades. Integration was. Trishul Aero was founded to close that gap: vertically integrate the stack — airframe, autonomy, propulsion, sensors, datalinks, and operator interface — under one roof. Designed and built in India. The country that controls its autonomy stack controls its air.</p>
      </div>
    </div>
  </div>
</section>

{/* ==================== TIMELINE ==================== */}
<section className="section section-tight bg-elev">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>02 // Trajectory</div>
        <h2 className="mt-md">Founded 2025. Already in the sky.</h2>
      </div>
      <p className="subhead lead">A research-led organisation that ships hardware. Every milestone below is logged in flight hours, not press releases.</p>
    </div>

    <div className="timeline reveal" style={{maxWidth: '880px', marginTop: '60px'}}>
      <div className="timeline__item">
        <div className="timeline__year">2025 / Q3 — TRISHULC2 BEGINS</div>
        <h3 className="timeline__title">TrishulC2 platform development begins.</h3>
        <p className="timeline__body">Architecture, datalink stack, and operator interface for the command and control platform enter active development.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2025 / Q4 — FORMATION</div>
        <h3 className="timeline__title">Trishul Advanced Solutions Pvt. Ltd. incorporated.</h3>
        <p className="timeline__body">Founded with HQ in Manipal and R&amp;D in Bengaluru. The thesis: vertically integrate the autonomy stack — airframe to operator interface — under one roof.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2025 / Q4 — FIRST FLIGHT</div>
        <h3 className="timeline__title">Kalki prototype achieves first flight test.</h3>
        <p className="timeline__body">First powered flight of the Kalki interceptor prototype. Airframe, propulsion, and avionics validated end-to-end.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2026 / Q1 — TRISHULC2 ONSITE</div>
        <h3 className="timeline__title">TrishulC2 first on-site operational test.</h3>
        <p className="timeline__body">Live telemetry, threat tracks, and full-motion video integrated and validated under operator-in-the-loop conditions in the field.</p>
      </div>
      <div className="timeline__item" style={{paddingBottom: 0}}>
        <div className="timeline__year">NEXT — 2026 / Q3</div>
        <h3 className="timeline__title">Kalki + TrishulC2 integrated trials.</h3>
        <p className="timeline__body">First closed-loop interception cued directly from the TrishulC2 console — one operator, one console, one track.</p>
      </div>
    </div>
  </div>
</section>

{/* ==================== PHILOSOPHY ==================== */}
<section className="section" id="rd">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>03 // Engineering Philosophy</div>
        <h2 className="mt-md">How we build.</h2>
      </div>
      <p className="subhead lead">Four principles. They are not aspirations — they are the gating criteria every programme passes through before flight test.</p>
    </div>

    <div className="tech reveal-stagger" style={{marginTop: '48px'}}>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 01</div>
        <h4>First principles, always.</h4>
        <p>If a subsystem can be designed from scratch and outperform an imported alternative, it will be. The supply chain we depend on is the one we control.</p>
      </div>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 02</div>
        <h4>The operator co-owns the spec.</h4>
        <p>Every platform is co-developed with the operators who will fly it. Field feedback closes the loop in days, not quarters. Engineering is a relationship, not a project.</p>
      </div>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 03</div>
        <h4>Nothing leaves untested.</h4>
        <p>If it has not flown on our range, it will not fly on a mission. 96.4% first-pass yield is a floor, not a ceiling.</p>
      </div>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 04</div>
        <h4>Sovereign by default.</h4>
        <p>India in, sky out. Designed and manufactured under DGCA Type and MoD AON pathways. Exportable to partner nations on our terms.</p>
      </div>
    </div>
  </div>
</section>

{/* ==================== VISION ==================== */}
<section className="vision reveal">
  <canvas className="canvas-bg" data-density="50"></canvas>
  <div className="container" style={{position: 'relative'}}>
    <div className="eyebrow tac"><span className="dot"></span>05 // THE DECADE AHEAD</div>
    <h2 className="vision__quote mt-md">The country that controls its <em>autonomy stack</em> controls its <em>air</em>.</h2>
    <p className="subhead tac" style={{margin: '32px auto 0', maxWidth: '60ch'}}>Trishul Aero is building that control — one airframe, one autonomy release, one operator briefing at a time. We are not the only company that will define the next decade of Indian aerospace. We intend to be the most consequential.</p>
    <div className="vision__attr">— Founders · 2026</div>
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
          <div className="eyebrow"><span className="dot"></span>WORK WITH US</div>
          <h2 className="mt-md" style={{fontSize: 'clamp(32px, 4.4vw, 56px)'}}>Build the systems that own the sky.</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start'}}>
          <Link className="btn btn--primary" href="/careers">Open Roles <span className="arrow">→</span></Link>
          <Link className="btn" href="/contact">Get in touch <span className="arrow">→</span></Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
