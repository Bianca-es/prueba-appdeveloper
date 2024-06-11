import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mainpage',
    loadComponent: () => import('./mainpage/mainpage.page').then( m => m.MainpagePage)
  },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full',
  },
];
