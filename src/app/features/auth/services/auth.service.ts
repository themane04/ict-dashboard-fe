import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from '../interfaces/auth.interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../core/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signIn(data: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(
      `${environment.backendApiUrl}${environment.endpoints.auth.signin}`,
      data
    );
  }

  signUp(data: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(
      `${environment.backendApiUrl}${environment.endpoints.auth.signup}`,
      data
    );
  }
}
