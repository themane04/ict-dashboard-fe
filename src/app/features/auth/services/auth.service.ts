import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from '../interfaces/auth.interface';
import {firstValueFrom, Observable} from 'rxjs';
import {environment} from '../../../core/consts/environment';
import {setUser} from '../signals/auth.signal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backendUrl = environment.backendApiUrl;
  backendAuthEndpoints = environment.backendEndpoints.auth;

  constructor(private http: HttpClient) {
  }

  signIn(data: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(
      `${this.backendUrl}${this.backendAuthEndpoints.signin}`,
      data,
      {withCredentials: true}
    );
  }

  signUp(data: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(
      `${this.backendUrl}${this.backendAuthEndpoints.signup}`,
      data
    );
  }

  async initAuth(): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.http.get<SignInResponse>(`${this.backendUrl}${this.backendAuthEndpoints.me}`, {
          withCredentials: true
        })
      );

      setUser(response.user);
    } catch {
      setUser(null);
    }
  }
}
