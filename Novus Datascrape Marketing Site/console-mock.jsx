/* global React */
// Polished console screenshot mock — Roboto, slate ramp, real-looking
// Reproduces the actual Novus console list view inline.

const MOCK_ROWS = [
  { name: 'Container Throughput — APAC', desc: 'Daily port volumes for the top 40 APAC ports', source: 'Bing News', vendor: 'PortWatch', date: '12 min ago', status: 'NEW' },
  { name: 'Series A Funding Rounds, Q2', desc: 'All Series A rounds globally, refreshed hourly', source: 'Google News', vendor: 'Crunchbase', date: '34 min ago', status: 'NEW' },
  { name: 'Consumer Card Spend Panel', desc: 'Aggregated transaction data — US households', source: 'Datarade', vendor: 'Yodlee', date: '2 h ago', status: 'UPDATED' },
  { name: 'SEC 10-Q Disclosures', desc: 'Quarterly filings, parsed and tagged by entity', source: 'Datarade', vendor: 'EDGAR', date: '3 h ago', status: 'UPDATED' },
  { name: 'IT Hiring Index — US Tech', desc: 'Job-posting volume across top 200 employers', source: 'Datarade', vendor: 'Greenhouse', date: '4 h ago', status: 'NEW' },
  { name: 'Reddit Sentiment — Equities', desc: 'Aggregated sentiment scores, ticker-mapped', source: 'Google News', vendor: 'Pushshift', date: '6 h ago', status: 'UNCHANGED' },
  { name: 'Shipping AIS — Crude Tankers', desc: 'Live vessel positions and laden status', source: 'Bing News', vendor: 'Kpler', date: '8 h ago', status: 'UPDATED' },
];

const SourceChip = ({ name }) => {
  const color = name === 'Google News' ? '#4285f4'
    : name === 'Bing News' ? '#00809d'
    : name === 'Datarade' ? '#4caf50'
    : '#7b1fa2';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      font: '500 12px/1 Roboto', color: '#37474f',
      background: '#fff',
      border: '1px solid #dadce0', borderLeft: `4px solid ${color}`,
      borderRadius: 4, padding: '6px 10px',
      boxShadow: '0 1px 2px rgba(60,64,67,.1)',
      letterSpacing: 0.2, textTransform: 'uppercase'
    }}>{name}</span>
  );
};

const StatusChip = ({ status }) => {
  const styles = {
    NEW:       { bg: '#e8f5e9', fg: '#2e7d32', bd: '#c8e6c9' },
    UPDATED:   { bg: '#fff3e0', fg: '#ef6c00', bd: '#ffe0b2' },
    UNCHANGED: { bg: '#eceff1', fg: '#546e7a', bd: '#cfd8dc' },
  }[status];
  return (
    <span style={{
      display: 'inline-block',
      font: '600 11px/1 Roboto',
      color: styles.fg, background: styles.bg, border: `1px solid ${styles.bd}`,
      padding: '5px 10px', borderRadius: 4,
      letterSpacing: 0.3, textTransform: 'uppercase'
    }}>{status}</span>
  );
};

function ConsoleMock() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', background: '#fff' }}>
      {/* Toolbar */}
      <div style={{
        background: 'linear-gradient(90deg, #0288d1 0%, #29b6f6 100%)',
        color: '#fff', padding: '0 20px', height: 56,
        display: 'flex', alignItems: 'center', gap: 16,
        boxShadow: '0 2px 4px rgba(0,0,0,.1)'
      }}>
        <svg width="20" height="20" viewBox="0 0 240 240" aria-hidden="true">
          <rect x="46" y="46" width="22" height="148" rx="3" fill="#fff"/>
          <rect x="172" y="46" width="22" height="148" rx="3" fill="#fff"/>
          <polygon points="68,46 90,46 194,194 172,194" fill="#fff"/>
        </svg>
        <span style={{ font: '500 18px/1 Roboto', letterSpacing: 0.5 }}>
          Novus<span style={{ opacity: 0.7, margin: '0 3px' }}>·</span>Datascrape
        </span>
        <span style={{ flex: 1 }}/>
        <span style={{ font: '400 13px/1 Roboto', opacity: 0.9 }}>analyst@nestor-capital.com</span>
        <span className="material-icons" style={{ fontSize: 22 }}>account_circle</span>
      </div>

      {/* Controls strip */}
      <div style={{
        padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14,
        borderBottom: '1px solid #f0f0f0',
      }}>
        <div style={{
          flex: 1, maxWidth: 380, display: 'flex', alignItems: 'center', gap: 8,
          border: '1px solid #cfd8dc', borderRadius: 6, padding: '8px 12px', background: '#fff',
        }}>
          <span className="material-icons" style={{ fontSize: 18, color: '#90a4ae' }}>search</span>
          <span style={{ font: '400 13px/1 Roboto', color: '#90a4ae' }}>Search Data — Ex. TechCrunch</span>
        </div>
        <div style={{ flex: 1 }}/>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          font: '500 13px/1 Roboto', color: '#546e7a',
          padding: '8px 12px', borderRadius: 6,
        }}>
          <span className="material-icons" style={{ fontSize: 18, color: '#546e7a' }}>refresh</span>
          Refresh
        </div>
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#fafafa' }}>
            {['Dataset Name', 'Description', 'Source', 'Vendor', 'Updated', 'Status', ''].map((h, i) => (
              <th key={i} style={{
                textAlign: 'left', padding: '12px 16px',
                font: '600 12px/1.2 Roboto', color: '#546e7a',
                textTransform: 'uppercase', letterSpacing: 0.5,
                borderBottom: '1px solid #e0e0e0',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MOCK_ROWS.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', background: i === 0 ? '#f5fbff' : '#fff' }}>
              <td style={{ padding: '14px 16px', font: '500 14px/1.4 Roboto', color: '#0277bd' }}>{r.name}</td>
              <td style={{ padding: '14px 16px', font: '400 14px/1.4 Roboto', color: '#78909c', maxWidth: 260 }}>{r.desc}</td>
              <td style={{ padding: '14px 16px' }}><SourceChip name={r.source}/></td>
              <td style={{ padding: '14px 16px', font: '400 14px/1 Roboto', color: '#37474f' }}>{r.vendor}</td>
              <td style={{ padding: '14px 16px', font: '400 13px/1 Roboto', color: '#78909c' }}>{r.date}</td>
              <td style={{ padding: '14px 16px' }}><StatusChip status={r.status}/></td>
              <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                <span className="material-icons" style={{ fontSize: 20, color: '#90a4ae' }}>visibility</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer pagination */}
      <div style={{
        padding: '14px 20px', display: 'flex', justifyContent: 'flex-end',
        alignItems: 'center', gap: 16, borderTop: '1px solid #f0f0f0', background: '#fafafa',
      }}>
        <span style={{ font: '400 13px/1 Roboto', color: '#78909c' }}>1–7 of 12,431</span>
        <span className="material-icons" style={{ fontSize: 22, color: '#b0bec5' }}>chevron_left</span>
        <span className="material-icons" style={{ fontSize: 22, color: '#546e7a' }}>chevron_right</span>
      </div>
    </div>
  );
}

Object.assign(window, { ConsoleMock });
