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
        <p className="text-soft" style={{fontSize: '18px', lineHeight: '1.6'}}>In 2022, three founders walked the line of control with a question: why does India fly autonomous platforms it does not own? The answer wasn't capability — engineers here have built the world's hardest software for two decades. The answer was integration.</p>
        <p className="text-soft" style={{fontSize: '18px', lineHeight: '1.6', marginTop: '18px'}}>Trishul Aero was founded to vertically integrate the stack — airframe, autonomy, propulsion, sensors, datalinks, and operator interface — under one roof. The thesis is simple: the country that controls its autonomy stack controls its air.</p>
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
        <h2 className="mt-md">Four years. Two systems.</h2>
      </div>
      <p className="subhead lead">A research-led organisation that ships hardware. Every milestone below is logged in flight hours, not press releases.</p>
    </div>

    <div className="timeline reveal" style={{maxWidth: '880px', marginTop: '60px'}}>
      <div className="timeline__item">
        <div className="timeline__year">2022 / Q1 — FORMATION</div>
        <h3 className="timeline__title">Trishul Advanced Solutions Pvt. Ltd. incorporated.</h3>
        <p className="timeline__body">Founded in Manipal by an aerospace engineer, an autonomy researcher, and an ex-IAF flight-test officer. R&amp;D group of five.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2022 / Q4 — FIRST FLIGHT</div>
        <h3 className="timeline__title">Kalki Mk I prototype achieves first hover.</h3>
        <p className="timeline__body">In-house airframe, in-house ESCs, third-party autopilot. The autopilot is replaced within six months.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2023 / Q2 — AUTONOMY STACK</div>
        <h3 className="timeline__title">First sovereign autonomy stack flies on Kalki Mk II.</h3>
        <p className="timeline__body">VIO + INS recovery validated in GNSS-denied conditions over closed-track trials.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2023 / Q4 — TRISHULC2</div>
        <h3 className="timeline__title">TrishulC2 operator interface enters live trials.</h3>
        <p className="timeline__body">One pane of glass: live telemetry, threat tracks, full-motion video. Five operators on the console by quarter end.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2024 / Q2 — iDEX COHORT 7</div>
        <h3 className="timeline__title">Defence Innovation Organisation iDEX cohort awardee.</h3>
        <p className="timeline__body">Kalki Interceptor programme funded. Vision-guided terminal homing development accelerates.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2025 / Q1 — KALKI FIRST CLOSURE</div>
        <h3 className="timeline__title">Kalki Interceptor first detect-classify-defeat closure.</h3>
        <p className="timeline__body">Live-fire interceptor engagement under operator-in-the-loop ROE on Trishul range.</p>
      </div>
      <div className="timeline__item">
        <div className="timeline__year">2026 / Q2 — KALKI HIGH-ALT</div>
        <h3 className="timeline__title">Kalki Interceptor high-altitude validation, Ladakh.</h3>
        <p className="timeline__body">240 sortie cold-soak trial complete. Service ceiling validated to 5,200 m AGL.</p>
      </div>
      <div className="timeline__item" style={{paddingBottom: 0}}>
        <div className="timeline__year">NEXT</div>
        <h3 className="timeline__title">Kalki + TrishulC2 integrated tri-service trials.</h3>
        <p className="timeline__body">Operator-in-the-loop interception of hostile UAS cued directly from the TrishulC2 console. Scheduled monsoon window.</p>
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

