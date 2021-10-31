import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../model/login/login-request';
import {LoginResponse} from '../model/login/login-response';
import {environment} from '../../../environments/environment';
import {StorageService} from './storage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string;

  constructor(private http: HttpClient,
              private storageService: StorageService,
              private router: Router) {
    this.baseUrl = `${environment.baseUrl}`;
  }

  public loginUser(loginRequest: LoginRequest): Promise<LoginResponse> {
    return this.http.post(`${this.baseUrl}/api/login`, loginRequest)
      .toPromise()
      .then(response => response as LoginResponse)
      .then(loginResponse => {
        this.storageService.setAuthToken(loginResponse.token);
        return loginResponse;
      });
  }

  public logoutUser(): void {
    this.storageService.clearOnLogout();
    this.router.navigate(['/landing']).then();
  }

  public getAuthToken(): string | null {
    return this.storageService.getAuthToken();
  }

  public isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }
}
