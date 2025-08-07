import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {authInitialized, isLoggedIn} from '../signals/auth.signal';
import {environment} from '../../../core/consts/environment';

export const NoAuthGuard: CanActivateFn = async () => {
  const router = inject(Router);

  while (!authInitialized()) {
    await new Promise((res) => setTimeout(res, 10));
  }

  if (isLoggedIn()) {
    void router.navigate([environment.frontendUrls.dashboard]);
    return false;
  }

  return true;
};
