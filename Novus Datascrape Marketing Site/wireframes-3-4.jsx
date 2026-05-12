/* global React, MiniConsole, NavBar, WF_W */
// Wireframes 3 + 4

// ─────────────────────────────────────────────────────────────────────
// W3 — ASYMMETRIC SPLIT (timeline-led)
// Big left text, right product window. Below: a "publish → alerted" timeline.
// ─────────────────────────────────────────────────────────────────────
const W3 = () => (
  <div className="wf" style={{ width: WF_W }}>
    <NavBar ctaLabel="Schedule a walkthrough" links={['Console', 'Sources', 'Pricing', 'Login']}/>

    {/* Asymmetric hero */}
    <div style={{ padding: '56px 64px 48px', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center' }}>
      <div>
        <div className="wf-tag" style={{marginBottom: 16}}>v3 · Asymmetric / timeline</div>
        <h1 className="wf-hand" style={{ fontSize: 64, lineHeight: 1, margin: '0 0 22px', fontWeight: 700 }}>
          The data was<br/>
          <span className="wf-underline">already out there.</span><br/>
          You just hadn't<br/>seen it yet.
        </h1>
        <p style={{ font: '400 18px/1.55 Roboto', color: '#455a64', margin: '0 0 28px', maxWidth: 480 }}>
          Novus Datascrape monitors the alternative-data market in real time. The moment a vendor publishes, a journalist mentions a panel, or a marketplace lists a feed — it lands in your console.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          <span className="wf-cta">Schedule a walkthrough →</span>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ transform: 'rotate(1.5deg)', boxShadow: '8px 10px 0 #cfd8dc, 0 6px 24px rgba(0,0,0,.08)', borderRadius: 10, overflow: 'hidden', border: '1.5px solid #2a3540' }}>
          <MiniConsole rows={5}/>
        </div>
        <div className="wf-anno" style={{ top: -10, right: 20, transform: 'rotate(-4deg)', maxWidth: 180 }}>↘ new datasets surface here, automatically</div>
      </div>
    </div>

    {/* Timeline strip */}
    <div style={{ padding: '56px 64px', background: '#f4f1e8', borderTop: '1.5px solid #2a3540', borderBottom: '1.5px solid #2a3540' }}>
      <div className="wf-tag" style={{marginBottom: 12}}>From publish to your inbox</div>
      <h2 className="wf-hand" style={{ fontSize: 30, margin: '0 0 32px', fontWeight: 700 }}>
        <span className="wf-circle">12 minutes</span>. Not three weeks.
      </h2>
      <div style={{ position: 'relative', height: 200 }}>
        {/* timeline rail */}
        <svg style={{ position: 'absolute', top: 60, left: 0, right: 0, width: '100%', height: 24 }} viewBox="0 0 1000 24" preserveAspectRatio="none">
          <path d="M 20 12 Q 200 4, 400 14 T 980 12" stroke="#2a3540" strokeWidth="2" fill="none" strokeDasharray="6 5"/>
        </svg>
        {[
          ['00:00', 'Vendor publishes', 'Press release, marketplace listing, GitHub release…'],
          ['00:03', 'Novus picks it up', '47 scrapers, polled every 60 s.'],
          ['00:08', 'Normalised + tagged', 'Vendor, frequency, regions, format, status.'],
          ['00:12', 'In your console', 'Filtered by your sectors. Tagged "NEW".'],
        ].map(([t, h, b], i) => (
          <div key={i} style={{ position: 'absolute', left: `${4 + i * 24}%`, top: 0, width: '20%' }}>
            <div className="wf-hand" style={{ fontSize: 13, color: '#0288d1', fontWeight: 700, letterSpacing: 0.5 }}>{t}</div>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#0288d1', border: '2px solid #fbfaf6', margin: '12px 0 14px', boxShadow: '0 0 0 2px #0288d1' }}/>
            <div className="wf-hand" style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{h}</div>
            <div style={{ font: '400 13px/1.45 Roboto', color: '#5a6a78' }}>{b}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Outcome metrics */}
    <div style={{ padding: '56px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {[
          ['↓ 94%', 'time-to-discovery'],
          ['↑ 3.2×', 'datasets evaluated per quarter'],
          ['0', 'vendor newsletters to read'],
          ['1', 'place to look'],
        ].map(([n, sub]) => (
          <div key={sub} style={{ borderLeft: '3px solid #0288d1', paddingLeft: 16 }}>
            <div className="wf-hand" style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>{n}</div>
            <div className="wf-hand-2" style={{ fontSize: 14, color: '#5a6a78', marginTop: 6 }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Closing CTA */}
    <div style={{ padding: '40px 64px 64px', borderTop: '1.5px dashed #c8c0b0', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
      <div>
        <h2 className="wf-hand" style={{ fontSize: 32, margin: '0 0 8px', fontWeight: 700 }}>Walk through the console with us.</h2>
        <p style={{ font: '400 16px/1.5 Roboto', color: '#5a6a78', margin: 0 }}>We'll preload your sectors. 30 minutes. No deck.</p>
      </div>
      <span className="wf-cta">Schedule a walkthrough →</span>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────
// W4 — NARRATIVE / WARMER
// Conversational. "Before / With Novus" comparison. Personas.
// ─────────────────────────────────────────────────────────────────────
const W4 = () => (
  <div className="wf" style={{ width: WF_W }}>
    <NavBar ctaLabel="Talk to us" links={['Why Novus', 'How it works', 'For teams', 'Contact']}/>

    <div style={{ padding: '64px 64px 32px', textAlign: 'center', position: 'relative' }}>
      <div className="wf-tag" style={{marginBottom: 20}}>v4 · Narrative / warmer</div>
      <p className="wf-hand-2" style={{ fontSize: 20, color: '#5a6a78', margin: '0 0 18px' }}>
        Most edge today comes from data nobody else has read yet.
      </p>
      <h1 className="wf-hand" style={{ fontSize: 64, lineHeight: 1.05, margin: '0 auto 18px', fontWeight: 700, maxWidth: 900 }}>
        We find it for you,<br/><span className="wf-underline">the day it's published.</span>
      </h1>
      <p style={{ font: '400 18px/1.6 Roboto', color: '#455a64', margin: '0 auto 28px', maxWidth: 640 }}>
        Novus Datascrape is a quiet little engine watching the corners of the internet where alternative datasets get released — vendor catalogues, news, social. We surface them for your desk before the sales emails arrive.
      </p>
      <span className="wf-cta accent">Talk to us →</span>
      <div className="wf-anno" style={{ bottom: 30, left: 80, transform: 'rotate(-4deg)' }}>↗ no forms, no calendars — just an email back</div>
    </div>

    <div className="wf-squiggle"/>

    {/* Before/With comparison */}
    <div style={{ padding: '56px 64px' }}>
      <h2 className="wf-hand" style={{ fontSize: 32, margin: '0 0 32px', fontWeight: 700, textAlign: 'center' }}>The way it works today vs. the way it should.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className="wf-box" style={{ padding: 28, background: '#f4f1e8' }}>
          <div className="wf-stamp" style={{ top: -12, right: 20 }}>Today</div>
          <div className="wf-hand" style={{ fontSize: 22, fontWeight: 700, marginBottom: 14 }}>Three vendor newsletters. A spreadsheet. Hope.</div>
          <ul style={{ font: '400 15px/1.7 Roboto', color: '#5a6a78', paddingLeft: 18, margin: 0 }}>
            <li>An analyst spends Monday morning reading PRs.</li>
            <li>A sales rep emails about a panel — two weeks late.</li>
            <li>The desk back-tests something that's already crowded.</li>
            <li>Nobody is sure what they passed on, or why.</li>
          </ul>
        </div>
        <div className="wf-box-double" style={{ padding: 28 }}>
          <div className="wf-stamp" style={{ top: -12, right: 20, color: '#0288d1', borderColor: '#0288d1' }}>With Novus</div>
          <div className="wf-hand" style={{ fontSize: 22, fontWeight: 700, marginBottom: 14 }}>One console. Tagged. Filtered. Fresh.</div>
          <ul style={{ font: '400 15px/1.7 Roboto', color: '#37474f', paddingLeft: 18, margin: 0 }}>
            <li>New datasets appear in your sectors, automatically.</li>
            <li>Every record cites the source. You verify before licensing.</li>
            <li>Your team's evaluations are in one place — searchable.</li>
            <li>You spend the hour you saved on the actual back-test.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Personas */}
    <div style={{ padding: '48px 64px', background: '#f4f1e8', borderTop: '1.5px solid #2a3540', borderBottom: '1.5px solid #2a3540' }}>
      <div className="wf-tag" style={{marginBottom: 20}}>Who's on the other side of this</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {[
          ['The analyst', '"I stopped opening the alt-data newsletter folder."', 'Tagged feed of new datasets in their sectors.'],
          ['The PM', '"I can see what the desk is evaluating without asking."', 'Audit trail of every dataset reviewed, with notes.'],
          ['The quant lead', "\"It's just a clean catalog with an API.\"", 'CSV / JSON / webhook. Plug it into the eval pipeline.'],
        ].map(([t, q, b]) => (
          <div key={t} style={{ background: '#fbfaf6', border: '1.5px solid #2a3540', borderRadius: 8, padding: 22 }}>
            <div className="wf-hand" style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{t}</div>
            <p className="wf-hand-2" style={{ fontSize: 16, color: '#0288d1', fontStyle: 'italic', margin: '0 0 14px', lineHeight: 1.4 }}>{q}</p>
            <p style={{ font: '400 14px/1.5 Roboto', color: '#5a6a78', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Closing — soft */}
    <div style={{ padding: '56px 64px 64px', textAlign: 'center' }}>
      <h2 className="wf-hand" style={{ fontSize: 36, margin: '0 0 12px', fontWeight: 700 }}>
        Want to see what's in your sector this week?
      </h2>
      <p style={{ font: '400 17px/1.5 Roboto', color: '#5a6a78', margin: '0 0 24px' }}>
        Drop us a line. We'll send a sample list — no demo required.
      </p>
      <span className="wf-cta accent">Talk to us →</span>
    </div>
  </div>
);

Object.assign(window, { W3, W4 });
