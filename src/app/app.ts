import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppHeaderComponent} from './core/components/header-component/header-component';
import {contentOffset} from './core/signals/layout.signal';
import {isLoggedIn} from './features/auth/signals/auth.signal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.html',
})
export class App {
  contentOffset = contentOffset;
  protected readonly isLoggedIn = isLoggedIn;
}
