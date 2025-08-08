import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {_authInitialized, isLoggedIn, setUser} from '../signals/auth.signal';
import {environment} from '../../../core/consts/environment';
import {AuthService} from '../services/auth.service';
import {firstValueFrom} from 'rxjs';

export const AuthGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const auth = inject(AuthService);

  if (!_authInitialized()) {
    try {
      const u = await firstValueFrom(auth.getMe());
      setUser(u);
    } catch {
      setUser(null);
    }
  }

  if (!isLoggedIn()) {
    void router.navigate([environment.frontendUrls.signin]);
    return false;
  }
  return true;
};
