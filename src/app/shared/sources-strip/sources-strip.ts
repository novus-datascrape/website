import { Component } from '@angular/core';

@Component({
  selector: 'app-sources-strip',
  template: `
    <div class="m-sources-strip">
      <div class="m-sources-strip-inner">
        <span class="label">47 sources monitored</span>
        <div class="chips">
          @for (source of sources; track source) {
            <span class="m-source-chip">{{ source }}</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .m-sources-strip {
      background: var(--nds-surface);
      border-top: 1px solid var(--nds-line);
      border-bottom: 1px solid var(--nds-line);
      padding: 28px 0;
    }
    .m-sources-strip-inner {
      max-width: 1400px; margin: 0 auto; padding: 0 24px;
      display: flex; align-items: center; gap: 28px;
    }
    .label {
      font: var(--nds-text-cap);
      color: var(--nds-slate-500);
      text-transform: uppercase;
      letter-spacing: var(--nds-tr-cap);
      white-space: nowrap;
      flex-shrink: 0;
    }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; flex: 1; }
    .m-source-chip {
      display: inline-flex; align-items: center; gap: 6px;
      font: 500 12px/1 var(--nds-font-sans);
      color: var(--nds-slate-800);
      background: var(--nds-surface);
      border: 1px solid var(--nds-line-strong);
      border-left: 4px solid var(--nds-primary-600);
      border-radius: var(--nds-radius-chip);
      padding: 8px 12px;
      box-shadow: var(--nds-shadow-chip);
      letter-spacing: var(--nds-tr-source);
      text-transform: uppercase;
    }
  `]
})
export class SourcesStripComponent {
  sources = [
    'Google News', 'Bing News', 'Datarade', 'AWS Data Exchange',
    'Snowflake Marketplace', 'Crunchbase', 'SEC EDGAR', 'Kaggle',
    'arXiv', 'Eagle Alpha', 'Neudata', 'BattleFin'
  ];
}
