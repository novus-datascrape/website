import { Component } from '@angular/core';

@Component({
  selector: 'app-final-cta',
  template: `
    <section class="m-section m-bg-surface" id="demo">
      <div class="m-container-read">
        <div class="m-final-cta">
          <span class="m-tag">Walkthroughs · 30 minutes</span>
          <h2>Real datasets. <em>Your sectors.</em><br/>No deck.</h2>
          <p>We'll preload the console with the sectors your fund trades and walk through a typical morning. If it's useful, we'll send you the catalog the next day.</p>
          <div class="m-hero-ctas">
            <a class="m-btn primary large" href="mailto:hello&#64;novusdatascrape.com">
              Book a demo
              <span class="material-icons">arrow_forward</span>
            </a>
            <a class="m-btn ghost large" href="mailto:hello&#64;novusdatascrape.com">Email us instead</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .m-section { padding: 96px 0; }
    .m-bg-surface { background: var(--nds-surface); border-top: 1px solid var(--nds-line); border-bottom: 1px solid var(--nds-line); }
    .m-container-read { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
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
    .m-final-cta {
      text-align: center;
      background: var(--nds-surface);
      border: 1px solid var(--nds-line);
      border-radius: var(--nds-radius-card);
      padding: 72px 32px;
      box-shadow: var(--nds-shadow-card);
    }
    .m-final-cta h2 {
      font: 300 44px/1.1 var(--nds-font-sans);
      color: var(--nds-slate-900);
      margin: 14px 0 14px;
      letter-spacing: -0.3px;
    }
    .m-final-cta h2 em { color: var(--nds-primary-600); font-style: normal; font-weight: 400; }
    .m-final-cta p {
      font: var(--nds-text-lead);
      color: var(--nds-slate-700);
      margin: 0 auto 32px;
      max-width: 540px;
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

    @media (max-width: 600px) {
      .m-section { padding: 64px 0; }
      .m-final-cta { padding: 48px 20px; }
      .m-final-cta h2 { font-size: 32px; }
      .m-hero-ctas { flex-direction: column; width: 100%; }
      .m-btn.large { width: 100%; justify-content: center; }
    }
  `]
})
export class FinalCtaComponent {}
