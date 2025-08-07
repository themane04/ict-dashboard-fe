import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from '../interfaces/auth.interface';
import {firstValueFrom, Observable} from 'rxjs';
import {environment} from '../../../core/consts/environment';
import {setUser} from '../signals/auth.signal';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backendUrl = environment.backendApiUrl;
  backendAuthEndpoints = environment.backendEndpoints.auth;
  frontendUrl = environment.frontendUrls;

  constructor(private http: HttpClient, private router: Router) {
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
        this.http.get<SignUpResponse>(`${this.backendUrl}${this.backendAuthEndpoints.me}`, {
          withCredentials: true
        })
      );

      setUser(response);
    } catch {
      setUser(null);

      const currentUrl = this.router.url;
      const isOnAuthPage = [this.frontendUrl.signin, this.frontendUrl.signup].includes(currentUrl);

      if (!isOnAuthPage) {
        void this.router.navigate([this.frontendUrl.signin]);
      }
    }
  }
}
