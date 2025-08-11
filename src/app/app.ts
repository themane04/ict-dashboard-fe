import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {contentOffset} from './core/signals/layout.signal';
import {isLoggedIn} from './features/auth/signals/auth.signal';
import {AppSidebarComponent} from './core/components/sidebar-component/sidebar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppSidebarComponent],
  templateUrl: './app.html',
})
export class App {
  contentOffset = contentOffset;
  protected readonly isLoggedIn = isLoggedIn;
}
