import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {_user} from '../../../features/auth/signals/auth.signal';
import {environment} from '../../consts/environment';

@Component({
  selector: 'app-header-component',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class AppHeaderComponent {
  user = _user;

  get profileImage(): string {
    return this.user()?.profile?.pictureUrl || environment.config.profilePlaceholderUrl;
  }
}
