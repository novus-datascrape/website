import { Component } from '@angular/core';
import { ToolbarComponent } from '../../shared/toolbar/toolbar';
import { HeroComponent } from '../../shared/hero/hero';
import { ConsoleMockComponent } from '../../shared/console-mock/console-mock';
import { SourcesStripComponent } from '../../shared/sources-strip/sources-strip';
import { PillarsComponent } from '../../shared/pillars/pillars';
import { HowWeWorkComponent } from '../../shared/how-we-work/how-we-work';
import { CoverageComponent } from '../../shared/coverage/coverage';
import { DeliveryComponent } from '../../shared/delivery/delivery';
import { BuiltForDeskComponent } from '../../shared/built-for-desk/built-for-desk';
import { FinalCtaComponent } from '../../shared/final-cta/final-cta';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    ToolbarComponent,
    HeroComponent,
    ConsoleMockComponent,
    SourcesStripComponent,
    PillarsComponent,
    HowWeWorkComponent,
    CoverageComponent,
    DeliveryComponent,
    BuiltForDeskComponent,
    FinalCtaComponent,
    FooterComponent,
  ],
  template: `
    <div class="m-page">
      <app-toolbar />
      <app-hero />
      <app-console-mock />
      <app-sources-strip />
      <app-pillars />
      <app-how-we-work />
      <app-coverage />
      <app-delivery />
      <app-built-for-desk />
      <app-final-cta />
      <app-footer />
    </div>
  `,
  styles: [`
    .m-page { min-height: 100vh; }
  `]
})
export class HomeComponent {}
