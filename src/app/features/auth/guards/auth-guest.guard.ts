import {inject} from "@angular/core";
import {CanActivateFn, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {_authInitialized, isLoggedIn, setUser} from '../signals/auth.signal';
import {firstValueFrom} from 'rxjs';
import {environment} from '../../../core/consts/environment';

export const GuestGuard: CanActivateFn = async () => {
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

  if (isLoggedIn()) {
    void router.navigate([environment.frontendUrls.dashboard]);
    return false;
  }
  return true;
};
