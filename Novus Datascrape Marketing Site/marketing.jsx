/* global React, ConsoleMock */

function Toolbar() {
  return (
    <header className="m-toolbar">
      <div className="m-toolbar-inner">
        <a className="m-logo" href="#top" aria-label="Novus Datascrape">
          <svg width="24" height="24" viewBox="0 0 240 240" aria-hidden="true">
            <rect x="46" y="46" width="22" height="148" rx="3" fill="#fff"/>
            <rect x="172" y="46" width="22" height="148" rx="3" fill="#fff"/>
            <polygon points="68,46 90,46 194,194 172,194" fill="#fff"/>
          </svg>
          <span>Novus<span className="dot">·</span>Datascrape</span>
        </a>
        <nav className="m-nav">
          <a href="#product">Product</a>
          <a href="#how-we-work">How we work</a>
          <a href="#coverage">Coverage</a>
          <a href="#delivery">Delivery</a>
          <a href="#teams">For teams</a>
        </nav>
        <div className="m-toolbar-spacer"/>
        <a className="m-toolbar-secondary" href="#login">Sign in</a>
        <a className="m-toolbar-cta" href="#demo">Book a demo</a>
      </div>
    </header>
  );
}

function Hero({ headline, subhead }) {
  return (
    <section className="m-hero" id="top">
      <div className="m-container">
        <span className="m-tag">Alternative data discovery · Q2 2026</span>
        <h1 dangerouslySetInnerHTML={{ __html: headline }}/>
        <p className="lead">{subhead}</p>
        <div className="m-hero-ctas">
          <a className="m-btn primary large" href="#demo">
            Book a demo
            <span className="material-icons">arrow_forward</span>
          </a>
          <a className="m-btn ghost large" href="#product">See the console</a>
        </div>
      </div>
    </section>
  );
}

function ConsoleFrame() {
  return (
    <div className="m-console-frame" id="product">
      <div className="frame-inner">
        <ConsoleMock/>
      </div>
      <div className="m-frame-caption">The console · live every 60 seconds</div>
    </div>
  );
}