{/* ==================== FACILITIES ==================== */}
<section className="section section-tight">
  <div className="container">
    <div className="sect-head reveal">
      <div>
        <div className="eyebrow"><span className="dot"></span>04 // Facilities</div>
        <h2 className="mt-md">Two cities. One fleet.</h2>
      </div>
      <p className="subhead lead">Bengaluru drives autonomy and software. Manipal drives airframe, propulsion, and integration. The hand-off is daily.</p>
    </div>
  </div>

  <div className="feature reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        {/* India outline ish, simplified */}
        <path d="M280 80 L340 120 L380 180 L370 240 L400 300 L380 360 L340 400 L300 440 L260 420 L220 360 L210 300 L240 240 L240 180 L260 120 Z" fill="none" stroke="#3a3f47" strokeWidth="1"/>
        {/* Manipal marker */}
        <g transform="translate(260 360)">
          <circle r="4" fill="#ff7a18"/>
          <circle r="12" fill="none" stroke="#ff7a18" opacity=".5"/>
          <circle r="20" fill="none" stroke="#ff7a18" opacity=".3"/>
          <line x1="0" y1="0" x2="50" y2="-30" stroke="#3a3f47"/>
          <text x="56" y="-30" fontFamily="JetBrains Mono" fontSize="10" fill="#ff7a18" letterSpacing="2">MANIPAL</text>
          <text x="56" y="-18" fontFamily="JetBrains Mono" fontSize="9" fill="#9aa0a8" letterSpacing="2">HQ · ASSEMBLY · RANGE</text>
        </g>
        {/* Bengaluru marker */}
        <g transform="translate(290 400)">
          <circle r="4" fill="#ff7a18"/>
          <circle r="10" fill="none" stroke="#ff7a18" opacity=".5"/>
          <line x1="0" y1="0" x2="-90" y2="40" stroke="#3a3f47"/>
          <text x="-220" y="44" fontFamily="JetBrains Mono" fontSize="10" fill="#ff7a18" letterSpacing="2">BENGALURU</text>
          <text x="-220" y="56" fontFamily="JetBrains Mono" fontSize="9" fill="#9aa0a8" letterSpacing="2">R&amp;D · AUTONOMY</text>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="40" y="40">FACILITIES // INDIA</text>
          <text x="40" y="500">2 sites · daily hand-off</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>MANIPAL — HQ &amp; ASSEMBLY</div>
      <h3>Where systems take flight.</h3>
      <p>The Manipal facility houses airframe CNC, avionics line, ESC manufacturing, integration, burn-in, and the Trishul Aero flight-test range. Every platform that leaves the building has flown on it.</p>
      <p>4 platforms / day takt. 96.4% first-pass yield. Flight-test envelope to 6,000 m AGL.</p>
      <ul className="feature__caps">
        <li>1,400 m² covered shop floor</li>
        <li>1.8 km dedicated flight range</li>
        <li>40 m × 40 m anechoic chamber (Q4 2026)</li>
      </ul>
    </div>
  </div>

  <div className="feature is-rev reveal">
    <div className="feature__media">
      <div className="grid-bg"></div>
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <rect width="600" height="520" fill="#0a0c0f"/>
        {/* code editor style hex blocks */}
        <g stroke="#3a3f47" strokeWidth="1" fill="none">
          <rect x="60" y="80" width="480" height="380"/>
          <line x1="60" y1="120" x2="540" y2="120"/>
          <line x1="200" y1="120" x2="200" y2="460"/>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="10" fill="#ff7a18" letterSpacing="1">
          <text x="80" y="108">perception.classify(frame, conf=0.82)</text>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="1">
          <text x="80" y="146">01</text><text x="220" y="146">def update(state, sensors):</text>
          <text x="80" y="166">02</text><text x="220" y="166">    fused = fuse(sensors.rgb, sensors.ir)</text>
          <text x="80" y="186">03</text><text x="220" y="186">    targets = model.infer(fused)</text>
          <text x="80" y="206">04</text><text x="220" y="206">    for t in targets:</text>
          <text x="80" y="226">05</text><text x="220" y="226">        if t.conf &gt; 0.82:</text>
          <text x="80" y="246">06</text><text x="220" y="246">            queue.cue(t)</text>
          <text x="80" y="266">07</text><text x="220" y="266">    return state.advance(targets)</text>
          <text x="80" y="306">09</text><text x="220" y="306">def fallback_rtb():</text>
          <text x="80" y="326">10</text><text x="220" y="326">    return vio.recover() or ins.dead_reckon()</text>
          <text x="80" y="366">12</text><text x="220" y="366"># 27 ms · 8 classes · 0.94 mAP@0.5</text>
        </g>
        <g fontFamily="JetBrains Mono" fontSize="9" fill="#5e646d" letterSpacing="2">
          <text x="80" y="450">PIPELINE — perception.v3.7 · prod</text>
        </g>
      </svg>
      <div className="hud-brackets"><i></i></div>
    </div>
    <div className="feature__copy">
      <div className="eyebrow"><span className="dot"></span>BENGALURU — R&amp;D</div>
      <h3>Where autonomy is built.</h3>
      <p>The Bengaluru centre is the autonomy spine — perception, planning, communications, mission software. A research-led group of engineers working at the seam between research papers and shippable systems.</p>
      <p>The work happens in tight loops with field operators. There are no quarterly handoffs. Every commit reaches the platform within a week.</p>
      <ul className="feature__caps">
        <li>Perception · planning · controls</li>
        <li>Mission software · digital twin</li>
        <li>Sensor fusion · sub-100 ms loops</li>
      </ul>
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
