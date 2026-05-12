import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <header class="m-toolbar">
      <div class="m-toolbar-inner">
        <a class="m-logo" href="#top" aria-label="Novus Datascrape">
          <svg width="24" height="24" viewBox="0 0 240 240" aria-hidden="true">
            <rect x="46" y="46" width="22" height="148" rx="3" fill="#fff"/>
            <rect x="172" y="46" width="22" height="148" rx="3" fill="#fff"/>
            <polygon points="68,46 90,46 194,194 172,194" fill="#fff"/>
          </svg>
          <span>Novus<span class="dot">·</span>Datascrape</span>
        </a>
        <nav class="m-nav">
          <a href="#product">Product</a>
          <a href="#how-we-work">How we work</a>
          <a href="#coverage">Coverage</a>
          <a href="#delivery">Delivery</a>
          <a href="#teams">For teams</a>
        </nav>
        <div class="m-toolbar-spacer"></div>
        <a class="m-toolbar-secondary" href="https://console.interlinc.co.uk">Sign in</a>
        <a class="m-toolbar-cta" href="#demo">Book a demo</a>
      </div>
    </header>
  `,
  styles: [`
    .m-toolbar {
      position: sticky; top: 0; z-index: 100;
      background: var(--nds-primary-gradient);
      color: #fff;
      box-shadow: var(--nds-shadow-toolbar);
      height: 64px;
    }
    .m-toolbar-inner {
      max-width: 1400px; margin: 0 auto; padding: 0 24px;
      height: 100%; display: flex; align-items: center; gap: 24px;
    }
    .m-logo {
      display: flex; align-items: center; gap: 10px;
      font: var(--nds-text-title);
      letter-spacing: var(--nds-tr-logo);
      color: #fff;
      text-decoration: none;
    }
    .m-logo svg { display: block; }
    .m-logo .dot { color: rgba(255,255,255,.7); margin: 0 2px; }
    .m-nav { display: flex; gap: 28px; margin-left: 16px; }
    .m-nav a {
      font: 500 14px/1 var(--nds-font-sans);
      color: rgba(255,255,255,.9);
      text-decoration: none;
      padding: 6px 0;
      transition: color var(--nds-dur) var(--nds-ease);
    }
    .m-nav a:hover { color: #fff; }
    .m-toolbar-cta {
      font: 500 14px/1 var(--nds-font-sans);
      color: #fff;
      background: rgba(255,255,255,.12);
      border: 1px solid rgba(255,255,255,.3);
      padding: 9px 18px;
      border-radius: var(--nds-radius-control);
      cursor: pointer;
      text-decoration: none;
      transition: background var(--nds-dur) var(--nds-ease);
    }
    .m-toolbar-cta:hover { background: rgba(255,255,255,.22); }
    .m-toolbar-secondary {
      color: rgba(255,255,255,.92);
      font: 500 14px/1 var(--nds-font-sans);
      text-decoration: none;
      cursor: pointer;
    }
    .m-toolbar-spacer { flex: 1; }

    @media (max-width: 960px) {
      .m-nav { display: none; }
    }
  `]
})
export class ToolbarComponent {}
