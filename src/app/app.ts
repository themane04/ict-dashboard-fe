import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('ict-dashboard-fe');

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    void this.authService.initAuth();
  }
}
