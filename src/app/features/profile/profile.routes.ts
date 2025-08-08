import {Routes} from '@angular/router';
import {OwnProfilePage} from './pages/own-profile-page/own-profile-page';
import {AuthGuard} from '../auth/guards/auth.guard';
import {environment} from '../../core/consts/environment';

const urls = environment.frontendUrls;
export const PROFILE_ROUTES: Routes = [
  {path: urls.profile, component: OwnProfilePage, canActivate: [AuthGuard]}
];
