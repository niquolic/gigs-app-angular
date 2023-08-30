import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      return expirationDate <= new Date();
    }
    return true; // Si le token n'existe pas ou est invalide, considérez-le comme expiré
  }
}
