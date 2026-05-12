import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="m-hero" id="top">
      <div class="m-container">
        <span class="m-tag">Alternative data discovery · Q2 2026</span>
        <h1>Find every new dataset · <em>before your competitors do.</em></h1>
        <p class="lead">Novus Datascrape continuously monitors 47 sources of alternative data — vendors, news, marketplaces, social — and surfaces what's new the moment it appears. Built for the analysts who pick the signals.</p>
        <div class="m-hero-ctas">
          <a class="m-btn primary large" href="#demo">
            Book a demo
            <span class="material-icons">arrow_forward</span>
          </a>
          <a class="m-btn ghost large" href="#product">See the console</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .m-hero { padding: 80px 0 48px; text-align: center; }
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
    h1 {
      font: 300 64px/1.08 var(--nds-font-sans);
      color: var(--nds-slate-900);
      margin: 24px auto 20px;
      max-width: 900px;
      letter-spacing: -0.5px;
    }
    h1 em {
      font-style: normal;
      color: var(--nds-primary-600);
      font-weight: 400;
    }
    .lead {
      font: var(--nds-text-lead);
      color: var(--nds-slate-700);
      max-width: 660px;
      margin: 0 auto 36px;
    }
    .m-hero-ctas { display: flex; gap: 12px; justify-content: center; align-items: center; flex-wrap: wrap; }
    .m-btn {
      display: inline-flex; align-items: center; gap: 8px;
      font: 500 15px/1 var(--nds-font-sans);
      letter-spacing: 0.2px;
      padding: 14px 24px;
      border-radius: var(--nds-radius-control);
      border: 1px solid transparent;
      cursor: pointer;
      text-decoration: none;
      transition: background var(--nds-dur) var(--nds-ease), box-shadow var(--nds-dur) var(--nds-ease);
      white-space: nowrap;
    }
    .m-btn .material-icons { font-size: 18px; }
    .m-btn.primary { background: var(--nds-primary-600); color: #fff; box-shadow: 0 1px 2px rgba(2,136,209,.3); }
    .m-btn.primary:hover { background: var(--nds-primary-700); box-shadow: 0 4px 14px rgba(2,136,209,.35); }
    .m-btn.ghost { background: var(--nds-surface); color: var(--nds-slate-800); border-color: var(--nds-line-strong); }
    .m-btn.ghost:hover { background: var(--nds-slate-50); border-color: var(--nds-slate-300); }
    .m-btn.large { padding: 16px 28px; font-size: 16px; }

    @media (max-width: 960px) {
      h1 { font-size: 44px; }
    }
  `]
})
export class HeroComponent {}
