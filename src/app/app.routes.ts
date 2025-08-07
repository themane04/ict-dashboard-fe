import {Routes} from '@angular/router';
import {AUTH_ROUTES} from './features/auth/auth.routes';
import {DASHBOARD_ROUTES} from './features/dashboard/dashboard.routes';

export const routes: Routes = [
  ...DASHBOARD_ROUTES,
  ...AUTH_ROUTES,
];
