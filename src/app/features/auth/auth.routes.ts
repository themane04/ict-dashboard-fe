import {Routes} from '@angular/router';
import {environment} from '../../core/consts/environment';
import {SignIn} from './pages/sign-in-page/sign-in-page';
import {SignUp} from './pages/sign-up-page/sign-up-page';
import {GuestGuard} from './guards/auth-guest.guard';

const urls = environment.frontendUrls;
export const AUTH_ROUTES: Routes = [
  {
    path: urls.signin,
    component: SignIn,
    canActivate: [GuestGuard],
  },
  {
    path: urls.signup,
    component: SignUp,
    canActivate: [GuestGuard],
  }
];
