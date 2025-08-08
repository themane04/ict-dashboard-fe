import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignInRequest, SignUpRequest, User} from '../interfaces/auth.interface';
import {map, Observable} from 'rxjs';
import {environment} from '../../../core/consts/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backendUrl = environment.backendApiUrl;
  backendAuthEndpoints = environment.backendEndpoints.auth;

  constructor(private http: HttpClient) {
  }

  signIn(data: SignInRequest): Observable<void> {
    return this.http.post<void>(
      `${this.backendUrl}${this.backendAuthEndpoints.signin}`,
      data,
      {withCredentials: true, observe: 'response'}
    ).pipe(map(() => void 0));
  }

  signUp(data: SignUpRequest): Observable<void> {
    return this.http.post<void>(
      `${this.backendUrl}${this.backendAuthEndpoints.signup}`,
      data,
      {observe: 'response'}
    ).pipe(map(() => void 0));
  }

  getMe(): Observable<User> {
    return this.http.get<User>(
      `${this.backendUrl}${this.backendAuthEndpoints.me}`,
      {withCredentials: true}
    );
  }
}
