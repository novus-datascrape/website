import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="m-footer">
      <div class="m-footer-inner">
        <div class="copy">&copy; 2026 Novus Datascrape · Alternative data discovery</div>
        <div class="links">
          <a href="#coverage">Coverage</a>
          <a href="mailto:hello&#64;novusdatascrape.com">Contact</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .m-footer {
      border-top: 1px solid var(--nds-line);
      background: var(--nds-page);
      padding: 40px 0 32px;
    }
    .m-footer-inner {
      max-width: 1400px; margin: 0 auto; padding: 0 24px;
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
    }
    .copy { font: 400 13px/1.4 var(--nds-font-sans); color: var(--nds-slate-500); }
    .links { display: flex; gap: 24px; }
    .links a {
      font: 500 13px/1 var(--nds-font-sans);
      color: var(--nds-slate-600); text-decoration: none;
    }
    .links a:hover { color: var(--nds-slate-800); }
  `]
})
export class FooterComponent {}
