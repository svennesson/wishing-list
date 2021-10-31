import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly KEY_TOKEN = 'app-wl-token';

  constructor() { }

  public setAuthToken(authToken: string): void {
    localStorage.setItem(this.KEY_TOKEN, authToken);
  }

  public getAuthToken(): string | null {
    return localStorage.getItem(this.KEY_TOKEN);
  }

  public clearAuthToken(): void {
    localStorage.removeItem(this.KEY_TOKEN);
  }

  public clearOnLogout(): void {
    localStorage.removeItem(this.KEY_TOKEN);
  }
}