function SourcesStrip() {
  return (
    <div className="m-sources-strip">
      <div className="m-sources-strip-inner">
        <span className="label">47 sources monitored</span>
        <div className="chips">
          {['Google News', 'Bing News', 'Datarade', 'AWS Data Exchange', 'Snowflake Marketplace', 'Crunchbase', 'SEC EDGAR', 'Kaggle', 'arXiv', 'Eagle Alpha', 'Neudata', 'BattleFin'].map(s => (
            <span key={s} className="m-source-chip">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pillars() {
  const items = [
    { num: '12', unit: 'min', sub: 'Avg time to surface', body: 'From a vendor publishing a panel — press release, marketplace listing, GitHub release — to it appearing in your console, tagged and filtered.' },
    { num: '47', unit: 'sources', sub: 'Continuously monitored', body: 'Vendor catalogues, news APIs, marketplaces, and social — one feed, one schema. New sources onboard in 48 hours when a fund asks.' },
    { num: '1', unit: 'schema', sub: 'Across every source', body: 'Vendor, frequency, regions, format, status — normalised so your analysts filter, your quants ingest, and nobody negotiates fields.' },
  ];
  return (
    <section className="m-section">
      <div className="m-container">
        <div className="m-section-head center">
          <span className="m-tag">Why Novus</span>
          <h2>Edge expires. Speed compounds.</h2>
          <p>A new alternative-data vendor publishes every three hours. Most funds find out weeks later, through a sales call. We collapse that lag from weeks to minutes.</p>
        </div>
        <div className="m-pillars">
          {items.map((p, i) => (
            <div key={i} className="m-pillar">
              <div className="num">{p.num}<span className="unit"> {p.unit}</span></div>
              <div className="sub">{p.sub}</div>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const items = [
    { icon: 'verified', title: 'Correctness', body: 'Every record is cross-verified against its source URL. We surface the citation, not just the claim. Analysts verify before licensing.' },
    { icon: 'travel_explore', title: 'Coverage', body: 'We monitor 47 sources today. New ones onboard in 48 hours when a fund asks. The catalog gets denser every week, not stale.' },
    { icon: 'shield', title: 'Custody', body: 'We never resell or relicense data. We point you at the vendor and step out of the way. Your provider relationships stay your own.' },
  ];
  return (
    <section className="m-section m-bg-surface" id="how-we-work">
      <div className="m-container">
        <div className="m-section-head">
          <span className="m-tag">How we work</span>
          <h2>Three commitments, in order.</h2>
          <p>The product's job is to surface accurate facts about datasets, then get out of the way. These are the principles we hold ourselves to.</p>
        </div>
        <div className="m-how">
          {items.map((c, i) => (
            <div key={i} className="m-how-card">
              <div className="icon-wrap"><span className="material-icons">{c.icon}</span></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const rows = [
    ['Sources monitored', '47'],
    ['Datasets indexed', '12,400+'],
    ['Avg time to surface', '12 min'],
    ['Coverage regions', '32'],
    ['Sectors classified', '18'],
    ['History retained', '18 months'],
  ];
  return (
    <section className="m-section" id="coverage">
      <div className="m-container">
        <div className="m-coverage-grid">
          <div>
            <span className="m-tag">Coverage · Q2 2026</span>
            <h2 style={{ font: '300 40px/1.15 Roboto', color: '#263238', margin: '14px 0 12px', letterSpacing: '-0.3px' }}>
              A working catalog of the alternative-data market.
            </h2>
            <p style={{ font: '400 17.6px/1.6 Roboto', color: '#455a64', margin: '0 0 24px' }}>
              We don't list every dataset that ever existed. We surface what's being published right now, classified against one schema your team can actually filter.
            </p>
            <a className="m-btn text" href="#methodology" style={{ paddingLeft: 0 }}>
              Read the methodology
              <span className="material-icons">arrow_forward</span>
            </a>
          </div>
          <div className="m-coverage-table">
            {rows.map(([k, v]) => (
              <div key={k} className="m-coverage-row">
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section className="m-section m-bg-surface" id="delivery">
      <div className="m-container">
        <div className="m-section-head">
          <span className="m-tag">Delivery</span>
          <h2>A feed, not another login.</h2>
          <p>Use the console if you want. Or pipe the catalog straight into your eval pipeline — webhooks for the moment something lands, batch exports for everything else.</p>
        </div>
        <div className="m-delivery">
          <div>
            <span className="m-tag" style={{ background: '#e1f5fe', borderColor: '#b3e5fc', color: '#0277bd' }}>Real-time webhooks</span>
            <h2>The moment it appears, your stack knows.</h2>
            <p>Subscribe a webhook to your sectors and Novus posts a normalised payload the instant a new dataset clears classification. Your eval pipeline runs before your competitors have even opened their inbox.</p>
            <div className="methods">
              <div className="method">
                <span className="material-icons">webhook</span>
                <div className="text">
                  <span className="name">Webhook</span>
                  <span className="desc">POST per new dataset · &lt; 1 min</span>
                </div>
              </div>
              <div className="method">
                <span className="material-icons">api</span>
                <div className="text">
                  <span className="name">REST API</span>
                  <span className="desc">Filter, paginate, replay</span>
                </div>
              </div>
              <div className="method">
                <span className="material-icons">cloud_download</span>
                <div className="text">
                  <span className="name">Daily CSV / JSON</span>
                  <span className="desc">S3 or SFTP drop</span>
                </div>
              </div>
              <div className="method">
                <span className="material-icons">table_view</span>
                <div className="text">
                  <span className="name">Console</span>
                  <span className="desc">Browse, filter, export</span>
                </div>
              </div>
            </div>
          </div>
          <div className="m-codeblock">
            <div className="cb-bar">
              <span className="dot"/><span className="dot"/><span className="dot"/>
              <span className="label">webhook · POST /your-endpoint</span>
            </div>
{`{
  `}<span className="k">"event"</span>{`:    `}<span className="s">"dataset.new"</span>{`,
  `}<span className="k">"latency_s"</span>{`: `}<span className="n">724</span>{`,    `}<span className="c">// from publish to delivery</span>{`
  `}<span className="k">"dataset"</span>{`: {
    `}<span className="k">"id"</span>{`:        `}<span className="s">"ds_a91b…"</span>{`,
    `}<span className="k">"name"</span>{`:      `}<span className="s">"Container Throughput — APAC"</span>{`,
    `}<span className="k">"vendor"</span>{`:    `}<span className="s">"PortWatch"</span>{`,
    `}<span className="k">"source"</span>{`:    `}<span className="s">"bing_news"</span>{`,
    `}<span className="k">"sectors"</span>{`:   [`}<span className="s">"shipping"</span>{`, `}<span className="s">"commodities"</span>{`],
    `}<span className="k">"frequency"</span>{`: `}<span className="s">"daily"</span>{`,
    `}<span className="k">"formats"</span>{`:   [`}<span className="s">"csv"</span>{`, `}<span className="s">"api"</span>{`],
    `}<span className="k">"citation"</span>{`:  `}<span className="s">"https://portwatch.io/…"</span>{`,
    `}<span className="k">"first_seen"</span>{`: `}<span className="s">"2026-05-12T09:47:31Z"</span>{`
  }
}`}
          </div>
        </div>
      </div>
    </section>
  );
}

function BuiltForTheDesk() {
  const roles = [
    {
      role: 'For analysts',
      title: 'Stop reading vendor blogs at 6am.',
      body: 'New datasets land in your filter, tagged by sector. Verify the source, send to research, move on.',
      bullets: ['Filtered feed of new datasets', 'Source citation on every record', 'Sector + region tags']
    },
    {
      role: 'For portfolio managers',
      title: 'See what your desk is evaluating.',
      body: 'A clean audit trail of every dataset reviewed, the analyst who looked at it, and the decision they made.',
      bullets: ['Audit trail per dataset', 'Notes and verdicts inline', 'Weekly digest by sector']
    },
    {
      role: 'For quant leads',
      title: 'A clean catalog with an API.',
      body: 'Webhooks the moment something lands; REST for backfills; one schema across every source. Plug it in.',
      bullets: ['Webhook delivery', 'REST + replay endpoints', 'Single normalised schema']
    },
  ];
  return (
    <section className="m-section" id="teams">
      <div className="m-container">
        <div className="m-section-head">
          <span className="m-tag">Built for the desk</span>
          <h2>One console. Three jobs. Done before lunch.</h2>
          <p>Analysts, PMs, and quants see the same catalog — filtered, audited, and delivered the way each of them works.</p>
        </div>
        <div className="m-desk">
          {roles.map((r, i) => (
            <div key={i} className="m-desk-card">
              <div className="role-cap">{r.role}</div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
              <ul className="bullets">
                {r.bullets.map((b, j) => (
                  <li key={j}><span className="material-icons">check</span>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="m-section m-bg-surface" id="demo">
      <div className="m-container-read">
        <div className="m-final-cta">
          <span className="m-tag">Walkthroughs · 30 minutes</span>
          <h2>Real datasets. <em>Your sectors.</em><br/>No deck.</h2>
          <p>We'll preload the console with the sectors your fund trades and walk through a typical morning. If it's useful, we'll send you the catalog the next day.</p>
          <div className="m-hero-ctas">
            <a className="m-btn primary large" href="mailto:hello@novusdatascrape.com">
              Book a demo
              <span className="material-icons">arrow_forward</span>
            </a>
            <a className="m-btn ghost large" href="mailto:hello@novusdatascrape.com">Email us instead</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="m-footer">
      <div className="m-footer-inner">
        <div className="copy">© 2026 Novus Datascrape · Alternative data discovery</div>
        <div className="links">
          <a href="#methodology">Methodology</a>
          <a href="#coverage">Coverage</a>
          <a href="#security">Security</a>
          <a href="mailto:hello@novusdatascrape.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Toolbar, Hero, ConsoleFrame, SourcesStrip, Pillars, HowWeWork, Coverage, Delivery, BuiltForTheDesk, FinalCTA, Footer });
