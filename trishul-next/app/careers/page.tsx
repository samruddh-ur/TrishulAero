import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build the systems that own the sky. Engineering, autonomy, operations, and flight-test roles at Trishul Aero — Manipal and Bengaluru.'
};

export default function CareersPage() {
  return (
    <>
{/* ==================== HEADER ==================== */}
<header className="page-header">
  <canvas className="canvas-bg" data-density="70"></canvas>
  <div className="grid-bg"></div>
  <div className="vignette"></div>
  <div className="container" style={{position: 'relative', zIndex: 2}}>
    <div className="classification-bar">
      <span className="live">HIRING</span>
      <span>Engineering · autonomy · operations · flight-test · Manipal &amp; Bengaluru</span>
    </div>
    <div className="eyebrow reveal mt-md"><span className="dot"></span>CAREERS</div>
    <h1 className="reveal">Build the systems that own the sky.</h1>
    <p className="lead reveal">Trishul Aero is a research-led organisation that ships hardware. We hire engineers who want to see what they design fly. Operators who want to see what they fly improve. And researchers who want their work in the field, not in a paper.</p>
  </div>
</header>

{/* ==================== CULTURE ==================== */}
<section className="section">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>01 // Culture</div>
        <h2 className="mt-md">How we work.</h2>
      </div>
      <p className="subhead lead">Small teams. Short loops. Field-led. The work is not abstracted from where it lands.</p>
    </div>

    <div className="tech reveal-stagger" style={{marginTop: '48px'}}>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 01</div>
        <h4>Ship to the field.</h4>
        <p>Every team owns a slice of the system that flies. Quarterly releases are a floor; weekly shipments are normal. If it's not on a platform, it's not done.</p>
      </div>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 02</div>
        <h4>Tight loops, fewer meetings.</h4>
        <p>Five-engineer R&amp;D groups. Daily stand-ups stay short. Decisions get made in the room where the code is written.</p>
      </div>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 03</div>
        <h4>Operator-led.</h4>
        <p>Every engineer spends time on the range with the operators who use what we build. The feedback loop closes on the airframe, not in a JIRA ticket.</p>
      </div>
      <div className="tech__cell">
        <div className="num">PRINCIPLE 04</div>
        <h4>First-principles default.</h4>
        <p>If a problem can be solved from first principles and outperform an imported answer, we do it. This is also true of how we run the company.</p>
      </div>
    </div>
  </div>
</section>

{/* ==================== INTEREST FORM ==================== */}
<section className="section bg-elev" id="roles">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>02 // If you&apos;re interested</div>
        <h2 className="mt-md">Tell us about your work.</h2>
      </div>
      <p className="subhead lead">We don&apos;t keep a public roles list. We keep a shortlist of problems. If your work fits any of them, we&apos;ll find a seat. Fill out the form and a real engineer will read it.</p>
    </div>

    <div className="reveal" style={{marginTop: '56px', maxWidth: '880px'}}>
      <form className="form" data-formspree action="https://formspree.io/f/xqenyrdd" method="POST" noValidate>
        <input type="hidden" name="_subject" value="Trishul Aero — careers enquiry" />
        <input type="hidden" name="form_source" value="careers" />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position: 'absolute', left: -9999, opacity: 0, pointerEvents: 'none'}} />
        <div className="row">
          <div className="field">
            <label htmlFor="c-name">Full name</label>
            <input id="c-name" name="name" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" required />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="c-discipline">Discipline</label>
            <select id="c-discipline" name="discipline">
              <option>Autonomy / Perception</option>
              <option>Flight Software / Avionics</option>
              <option>Embedded / SoC</option>
              <option>Aerospace Structures</option>
              <option>Propulsion</option>
              <option>RF / Datalinks</option>
              <option>Flight Test / Operations</option>
              <option>Mission Software / UX</option>
              <option>Programme / Customer</option>
              <option>Research / Internship</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-location">Location preference</label>
            <select id="c-location" name="location">
              <option>Manipal</option>
              <option>Bengaluru</option>
              <option>Either</option>
              <option>Remote-friendly</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="c-portfolio">Portfolio / GitHub / work sample (URL)</label>
          <input id="c-portfolio" name="portfolio" type="url" placeholder="https://" />
        </div>
        <div className="field">
          <label htmlFor="c-msg">Tell us about yourself</label>
          <textarea id="c-msg" name="message" rows={6} placeholder="The thing you built that no one asked you to. What you want to point your work at next." required></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', gap: '24px', flexWrap: 'wrap'}}>
          <button type="submit" className="btn btn--primary">Send Application <span className="arrow">→</span></button>
          <span className="mono text-mute" style={{fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase'}}>By submitting you agree to our privacy notice.</span>
        </div>
        <p className="form-status mono" aria-live="polite" style={{fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', minHeight: '16px', marginTop: '6px'}}></p>
      </form>
    </div>
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
          <h2 className="mt-md" style={{fontSize: 'clamp(32px, 4.4vw, 56px)'}}>The bar is the work, not the title.</h2>
          <p className="subhead mt-md">If you can show us the thing you built that no one asked you to, we&apos;ll find a way to talk.</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start'}}>
          <a className="btn btn--primary" href="#roles">Apply above <span className="arrow">→</span></a>
          <Link className="btn" href="/about">Read our story <span className="arrow">→</span></Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
