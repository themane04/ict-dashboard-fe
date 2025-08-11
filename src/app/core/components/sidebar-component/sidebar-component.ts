import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {_user} from '../../../features/auth/signals/auth.signal';
import {environment} from '../../consts/environment';
import {Router} from '@angular/router';
import {sidebarExpanded} from '../../signals/layout.signal';

@Component({
  selector: 'app-sidebar-component',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss'
})
export class AppSidebarComponent {
  user = _user;
  url = environment.frontendUrls;
  expanded = sidebarExpanded;
  environment = environment.config;

  constructor(private router: Router) {
  }

  get profileImage(): string {
    return this.user()?.profile?.pictureUrl || environment.config.profilePlaceholderUrl;
  }

  toggleSidebar(e: Event) {
    e.stopPropagation();
    this.expanded.update(v => !v);
  }

  goToProfile(): void {
    void this.router.navigate([this.url.profile]);
  }

  goToDashboard(): void {
    void this.router.navigate([this.url.dashboard]);
  }
}
