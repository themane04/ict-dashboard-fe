import {Routes} from '@angular/router';
import {SignUp} from './components/sign-up/sign-up';
import {SignIn} from './components/sign-in/sign-in';
import {environment} from '../../core/environment';

const urls = environment.urls;
export const AUTH_ROUTES: Routes = [
  {path: urls.signin, component: SignIn},
  {path: urls.signup, component: SignUp},
];
