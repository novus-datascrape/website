/* global React, MiniConsole, NavBar, WF_W */
// Wireframes 5 + 6

// ─────────────────────────────────────────────────────────────────────
// W5 — DATASET-CARD (the marketing page IS a dataset card)
// Most novel. The whole hero treats "Novus" as if it were one of its own
// rows: vendor, status, schema, methodology — meta-product framing.
// ─────────────────────────────────────────────────────────────────────
const W5 = () => (
  <div className="wf" style={{ width: WF_W }}>
    <NavBar ctaLabel="Get on the waitlist" links={['Schema', 'Methodology', 'Coverage', 'Status']}/>

    <div style={{ padding: '40px 64px 24px' }}>
      <div className="wf-tag" style={{marginBottom: 16}}>v5 · Self-referential dataset card</div>

      {/* The "dataset card" hero */}
      <div className="wf-box" style={{ background: '#fff', overflow: 'hidden', borderColor: '#2a3540', borderWidth: 1.5 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: '16px 24px', borderBottom: '1.5px solid #f0f0f0', background: '#fafafa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="wf-hand" style={{ fontSize: 13, color: '#90a4ae', textTransform: 'uppercase', letterSpacing: 0.5 }}>Dataset</span>
            <span style={{ font: '500 15px Roboto', color: '#37474f' }}>novus · all-alt-data · catalog</span>
            <span className="mc-chip new" style={{ fontSize: 10, padding: '3px 8px' }}>NEW</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="wf-chip" style={{ borderLeftColor: '#4285f4' }}>Google News</span>
            <span className="wf-chip" style={{ borderLeftColor: '#4caf50' }}>Datarade</span>
            <span className="wf-chip" style={{ borderLeftColor: '#00809d' }}>Bing</span>
          </div>
        </div>

        <div style={{ padding: 32 }}>
          <h1 style={{ font: '300 48px/1.15 Roboto', color: '#263238', margin: '0 0 14px' }}>
            All alternative data, <span style={{ color: '#0288d1' }}>indexed in real time.</span>
          </h1>
          <p style={{ font: '400 17px/1.6 Roboto', color: '#455a64', margin: '0 0 24px', maxWidth: 720 }}>
            A single feed of every newly-released alt-data product, normalised against one schema. Updated continuously. Cited at source.
          </p>

          {/* Metadata grid — mimics dataset detail page */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, padding: '20px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
            {[
              ['Vendor', 'Novus Datascrape'],
              ['Frequency', 'Continuous'],
              ['Geographic coverage', 'Global'],
              ['Delivery format', 'Web · CSV · API · Webhook'],
              ['Methodology', '47 source scrapers, polled 60 s'],
              ['Avg latency', '12 minutes'],
              ['History', '18 months'],
              ['Schema', 'Open · documented'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ font: '600 11px/1.3 Roboto', color: '#90a4ae', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>{k}</div>
                <div style={{ font: '500 14px/1.4 Roboto', color: '#37474f' }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 22 }}>
            <span style={{ font: '500 13px Roboto', color: '#0288d1', alignSelf: 'center' }}>↗ Read methodology</span>
            <span className="wf-cta accent" style={{ padding: '10px 22px', fontSize: 16 }}>Get on the waitlist →</span>
          </div>
        </div>
      </div>
      <div className="wf-anno" style={{ marginTop: 14, fontSize: 14 }}>↑ Novus, as it would appear in Novus.</div>
    </div>

    {/* Description */}
    <div style={{ padding: '40px 64px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
      <div className="wf-tag">Description</div>
      <div style={{ font: '400 18px/1.65 Roboto', color: '#37474f', maxWidth: 760 }}>
        Hedge funds spend <span className="wf-scribble">weeks</span> hearing about new alternative datasets — vendor newsletters, sales calls, conference floors. By the time the data is licensed, the signal is crowded. Novus collapses that lag by indexing the alt-data market itself. We watch where data is announced, listed, and described. We surface it the day it appears. You read one feed instead of forty.
      </div>
    </div>

    {/* Methodology cards */}
    <div style={{ padding: '40px 64px', background: '#f4f1e8', borderTop: '1.5px solid #2a3540', borderBottom: '1.5px solid #2a3540' }}>
      <div className="wf-tag" style={{marginBottom: 20}}>Methodology</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          ['01', 'Sources', '47 monitored', 'News, marketplaces, vendor sites, social.'],
          ['02', 'Polling', '60 s cadence', 'Lightweight pulls, exponential back-off.'],
          ['03', 'Classify', 'Normalised', 'Sector, frequency, region, format, status.'],
          ['04', 'Cite', 'Source-linked', 'Every record carries its origin URL.'],
        ].map(([n, t, sub, b]) => (
          <div key={n} style={{ background: '#fff', border: '1.5px solid #cfd8dc', borderRadius: 8, padding: 18, position: 'relative' }}>
            <div className="wf-hand" style={{ fontSize: 36, fontWeight: 700, color: '#0288d1', lineHeight: 1 }}>{n}</div>
            <div className="wf-hand" style={{ fontSize: 18, fontWeight: 700, marginTop: 8 }}>{t}</div>
            <div style={{ font: '500 12px Roboto', color: '#0288d1', textTransform: 'uppercase', letterSpacing: 0.5, margin: '4px 0 8px' }}>{sub}</div>
            <p style={{ font: '400 13px/1.5 Roboto', color: '#5a6a78', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Status / coverage strip */}
    <div style={{ padding: '40px 64px' }}>
      <div className="wf-tag" style={{marginBottom: 14}}>Status — live</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
        {['Equities', 'Credit', 'FX', 'Commodities', 'Macro', 'Crypto'].map(s => (
          <div key={s} style={{ border: '1.5px solid #2a3540', borderRadius: 6, padding: 14, textAlign: 'center' }}>
            <div className="wf-hand" style={{ fontSize: 16, fontWeight: 700 }}>{s}</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 8 }}>
              {[1,2,3,4,5,6,7].map(i => (
                <span key={i} style={{ width: 8, height: 18, background: i <= 5 ? '#0288d1' : '#cfd8dc', borderRadius: 2, display: 'inline-block' }}/>
              ))}
            </div>
            <div className="wf-hand-2" style={{ fontSize: 11, color: '#5a6a78', marginTop: 6 }}>coverage</div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div style={{ padding: '32px 64px 64px', borderTop: '1.5px dashed #c8c0b0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
      <div>
        <div className="wf-hand" style={{ fontSize: 22, fontWeight: 700 }}>Onboarding · Q3 2026 cohort</div>
        <div style={{ color: '#5a6a78', font: '400 14px Roboto' }}>Quarterly access, capped at 40 funds. We respond within 48 hours.</div>
      </div>
      <span className="wf-cta accent">Get on the waitlist →</span>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────
// W6 — BOLD / EXPRESSIVE
// Big number / big claim. Annotated console with callout arrows.
// More energy than the rest. Trial-style CTA.
// ─────────────────────────────────────────────────────────────────────
const W6 = () => (
  <div className="wf" style={{ width: WF_W }}>
    <NavBar ctaLabel="Start free trial" links={['Product', 'Sources', 'Trial', 'Login']}/>

    <div style={{ padding: '64px 64px 24px', position: 'relative' }}>
      <div className="wf-tag" style={{marginBottom: 18}}>v6 · Bold / expressive</div>

      {/* Huge number hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'end' }}>
        <div>
          <div className="wf-hand" style={{ fontSize: 22, color: '#5a6a78', marginBottom: 8 }}>The gap between data being published</div>
          <div className="wf-hand" style={{ fontSize: 22, color: '#5a6a78', marginBottom: 14 }}>and your desk knowing about it:</div>
          <div className="wf-hand" style={{ fontSize: 220, fontWeight: 700, lineHeight: 0.9, color: '#0288d1', letterSpacing: '-0.04em' }}>3wks</div>
          <div className="wf-hand" style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>We bring it down to <span className="wf-underline">12 minutes.</span></div>
        </div>
        <div style={{ position: 'relative', paddingBottom: 20 }}>
          <div style={{ transform: 'rotate(-2deg)', boxShadow: '8px 10px 0 #2a3540', borderRadius: 10, overflow: 'hidden', border: '1.5px solid #2a3540' }}>
            <MiniConsole rows={4}/>
          </div>
          <div className="wf-anno" style={{ top: 60, left: -40, transform: 'rotate(-12deg)' }}>NEW chip</div>
          {/* arrow */}
          <svg style={{ position: 'absolute', top: 70, left: -10, width: 60, height: 30 }} viewBox="0 0 60 30">
            <path d="M 2 14 Q 30 4, 56 14" stroke="#0288d1" strokeWidth="2" fill="none"/>
            <polygon points="50,8 58,14 50,20" fill="#0288d1"/>
          </svg>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, marginTop: 32, alignItems: 'center' }}>
        <span className="wf-cta accent">Start free trial →</span>
        <span className="wf-hand" style={{ color: '#5a6a78', fontSize: 15 }}>14 days · no card · real data</span>
      </div>
    </div>

    <div className="wf-squiggle" style={{ marginTop: 32 }}/>

    {/* Big quote-style claim */}
    <div style={{ padding: '64px 64px', textAlign: 'center', background: '#2a3540', color: '#fbfaf6' }}>
      <div className="wf-hand-2" style={{ fontSize: 14, color: '#87ceeb', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 18 }}>The pitch, in one sentence</div>
      <h2 className="wf-hand" style={{ fontSize: 46, lineHeight: 1.15, margin: '0 auto', maxWidth: 880, fontWeight: 700 }}>
        Stop hearing about alt data from <span style={{ color: '#87ceeb' }}>sales reps.</span><br/>
        Start hearing about it from <span className="wf-underline" style={{ '--accent': '#87ceeb' }}>your console.</span>
      </h2>
    </div>

    {/* 4 pillars — colorful sketchy */}
    <div style={{ padding: '56px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {[
          ['⚡', 'Speed', '12 minutes from a vendor publishing a panel to your desk having it open.', '#0288d1'],
          ['🎯', 'Signal', 'Filter by sector, region, frequency. Only what your fund actually trades.', '#2e7d32'],
          ['🔗', 'Citations', "Every dataset cites the source URL. Verify before you license.", '#ef6c00'],
          ['🛠️', 'Workflow', "CSV, JSON, webhook, API. It's a feed, not another login.", '#7b1fa2'],
        ].map(([ic, t, b, c]) => (
          <div key={t} className="wf-box" style={{ padding: 20, borderColor: c, borderLeftWidth: 5, borderLeftStyle: 'solid' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{ic}</div>
            <div className="wf-hand" style={{ fontSize: 22, fontWeight: 700, color: c, marginBottom: 6 }}>{t}</div>
            <p style={{ font: '400 14px/1.5 Roboto', color: '#37474f', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
      <div className="wf-anno" style={{ marginTop: 12, fontSize: 14, position: 'static', display: 'block' }}>
        ↗ note: brand says no emoji — these are placeholders for real icons / data viz
      </div>
    </div>

    {/* CTA strip */}
    <div style={{ padding: '40px 64px 64px', background: '#0288d1', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
      <div>
        <h2 className="wf-hand" style={{ fontSize: 36, margin: '0 0 6px', fontWeight: 700 }}>Try it for two weeks.</h2>
        <p style={{ font: '400 17px/1.4 Roboto', margin: 0, opacity: 0.9 }}>Full console. Real data. Your sectors. Cancel by email.</p>
      </div>
      <span className="wf-cta alt" style={{ background: '#fff', color: '#0288d1', borderColor: '#fff', boxShadow: '4px 4px 0 #2a3540' }}>Start free trial →</span>
    </div>
  </div>
);

Object.assign(window, { W5, W6 });
