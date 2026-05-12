import { Component } from '@angular/core';

@Component({
  selector: 'app-coverage',
  template: `
    <section class="m-section" id="coverage">
      <div class="m-container">
        <div class="m-coverage-grid">
          <div>
            <span class="m-tag">Coverage · Q2 2026</span>
            <h2>A working catalog of the alternative-data market.</h2>
            <p>We don't list every dataset that ever existed. We surface what's being published right now, classified against one schema your team can actually filter.</p>
          </div>
          <div class="m-coverage-table">
            @for (row of rows; track row[0]) {
              <div class="m-coverage-row">
                <span class="k">{{ row[0] }}</span>
                <span class="v">{{ row[1] }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .m-section { padding: 96px 0; }
    .m-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .m-tag {
      display: inline-block;
      font: var(--nds-text-cap);
      color: var(--nds-slate-600);
      text-transform: uppercase;
      letter-spacing: var(--nds-tr-cap);
      background: var(--nds-surface);
      border: 1px solid var(--nds-line-strong);
      border-radius: var(--nds-radius-chip);
      padding: 4px 10px;
    }
    h2 {
      font: 300 40px/1.15 var(--nds-font-sans);
      color: var(--nds-slate-900);
      margin: 14px 0 12px;
      letter-spacing: -0.3px;
    }
    p { font: 400 17.6px/1.6 var(--nds-font-sans); color: var(--nds-slate-700); margin: 0 0 24px; }
    .m-coverage-grid {
      display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px;
      align-items: center;
    }
    .m-coverage-table {
      border-top: 1px solid var(--nds-slate-300);
      border-bottom: 1px solid var(--nds-slate-300);
    }
    .m-coverage-row {
      display: grid; grid-template-columns: 1fr auto;
      padding: 18px 0;
      border-top: 1px solid var(--nds-line);
      align-items: baseline;
    }
    .m-coverage-row:first-child { border-top: none; }
    .k {
      font: var(--nds-text-meta);
      color: var(--nds-slate-400);
      text-transform: uppercase;
      letter-spacing: var(--nds-tr-cap);
    }
    .v { font: 400 24px/1 var(--nds-font-sans); color: var(--nds-slate-900); }

    @media (max-width: 960px) {
      .m-coverage-grid { grid-template-columns: 1fr; gap: 40px; }
    }
  `]
})
export class CoverageComponent {
  rows: [string, string][] = [
    ['Sources monitored', '47'],
    ['Datasets indexed', '12,400+'],
    ['Avg time to surface', '12 min'],
    ['Coverage regions', '32'],
    ['Sectors classified', '18'],
    ['History retained', '18 months'],
  ];
}
