import {Routes} from '@angular/router';
import {AUTH_ROUTES} from './features/auth/auth.routes';
import {DASHBOARD_ROUTES} from './features/dashboard/dashboard.routes';
import {PROFILE_ROUTES} from './features/profile/profile.routes';
import {FEATURE_ROUTES} from './features/feature.routes';

export const routes: Routes = [
  ...PROFILE_ROUTES,
  ...DASHBOARD_ROUTES,
  ...AUTH_ROUTES,
  ...FEATURE_ROUTES
];
