import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../../../core/environment';

@Component({
  selector: 'app-sign-in',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss', '../sign-up/sign-up.scss']
})
export class SignIn {
  form: FormGroup;
  errors: { field: string; message: string }[] = [];
  isSigningIn = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  goToSignUp() {
    void this.router.navigate([environment.urls.signup]);
  }

  onSubmit() {
    this.isSigningIn = true;
    this.errors = [];

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.signIn(this.form.value).subscribe({
      next: (res) => {
        this.isSigningIn = false;
        this.form.reset();
        this.errors = [];
        void this.router.navigate([environment.urls.home]);
        console.log('Logged In!', res)
      },
      error: (err) => {
        this.isSigningIn = false;
        this.errors = err.error?.errors || [{field: 'unknown', message: 'Unexpected error.'}];
      }
    });
  }
}
