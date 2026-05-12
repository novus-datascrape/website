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
        <nav class="m-nav" [class.open]="menuOpen">
          <a href="#product" (click)="menuOpen = false">Product</a>
          <a href="#how-we-work" (click)="menuOpen = false">How we work</a>
          <a href="#coverage" (click)="menuOpen = false">Coverage</a>
          <a href="#delivery" (click)="menuOpen = false">Delivery</a>
          <a href="#teams" (click)="menuOpen = false">For teams</a>
        </nav>
        <div class="m-toolbar-spacer"></div>
        <a class="m-toolbar-secondary" href="https://console.interlinc.co.uk">Sign in</a>
        <a class="m-toolbar-cta desktop-only" href="#demo">Book a demo</a>
        <button class="m-hamburger" (click)="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span class="material-icons">{{ menuOpen ? 'close' : 'menu' }}</span>
        </button>
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
    .m-hamburger {
      display: none;
      background: none; border: none; color: #fff;
      cursor: pointer; padding: 4px;
    }
    .m-hamburger .material-icons { font-size: 28px; }

    @media (max-width: 960px) {
      .m-nav {
        display: none;
        position: absolute;
        top: 64px; left: 0; right: 0;
        background: linear-gradient(180deg, #0277bd 0%, #0288d1 100%);
        flex-direction: column;
        padding: 16px 24px 24px;
        gap: 0;
        box-shadow: 0 8px 24px rgba(0,0,0,.2);
      }
      .m-nav.open { display: flex; }
      .m-nav a {
        padding: 14px 0;
        font-size: 16px;
        border-bottom: 1px solid rgba(255,255,255,.1);
      }
      .m-nav a:last-child { border-bottom: none; }
      .m-hamburger { display: block; }
      .desktop-only { display: none; }
    }
  `]
})
export class ToolbarComponent {
  menuOpen = false;
}
