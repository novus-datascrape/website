import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    title: 'Interlinc - Data Discovery Platform'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
