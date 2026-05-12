import { Component } from '@angular/core';

@Component({
  selector: 'app-built-for-desk',
  template: `
    <section class="m-section" id="teams">
      <div class="m-container">
        <div class="m-section-head">
          <span class="m-tag">Built for the desk</span>
          <h2>One console. Three jobs. Done before lunch.</h2>
          <p>Analysts, PMs, and quants see the same catalog — filtered, audited, and delivered the way each of them works.</p>
        </div>
        <div class="m-desk">
          @for (role of roles; track role.role) {
            <div class="m-desk-card">
              <div class="role-cap">{{ role.role }}</div>
              <h3>{{ role.title }}</h3>
              <p>{{ role.body }}</p>
              <ul class="bullets">
                @for (bullet of role.bullets; track bullet) {
                  <li><span class="material-icons">check</span>{{ bullet }}</li>
                }
              </ul>
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
    .m-desk { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .m-desk-card {
      background: var(--nds-surface);
      border: 1px solid var(--nds-line);
      border-radius: var(--nds-radius-card);
      padding: 32px;
      box-shadow: var(--nds-shadow-card);
    }
    .role-cap {
      font: var(--nds-text-cap);
      color: var(--nds-primary-600);
      text-transform: uppercase;
      letter-spacing: var(--nds-tr-cap);
      margin-bottom: 16px;
    }
    h3 { font: var(--nds-text-h3); color: var(--nds-slate-900); margin: 0 0 6px; }
    p { font: 400 15px/1.6 var(--nds-font-sans); color: var(--nds-slate-700); margin: 0 0 16px; }
    .bullets { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--nds-line); }
    .bullets li {
      font: 400 14px/1.5 var(--nds-font-sans);
      color: var(--nds-slate-700);
      padding: 10px 0;
      border-top: 1px solid var(--nds-line);
      display: flex; align-items: flex-start; gap: 8px;
    }
    .bullets li:first-child { border-top: none; }
    .bullets li .material-icons { font-size: 16px; color: var(--nds-primary-600); margin-top: 2px; }

    @media (max-width: 960px) {
      .m-desk { grid-template-columns: 1fr; gap: 32px; }
    }
  `]
})
export class BuiltForDeskComponent {
  roles = [
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
}
