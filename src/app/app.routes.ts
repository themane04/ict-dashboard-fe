import {Routes} from '@angular/router';
import {AUTH_ROUTES} from './features/auth/auth.routes';
import {DASHBOARD_ROUTES} from './features/dashboard/dashboard.routes';
import {PROFILE_ROUTES} from './features/profile/profile.routes';

export const routes: Routes = [
  ...PROFILE_ROUTES,
  ...DASHBOARD_ROUTES,
  ...AUTH_ROUTES,
];
