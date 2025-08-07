import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../../../core/consts/environment';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.scss',
})
export class SignUp {
  form: FormGroup;
  errors: { field: string; message: string }[] = [];
  isSigningUp = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  goToSignIn() {
    void this.router.navigate([environment.frontendUrls.signin]);
  }

  onSubmit() {
    this.isSigningUp = true;
    this.errors = [];

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.signUp(this.form.value).subscribe({
      next: (res) => {
        this.isSigningUp = false;
        this.form.reset();
        this.errors = [];
        console.log('Registered!', res)
        void this.router.navigate([environment.frontendUrls.signin]);
      },
      error: (err) => {
        this.isSigningUp = false;
        this.errors = err.error?.errors || [{field: 'unknown', message: 'Unexpected error.'}];
      }
    });
  }
}
