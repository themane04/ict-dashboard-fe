import {environment} from '../../core/consts/environment';
import {Routes} from '@angular/router';
import {DashboardPage} from './pages/dashboard-page/dashboard-page';

const urls = environment.frontendUrls;
export const DASHBOARD_ROUTES: Routes = [
  {path: urls.dashboard, component: DashboardPage},
];
