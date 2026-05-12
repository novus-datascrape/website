import { Component } from '@angular/core';

@Component({
  selector: 'app-console-mock',
  template: `
    <div class="m-console-frame" id="product">
      <div class="frame-inner">
        <div class="console">
          <!-- Toolbar -->
          <div class="console-toolbar">
            <svg width="20" height="20" viewBox="0 0 240 240" aria-hidden="true">
              <rect x="46" y="46" width="22" height="148" rx="3" fill="#fff"/>
              <rect x="172" y="46" width="22" height="148" rx="3" fill="#fff"/>
              <polygon points="68,46 90,46 194,194 172,194" fill="#fff"/>
            </svg>
            <span class="console-brand">Novus<span class="dot">·</span>Datascrape</span>
            <span class="spacer"></span>
            <span class="console-user">analyst&#64;nestor-capital.com</span>
            <span class="material-icons user-icon">account_circle</span>
          </div>

          <!-- Controls -->
          <div class="console-controls">
            <div class="search-box">
              <span class="material-icons">search</span>
              <span class="placeholder">Search Data — Ex. TechCrunch</span>
            </div>
            <div class="spacer"></div>
            <div class="refresh">
              <span class="material-icons">refresh</span>
              Refresh
            </div>
          </div>

          <!-- Table -->
          <table>
            <thead>
              <tr>
                <th>Dataset Name</th>
                <th>Description</th>
                <th>Source</th>
                <th>Vendor</th>
                <th>Updated</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              @for (row of rows; track row.name; let i = $index) {
                <tr [class.highlight]="i === 0">
                  <td class="name-cell">{{ row.name }}</td>
                  <td class="desc-cell">{{ row.desc }}</td>
                  <td><span class="source-chip" [style.border-left-color]="getSourceColor(row.source)">{{ row.source }}</span></td>
                  <td class="vendor-cell">{{ row.vendor }}</td>
                  <td class="date-cell">{{ row.date }}</td>
                  <td><span class="status-chip" [class]="'status-chip ' + row.status.toLowerCase()">{{ row.status }}</span></td>
                  <td class="action-cell"><span class="material-icons">visibility</span></td>
                </tr>
              }
            </tbody>
          </table>

          <!-- Pagination -->
          <div class="console-footer">
            <span class="page-info">1–7 of 12,431</span>
            <span class="material-icons nav-disabled">chevron_left</span>
            <span class="material-icons nav-active">chevron_right</span>
          </div>
        </div>
      </div>
      <div class="m-frame-caption">The console · live every 60 seconds</div>
    </div>
  `,
  styles: [`
    .m-console-frame {
      max-width: 1280px; margin: 0 auto;
      padding: 0 24px;
    }
    .frame-inner {
      background: var(--nds-surface);
      border-radius: var(--nds-radius-card);
      box-shadow: var(--nds-shadow-card), 0 24px 60px rgba(38,50,56,.10);
      overflow: hidden;
      border: 1px solid var(--nds-line);
    }
    .m-frame-caption {
      text-align: center;
      font: var(--nds-text-cap);
      color: var(--nds-slate-500);
      text-transform: uppercase;
      letter-spacing: var(--nds-tr-cap);
      padding: 18px 0 4px;
    }
    .console { font-family: var(--nds-font-sans); color: #37474f; background: #fff; }
    .console-toolbar {
      background: linear-gradient(90deg, #0288d1 0%, #29b6f6 100%);
      color: #fff; padding: 0 20px; height: 56px;
      display: flex; align-items: center; gap: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }
    .console-brand { font: 500 18px/1 var(--nds-font-sans); letter-spacing: 0.5px; }
    .console-brand .dot { opacity: 0.7; margin: 0 3px; }
    .console-user { font: 400 13px/1 var(--nds-font-sans); opacity: 0.9; }
    .user-icon { font-size: 22px; }
    .spacer { flex: 1; }
    .console-controls {
      padding: 14px 20px; display: flex; align-items: center; gap: 14px;
      border-bottom: 1px solid #f0f0f0;
    }
    .search-box {
      flex: 1; max-width: 380px; display: flex; align-items: center; gap: 8px;
      border: 1px solid #cfd8dc; border-radius: 6px; padding: 8px 12px; background: #fff;
    }
    .search-box .material-icons { font-size: 18px; color: #90a4ae; }
    .search-box .placeholder { font: 400 13px/1 var(--nds-font-sans); color: #90a4ae; }
    .refresh {
      display: flex; align-items: center; gap: 6px;
      font: 500 13px/1 var(--nds-font-sans); color: #546e7a;
      padding: 8px 12px; border-radius: 6px; cursor: pointer;
    }
    .refresh .material-icons { font-size: 18px; color: #546e7a; }
    table { width: 100%; border-collapse: collapse; background: #fff; }
    thead tr { background: #fafafa; }
    th {
      text-align: left; padding: 12px 16px;
      font: 600 12px/1.2 var(--nds-font-sans); color: #546e7a;
      text-transform: uppercase; letter-spacing: 0.5px;
      border-bottom: 1px solid #e0e0e0;
    }
    td { padding: 14px 16px; border-bottom: 1px solid #f0f0f0; }
    tr.highlight { background: #f5fbff; }
    .name-cell { font: 500 14px/1.4 var(--nds-font-sans); color: #0277bd; }
    .desc-cell { font: 400 14px/1.4 var(--nds-font-sans); color: #78909c; max-width: 260px; }
    .vendor-cell { font: 400 14px/1 var(--nds-font-sans); color: #37474f; }
    .date-cell { font: 400 13px/1 var(--nds-font-sans); color: #78909c; }
    .action-cell { text-align: right; }
    .action-cell .material-icons { font-size: 20px; color: #90a4ae; }
    .source-chip {
      display: inline-flex; align-items: center; gap: 6px;
      font: 500 12px/1 var(--nds-font-sans); color: #37474f;
      background: #fff;
      border: 1px solid #dadce0; border-left: 4px solid #7b1fa2;
      border-radius: 4px; padding: 6px 10px;
      box-shadow: 0 1px 2px rgba(60,64,67,.1);
      letter-spacing: 0.2px; text-transform: uppercase;
    }
    .status-chip {
      display: inline-block;
      font: 600 11px/1 var(--nds-font-sans);
      padding: 5px 10px; border-radius: 4px;
      letter-spacing: 0.3px; text-transform: uppercase;
    }
    .status-chip.new { color: #2e7d32; background: #e8f5e9; border: 1px solid #c8e6c9; }
    .status-chip.updated { color: #ef6c00; background: #fff3e0; border: 1px solid #ffe0b2; }
    .status-chip.unchanged { color: #546e7a; background: #eceff1; border: 1px solid #cfd8dc; }
    .console-footer {
      padding: 14px 20px; display: flex; justify-content: flex-end;
      align-items: center; gap: 16px; border-top: 1px solid #f0f0f0; background: #fafafa;
    }
    .page-info { font: 400 13px/1 var(--nds-font-sans); color: #78909c; }
    .nav-disabled { font-size: 22px; color: #b0bec5; }
    .nav-active { font-size: 22px; color: #546e7a; }

    @media (max-width: 960px) {
      table { font-size: 12px; }
      .desc-cell { display: none; }
      .frame-inner { overflow-x: auto; -webkit-overflow-scrolling: touch; }
      .console { min-width: 700px; }
    }
  `]
})
export class ConsoleMockComponent {
  rows = [
    { name: 'Container Throughput — APAC', desc: 'Daily port volumes for the top 40 APAC ports', source: 'Bing News', vendor: 'PortWatch', date: '12 min ago', status: 'NEW' },
    { name: 'Series A Funding Rounds, Q2', desc: 'All Series A rounds globally, refreshed hourly', source: 'Google News', vendor: 'Crunchbase', date: '34 min ago', status: 'NEW' },
    { name: 'Consumer Card Spend Panel', desc: 'Aggregated transaction data — US households', source: 'Datarade', vendor: 'Yodlee', date: '2 h ago', status: 'UPDATED' },
    { name: 'SEC 10-Q Disclosures', desc: 'Quarterly filings, parsed and tagged by entity', source: 'Datarade', vendor: 'EDGAR', date: '3 h ago', status: 'UPDATED' },
    { name: 'IT Hiring Index — US Tech', desc: 'Job-posting volume across top 200 employers', source: 'Datarade', vendor: 'Greenhouse', date: '4 h ago', status: 'NEW' },
    { name: 'Reddit Sentiment — Equities', desc: 'Aggregated sentiment scores, ticker-mapped', source: 'Google News', vendor: 'Pushshift', date: '6 h ago', status: 'UNCHANGED' },
    { name: 'Shipping AIS — Crude Tankers', desc: 'Live vessel positions and laden status', source: 'Bing News', vendor: 'Kpler', date: '8 h ago', status: 'UPDATED' },
  ];

  getSourceColor(source: string): string {
    switch (source) {
      case 'Google News': return '#4285f4';
      case 'Bing News': return '#00809d';
      case 'Datarade': return '#4caf50';
      default: return '#7b1fa2';
    }
  }
}
