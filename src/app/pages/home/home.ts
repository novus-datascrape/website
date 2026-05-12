import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main>
      <h1>Interlinc</h1>
      <p>Data Discovery Platform</p>
    </main>
  `,
  styles: [`
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}
