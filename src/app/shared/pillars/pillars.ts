import { Component } from '@angular/core';

@Component({
  selector: 'app-pillars',
  template: `
    <section class="m-section">
      <div class="m-container">
        <div class="m-section-head center">
          <span class="m-tag">Why Novus</span>
          <h2>Edge expires. Speed compounds.</h2>
          <p>A new alternative-data vendor publishes every three hours. Most funds find out weeks later, through a sales call. We collapse that lag from weeks to minutes.</p>
        </div>
        <div class="m-pillars">
          @for (pillar of pillars; track pillar.num) {
            <div class="m-pillar">
              <div class="num">{{ pillar.num }}<span class="unit"> {{ pillar.unit }}</span></div>
              <div class="sub">{{ pillar.sub }}</div>
              <p>{{ pillar.body }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .m-section { padding: 96px 0; }
    .m-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .m-section-head { text-align: left; margin-bottom: 48px; max-width: 720px; }
    .m-section-head.center { text-align: center; margin-left: auto; margin-right: auto; }
    .m-section-head h2 {
      font: 300 40px/1.15 var(--nds-font-sans);
      color: var(--nds-slate-900);
      margin: 14px 0 12px;
      letter-spacing: -0.3px;
    }
    .m-section-head p { font: var(--nds-text-lead); color: var(--nds-slate-700); margin: 0; }
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
    .m-pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 56px; padding: 24px 0; }
    .m-pillar .num {
      font: 300 64px/1 var(--nds-font-sans);
      color: var(--nds-primary-600);
      letter-spacing: -1.5px;
      margin-bottom: 4px;
    }
    .m-pillar .num .unit { font-size: 32px; color: var(--nds-slate-500); margin-left: 4px; }
    .m-pillar .sub {
      font: var(--nds-text-cap);
      color: var(--nds-slate-600);
      text-transform: uppercase;
      letter-spacing: var(--nds-tr-cap);
      margin-bottom: 14px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--nds-line);
    }
    .m-pillar p { font: 400 15px/1.6 var(--nds-font-sans); color: var(--nds-slate-700); margin: 0; }

    @media (max-width: 960px) {
      .m-pillars { grid-template-columns: 1fr; gap: 32px; }
    }
  `]
})
export class PillarsComponent {
  pillars = [
    { num: '12', unit: 'min', sub: 'Avg time to surface', body: 'From a vendor publishing a panel — press release, marketplace listing, GitHub release — to it appearing in your console, tagged and filtered.' },
    { num: '47', unit: 'sources', sub: 'Continuously monitored', body: 'Vendor catalogues, news APIs, marketplaces, and social — one feed, one schema. New sources onboard in 48 hours when a fund asks.' },
    { num: '1', unit: 'schema', sub: 'Across every source', body: 'Vendor, frequency, regions, format, status — normalised so your analysts filter, your quants ingest, and nobody negotiates fields.' },
  ];
}
