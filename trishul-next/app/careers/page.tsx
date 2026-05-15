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

{/* ==================== OPEN ROLES ==================== */}
<section className="section bg-elev" id="roles">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>02 // Open Roles</div>
        <h2 className="mt-md">12 positions. 4 disciplines.</h2>
      </div>
      <p className="subhead lead">We hire across autonomy, hardware, mission software, and operations. Roles below are open as of this week — for full detail, write directly to <a href="mailto:careers@trishulaero.com" style={{color: 'var(--accent)'}}>careers@trishulaero.com</a>.</p>
    </div>

    <div className="roles reveal" style={{marginTop: '56px'}}>
      <a href="mailto:careers@trishulaero.com?subject=Senior Autonomy Engineer" className="role">
        <div className="role__title">Senior Autonomy Engineer</div>
        <div className="role__meta">Perception · Planning</div>
        <div className="role__meta">Bengaluru · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Computer Vision Engineer" className="role">
        <div className="role__title">Computer Vision Engineer</div>
        <div className="role__meta">Edge inference · Sensor fusion</div>
        <div className="role__meta">Bengaluru · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Flight Software Engineer" className="role">
        <div className="role__title">Flight Software Engineer</div>
        <div className="role__meta">C++ · Real-time · DO-178C-aligned</div>
        <div className="role__meta">Bengaluru · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Embedded SoC Engineer" className="role">
        <div className="role__title">Embedded SoC Engineer</div>
        <div className="role__meta">Indigenous SoCs · Drivers</div>
        <div className="role__meta">Bengaluru · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Aerospace Structures Engineer" className="role">
        <div className="role__title">Aerospace Structures Engineer</div>
        <div className="role__meta">Carbon monocoque · FEA</div>
        <div className="role__meta">Manipal · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Propulsion Engineer" className="role">
        <div className="role__title">Propulsion Engineer (Hybrid)</div>
        <div className="role__meta">Hybrid-electric · Turbine</div>
        <div className="role__meta">Manipal · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Avionics Hardware Engineer" className="role">
        <div className="role__title">Avionics Hardware Engineer</div>
        <div className="role__meta">PCB · DFM · EMI/EMC</div>
        <div className="role__meta">Manipal · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=RF & Datalinks Engineer" className="role">
        <div className="role__title">RF &amp; Datalinks Engineer</div>
        <div className="role__meta">Encrypted mesh · Frequency hop</div>
        <div className="role__meta">Bengaluru · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Flight Test Engineer" className="role">
        <div className="role__title">Flight Test Engineer</div>
        <div className="role__meta">Range operations · Cert pathway</div>
        <div className="role__meta">Manipal · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Mission Software Engineer" className="role">
        <div className="role__title">Mission Software Engineer</div>
        <div className="role__meta">Operator UX · Digital twin</div>
        <div className="role__meta">Bengaluru · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Operations & Programme Lead" className="role">
        <div className="role__title">Operations &amp; Programme Lead</div>
        <div className="role__meta">Defence customer programmes</div>
        <div className="role__meta">Manipal · Full-time</div>
        <div className="role__cta">Apply →</div>
      </a>
      <a href="mailto:careers@trishulaero.com?subject=Research Internship" className="role">
        <div className="role__title">Research Internship (Autonomy)</div>
        <div className="role__meta">6 month · Stipend + housing</div>
        <div className="role__meta">Bengaluru · Internship</div>
        <div className="role__cta">Apply →</div>
      </a>
    </div>
  </div>
</section>

{/* ==================== WHO WE HIRE ==================== */}
<section className="section">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>03 // Who we hire</div>
        <h2 className="mt-md">A profile, not a checklist.</h2>
      </div>
      <p className="subhead lead">We have hired engineers who never finished a degree, and PhDs who would not call themselves engineers. The shape is the same.</p>
    </div>

    <div className="grid reveal" style={{gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '48px'}}>
      <div>
        <h3 style={{fontSize: '28px', marginBottom: '16px'}}>You will fit here if</h3>
        <ul className="feature__caps">
          <li>You have shipped something that left a building</li>
          <li>You read the code before you trust the spec</li>
          <li>You think the right number of meetings is "fewer"</li>
          <li>You want field time, not whiteboard time</li>
          <li>You believe sovereign engineering is a serious thing</li>
        </ul>
      </div>
      <div>
        <h3 style={{fontSize: '28px', marginBottom: '16px'}}>You will not fit if</h3>
        <ul className="feature__caps">
          <li>You want a quarterly roadmap committed in advance</li>
          <li>You see field work as something other people do</li>
          <li>You prefer process over outcomes</li>
          <li>You think "vendor stack" is a strategy</li>
          <li>You measure your job in tickets closed</li>
        </ul>
      </div>
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
          <div className="eyebrow"><span className="dot"></span>NO ROLE LISTED</div>
          <h2 className="mt-md" style={{fontSize: 'clamp(32px, 4.4vw, 56px)'}}>Don't see your seat?</h2>
          <p className="subhead mt-md">If you can show us the thing you built that no one asked you to, we'll find a way to talk. The bar is the work, not the title.</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start'}}>
          <a className="btn btn--primary" href="mailto:careers@trishulaero.com">Write to us <span className="arrow">→</span></a>
          <Link className="btn" href="/about">Read our story <span className="arrow">→</span></Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
