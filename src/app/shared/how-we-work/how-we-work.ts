import { Component } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  template: `
    <section class="m-section m-bg-surface" id="how-we-work">
      <div class="m-container">
        <div class="m-section-head">
          <span class="m-tag">How we work</span>
          <h2>Three commitments, in order.</h2>
          <p>The product's job is to surface accurate facts about datasets, then get out of the way. These are the principles we hold ourselves to.</p>
        </div>
        <div class="m-how">
          @for (card of cards; track card.title) {
            <div class="m-how-card">
              <div class="icon-wrap"><span class="material-icons">{{ card.icon }}</span></div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.body }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .m-section { padding: 96px 0; }
    .m-bg-surface { background: var(--nds-surface); border-top: 1px solid var(--nds-line); border-bottom: 1px solid var(--nds-line); }
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
    .m-how { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .m-how-card {
      background: var(--nds-surface);
      border: 1px solid var(--nds-line);
      border-radius: var(--nds-radius-card);
      padding: 32px;
      box-shadow: var(--nds-shadow-card);
      transition: box-shadow var(--nds-dur) var(--nds-ease), transform var(--nds-dur) var(--nds-ease);
    }
    .m-how-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,.08); transform: translateY(-2px); }
    .icon-wrap {
      width: 44px; height: 44px; border-radius: 8px;
      background: #e1f5fe;
      color: var(--nds-primary-600);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 20px;
    }
    .icon-wrap .material-icons { font-size: 22px; }
    h3 { font: var(--nds-text-h3); color: var(--nds-slate-900); margin: 0 0 8px; }
    p { font: 400 15px/1.6 var(--nds-font-sans); color: var(--nds-slate-700); margin: 0; }

    @media (max-width: 960px) {
      .m-how { grid-template-columns: 1fr; gap: 32px; }
    }
    @media (max-width: 600px) {
      .m-section { padding: 64px 0; }
      .m-section-head h2 { font-size: 28px; }
      .m-how-card { padding: 24px; }
    }
  `]
})
export class HowWeWorkComponent {
  cards = [
    { icon: 'verified', title: 'Correctness', body: 'Every record is cross-verified against its source URL. We surface the citation, not just the claim. Analysts verify before licensing.' },
    { icon: 'travel_explore', title: 'Coverage', body: 'We monitor 47 sources today. New ones onboard in 48 hours when a fund asks. The catalog gets denser every week, not stale.' },
    { icon: 'shield', title: 'Custody', body: 'We never resell or relicense data. We point you at the vendor and step out of the way. Your provider relationships stay your own.' },
  ];
}
