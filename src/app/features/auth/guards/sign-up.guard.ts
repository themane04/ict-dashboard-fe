import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {environment} from '../../../core/consts/environment';

export const SignUpGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!environment.config.allowSignUp) {
    void router.navigate([environment.frontendUrls.signin]);
    return false;
  }

  return true;
};
