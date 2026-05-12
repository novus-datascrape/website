/* global React */
// 6 landing-page wireframes for Novus Datascrape
// Low-fi, sketchy, b&w + sky-blue accent. Each ~1200 wide, variable height.

const WF_W = 1200;

// ─────────────────────────────────────────────────────────────────────
// Shared mini bits
// ─────────────────────────────────────────────────────────────────────

const NavBar = ({ ctaLabel = 'Request access', dense = false, links = ['Product', 'Sources', 'For analysts', 'Contact'] }) => (
  <div className="wf-nav" style={{ padding: dense ? '12px 28px' : '14px 32px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="28" height="28" viewBox="0 0 240 240"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#0288d1"/><stop offset="1" stopColor="#29b6f6"/></linearGradient></defs><rect x="46" y="46" width="22" height="148" rx="3" fill="url(#lg)"/><rect x="172" y="46" width="22" height="148" rx="3" fill="url(#lg)"/><polygon points="68,46 90,46 194,194 172,194" fill="url(#lg)"/></svg>
      <div className="wf-nav-logo">Novus<span className="dot">·</span>Datascrape</div>
    </div>
    <div className="wf-nav-links">{links.map(l => <span key={l}>{l}</span>)}</div>
    <div className="wf-nav-cta">{ctaLabel} →</div>
  </div>
);

const MiniConsole = ({ rows = 6, showSearch = true, h = 'auto' }) => (
  <div className="mini-console" style={{ height: h }}>
    <div className="mc-bar">
      <svg width="14" height="14" viewBox="0 0 240 240" style={{marginRight: 6}}><rect x="46" y="46" width="22" height="148" rx="3" fill="#fff"/><rect x="172" y="46" width="22" height="148" rx="3" fill="#fff"/><polygon points="68,46 90,46 194,194 172,194" fill="#fff"/></svg>
      Novus · Datascrape Console
      <div style={{flex:1}}/>
      <span style={{fontSize: 9, opacity: 0.85}}>account_circle</span>
    </div>
    <div className="mc-body">
      {showSearch && <div className="mc-search">🔍 Search Data — Ex. TechCrunch</div>}
      <div className="mc-row head">
        <span>Dataset Name</span><span>Description</span><span>Source</span><span>Vendor</span><span>Status</span>
      </div>
      {[
        ['Startup Funding 2025', 'List of Series A funding rounds', 'Google News', 'Crunchbase', 'new'],
        ['SEC 10-Q Filings', 'Recent quarterly disclosures', 'Datarade', 'EDGAR', 'upd'],
        ['Container Throughput', 'Daily port volumes — APAC', 'Bing News', 'PortWatch', 'new'],
        ['Reddit r/wallstreetbets', 'Aggregated sentiment scores', 'Google News', 'Pushshift', 'unc'],
        ['Consumer Card Spend', 'Aggregated transaction panel', 'Datarade', 'Yodlee', 'upd'],
        ['Job Postings Index', 'IT hiring volume — US tech', 'Datarade', 'Greenhouse', 'new'],
      ].slice(0, rows).map(([n,d,s,v,st], i) => (
        <div className="mc-row" key={i}>
          <span style={{color:'#0277bd', fontWeight: 500}}>{n}</span>
          <span style={{color:'#78909c'}}>{d}</span>
          <span><span className="mc-src" style={{borderLeftColor: s==='Bing News'?'#00809d':s==='Datarade'?'#4caf50':'#4285f4'}}>{s}</span></span>
          <span style={{color:'#37474f'}}>{v}</span>
          <span><span className={`mc-chip ${st}`}>{st==='new'?'NEW':st==='upd'?'UPDATED':'UNCHANGED'}</span></span>
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────
// W1 — STOIC DATASHEET (most institutional, FactSet-quiet)
// Looks like a research note. No console image. Margin annotations.
// ─────────────────────────────────────────────────────────────────────
const W1 = () => (
  <div className="wf" style={{ width: WF_W }}>
    <NavBar ctaLabel="Request access" links={['Methodology', 'Coverage', 'Pricing', 'Contact']}/>

    {/* Hero — text only, two-column tape */}
    <div style={{ padding: '56px 64px 32px', position: 'relative' }}>
      <div className="wf-tag" style={{marginBottom: 24}}>v1 · Institutional / quiet</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <h1 className="wf-hand" style={{ fontSize: 56, lineHeight: 1.05, margin: '0 0 18px', fontWeight: 700 }}>
            Every alternative dataset.<br/>
            <span className="wf-underline">As soon as it's published.</span>
          </h1>
          <p style={{ font: '400 18px/1.55 Roboto', color: '#455a64', maxWidth: 560, margin: '0 0 28px' }}>
            Novus Datascrape continuously monitors the open web, vendor catalogues, and social platforms for newly-released datasets relevant to investment research. We index, classify, and surface them for your analysts the day they appear.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span className="wf-cta">Request access →</span>
            <span className="wf-hand" style={{ color: '#5a6a78', fontSize: 16 }}>or read the methodology →</span>
          </div>
        </div>
        <div>
          <div className="wf-tag" style={{marginBottom: 14}}>Coverage · Q2 2026</div>
          <div style={{ borderTop: '1.5px solid #2a3540', borderBottom: '1.5px solid #2a3540', padding: '18px 0' }}>
            {[
              ['Sources monitored', '47'],
              ['Datasets indexed', '12,400+'],
              ['Avg time to surface', '12 min'],
              ['Coverage regions', '32'],
            ].map(([k,v]) => (
              <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderTop:'1px dashed #c8c0b0', fontFamily: 'Roboto' }}>
                <span style={{ textTransform:'uppercase', fontSize: 12, letterSpacing: 0.5, color: '#90a4ae', fontWeight: 600 }}>{k}</span>
                <span className="wf-hand" style={{ fontSize: 20, fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wf-anno" style={{ top: 80, right: 30, transform: 'rotate(-6deg)' }}>
        ↗ no hype, just facts
      </div>
    </div>

    <div className="wf-squiggle"/>

    {/* The thesis */}
    <div style={{ padding: '48px 64px', display:'grid', gridTemplateColumns: '220px 1fr', gap: 48 }}>
      <div>
        <div className="wf-tag">The thesis</div>
      </div>
      <div>
        <h2 className="wf-hand" style={{ fontSize: 32, margin: '0 0 16px', fontWeight: 700, lineHeight: 1.2 }}>
          Edge expires. <span className="wf-scribble">Speed compounds.</span>
        </h2>
        <p style={{ font: '400 17px/1.6 Roboto', color: '#455a64', maxWidth: 720, margin: 0 }}>
          A new alt-data vendor publishes every 3 hours. Most funds find out weeks later, through a sales call. By the time the dataset is licensed, three other shops have already back-tested it. We collapse that lag from weeks to minutes.
        </p>
      </div>
    </div>

    {/* What we monitor — long list */}
    <div style={{ background: '#f4f1e8', padding: '48px 64px', borderTop: '1.5px solid #2a3540', borderBottom: '1.5px solid #2a3540' }}>
      <div className="wf-tag" style={{marginBottom: 24}}>What we monitor</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {['Google News', 'Bing News', 'Datarade', 'Crunchbase', 'SEC EDGAR', 'arXiv', 'GitHub releases', 'Kaggle', 'Snowflake Marketplace', 'AWS Data Exchange', 'Reddit', 'X / Twitter', 'LinkedIn jobs', 'Press releases', 'Eagle Alpha', 'Neudata', 'BattleFin', 'Substack'].map(s => (
          <span key={s} className="wf-chip">{s}</span>
        ))}
      </div>
    </div>

    {/* Three principles */}
    <div style={{ padding: '56px 64px' }}>
      <div className="wf-tag" style={{marginBottom: 28}}>How we work</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {[
          ['Correctness', 'Every record is cross-verified against the source URL. We surface the citation, not just the claim.'],
          ['Coverage', 'We monitor 47 sources today. New ones onboard in 48 hours when a fund asks.'],
          ['Custody', 'We never resell or relicense data. We point you at the vendor and step out of the way.'],
        ].map(([t, b]) => (
          <div key={t}>
            <div className="wf-hand" style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{t}</div>
            <p style={{ font: '400 15px/1.55 Roboto', color: '#5a6a78', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Quiet CTA */}
    <div style={{ padding: '40px 64px 64px', borderTop: '1.5px solid #c8c0b0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div className="wf-hand" style={{ fontSize: 22, fontWeight: 700 }}>Access is by invitation.</div>
        <div style={{ color: '#5a6a78', font: '400 14px/1.4 Roboto' }}>Walkthroughs are 30 minutes. We come prepared.</div>
      </div>
      <span className="wf-cta">Request access →</span>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────
// W2 — CONSOLE-FIRST (product-led)
// Hero with console screenshot. Three benefit pillars. Calm-confident.
// ─────────────────────────────────────────────────────────────────────
const W2 = () => (
  <div className="wf" style={{ width: WF_W }}>
    <NavBar ctaLabel="Book a demo"/>
    <div style={{ padding: '48px 64px 24px', textAlign: 'center', position: 'relative' }}>
      <div className="wf-tag" style={{marginBottom: 20}}>v2 · Console-first</div>
      <h1 className="wf-hand" style={{ fontSize: 60, lineHeight: 1.05, margin: '0 auto 16px', fontWeight: 700, maxWidth: 880 }}>
        See <span className="wf-underline">every new dataset</span><br/>before your competitors do.
      </h1>
      <p style={{ font: '400 19px/1.55 Roboto', color: '#455a64', maxWidth: 640, margin: '0 auto 28px' }}>
        Novus Datascrape watches 47 sources of alternative data — vendors, news, social — and surfaces what's new the moment it appears. Built for the analysts who pick the signals.
      </p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
        <span className="wf-cta accent">Book a demo →</span>
        <span className="wf-cta alt">See the console</span>
      </div>
    </div>

    {/* Console screenshot */}
    <div style={{ padding: '24px 64px 64px', position: 'relative' }}>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '6px 8px 0 #2a3540, 0 4px 20px rgba(0,0,0,.08)', border: '1.5px solid #2a3540' }}>
        <MiniConsole rows={6}/>
      </div>
      <div className="wf-anno" style={{ top: 40, left: -6, transform: 'rotate(-8deg)', maxWidth: 130 }}>
        ↘ this is the actual console
      </div>
      <div className="wf-anno" style={{ top: 100, right: 0, transform: 'rotate(5deg)', maxWidth: 160 }}>
        live status chips — see what changed
      </div>
    </div>

    {/* Three pillars */}
    <div style={{ padding: '48px 64px', background: '#f4f1e8', borderTop: '1.5px solid #2a3540', borderBottom: '1.5px solid #2a3540' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
        {[
          ['12 min', 'from publish to your inbox', 'No more "we heard about this dataset three weeks too late."'],
          ['47 sources', 'continuously monitored', 'Vendor catalogues, news APIs, social — one feed, one schema.'],
          ['1 schema', 'across every source', 'Vendor, frequency, coverage, format — normalised so you can filter.'],
        ].map(([n, sub, body]) => (
          <div key={n}>
            <div className="wf-hand" style={{ fontSize: 52, lineHeight: 1, fontWeight: 700, color: '#0288d1' }}>{n}</div>
            <div className="wf-hand" style={{ fontSize: 17, color: '#2a3540', marginTop: 4 }}>{sub}</div>
            <div className="wf-squiggle" style={{ margin: '12px 0' }}/>
            <div style={{ font: '400 15px/1.5 Roboto', color: '#5a6a78' }}>{body}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Audience strip */}
    <div style={{ padding: '56px 64px' }}>
      <h2 className="wf-hand" style={{ fontSize: 32, margin: '0 0 24px', fontWeight: 700 }}>Built for the desk.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {[
          ['Analysts', 'Stop reading vendor blogs at 6am. New datasets land in your filter, tagged by sector.'],
          ['Portfolio managers', 'See what your desk is evaluating, what they passed on, and why.'],
          ['Quant leads', 'Pipe the catalog into your eval pipeline. CSV, JSON, API — your call.'],
        ].map(([t, b]) => (
          <div key={t} className="wf-box-soft" style={{ padding: 24 }}>
            <div className="wf-hand" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{t}</div>
            <p style={{ font: '400 15px/1.5 Roboto', color: '#5a6a78', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Closing CTA */}
    <div style={{ padding: '48px 64px 64px', textAlign: 'center', borderTop: '1.5px dashed #c8c0b0' }}>
      <h2 className="wf-hand" style={{ fontSize: 36, margin: '0 0 8px', fontWeight: 700 }}>30 minutes. Real datasets.</h2>
      <p style={{ font: '400 17px/1.5 Roboto', color: '#5a6a78', margin: '0 0 24px' }}>We'll show you the console with your sectors loaded.</p>
      <span className="wf-cta accent">Book a demo →</span>
    </div>
  </div>
);

Object.assign(window, { W1, W2, MiniConsole, NavBar, WF_W });
