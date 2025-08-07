import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from '../interfaces/auth.interface';
import {Observable} from 'rxjs';
import {environment} from '../../../core/consts/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signIn(data: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(
      `${environment.backendApiUrl}${environment.backendEndpoints.auth.signin}`,
      data,
      {withCredentials: true}
    );
  }

  signUp(data: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(
      `${environment.backendApiUrl}${environment.backendEndpoints.auth.signup}`,
      data
    );
  }
}
