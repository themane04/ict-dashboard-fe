import {Routes} from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {environment} from '../core/consts/environment';

export const FEATURE_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: environment.frontendUrls.dashboard,
      }
    ]
  }
];
