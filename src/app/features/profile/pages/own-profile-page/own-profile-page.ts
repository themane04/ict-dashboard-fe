import {Component} from '@angular/core';
import {_user, setUser} from '../../../auth/signals/auth.signal';
import {NgOptimizedImage} from '@angular/common';
import {getProfileImage} from '../../../auth/helpers/auth.helper';
import {Router} from '@angular/router';
import {environment} from '../../../../core/consts/environment';
import {firstValueFrom} from 'rxjs';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-own-profile-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './own-profile-page.html',
  styleUrl: './own-profile-page.scss'
})
export class OwnProfilePage {
  user = _user;

  constructor(private router: Router, private authService: AuthService) {
  }

  get profileImage(): string {
    return getProfileImage(this.user());
  }

  async signOut(): Promise<void> {
    try {
      await firstValueFrom(this.authService.signOut());
    } catch {
    }
    setUser(null);
    void this.router.navigate([environment.frontendUrls.signin]);
  }
}
