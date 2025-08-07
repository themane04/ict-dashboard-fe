import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../../../core/consts/environment';

@Component({
  selector: 'app-sign-in',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-page.html',
  styleUrls: ['./sign-in-page.scss', '../sign-up-page/sign-up-page.scss']
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
    void this.router.navigate([environment.frontendUrls.signup]);
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
        void this.router.navigate([environment.frontendUrls.home]);
        console.log('Logged In!', res)
      },
      error: (err) => {
        this.isSigningIn = false;
        this.errors = err.error?.errors || [{field: 'unknown', message: 'Unexpected error.'}];
      }
    });
  }
}
