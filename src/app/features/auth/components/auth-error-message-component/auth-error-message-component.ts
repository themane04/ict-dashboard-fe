import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-auth-error-message-component',
  imports: [],
  templateUrl: './auth-error-message-component.html',
  styleUrls: ['./auth-error-message-component.scss', '../../pages/sign-up-page/sign-up-page.scss']
})
export class AuthErrorMessageComponent {
  @Input() errors: { field: string; message: string }[] = [];
}
