import {Component} from '@angular/core';
import {_user} from '../../../auth/signals/auth.signal';
import {NgOptimizedImage} from '@angular/common';
import {environment} from '../../../../core/consts/environment';

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

  get profileImage(): string {
    return this.user()?.profile?.pictureUrl || environment.config.profilePlaceholderUrl;
  }
}
