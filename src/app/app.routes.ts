import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '', loadComponent: () => import('./homepage/homepage.component'), children: [
      { path: 'home', loadComponent: () => import('./components/home/home.component') },
      { path: 'updates', loadComponent: () => import('./components/updates/updates.component') },
      { path: 'settings', loadComponent: () => import('./components/settings/settings.component')},
      { path: 'gridview', loadComponent: () => import('./components/gridview/gridview.component')},
    ]
  },
  { path: '**', redirectTo: '/login' } // Điều hướng các path không hợp lệ về trang login
];
